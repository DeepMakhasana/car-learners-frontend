import CurrentTrainerActivity from "./(owner-dashboard)/components/CurrentTrainerActivity";
import LearnerDetails from "./(owner-dashboard)/components/LearnerDetails";
import LicenseApplication from "./(owner-dashboard)/components/LicenseApplication";
import MonthlyData from "./(owner-dashboard)/components/MonthlyData";
import CurrentExpense from "./(trainer-dashboard)/components/CurrentExpense";
import CurrentSchedule from "./(trainer-dashboard)/components/CurrentSchedule";
import TrainerTitle from "./(trainer-dashboard)/components/TrainerTitle";
import UpcomingSchedule from "./(trainer-dashboard)/components/UpcomingSchedule";
import Curriculum from "./(user-dashboard)/components/Curriculum";
import NextSchedule from "./(user-dashboard)/components/NextSchedule";
import PurchasedCourse from "./(user-dashboard)/components/PurchasedCourse";
import UserRating from "./(user-dashboard)/components/UserRating";
// import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const dashboard = () => {
  // const cookieStore = cookies();
  // const userType = cookieStore.get("userType")?.value;

  // switch (userType) {
  //   case "user":
  //     return (
  //       <>
  //         <h1 style={{ marginTop: "0.5rem" }}>Dashboard</h1>
  //         <PurchasedCourse />
  //         <NextSchedule />
  //         <Curriculum />
  //         <UserRating />
  //       </>
  //     );
  //   case "owner":
  //     return (
  //       <>
  //         <h1 style={{ marginTop: "0.5rem" }}>Dashboard</h1>
  //         <MonthlyData />
  //         <LearnerDetails />
  //         <CurrentTrainerActivity />
  //         <LicenseApplication />
  //       </>
  //     );
  //   case "trainer":
  //     return (
  //       <>
  //         <h1 style={{ marginTop: "0.5rem" }}>Dashboard</h1>
  //         <PurchasedCourse />
  //         <NextSchedule />
  //         <Curriculum />
  //         <UserRating />
  //       </>
  //     );
  //   default:
  //     redirect("/");
  // }

  return (
    <div style={{ marginBottom: "6rem" }}>
      <h1 style={{ marginTop: "0.5rem" }}>Dashboard</h1>
      <TrainerTitle />
      <CurrentSchedule />
      <UpcomingSchedule />
      <CurrentExpense />
      <LearnerDetails />
    </div>
  );
};

export default dashboard;
