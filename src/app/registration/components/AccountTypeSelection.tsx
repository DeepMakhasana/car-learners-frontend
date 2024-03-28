"use client";
import Image from "next/image";
import styles from "../registration.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const AccountTypeSelection = () => {
  const searchQuery = useSearchParams();
  const pathname = usePathname();
  const route = useRouter();

  const handelTypeSelection = (type: string) => {
    const params = new URLSearchParams(searchQuery.toString());
    params.set("accountType", type);
    route.push(pathname + "?" + params.toString());
  };
  return (
    <div className={styles.accountTypeSelection}>
      <h2>Select Your Account Type</h2>
      <div className={styles.accountTypeSelectionWrapper}>
        <div className={styles.accountTypeSelectionBox} onClick={() => handelTypeSelection("learner")}>
          <Image src={"/illustrations/learner.svg"} alt="learner" width={180} height={180} />
          <h3>Learner</h3>
        </div>
        <div className={styles.accountTypeSelectionBox} onClick={() => handelTypeSelection("trainer")}>
          <Image src={"/illustrations/trainer.svg"} alt="trainer" width={180} height={180} />
          <h3>Trainer</h3>
        </div>
      </div>
    </div>
  );
};

export default AccountTypeSelection;
