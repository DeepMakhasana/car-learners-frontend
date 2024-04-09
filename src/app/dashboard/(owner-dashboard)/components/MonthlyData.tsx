import styles from "../ownerDashboard.module.css";

const MonthlyData = () => {
  return (
    <div className={styles.monthlyDataWrapper}>
      <div>
        <h3>Monthly revenue</h3>
        <span>₹ 30000</span>
      </div>
      <div>
        <div>
          <h3>Monthly profit</h3>
          <span>₹ 18000</span>
        </div>
        <div>
          <h3>Monthly expense</h3>
          <span>₹ 12000</span>
        </div>
      </div>
    </div>
  );
};

export default MonthlyData;
