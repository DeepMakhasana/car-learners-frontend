import Image from "next/image";
import styles from "../school.module.css";
import Link from "next/link";

interface CourseType {
  name: string;
  price: number;
  schedule: number;
  rating: number;
  slag: string;
}

const courses: CourseType[] = [
  {
    name: "Basic Plan",
    price: 2400,
    schedule: 15,
    rating: 4.2,
    slag: "/courses/balaji-driving-school/15-day",
  },
  {
    name: "Intermediate Plan",
    price: 3500,
    schedule: 28,
    rating: 4.8,
    slag: "/courses/balaji-driving-school/28-day",
  },
  {
    name: "Advance Plan",
    price: 6400,
    schedule: 36,
    rating: 4.3,
    slag: "/courses/balaji-driving-school/36-day",
  },
];

const SchoolCourses = () => {
  return (
    <div className={styles.SchoolCourseWrapper}>
      {courses.map((course) => (
        <SchoolCourse key={course.name} course={course} />
      ))}
    </div>
  );
};

export const SchoolCourse = ({ course }: { course: CourseType }) => {
  return (
    <Link href={course.slag} className={styles.courseWrapper}>
      <h2>{course.name}</h2>
      <p>
        <Image src={"/icons/inr.svg"} alt="INR" width={12} height={12} /> <b>{course.price} /-</b>
      </p>
      <p>
        <Image src={"/icons/schedule.svg"} alt="schedule" width={12} height={12} /> {course.schedule} Day
      </p>
      <p>
        <Image src={"/icons/rating.svg"} alt="Rating" width={12} height={12} /> {course.rating} Rating
      </p>
    </Link>
  );
};

export default SchoolCourses;
