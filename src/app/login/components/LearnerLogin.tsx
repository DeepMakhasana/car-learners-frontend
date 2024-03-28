import Image from "next/image";
import Link from "next/link";
import styles from "../../registration/registration.module.css";

const LearnerLogin = () => {
  return (
    <section className={styles.registrationContainer}>
      <div className={styles.registration__headingSection}>
        <div className={styles.icon}>
          <Image src={"/illustrations/learner.svg"} alt="learner" width={60} height={60} />
        </div>
        <p>Learner’s Login</p>
      </div>
      <div className={styles.registration__from}>
        <form>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value="Login" />
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
          Don’t have an account?{" "}
          <Link href={"/login?accountType=learner"}>
            <b>Register</b>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LearnerLogin;
