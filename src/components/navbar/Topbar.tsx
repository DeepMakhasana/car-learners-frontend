import Link from "next/link";
import styles from "./navbar.module.css";

const Topbar = ({ type }: { type?: string }) => {
  return (
    <nav className={styles.topbarWrapper}>
      <div>
        <Link href={"/location"}>
          <p> {type == "back" ? " back Button" : "Location"} </p>
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
