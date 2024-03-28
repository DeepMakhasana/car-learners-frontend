import styles from "../checkout.module.css";

const BillingCalculation = () => {
  return (
    <div className={styles.billContainer}>
      <h3>Bill Details</h3>
      <div className={styles.billWrapper}>
        <div>
          <p>15 Day plan</p>
          <p>₹ 3500.00</p>
        </div>
        <div>
          <p>Alto 800</p>
          <p>₹ 0.00</p>
        </div>
        <div>
          <p>GST (2%)</p>
          <p>₹ 70.00</p>
        </div>
        <div className={styles.totalBill}>
          <p>Total amount</p>
          <p>₹3570.00</p>
        </div>
      </div>
    </div>
  );
};

export default BillingCalculation;
