"use client";
import Image from "next/image";
import styles from "../testQuiz.module.css";
import { answerType, questionType } from "./Quiz";
import Link from "next/link";

const QuizScore = ({ questions, selectedAnswer }: { questions: questionType[]; selectedAnswer: answerType[] }) => {
  let ans = 0;
  selectedAnswer.map((answer) => {
    const index = questions.findIndex((question) => question.question_id == answer.question_id);
    const { correct_option } = questions[index];
    if (correct_option == answer.answer_option) {
      ans++;
    }
  });

  function refreshPage() {
    window.location.reload();
  }

  return (
    <div>
      <h1 className="topHading">Quiz Result</h1>
      <div className={styles.resultWrapper}>
        <p style={{ color: ans >= 12 ? "green" : "red" }}>Quiz Score {ans}/15</p>
        <Image
          src={"/illustrations/successful-purchase.svg"}
          alt="Plan purchase successful.."
          width={300}
          height={300}
        />
        <div onClick={refreshPage} className={styles.tryAgin}>
          <p>Try Again</p>
          <Image src={"/icons/right-arrow.svg"} alt=">" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default QuizScore;
