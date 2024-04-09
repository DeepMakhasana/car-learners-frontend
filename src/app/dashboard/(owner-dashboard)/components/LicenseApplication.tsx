import Image from "next/image";
import styles from "../ownerDashboard.module.css";

const LicenseApplication = () => {
  return (
    <div className={styles.licenseApplication}>
      <h2>New License Application</h2>
      <div className={styles.licenseApplicationContainer}>
        <Application />
        <Application />
        <Application />
      </div>
    </div>
  );
};

const Application = () => {
  return (
    <div className={styles.licenseApplicationWrapper}>
      <div>
        <p>Deep Makhasana</p>
        <span>Only Four Wheeler</span>
      </div>
      <div>
        <Image src={"/icons/car-bike.svg"} width={36} height={36} alt="vehicle" />
        {/* <Image src={"/icons/bike.svg"} width={24} height={24} alt="vehicle" /> */}
      </div>
    </div>
  );
};

export default LicenseApplication;
