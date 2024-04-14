import styles from "../trainerDashboard.module.css";
import Schedule from "./Schedule";

const CurrentSchedule = () => {
  return (
    <div className={styles.currentScheduleContainer}>
      <h2>Current schedule</h2>
      <Schedule />
    </div>
  );
};

export default CurrentSchedule;
