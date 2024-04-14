import Image from "next/image";
import styles from "../time-slot/timeSlot.module.css";

const CreatedList = () => {
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

export default CreatedList;
