import Image from "next/image";
import styles from "../curriculum.module.css";

const CurriculumList = () => {
  return (
    <div className={styles.curriculumListContainer}>
      <Curriculum />
      <Curriculum />
      <Curriculum />
    </div>
  );
};

const Curriculum = () => {
  return (
    <div className={styles.curriculumListWrapper}>
      <div>
        <Image src={"/icons/schedule.svg"} alt="schedule" width={18} height={18} />
        <span>15 Day</span>
      </div>
      <span>₹ 3000</span>
    </div>
  );
};

export default CurriculumList;
