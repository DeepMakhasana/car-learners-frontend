import Topbar from "@/components/navbar/Topbar";
import UserBottomBar from "@/components/navbar/UserBottomBar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Topbar />
      {children}
      <UserBottomBar />
    </>
  );
};

export default layout;
