import styles from "../checkout.module.css";

const AvailableCar = () => {
  return (
    <div>
      <h3>Choose Vehicle</h3>
      <div className={styles.availableCarWrapper}>
        <div className={styles.availableCarOption}>
          <input type="radio" name="car" />
          <div>
            <p>Alto</p>
            <p>₹ 0</p>
          </div>
        </div>
        <div className={styles.availableCarOption}>
          <input type="radio" name="car" />
          <div>
            <p>Swift</p>
            <p>₹ 500</p>
          </div>
        </div>
        <div className={styles.availableCarOption}>
          <input type="radio" name="car" />
          <div>
            <p>i20</p>
            <p>₹ 800</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCar;
