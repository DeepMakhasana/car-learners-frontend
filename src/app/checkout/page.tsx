import Link from "next/link";
import styles from "./checkout.module.css";
import AvailableCar from "./components/AvailableCar";
import AvailableSchedule from "./components/AvailableSchedule";
import AvailableTimeSlot from "./components/AvailableTimeSlot";
import BillingCalculation from "./components/BillingCalculation";
import PromoCode from "./components/PromoCode";
import SelectedSchool from "./components/SelectedSchool";

const Checkout = () => {
  return (
    <section>
      <SelectedSchool />
      <AvailableSchedule />
      <AvailableTimeSlot />
      <AvailableCar />
      <PromoCode />
      <BillingCalculation />
      <Link href={"/pay"} className={styles.payBtn}>
        Make Payment
      </Link>
    </section>
  );
};

export default Checkout;
