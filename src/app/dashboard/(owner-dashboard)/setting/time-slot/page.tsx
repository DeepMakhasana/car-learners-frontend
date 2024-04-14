import Image from "next/image";
import SubPageWrapper from "../components/SubPageWrapper";
import styles from "./timeSlot.module.css";
import CreatedList from "../components/CreatedList";

const TimeSlot = () => {
  return (
    <SubPageWrapper title="Time Slot">
      <TimeSlotFrom />
      <CreatedList />
    </SubPageWrapper>
  );
};

const TimeSlotFrom = () => {
  return (
    <form method="post" className={styles.timeSlotContainer}>
      <input type="time" name="from" />
      <input type="time" name="to" />
      <input type="submit" value="add" />
    </form>
  );
};

export default TimeSlot;
