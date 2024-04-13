import Image from "next/image";
import styles from "./setting.module.css";
import Link from "next/link";

interface SettingOptionType {
  icon: string;
  title: string;
  description: string;
  href: string;
}

const setting = () => {
  const settingOptions: SettingOptionType[] = [
    {
      icon: "/icons/profile.svg",
      title: "Profile",
      description: "Name, email, phone, change password",
      href: "/dashboard/setting/profile",
    },
    {
      icon: "/icons/school-blue.svg",
      title: "Driving school",
      description: "School name, email, contact, address",
      href: "/dashboard/setting/school-detail",
    },
    {
      icon: "/icons/schedule-blue.svg",
      title: "Time slot",
      description: "Set and update learning time slot",
      href: "/dashboard/setting/time-slot",
    },
    {
      icon: "/icons/trainer.svg",
      title: "Trainer",
      description: "Create and update trainer details",
      href: "/dashboard/setting/trainer",
    },
    {
      icon: "/icons/car-blue.svg",
      title: "vehicle",
      description: "Add and allot vehicle to trainer",
      href: "/dashboard/setting/vehicle",
    },
  ];

  return (
    <div className={styles.settingContainer}>
      <h1>Setting</h1>
      <div className={styles.settingOptionContainer}>
        {settingOptions.map((option) => (
          <SettingOption key={option.title} settingOption={option} />
        ))}
        <div className={styles.logout}>
          <p>LogOut</p>
        </div>
      </div>
    </div>
  );
};

const SettingOption = ({ settingOption }: { settingOption: SettingOptionType }) => {
  return (
    <Link href={settingOption.href} className={styles.settingOption}>
      <div>
        <Image src={settingOption.icon} alt="profile" width={20} height={20} />
      </div>
      <div>
        <p>{settingOption.title}</p>
        <span>{settingOption.description}</span>
      </div>
    </Link>
  );
};

export default setting;
