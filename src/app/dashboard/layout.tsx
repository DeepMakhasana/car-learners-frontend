import Topbar from "@/components/navbar/Topbar";
import UserBottomBar from "@/components/navbar/UserBottomBar";
import { ReactNode } from "react";
import { cookies } from "next/headers";
import OwnerBottomBar from "@/components/navbar/OwnerBottomBar";
import BackButtonTopBar from "@/components/navbar/BackButtonTopBar";
import TrainerBottomBar from "@/components/navbar/TrainerBottomBar";

const layout = ({ children }: { children: ReactNode }) => {
  const cookieStore = cookies();
  const userType = cookieStore.get("userType")?.value || "trainer";

  return (
    <>
      <BackButtonTopBar />
      <section>{children}</section>
      {userType == "user" && <UserBottomBar />}
      {userType == "owner" && <OwnerBottomBar />}
      {userType == "trainer" && <TrainerBottomBar />}
    </>
  );
};

export default layout;
