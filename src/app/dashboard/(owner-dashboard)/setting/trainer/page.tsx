import CreatedList from "../components/CreatedList";
import SubPageWrapper from "../components/SubPageWrapper";
import styles from "./trainer.module.css";

const Trainer = () => {
  return (
    <SubPageWrapper title="Trainer">
      <TrainerForm />
      <CreatedList />
    </SubPageWrapper>
  );
};

const TrainerForm = () => {
  return (
    <form method="post" className={styles.trainerFormContainer}>
      <input type="text" name="trainerName" placeholder="Trainer Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="number" name="trainerName" placeholder="Mobile No" />
      <input type="number" name="salary" placeholder="Salary" />
      <input type="number" name="experiences" placeholder="Previous Year Experiences" />
      <input type="password" name="password" placeholder="Password" />
      <input type="file" name="profilePic" id={styles.profilePic} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Trainer;
