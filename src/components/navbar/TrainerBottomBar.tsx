"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkType {
  url: string;
  icon: string;
  title: string;
}

const TrainerBottomBar = () => {
  const trainerNavList: NavLinkType[] = [
    {
      url: "/dashboard",
      icon: "/icons/dashboard.svg",
      title: "Dashboard",
    },
    {
      url: "/dashboard/schedule",
      icon: "/icons/trainer_schedule.svg",
      title: "Schedule",
    },
    {
      url: "/dashboard/trainer-expense",
      icon: "/icons/expense.svg",
      title: "Expense",
    },
    {
      url: "/dashboard/salary",
      icon: "/icons/wallet.svg",
      title: "Salary",
    },
  ];
  return (
    <nav className="bottomBarWrapper">
      <div className="bottomBar">
        {trainerNavList.map((link) => (
          <NavLink key={link.title} linkDetail={link} />
        ))}
      </div>
    </nav>
  );
};

const NavLink = ({ linkDetail }: { linkDetail: NavLinkType }) => {
  const url = usePathname();
  return (
    <Link href={linkDetail.url}>
      <div>
        <Image
          src={linkDetail.icon}
          alt={linkDetail.title}
          width={18}
          height={18}
          className={url == linkDetail.url ? "navIconActive" : ""}
        />
        <span>{linkDetail.title}</span>
      </div>
    </Link>
  );
};

export default TrainerBottomBar;
