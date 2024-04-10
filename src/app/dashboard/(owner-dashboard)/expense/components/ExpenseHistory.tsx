import styles from "../expense.module.css";

const ExpenseHistory = () => {
  return (
    <div className={styles.expenseHistoryContainer}>
      <select name="member">
        <option value="your">Your</option>
        <option value="sachin">Schine Gupta</option>
        <option value="rohit">Rohit nishad</option>
        <option value="deep">Deep Patel</option>
      </select>

      <h2>History</h2>
      <div className={styles.historyWrapper}>
        <div className={styles.history}>
          <div>
            <p>Place new battery</p>
            <span>October 12,2023</span>
          </div>
          <div>
            <span>Pending</span>
            <span>₹2500</span>
          </div>
        </div>
        <div className={styles.history}>
          <div>
            <p>Place new battery</p>
            <span>October 12,2023</span>
          </div>
          <div>
            <span>Pending</span>
            <span>₹2500</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseHistory;
