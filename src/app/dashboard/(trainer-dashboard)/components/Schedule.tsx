import Image from "next/image";
import styles from "../trainerDashboard.module.css";

const Schedule = () => {
  return (
    <div className={styles.scheduleWrapper}>
      <div>
        <p>Deep makhasana</p>
        <span>07:00AM - 08:00AM</span>
      </div>
      <div>
        <div>
          <Image src={"/icons/user-call.svg"} alt="call" width={15} height={15} />
        </div>
        <div>
          <Image src={"/icons/message.svg"} alt="message" width={15} height={15} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
