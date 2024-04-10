import styles from "../expense.module.css";

const ExpenseForm = () => {
  return (
    <form method="post" className={styles.expenseForm}>
      <div className={styles.expenseFromInput}>
        <input type="text" placeholder="Reason" />
        <input type="number" placeholder="Amount" />
      </div>
      <input type="submit" value="Add" />
    </form>
  );
};

export default ExpenseForm;
