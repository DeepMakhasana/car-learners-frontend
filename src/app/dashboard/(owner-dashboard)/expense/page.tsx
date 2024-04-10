import ExpenseForm from "./components/ExpenseForm";
import ExpenseHistory from "./components/ExpenseHistory";
import styles from "./expense.module.css";

const expense = () => {
  return (
    <div className={styles.expenseContainer}>
      <h1>Expense</h1>
      <ExpenseForm />
      <ExpenseHistory />
    </div>
  );
};

export default expense;
