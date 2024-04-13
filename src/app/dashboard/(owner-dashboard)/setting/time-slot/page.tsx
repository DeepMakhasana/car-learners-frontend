import Image from "next/image";
import SubPageWrapper from "../components/SubPageWrapper";
import styles from "./timeSlot.module.css";

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

export const CreatedList = () => {
  return (
    <div className={styles.timeSlotListContainer}>
      <div className={styles.timeSlotList}>
        <p>09:00AM - 10:00AM</p>
        <div>
          <div>
            <Image src={"/icons/edit.svg"} width={14} height={14} alt="edit" />
          </div>
          <div>
            <Image src={"/icons/delete.svg"} width={14} height={14} alt="delete" />
          </div>
        </div>
      </div>

      <div className={styles.timeSlotList}>
        <p>09:00AM - 10:00AM</p>
        <div>
          <div>
            <Image src={"/icons/edit.svg"} width={14} height={14} alt="edit" />
          </div>
          <div>
            <Image src={"/icons/delete.svg"} width={14} height={14} alt="delete" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSlot;
