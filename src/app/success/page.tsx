import Image from "next/image";
import styles from "./success.module.css";
import Link from "next/link";

const Success = () => {
  return (
    <section className={styles.successWrapper}>
      <div className={styles.successIllustration}>
        <Image
          src={"/illustrations/successful-purchase.svg"}
          alt="Plan purchase successful.."
          width={300}
          height={300}
        />
      </div>
      <Link href={"/dashboard"} className={styles.backToDashboard}>
        <p>Back to Dashboard</p>
        <Image src={"/icons/right-arrow.svg"} alt=">" width={20} height={20} />
      </Link>
    </section>
  );
};

export default Success;
