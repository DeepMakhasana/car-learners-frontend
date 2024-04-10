"use client";
import Image from "next/image";
import styles from "../curriculum.module.css";
import { useState } from "react";

interface TaskType {
  title: string;
  days: number;
}

interface SelectVehicleType {
  vehicle: number;
  extraAmount: number;
}

const initialTask = { title: "", days: 0 };
const initialVehicle = { vehicle: 0, extraAmount: 0 };

const Create = () => {
  const [task, setTask] = useState<TaskType[]>([initialTask]);
  const [vehicle, setVehicle] = useState<SelectVehicleType[]>([initialVehicle]);

  // const addNewTask = () => {

  // }

  // const addNewVehicle = () => {

  // }

  return (
    <div className={styles.createCurriculumContainer}>
      <h1>New Curriculum</h1>
      <form method="post">
        <div className={styles.twoColumnInput}>
          <input type="number" placeholder="Total Days" />
          <input type="number" placeholder="Amount" />
        </div>

        <div className={styles.addOption} onClick={() => setTask((pre) => [...pre, initialTask])}>
          <p>Create Task</p>
          <div>
            <Image src={"/icons/add.svg"} alt="add" width={22} height={22} />
          </div>
        </div>
        {task.map((task, i) => (
          <div className={styles.twoColumnInput} key={i}>
            <input type="text" placeholder="Title" />
            <input type="number" placeholder="Number of Days" />
          </div>
        ))}

        <div className={styles.addOption} onClick={() => setVehicle((pre) => [...pre, initialVehicle])}>
          <p>Select vehicles</p>
          <div>
            <Image src={"/icons/add.svg"} alt="add" width={22} height={22} />
          </div>
        </div>
        {vehicle.map((vehicle, i) => (
          <div className={styles.twoColumnInput} key={i}>
            <select name="vehicle">
              <option value="">select vehicle</option>
              <option value="alto">Alto</option>
              <option value="swift">Swift</option>
            </select>
            <input type="number" placeholder="Extra amount" />
          </div>
        ))}

        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default Create;
