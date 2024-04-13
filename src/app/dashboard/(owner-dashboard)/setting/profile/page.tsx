import Image from "next/image";
import SubPageWrapper from "../components/SubPageWrapper";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <SubPageWrapper title="Profile">
      <ProfileUpdateFrom />
    </SubPageWrapper>
  );
};

const ProfileUpdateFrom = () => {
  return (
    <div className={styles.profileUpdateFromContainer}>
      <form method="post">
        <div>
          <div>
            <Image src={"/icons/user.svg"} width={18} height={18} alt="user" />
          </div>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <div>
            <Image src={"/icons/email.svg"} width={18} height={18} alt="email" />
          </div>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <div>
            <Image src={"/icons/phone-call.svg"} width={18} height={18} alt="number" />
          </div>
          <input type="number" placeholder="Phone Number" />
        </div>
        <div>
          <div>
            <Image src={"/icons/password.svg"} width={18} height={18} alt="password" />
          </div>
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default Profile;
