import styles from "../course.module.css";

const CourseCurriculum = () => {
  return (
    <div className={styles.courseCurriculumWrapper}>
      <h3>Course Curriculum</h3>
      <div className={styles.courseCurriculum}>
        <div>
          <p>Day 1 to 5</p>
          <p>Learn only Steering and Accelerator</p>
        </div>
        <div>
          <p>Day 6 to 8</p>
          <p>Drive with Steering, Accelerator and Clutch</p>
        </div>
        <div>
          <p>Day 8 to 11</p>
          <p>Drive with Steering, Accelerator, Clutch and Gear</p>
        </div>
        <div>
          <p>Day 12 to 15</p>
          <p>How to reverse and deal with slope?</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;
