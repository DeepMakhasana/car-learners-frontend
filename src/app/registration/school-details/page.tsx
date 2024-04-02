"use client";
import styles from "../registration.module.css";
import SchoolInfoHeader from "../components/SchoolInfoHeader";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const SchoolDetails = () => {
  const router = useRouter();
  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/registration/school-address");
  };

  return (
    <section>
      <SchoolInfoHeader icon="/icons/school.svg" title="School Details" />
      <form onSubmit={handelSubmit} method="post" className={styles.schoolDetailFormContainer}>
        <input type="text" name="schoolName" placeholder="Driving school name" />
        <input type="number" name="contact" placeholder="Contact number" />
        <input type="submit" value="Next" />
      </form>
    </section>
  );
};

export default SchoolDetails;
