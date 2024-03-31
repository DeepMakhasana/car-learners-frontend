import React from "react";
import { Schedule } from "../components/NextSchedule";
import { TimeSlots } from "@/app/checkout/components/AvailableTimeSlot";
import styles from "./reschedule.module.css";
import CancelSlot from "./components/CancelSlot";

const ReSchedule = () => {
  return (
    <section>
      <h1 className={styles.topHading}>Next Schedule</h1>
      <Schedule />
      <h3>Re-Schedule</h3>
      <TimeSlots />
      <CancelSlot />
    </section>
  );
};

export default ReSchedule;
