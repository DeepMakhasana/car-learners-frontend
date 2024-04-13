import React, { ReactNode } from "react";

const SubPageWrapper = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <div style={{ marginBottom: "6rem" }}>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {children}
    </div>
  );
};

export default SubPageWrapper;
