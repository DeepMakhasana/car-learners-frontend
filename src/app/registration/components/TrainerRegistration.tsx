"use client";
import Image from "next/image";
import styles from "../registration.module.css";
import Link from "next/link";
import { FormEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const TrainerRegistration = () => {
  const searchQuery = useSearchParams();
  const pathname = usePathname();
  const route = useRouter();

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className={styles.registrationContainer}>
      <div className={styles.registration__headingSection}>
        <div className={styles.icon}>
          <Image src={"/illustrations/trainer.svg"} alt="learner" width={60} height={60} />
        </div>
        <p>Create Trainer/School Account</p>
      </div>
      <div className={styles.registration__from}>
        <form onSubmit={handelSubmit} method="POST">
          <input type="text" name="username" placeholder="Username" />
          <input type="number" name="mobileNumber" placeholder="Mobile No" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
      <div className={styles.registration__signUpWithOtherMethod}>
        <div className={styles.signUpWithLine}>--- Or Sign up with ---</div>
        <div className={styles.registration__signUpWithOtherMethodOption}>
          <Image src={"/icons/rating.svg"} alt="google" width={20} height={20} />
          <p>Continue with google</p>
        </div>
        <div className={styles.registration__signUpWithOtherMethodOption}>
          <Image src={"/icons/rating.svg"} alt="google" width={20} height={20} />
          <p>Continue with facebook</p>
        </div>
        <p>
          Already have an account?{" "}
          <Link href={"/login?accountType=trainer"}>
            <b>Login</b>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default TrainerRegistration;
