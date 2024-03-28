import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import { SchoolCardType } from "./SchoolWrapper";

const SchoolCard = ({ card, min_width }: { card: SchoolCardType; min_width?: string }) => {
  return (
    <Link href={card.slag} className={styles.schoolCard} style={{ minWidth: min_width ? min_width : "auto" }}>
      <div className={styles.schoolCard__image}>
        <Image
          src={card.image}
          alt="location"
          width={200}
          height={200}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.schoolCard__info}>
        <h2>{card.schoolName}</h2>
        <div className={styles.schoolCard__highlights}>
          <p>
            <Image src={"/icons/inr.svg"} alt="INR" width={12} height={12} /> <b>{card.price}</b>
          </p>
          <p>
            <Image src={"/icons/schedule.svg"} alt="schedule" width={12} height={12} /> {card.schedule} Day
          </p>
          <p>
            <Image src={"/icons/rating.svg"} alt="Rating" width={12} height={12} /> {card.rating}
          </p>
        </div>
        <div className={styles.schoolCard__address}>
          <p>
            <Image src={"/icons/address.svg"} alt="Address" width={12} height={12} /> {card.location}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SchoolCard;
