import styles from "../location.module.css";

const SetManuallyLocation = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <div className={styles.manuallyLocationWrapper}>
      <h1>Test</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores itaque iure, temporibus blanditiis consequatur
        a eveniet enim eum molestiae quaerat tenetur nostrum architecto nobis ipsum corrupti aperiam autem obcaecati.
        Doloremque.
      </p>
      <br />
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default SetManuallyLocation;
