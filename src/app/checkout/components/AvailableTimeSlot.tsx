import styles from "../checkout.module.css";

const AvailableTimeSlot = () => {
  return (
    <div className={styles.availableTimeSlotWrapper}>
      <h3>Available time slot</h3>
      <TimeSlots />
    </div>
  );
};

export const TimeSlots = () => {
  return (
    <div className={styles.availableTimeSlots}>
      <div>
        <input type="radio" name="time_slot" />
        <p>7:00AM - 8:00AM</p>
      </div>
      <div>
        <input type="radio" name="time_slot" />
        <p>8:00AM - 9:00AM</p>
      </div>
      <div>
        <input type="radio" name="time_slot" />
        <p>10:00AM - 11:00AM</p>
      </div>
      <div>
        <input type="radio" name="time_slot" />
        <p>11:00AM - 12:00AM</p>
      </div>
      <div>
        <input type="radio" name="time_slot" />
        <p>12:00AM - 1:00PM</p>
      </div>
      <div>
        <input type="radio" name="time_slot" />
        <p>1:00AM - 2:00AM</p>
      </div>
      <div>
        <input type="radio" name="time_slot" />
        <p>2:00AM - 3:00AM</p>
      </div>
      <div>
        <input type="radio" name="time_slot" />
        <p>3:00AM - 4:00AM</p>
      </div>
      <div>
        <input type="radio" name="time_slot" />
        <p>4:00AM - 5:00AM</p>
      </div>
      <div>
        <input type="radio" name="time_slot" />
        <p>5:00AM - 6:00AM</p>
      </div>
    </div>
  );
};

export default AvailableTimeSlot;
