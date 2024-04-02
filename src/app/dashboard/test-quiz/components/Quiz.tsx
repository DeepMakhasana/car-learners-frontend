"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "../testQuiz.module.css";
import QuizScore from "./QuizScore";

export interface questionType {
  question_id: number;
  question_text: string;
  options: string[];
  correct_option: number;
}

export interface answerType {
  question_id: number;
  answer_option: number;
}

const Quiz = () => {
  const [questions, setQuestions] = useState<questionType[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadQuizScore, setLoadQuizScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<answerType[]>([]);

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setSelectedAnswer((pre) => [...pre, { question_id: Number(name), answer_option: Number(value) }]);
  };

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoadQuizScore(true);
  };

  useEffect(() => {
    console.log("effect");
    fetch("../question.json")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * 64);
        setLoading(false);
        setQuestions(data.questions.slice(randomNum, randomNum + 15));
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center", margin: "1rem 0" }}>Loading...</p>;
  } else {
    if (loadQuizScore) {
      return <QuizScore questions={questions} selectedAnswer={selectedAnswer} />;
    } else {
      return (
        <div className={styles.questionWrapper}>
          <h1 className="topHading">Practice Quiz</h1>
          <p>15 Question</p>
          <form method="post" onSubmit={handelSubmit}>
            {questions.map((question, i) => {
              return (
                <div key={question.question_id} className={styles.questionContainer}>
                  <div className={styles.question}>
                    <span>{i + 1}.</span>
                    <p>{question.question_text}</p>
                  </div>
                  <div className={styles.answerOptions}>
                    {question.options.map((optionText, index) => (
                      <div key={optionText}>
                        <input
                          type="radio"
                          name={String(question.question_id)}
                          value={String(index)}
                          onChange={handelChange}
                          required
                        />
                        <span>{optionText}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
  }
};

export default Quiz;
