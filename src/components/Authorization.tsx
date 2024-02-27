"use client";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import React from "react";
import { useAppDispatch } from "@/redux/store";
import { setAuthState } from "@/redux/slice/authSlice";

type EmailType = {
  value: string;
  verified: boolean;
};

export type UserData = {
  id: number;
  email: EmailType;
  name: string;
  photo: string;
};

const Authorization = ({ children, jwtToken }: { children: React.ReactNode; jwtToken: string | undefined }) => {
  const dispatch = useAppDispatch();

  console.log("Auth", jwtToken);

  if (jwtToken) {
    const decoded: UserData = jwtDecode(jwtToken);
    const {
      id,
      name,
      email: { value },
      photo,
    } = decoded;
    const userData = {
      id,
      name,
      email: value,
      photo,
    };
    // TODO user data store in redux store
    dispatch(setAuthState(userData));
  } else {
    redirect("/");
  }
  return <>{children}</>;
};

export default Authorization;
