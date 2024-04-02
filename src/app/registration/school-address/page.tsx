"use client";
import styles from "../registration.module.css";
import SchoolInfoHeader from "../components/SchoolInfoHeader";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const SchoolAddress = () => {
  const router = useRouter();

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/registration/school-images");
  };

  return (
    <section>
      <SchoolInfoHeader icon="/icons/address-white.svg" title="Set Address" />
      <form onSubmit={handelSubmit} method="post" className={styles.schoolDetailFormContainer}>
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
        <div className="twoBtnContainer">
          <button type="button" onClick={() => router.push("/registration/school-details")}>
            Back
          </button>
          <input type="submit" value="Next" />
        </div>
      </form>
    </section>
  );
};

export default SchoolAddress;
