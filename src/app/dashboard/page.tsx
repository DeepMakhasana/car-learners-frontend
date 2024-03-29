import Curriculum from "./components/Curriculum";
import NextSchedule from "./components/NextSchedule";
import PurchasedCourse from "./components/PurchasedCourse";
import UserRating from "./components/UserRating";

const dashboard = () => {
  return (
    <section>
      <h1 style={{ marginTop: "0.5rem" }}>Dashboard</h1>
      <PurchasedCourse />
      <NextSchedule />
      <Curriculum />
      <UserRating />
    </section>
  );
};

export default dashboard;
