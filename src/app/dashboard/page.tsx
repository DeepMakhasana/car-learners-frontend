import CurrentTrainerActivity from "./(owner-dashboard)/components/CurrentTrainerActivity";
import LearnerDetails from "./(owner-dashboard)/components/LearnerDetails";
import LicenseApplication from "./(owner-dashboard)/components/LicenseApplication";
import MonthlyData from "./(owner-dashboard)/components/MonthlyData";
import Curriculum from "./components/Curriculum";
import NextSchedule from "./components/NextSchedule";
import PurchasedCourse from "./components/PurchasedCourse";
import UserRating from "./components/UserRating";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const dashboard = () => {
  const cookieStore = cookies();
  const userType = cookieStore.get("userType")?.value;

  if (userType == undefined) {
    redirect("/");
  } else {
    return (
      <section>
        <h1 style={{ marginTop: "0.5rem" }}>Dashboard</h1>
        {userType == "owner" ? (
          <>
            <MonthlyData />
            <LearnerDetails />
            <CurrentTrainerActivity />
            <LicenseApplication />
          </>
        ) : (
          <>
            <PurchasedCourse />
            <NextSchedule />
            <Curriculum />
            <UserRating />
          </>
        )}
      </section>
    );
  }
};

export default dashboard;
