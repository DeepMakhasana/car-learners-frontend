import Image from "next/image";
import styles from "../registration.module.css";

const SchoolInfoHeader = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <div className={styles.schoolInfoHeaderContainer}>
      <div className={styles.iconWrapper}>
        <Image src={icon} alt={title} width={49} height={49} />
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default SchoolInfoHeader;
