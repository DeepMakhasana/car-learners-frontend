import BackButtonTopBar from "@/components/navbar/BackButtonTopBar";
import Topbar from "@/components/navbar/Topbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <BackButtonTopBar />
      {children}
    </>
  );
};

export default layout;
