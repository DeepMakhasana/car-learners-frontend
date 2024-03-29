import Image from "next/image";
import styles from "../dashboard.module.css";

const PurchasedCourse = () => {
  return (
    <div className={styles.purchasedCourseWrapper}>
      <div className={styles.purchasedCourseInfo}>
        <h2>Bapasitaram driving school</h2>
        <div>
          <div>
            <div className={styles.iconWithBackground}>
              <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
            </div>
            <span>15 Day</span>
          </div>
          <div>
            <div className={styles.iconWithBackground}>
              <Image src={"/icons/trainer.svg"} alt="trainer" width={14} height={14} />
            </div>
            <span>Sachin Gupta</span>
          </div>
        </div>
      </div>
      <div className={styles.selectedCar}>
        <Image src={"/icons/car.svg"} alt="trainer" width={30} height={30} />
        <span>Alto 800</span>
      </div>
    </div>
  );
};

export default PurchasedCourse;
