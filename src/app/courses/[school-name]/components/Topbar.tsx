"use client";
import Image from "next/image";
import styles from "../school.module.css";
const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div
        onClick={() => {
          history.back();
        }}
      >
        <Image src={"/icons/back-arrow.svg"} alt="back" width={26} height={26} />
      </div>
      <div>
        <Image src={"/icons/more.svg"} alt="more" width={26} height={26} />
      </div>
    </div>
  );
};

export default Topbar;
