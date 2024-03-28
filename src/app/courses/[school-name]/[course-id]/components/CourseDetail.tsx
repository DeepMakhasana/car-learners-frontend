import Image from "next/image";
import styles from "../course.module.css";
import Link from "next/link";

const CourseDetail = () => {
  return (
    <div className={styles.courseDetailWrapper}>
      <Link href={"/courses/balaji-driving-school"}>
        <h1>Bapasitaram driving school</h1>
      </Link>
      <div className={styles.courseDetail}>
        <div>
          <Image src={"/icons/inr.svg"} alt="price" width={16} height={16} />
          <p>
            <b>1280</b>
          </p>
        </div>
        <div>
          <Image src={"/icons/schedule.svg"} alt="schedule" width={16} height={16} />
          <p>15 day</p>
        </div>
        <div>
          <Image src={"/icons/rating.svg"} alt="rating" width={16} height={16} />
          <p>4.2 Rating</p>
        </div>
      </div>
      <Link href={"/courses/balaji-driving-school"} style={{ color: "var(--primary-color)" }}>
        See all courses
      </Link>
      <div className={styles.courseAddress}>
        <Image src={"/icons/address.svg"} alt="rating" width={16} height={16} />
        <p>Balaji Circle, 150 Feet Ring Rd, near Ram or Shyam Gola Shop, Shubash Nagar, Rajkot, Gujarat 360005</p>
      </div>
      <Link href={"/checkout"}>
        <button className={styles.joinBtn}>Join Today</button>
      </Link>
    </div>
  );
};

export default CourseDetail;
