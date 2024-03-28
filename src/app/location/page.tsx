import Image from "next/image";
import styles from "./location.module.css";
import SetLocation from "./components/SetLocation";

const Location = () => {
  return (
    <section className="fullScreenContainer">
      <div className={styles.locationWrapper}>
        <div className={styles.location__illustration}>
          <Image src="/illustrations/location.svg" alt="Enter your location" width={300} height={300} />
        </div>
        <SetLocation />
      </div>
    </section>
  );
};

export default Location;
