import Image from "next/image";
import styles from "../dashboard.module.css";

const NextSchedule = () => {
  return (
    <div>
      <h3>Next Schedule</h3>
      <Schedule />
      <div className={styles.remainDay}>Remaining 14 Days</div>
    </div>
  );
};

export const Schedule = () => {
  return (
    <div className={styles.nextScheduleWrapper}>
      <div className={styles.nextSchedule__trainer_time}>
        <div>
          <div className={styles.iconWithBackground}>
            <Image src={"/icons/trainer.svg"} alt="schedule" width={14} height={14} />
          </div>
          <span>Sachin Gupta</span>
        </div>
        <div>
          <div className={styles.iconWithBackground}>
            <Image src={"/icons/clock.svg"} alt="schedule" width={14} height={14} />
          </div>
          <span>8:00 AM to 9:00 AM</span>
        </div>
      </div>
      <div className={styles.nextSchedule__date}>02/10/24</div>
    </div>
  );
};

export default NextSchedule;
