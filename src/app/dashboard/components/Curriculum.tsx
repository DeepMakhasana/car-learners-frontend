import Image from "next/image";
import styles from "../dashboard.module.css";

const Curriculum = () => {
  return (
    <div>
      <h3>Curriculum</h3>
      <div className={styles.curriculumWrapper}>
        <div className={styles.curriculum__topic}>
          <div className={styles.curriculum__days}>
            <span>Day 1 to 5</span>
          </div>
          <div>
            <p>Learn only Steering and Accelerator</p>
            <div className={styles.curriculum__daysWrapper}>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>1 Day</span>
              </div>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>2 Day</span>
              </div>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>3 Day</span>
              </div>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>4 Day</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.curriculum__topic}>
          <div>
            <span>Day 6 to 10</span>
          </div>
          <div>
            <p>Drive with Steering, Accelerator and Clutch</p>
            <div className={styles.curriculum__daysWrapper}>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>6 Day</span>
              </div>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>7 Day</span>
              </div>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>8 Day</span>
              </div>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>9 Day</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.curriculum__topic}>
          <div>
            <span>Day 11 to 15</span>
          </div>
          <div>
            <p>Drive with Steering, Accelerator, Clutch and Gear</p>
            <div className={styles.curriculum__daysWrapper}>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>11 Day</span>
              </div>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>12 Day</span>
              </div>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>13 Day</span>
              </div>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>14 Day</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.curriculum__topic}>
          <div>
            <span>Day 11 to 15</span>
          </div>
          <div>
            <p>How to reverse and deal with slope?</p>
            <div className={styles.curriculum__daysWrapper}>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>11 Day</span>
              </div>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>12 Day</span>
              </div>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>13 Day</span>
              </div>
              <div>
                <div className={styles.iconWithBackground}>
                  <Image src={"/icons/schedule.svg"} alt="schedule" width={14} height={14} />
                </div>
                <span>14 Day</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
