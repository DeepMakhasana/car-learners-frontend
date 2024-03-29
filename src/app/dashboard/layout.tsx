import Topbar from "@/components/navbar/Topbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
};

export default layout;
