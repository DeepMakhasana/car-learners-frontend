import Image from "next/image";
import styles from "../dashboard.module.css";

const UserRating = () => {
  return (
    <div>
      <h3>Rate this School</h3>
      <div className={styles.rateWrapper}>
        <div className={styles.rateIcons}>
          <Image src={"/icons/rating.svg"} alt="rating" width={18} height={18} />
          <Image src={"/icons/rating.svg"} alt="rating" width={18} height={18} />
          <Image src={"/icons/rating.svg"} alt="rating" width={18} height={18} />
          <Image src={"/icons/rating.svg"} alt="rating" width={18} height={18} />
          <Image src={"/icons/rating.svg"} alt="rating" width={18} height={18} />
        </div>
        <p>Write a review</p>
      </div>
    </div>
  );
};

export default UserRating;
