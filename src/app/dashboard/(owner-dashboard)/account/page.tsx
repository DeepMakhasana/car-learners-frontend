import { Suspense } from "react";
import styles from "./account.module.css";
import AccountChart from "./components/AccountChart";

const account = () => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    revenue: [40000, 30000, 34000, 46000, 53000],
    expense: [18000, 15000, 10000, 19000, 20000],
  };
  return (
    <div className={styles.accountContainer}>
      <h1>Account</h1>
      <Suspense fallback={<p>Loading chart..</p>}>
        <AccountChart data={chartData} />
      </Suspense>
      <div className={styles.historyContainer}>
        <div className={styles.monthlyHistoryContainer}>
          <div className={styles.monthTitle}>
            <h2>October</h2>
            <span>+ ₹5000</span>
          </div>
          <div className={styles.transactionHistoryContainer}>
            <div className={styles.transaction}>
              <div>
                <p>Manish Sharma</p>
                <span>October 10,2023 at 3:30 PM</span>
              </div>
              <span>₹3800</span>
            </div>
            <div className={styles.transaction}>
              <div>
                <p>Manish Sharma</p>
                <span>October 10,2023 at 3:30 PM</span>
              </div>
              <span>₹3800</span>
            </div>
          </div>
        </div>

        <div className={styles.monthlyHistoryContainer}>
          <div className={styles.monthTitle}>
            <h2>October</h2>
            <span>+ ₹5000</span>
          </div>
          <div className={styles.transactionHistoryContainer}>
            <div className={styles.transaction}>
              <div>
                <p>Manish Sharma</p>
                <span>October 10,2023 at 3:30 PM</span>
              </div>
              <span>₹3800</span>
            </div>
            <div className={styles.transaction}>
              <div>
                <p>Manish Sharma</p>
                <span>October 10,2023 at 3:30 PM</span>
              </div>
              <span>₹3800</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default account;
