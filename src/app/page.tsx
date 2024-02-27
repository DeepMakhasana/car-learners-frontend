import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1>Home Page</h1>
      <Link href={"/school"}>School</Link>
      <br />
      <Link href={"/user"}>User</Link>
    </section>
  );
}
