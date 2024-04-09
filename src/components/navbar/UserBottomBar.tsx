"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserBottomBar = () => {
  const url = usePathname();
  return (
    <nav className="bottomBarWrapper">
      <div className="bottomBar">
        <Link href={"/dashboard"}>
          <div>
            <Image
              src={"/icons/dashboard.svg"}
              alt="dashboard"
              width={28}
              height={28}
              className={url == "/dashboard" ? "navIconActive" : ""}
            />
            <span>Dashboard</span>
          </div>
        </Link>
        <Link href={"/dashboard/re-schedule"}>
          <div>
            <Image
              src={"/icons/re-schedule.svg"}
              alt="re-schedule"
              width={28}
              height={28}
              className={url == "/dashboard/re-schedule" ? "navIconActive" : ""}
            />
            <span>Re-schedule</span>
          </div>
        </Link>
        <Link href={"/dashboard/apply-license"}>
          <div>
            <Image
              src={"/icons/apply-license.svg"}
              alt="apply-license"
              width={28}
              height={28}
              className={url == "/dashboard/apply-license" ? "navIconActive" : ""}
            />
            <span>Apply license</span>
          </div>
        </Link>
        <Link href={"/dashboard/test-quiz"}>
          <div>
            <Image
              src={"/icons/test-quiz.svg"}
              alt="quiz"
              width={28}
              height={28}
              className={url == "/dashboard/test-quiz" ? "navIconActive" : ""}
            />
            <span>Test-Quiz</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default UserBottomBar;
