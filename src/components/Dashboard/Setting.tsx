import { useState } from "react";
import EditProfile from "./Setting/EditProfile";
import ShipmentTracker from "./Setting/ShipmentTracker";
import AccountInformation from "./Setting/AccountInformation";
import Language from "./Setting/Language";
import Security from "./Setting/Security";
import Notification from "./Setting/Notification";

const list = [
  {
    icon: "ri-profile-fill",
    title: "Edit Profile",
  },
  {
    icon: "ri-ship-fill",
    title: "Shipment Tracker",
  },
  {
    icon: "ri-account-box-2-fill",
    title: "Account Information",
  },
  {
    icon: "ri-global-line",
    title: "Language",
  },
  {
    icon: "ri-lock-2-fill",
    title: "Security",
  },
  {
    icon: "ri-notification-3-fill",
    title: "Notification",
  },
];

const Setting = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  return (
    <div className="w-full pt-5 px-4 min-h-[80vh] bg-[#262626] flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-[35%] flex flex-col gap-2 border-b lg:border-b-0 md:border-r border-[#313131]">
        {list.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(item.title)}
            className={`flex items-center gap-3 p-3 cursor-pointer ${
              activeTab === item.title
                ? "border-l-[5px] md:border-l-0 md:border-r-[8px] border-[#FFFFFF] bg-[#2A2A2A]"
                : ""
            }`}
          >
            <i
              className={`${item.icon} text-white p-3 py-2 rounded-full ${
                activeTab === item.title ? "bg-[#7A6EFF]" : "bg-[#2A2A2A]"
              }`}
            />
            <span className="text-white text-lg font-semibold">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-[65%] lg:pl-6">
        {activeTab === "Edit Profile" && <EditProfile />}
        {activeTab === "Shipment Tracker" && <ShipmentTracker />}
        {activeTab === "Account Information" && <AccountInformation />}
        {activeTab === "Language" && <Language />}
        {activeTab === "Security" && <Security />}
        {activeTab === "Notification" && <Notification />}
      </div>
    </div>
  );
};

export default Setting;
