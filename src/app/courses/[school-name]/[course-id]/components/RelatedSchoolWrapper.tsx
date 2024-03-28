import { SchoolCardType } from "@/app/components/SchoolWrapper";
import styles from "../course.module.css";
import SchoolCard from "@/app/components/SchoolCard";

const RelatedSchoolWrapper = () => {
  const cards: SchoolCardType[] = [
    {
      image: "/illustrations/location.svg",
      schoolName: "Foums driving school",
      price: 3500,
      rating: 4.5,
      schedule: 15,
      location: "Balaji Circle, 150 Feet",
      slag: "/courses/balaji-driving-school/15-day",
    },
    {
      image: "/illustrations/location.svg",
      schoolName: "Bapashitaram driving school",
      price: 2900,
      rating: 4.5,
      schedule: 15,
      location: "Balaji Circle, 150 Feet",
      slag: "/courses/balaji-driving-school/15-day",
    },
    {
      image: "/illustrations/location.svg",
      schoolName: "Vishal driving school",
      price: 2500,
      rating: 4.5,
      schedule: 15,
      location: "Balaji Circle, 150 Feet",
      slag: "/courses/balaji-driving-school/15-day",
    },
    {
      image: "/illustrations/location.svg",
      schoolName: "Uma driving school",
      price: 4500,
      rating: 4.5,
      schedule: 15,
      location: "Balaji Circle, 150 Feet",
      slag: "/courses/balaji-driving-school/15-day",
    },
    {
      image: "/illustrations/location.svg",
      schoolName: "Balaji driving school",
      price: 1200,
      rating: 4.5,
      schedule: 15,
      location: "Balaji Circle, 150 Feet",
      slag: "/courses/balaji-driving-school/15-day",
    },
    {
      image: "/illustrations/location.svg",
      schoolName: "Karishna driving school",
      price: 5500,
      rating: 3.9,
      schedule: 30,
      location: "Balaji Circle, 150 Feet",
      slag: "/courses/balaji-driving-school/15-day",
    },
    {
      image: "/illustrations/location.svg",
      schoolName: "Umiya driving school",
      price: 3500,
      rating: 4.5,
      schedule: 28,
      location: "Balaji Circle, 150 Feet",
      slag: "/courses/balaji-driving-school/15-day",
    },
    {
      image: "/illustrations/location.svg",
      schoolName: "Shiv driving school",
      price: 2500,
      rating: 2.2,
      schedule: 15,
      location: "Balaji Circle, 150 Feet",
      slag: "/courses/balaji-driving-school/15-day",
    },
    {
      image: "/illustrations/location.svg",
      schoolName: "Shiv driving school",
      price: 2500,
      rating: 2.2,
      schedule: 15,
      location: "Balaji Circle, 150 Feet",
      slag: "/courses/balaji-driving-school/15-day",
    },
    {
      image: "/illustrations/location.svg",
      schoolName: "Shiv driving school",
      price: 2500,
      rating: 2.2,
      schedule: 15,
      location: "Balaji Circle, 150 Feet",
      slag: "/courses/balaji-driving-school/15-day",
    },
    {
      image: "/illustrations/location.svg",
      schoolName: "Shiv driving school",
      price: 2500,
      rating: 2.2,
      schedule: 15,
      location: "Balaji Circle, 150 Feet",
      slag: "/courses/balaji-driving-school/15-day",
    },
  ];

  return (
    <div className={styles.relatedSchoolWrapper}>
      <h2>Related Schools</h2>
      <div className={styles.relatedSchoolsWrapper}>
        {cards.map((school) => (
          <SchoolCard key={school.schoolName} card={school} />
        ))}
      </div>
    </div>
  );
};

export default RelatedSchoolWrapper;
