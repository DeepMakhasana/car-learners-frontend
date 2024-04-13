import SubPageWrapper from "../components/SubPageWrapper";
import styles from "./schoolDetail.module.css";

const SchoolDetail = () => {
  return (
    <SubPageWrapper title="Driving School">
      <SchoolDetailUpdateFrom />
    </SubPageWrapper>
  );
};

const SchoolDetailUpdateFrom = () => {
  return (
    <div>
      <form method="post" className={styles.SchoolDetailUpdateFromContainer}>
        <input type="text" name="schoolName" placeholder="Driving school name" />
        <input type="number" name="contact" placeholder="Contact number" />
        <h2>Address</h2>
        <input type="text" name="address" placeholder="Address" />
        <select name="state">
          <option value="">Select state</option>
          <option value="gujarat">Gujarat</option>
          <option value="rajeshthan">Rajeshthan</option>
        </select>
        <select name="city">
          <option value="">Select city</option>
          <option value="gujarat">Rajkot</option>
          <option value="rajeshthan">Vapi</option>
        </select>
        <input type="number" name="pincode" placeholder="Pin code" />
        <div className={styles.getSchoolLocation}>
          <p>Stay on driving school and take location of school</p>
          <span>Set Location</span>
        </div>
        <h2>Photos</h2>
        <input type="file" name="frontImage" title="Upload school front image" id={styles.frontImage} />
        <input type="file" name="otherImages" multiple title="Upload school front image" id={styles.otherImages} />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default SchoolDetail;
