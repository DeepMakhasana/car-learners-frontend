"use client";
import { FormEvent, useState } from "react";
import styles from "./licenseApplication.module.css";
import Image from "next/image";

const ApplyLicense = () => {
  const [submit, setSubmit] = useState(false);

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();

    setSubmit(true);
  };

  if (submit) {
    return <ApplyLicensePreview />;
  } else {
    return (
      <>
        <h1 className="topHading">License application</h1>
        <form className={styles.applicationFrom} onSubmit={handelSubmit} method="POST">
          <label htmlFor="type">license application type</label>
          <select name="licenseType">
            <option value="">Select License type</option>
            <option value="t">Only two wheeler</option>
            <option value="f">Only four wheeler</option>
            <option value="tf">Both two and four wheeler</option>
          </select>
          <label htmlFor="full name">Full name</label>
          <input type="text" name="name" placeholder="Full Name" />
          <label htmlFor="father name">Father name</label>
          <input type="text" name="fatherName" placeholder="Father Name" />
          {/* <div className={styles.dateInput}> */}
          {/* <label htmlFor="dob">Data of birth: </label> */}
          <input type="date" name="dob" placeholder="Date of birth" />
          {/* </div> */}
          <label htmlFor="gender">Gender</label>
          <select name="gender">
            <option value="">Select Gender</option>
            <option value="m">Male</option>
            <option value="f">Female</option>
          </select>
          <label htmlFor="blood group">Blood Group</label>
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
      </>
    );
  }
};

const ApplyLicensePreview = () => {
  return (
    <>
      <h1 className="topHading">Preview License application</h1>
      <div className={styles.detailPreviewWrapper}>
        <span>
          Select License type: <b>Only four wheeler</b>
        </span>
        <span>
          Full name(as per aadhar card): <b>Patel Deep Manishbhai</b>
        </span>
        <span>
          Father Name: <b>Patel Manishbhai Bhagwanjibhai</b>
        </span>
        <span>
          Date of birth: <b>10/10/2023</b>
        </span>
        <span>
          Gender : <b>Male</b>
        </span>
        <span>
          Blood Group : <b>B+</b>
        </span>
      </div>
      <div className={styles.UploadedDocument}>
        <div>
          <p>Passport size photo:</p>
          <div className={styles.previewImage}>
            <Image
              src={"/illustrations/location.svg"}
              alt="preview photo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div>
          <p>Age proof:</p>
          <div className={styles.previewImage}>
            <Image
              src={"/illustrations/location.svg"}
              alt="preview photo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div>
          <p>Address proof:</p>
          <div className={styles.previewImage}>
            <Image
              src={"/illustrations/location.svg"}
              alt="preview photo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <button>Submit</button>
      </div>
    </>
  );
};

export default ApplyLicense;
