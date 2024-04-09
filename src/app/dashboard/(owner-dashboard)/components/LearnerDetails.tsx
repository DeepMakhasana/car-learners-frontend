import styles from "../ownerDashboard.module.css";

const LearnerDetails = () => {
  return (
    <div className={styles.learnerDetails}>
      <h2>Learner detail</h2>
      <div className={styles.learnerDetailsWrapper}>
        <div>
          <h3>Active Learner</h3>
          <span>18</span>
        </div>
        <div>
          <h3>Total Learner</h3>
          <span>143</span>
        </div>
      </div>
    </div>
  );
};

export default LearnerDetails;
