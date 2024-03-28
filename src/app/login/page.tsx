import AccountTypeSelection from "../registration/components/AccountTypeSelection";
import LearnerLogin from "./components/LearnerLogin";
import TrainerLogin from "./components/TrainerLogin";

const SignIn = ({ searchParams }: { searchParams: any }) => {
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
      {searchParams?.accountType == "learner" && <LearnerLogin />}
      {searchParams?.accountType == "trainer" && <TrainerLogin />}
    </section>
  );
};

export default SignIn;
