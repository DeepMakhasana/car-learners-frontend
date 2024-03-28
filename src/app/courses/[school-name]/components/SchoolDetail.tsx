import Image from "next/image";
import styles from "../school.module.css";

const SchoolDetail = () => {
  return (
    <div className={styles.schoolDetailWrapper}>
      <h1>Bapashitaram Driving School - Rajkot</h1>
      <div className={styles.schoolDetail__address}>
        <Image src={"/icons/address.svg"} alt="Address" width={18} height={18} />
        <p>Balaji Circle, 150 Feet Ring Rd, near Ram or Shyam Gola Shop, Shubash Nagar, Rajkot, Gujarat 360005</p>
      </div>
    </div>
  );
};

export default SchoolDetail;
