import Image from "next/image";
import styles from "../checkout.module.css";
const SelectedSchool = () => {
  return (
    <div className={styles.selectedSchoolWrapper}>
      <h3>Selected School</h3>
      <div className={styles.selectedSchoolDetail}>
        <h2>Bapasitaram driving school</h2>
        <div>
          <p>
            <Image src={"/icons/inr.svg"} alt="INR" width={14} height={14} /> <b>3500</b>
          </p>
          <p>
            <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} /> 15 Day
          </p>
          <p>
            <Image src={"/icons/rating.svg"} alt="Rating" width={14} height={14} /> 4.5
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectedSchool;
