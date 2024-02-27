"use client";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";

const School = () => {
  const { authState, userData } = useAppSelector((state) => state.auth);
  console.log("school: ", authState, userData);
  return (
    <div>
      <h1>School Page</h1>
      <Link href={"/"}>Home</Link>
      <br />
      <Link href={"/user"}>User</Link>
    </div>
  );
};

export default School;
