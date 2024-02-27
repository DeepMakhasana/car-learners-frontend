"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";

const User = () => {
  const { authState, userData } = useAppSelector((state) => state.auth);
  console.log("User: ", authState, userData);
  return (
    <div>
      <h2>Login User Detail:</h2>
      <p>id: {userData.id}</p>
      <p>name: {userData.name}</p>
      <p>email: {userData.email}</p>
      <p>photo: {userData.photo}</p>
    </div>
  );
};

export default User;
