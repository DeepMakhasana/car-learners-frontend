import Topbar from "@/components/navbar/Topbar";
import UserBottomBar from "@/components/navbar/UserBottomBar";
import { ReactNode } from "react";
import { cookies } from "next/headers";
import OwnerBottomBar from "@/components/navbar/OwnerBottomBar";

const layout = ({ children }: { children: ReactNode }) => {
  const cookieStore = cookies();
  const userType = cookieStore.get("userType")?.value;

  return (
    <>
      <Topbar />
      {children}
      {userType == "user" ? <UserBottomBar /> : <OwnerBottomBar />}
    </>
  );
};

export default layout;
