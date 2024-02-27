import User from "@/components/user/User";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>User page</h1>
      <User />
      <Link href={"/school"}>School</Link>
      <br />
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default page;
