import Image from "next/image";
import styles from "../ownerDashboard.module.css";

const CurrentTrainerActivity = () => {
  return (
    <div className={styles.currentTrainerActivity}>
      <h2>Current Trainer Activity</h2>
      <div className={styles.currentTrainerActivityContainer}>
        <TrainerSchedule />
        <TrainerSchedule />
      </div>
    </div>
  );
};

const TrainerSchedule = () => {
  return (
    <div className={styles.currentTrainerActivityWrapper}>
      <div>
        <p>Sachin Gupta</p>
        <span>Deep makhasana</span>
      </div>
      <div>
        <Image src={"/icons/clock.svg"} width={14} height={14} alt="clock" />
        <span>07:00AM - 08:00AM</span>
      </div>
    </div>
  );
};

export default CurrentTrainerActivity;
