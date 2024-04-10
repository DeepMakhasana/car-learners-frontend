import { Schedule } from "../components/NextSchedule";
import { TimeSlots } from "@/app/checkout/components/AvailableTimeSlot";
import CancelSlot from "./components/CancelSlot";

const ReSchedule = () => {
  return (
    <>
      <h1 className="topHading">Next Schedule</h1>
      <Schedule />
      <h3>Re-Schedule</h3>
      <TimeSlots />
      <CancelSlot />
    </>
  );
};

export default ReSchedule;
