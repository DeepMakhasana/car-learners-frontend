"use client";
import Image from "next/image";
import styles from "./curriculum.module.css";
import CurriculumList from "./components/CurriculumList";
import Link from "next/link";

const curriculum = () => {
  return (
    <div className={styles.curriculumContainer}>
      <h1>Curriculum</h1>
      <CreateCurriculumOption />
      <CurriculumList />
    </div>
  );
};

const CreateCurriculumOption = () => {
  return (
    <div className={styles.createCurriculum}>
      <p>New Curriculum</p>
      <Link href={"/dashboard/curriculum/create"}>
        <Image src={"/icons/add.svg"} alt="create" width={22} height={22} />
      </Link>
    </div>
  );
};

export default curriculum;
