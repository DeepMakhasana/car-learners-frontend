import AccountTypeSelection from "./components/AccountTypeSelection";
import LearnerRegistration from "./components/LearnerRegistration";
import TrainerRegistration from "./components/TrainerRegistration";

const Registration = ({ searchParams }: { searchParams: any }) => {
  // if query parameter is not exist
  if (!searchParams.hasOwnProperty("accountType")) {
    return (
      <section className="fullScreenContainer">
        <AccountTypeSelection />
      </section>
    );
  }

  // if query parameter is wrong
  const accountTypes = ["learner", "trainer"];
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
