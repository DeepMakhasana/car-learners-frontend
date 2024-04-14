import styles from "../trainerDashboard.module.css";
import Schedule from "./Schedule";

const UpcomingSchedule = () => {
  return (
    <div className={styles.currentScheduleContainer} style={{ marginTop: "2rem" }}>
      <h2>Upcoming schedule</h2>
      <Schedule />
    </div>
  );
};

export default UpcomingSchedule;
