import Link from "next/link";
import styles from "./navbar.module.css";

const Topbar = () => {
  return (
    <nav className={styles.topbarWrapper}>
      <div>
        <Link href={"/"}>
          <p>Location</p>
        </Link>
      </div>
      <div>
        <p>
          <Link href={"/registration"}>
            <b>Sign up</b>
          </Link>
        </p>
      </div>
    </nav>
  );
};

export default Topbar;
