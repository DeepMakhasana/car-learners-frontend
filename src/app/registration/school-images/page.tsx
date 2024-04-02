"use client";
import styles from "../registration.module.css";
import SchoolInfoHeader from "../components/SchoolInfoHeader";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const SchoolImages = () => {
  const router = useRouter();

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <section>
      <SchoolInfoHeader icon="/icons/camera.svg" title="Upload Image" />
      <form onSubmit={handelSubmit} method="post" className={styles.schoolDetailFormContainer}>
        <input type="file" name="frontImage" title="Upload school front image" id={styles.frontImage} />
        <input type="file" name="otherImages" multiple title="Upload school front image" id={styles.otherImages} />
        <div className="twoBtnContainer">
          <button type="button" onClick={() => router.push("/registration/school-address")}>
            Back
          </button>
          <input type="submit" value="Next" />
        </div>
      </form>
    </section>
  );
};

export default SchoolImages;
