import styles from "../page.module.css";
import SchoolCard from "./SchoolCard";

export interface SchoolCardType {
  image: string;
  schoolName: string;
  price: number;
  rating: number;
  schedule: number;
  location: string;
  slag: string;
}

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

const SchoolWrapper = () => {
  return (
    <div className={styles.schoolWrapper}>
      {cards.map((card, index) => (
        <SchoolCard key={index} card={card} />
      ))}
    </div>
  );
};

export default SchoolWrapper;
