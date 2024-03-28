import Image from "next/image";
import styles from "../school.module.css";

const ReviewAndRating = () => {
  return (
    <div className={styles.reviewAndRatingWrapper}>
      <h3>Review and Ratings</h3>
      <div className={styles.totalCountOfReviewAndRating}>
        <p className={styles.totalRating}>4.2</p>
        <div className={styles.ratingIconsWrapper}>
          <Image src={"/icons/rating.svg"} alt="rating" width={20} height={20} />
          <Image src={"/icons/rating.svg"} alt="rating" width={20} height={20} />
          <Image src={"/icons/rating.svg"} alt="rating" width={20} height={20} />
          <Image src={"/icons/rating.svg"} alt="rating" width={20} height={20} />
        </div>
        <p className={styles.totalReview}>Total reviews: 315</p>
      </div>
      <Rating />
      <Rating />
      <Rating />
    </div>
  );
};

const Rating = () => {
  return (
    <div className={styles.ratingWrapper}>
      <div className={styles.rating__userDetail}>
        <Image src={"/icons/search.svg"} alt="rating" width={30} height={30} />
        <p>Bhargav Patel</p>
      </div>
      <div className={styles.rating__userRatingWithDate}>
        <div className={styles.ratingIconsWrapper}>
          <Image src={"/icons/rating.svg"} alt="rating" width={16} height={16} />
          <Image src={"/icons/rating.svg"} alt="rating" width={16} height={16} />
          <Image src={"/icons/rating.svg"} alt="rating" width={16} height={16} />
          <Image src={"/icons/rating.svg"} alt="rating" width={16} height={16} />
        </div>
        <p>12/03/2024</p>
      </div>
      <p>
        This Schools is great!! School has very Train and Experienced Trainer and the quality and condition of Vehicle
        is also good..
      </p>
    </div>
  );
};

export default ReviewAndRating;
