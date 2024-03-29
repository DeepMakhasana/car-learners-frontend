"use client";
import Image from "next/image";
import styles from "./navbar.module.css";

const BackButtonTopBar = () => {
  return (
    <section className={styles.backButtonTopBar}>
      <div
        onClick={() => {
          history.back();
        }}
      >
        <Image src={"/icons/back-arrow-v2.svg"} alt="back" width={30} height={30} />
      </div>
      <div>
        <p>Sign Up</p>
      </div>
    </section>
  );
};

export default BackButtonTopBar;
