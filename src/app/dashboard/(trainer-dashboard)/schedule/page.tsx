import styles from "../trainerDashboard.module.css";
import ScheduleList from "../components/Schedule";

const Schedule = () => {
  return (
    <div className={styles.scheduleContainer}>
      <h1>Schedule</h1>
      <div className={styles.scheduleDateWrapper}>
        <p>
          Jan 17, <span>Monday</span>
        </p>
        <div className={styles.scheduleDatesWrapper}>
          <ScheduleDate />
          <ScheduleDate />
          <ScheduleDate />
          <ScheduleDate />
          <ScheduleDate />
          <ScheduleDate />
        </div>
      </div>

      <div className={styles.schedulerWrapper}>
        <div className={styles.schedulerForOneDay}>
          <p>
            Jan 17 <span>Today</span>
          </p>
          <ScheduleList />
          <ScheduleList />
          <ScheduleList />
        </div>
        <div className={styles.schedulerForOneDay}>
          <p>
            Jan 17 <span>Today</span>
          </p>
          <ScheduleList />
          <ScheduleList />
          <ScheduleList />
        </div>
      </div>
    </div>
  );
};

const ScheduleDate = () => {
  return (
    <div className={styles.date}>
      <span>17</span>
      <span>Mon</span>
    </div>
  );
};

export default Schedule;
