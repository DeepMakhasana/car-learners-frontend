"use client";
import styles from "./licenseApplication.module.css";

const ApplyLicense = () => {
  return (
    <section>
      <h1 className="topHading">License application</h1>
      <form className={styles.applicationFrom}>
        <select name="licenseType">
          <option value="">Select License type</option>
          <option value="t">Only two wheeler</option>
          <option value="f">Only four wheeler</option>
          <option value="tf">Both two and four wheeler</option>
        </select>
        <input type="text" name="name" placeholder="Full Name" />
        <input type="text" name="fatherName" placeholder="Father Name" />
        <div className={styles.dateInput}>
          <label htmlFor="dob">Data of birth: </label>
          <input type="date" name="dob" placeholder="Date of birth" />
        </div>
        <select name="gender">
          <option value="">Select Gender</option>
          <option value="m">Male</option>
          <option value="f">Female</option>
        </select>
        <select name="bloodGroup">
          <option value="">Select Blood group</option>
          <option value="m">Male</option>
          <option value="f">Female</option>
        </select>
        <label htmlFor="photo">Passport size photo</label>
        <input type="file" name="photo" id={styles.passportSizePhoto} title="Passport size photo" />
        <label htmlFor="age proof">Age proof</label>
        <select name="bloodGroup">
          <option value="">Select Age proof </option>
          <option value="aadhar">Aadhar card</option>
          <option value="pan">PAN car</option>
        </select>
        <input type="file" name="ageProof" id={styles.ageProof} title="Upload age proof" />
        <label htmlFor="age proof">Address proof</label>
        <select name="bloodGroup">
          <option value="">Select Address proof</option>
          <option value="aadhar">Aadhar card</option>
          <option value="pan">PAN car</option>
        </select>
        <input type="file" name="addressProof" id={styles.addressProof} title="Upload address proof" />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default ApplyLicense;
