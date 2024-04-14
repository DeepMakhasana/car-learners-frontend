import styles from "../trainerDashboard.module.css";

const CurrentExpense = () => {
  return (
    <div className={styles.currentExpenseContainer}>
      <h2>Expense</h2>
      <div className={styles.currentExpenseWrapper}>
        <p>Pending expanse</p>
        <span>₹ 3000</span>
      </div>
    </div>
  );
};

export default CurrentExpense;
