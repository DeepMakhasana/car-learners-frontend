import { cookies } from "next/headers";
import Authorization from "@/components/Authorization";
import School from "@/components/school/School";

const schoolPage = () => {
  const cookie = cookies();
  const jwtToken = cookie.get("auth")?.value;
  return (
    <Authorization jwtToken={jwtToken}>
      <School />
    </Authorization>
  );
};

export default schoolPage;
