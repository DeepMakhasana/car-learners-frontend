import styles from "../reschedule.module.css";

const CancelSlot = () => {
  return (
    <div className={styles.cancellationContainer}>
      <h3>Slot cancellation</h3>
      <div className={styles.cancellationWrapper}>
        <p>Why do you want to cancel your slot? </p>
        <div className={styles.cancellationReasonOptions}>
          <span>Medical emergence</span>
          <span>Outside Town</span>
          <span>Other</span>
        </div>
        <textarea name="reason" rows={5} placeholder="Detailed reason? if you need to provide"></textarea>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default CancelSlot;
