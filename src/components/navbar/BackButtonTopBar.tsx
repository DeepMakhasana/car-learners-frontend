"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BackButtonTopBar = () => {
  const path = usePathname();
  return (
    <section className={styles.backButtonTopBar}>
      {path == "/dashboard" ? (
        <div>
          <Link href={"/location"}>
            <p>Location</p>
          </Link>
        </div>
      ) : (
        <div
          onClick={() => {
            history.back();
          }}
        >
          <Image src={"/icons/back-arrow-v2.svg"} alt="back" width={30} height={30} />
        </div>
      )}

      <div>
        <p>Sign Up</p>
      </div>
    </section>
  );
};

export default BackButtonTopBar;
