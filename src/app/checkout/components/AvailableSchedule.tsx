import styles from "../checkout.module.css";

const AvailableSchedule = () => {
  return (
    <div>
      <h3>Different Schedule</h3>
      <div className={styles.availableScheduleWrapper}>
        <div className={styles.availableScheduleOption}>
          <input type="radio" name="schedule" />
          <div>
            <p>15 Day</p>
            <p>₹ 3500</p>
          </div>
        </div>
        <div className={styles.availableScheduleOption}>
          <input type="radio" name="schedule" />
          <div>
            <p>28 Day</p>
            <p>₹ 4000</p>
          </div>
        </div>
        <div className={styles.availableScheduleOption}>
          <input type="radio" name="schedule" />
          <div>
            <p>45 Day</p>
            <p>₹ 5500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableSchedule;
