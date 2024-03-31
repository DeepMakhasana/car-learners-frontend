import Image from "next/image";

const OwnerBottomBar = () => {
  return (
    <nav>
      <div>
        <Image src={"/icons/dashboard.svg"} alt="dashboard" width={18} height={18} />
        <span>Dashboard</span>
      </div>
      <div>
        <Image src={"/icons/curriculum.svg"} alt="curriculum" width={18} height={18} />
        <span>Curriculum</span>
      </div>
      <div>
        <Image src={"/icons/account.svg"} alt="account" width={18} height={18} />
        <span>Account</span>
      </div>
      <div>
        <Image src={"/icons/expense.svg"} alt="expense" width={18} height={18} />
        <span>Expense</span>
      </div>
      <div>
        <Image src={"/icons/setting.svg"} alt="setting" width={18} height={18} />
        <span>Settings</span>
      </div>
    </nav>
  );
};

export default OwnerBottomBar;
