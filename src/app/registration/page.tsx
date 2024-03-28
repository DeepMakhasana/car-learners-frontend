import Image from "next/image";
import styles from "./registration.module.css";
import AccountTypeSelection from "./components/AccountTypeSelection";
import LearnerRegistration from "./components/LearnerRegistration";
import TrainerRegistration from "./components/TrainerRegistration";

const Registration = ({ searchParams }: { searchParams: any }) => {
  // if no query parameter is not exist
  if (!searchParams.hasOwnProperty("accountType")) {
    return (
      <section className="fullScreenContainer">
        <AccountTypeSelection />
      </section>
    );
  }

  const accountTypes = ["learner", "trainer"];
  // if query parameter is wrong
  if (!accountTypes.includes(searchParams?.accountType)) {
    return (
      <section className="fullScreenContainer">
        <AccountTypeSelection />
      </section>
    );
  }

  return (
    <section className="fullScreenContainer">
      {searchParams?.accountType == "learner" && <LearnerRegistration />}
      {searchParams?.accountType == "trainer" && <TrainerRegistration />}
    </section>
  );
};

export default Registration;
