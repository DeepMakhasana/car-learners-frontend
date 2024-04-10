import CurrentTrainerActivity from "./(owner-dashboard)/components/CurrentTrainerActivity";
import LearnerDetails from "./(owner-dashboard)/components/LearnerDetails";
import LicenseApplication from "./(owner-dashboard)/components/LicenseApplication";
import MonthlyData from "./(owner-dashboard)/components/MonthlyData";
// import Curriculum from "./(user-dashboard)/components/Curriculum";
// import NextSchedule from "./(user-dashboard)/components/NextSchedule";
// import PurchasedCourse from "./(user-dashboard)/components/PurchasedCourse";
// import UserRating from "./(user-dashboard)/components/UserRating";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

const dashboard = () => {
  // const cookieStore = cookies();
  // const userType = cookieStore.get("userType")?.value;

  // if (userType == undefined) {
  //   redirect("/");
  // } else {
  return (
    <>
      <h1 style={{ marginTop: "0.5rem" }}>Dashboard</h1>
      {/* {userType == "owner" ? (
          <>
             here put owner components 
          </>
        ) : (
          <>
            <PurchasedCourse />
            <NextSchedule />
            <Curriculum />
            <UserRating />
          </>
        )} */}
      <MonthlyData />
      <LearnerDetails />
      <CurrentTrainerActivity />
      <LicenseApplication />
    </>
  );
  // }
};

export default dashboard;
