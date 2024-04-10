"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const OwnerBottomBar = () => {
  const url = usePathname();
  return (
    <nav className="bottomBarWrapper">
      <div className="bottomBar">
        <Link href={"/dashboard"}>
          <div>
            <Image
              src={"/icons/dashboard.svg"}
              alt="dashboard"
              width={18}
              height={18}
              className={url == "/dashboard" ? "navIconActive" : ""}
            />
            <span>Dashboard</span>
          </div>
        </Link>
        <Link href={"/dashboard/curriculum"}>
          <div>
            <Image
              src={"/icons/curriculum.svg"}
              alt="curriculum"
              width={18}
              height={18}
              className={url.includes("/dashboard/curriculum") ? "navIconActive" : ""}
            />
            <span>Curriculum</span>
          </div>
        </Link>
        <Link href={"/dashboard/account"}>
          <div>
            <Image
              src={"/icons/account.svg"}
              alt="account"
              width={18}
              height={18}
              className={url == "/dashboard/account" ? "navIconActive" : ""}
            />
            <span>Account</span>
          </div>
        </Link>
        <Link href={"/dashboard/expense"}>
          <div>
            <Image
              src={"/icons/expense.svg"}
              alt="expense"
              width={18}
              height={18}
              className={url == "/dashboard/expense" ? "navIconActive" : ""}
            />
            <span>Expense</span>
          </div>
        </Link>
        <Link href={"/dashboard/setting"}>
          <div>
            <Image
              src={"/icons/setting.svg"}
              alt="setting"
              width={18}
              height={18}
              className={url == "/dashboard/setting" ? "navIconActive" : ""}
            />
            <span>Settings</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default OwnerBottomBar;
