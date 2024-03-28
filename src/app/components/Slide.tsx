import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";

interface SlideProps {
  title: string;
  subtitle: string;
  note: string;
  redirectURL: string;
  image: string;
}

const Slide = ({ title, subtitle, note, redirectURL, image }: SlideProps) => {
  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slideInfoWrapper}>
        <div className={styles.slide__info}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <span>{note}</span>
          <Link href={redirectURL}>Get Offer</Link>
        </div>
      </div>
      <div className={styles.slide__img}>
        <Image src={image} alt={title} width={50} height={50} />
      </div>
    </div>
  );
};

export default Slide;
