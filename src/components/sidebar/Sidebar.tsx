import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsLightMode(!isLightMode);

  const menuItems = [
    { icon: "ri-home-line", label: "Dashboard" },
    { icon: "ri-bank-card-line", label: "Transactions" },
    { icon: "ri-sim-card-line", label: "Cards" },
    { icon: "ri-truck-line", label: "Shipments" },
    { icon: "ri-user-3-line", label: "Accounts" },
    { icon: "ri-shield-check-line", label: "Compliance" },
    { icon: "ri-customer-service-2-line", label: "Support" },
    { icon: "ri-settings-3-line", label: "Settings" },
  ];

  return (
    <div
      className={`h-screen bg-[#1F1F1F] text-white transition-all duration-300
          ${isOpen ? "w-64" : "w-20"} flex flex-col justify-between`}
    >
      {/* Top: Logo + Toggle */}
      <div>
        <div className="flex items-center justify-center p-4">
          {isOpen && (
            <img
              onClick={toggleSidebar}
              src="./Authentication/logo.png"
              className="text-xl font-bold max-w-16 min-h-16"
              alt=""
            />
          )}
          {!isOpen && (
            <img
              onClick={toggleSidebar}
              src="./sidebar/side-bar-button.png"
              className="text-xl max-w-14 min-h-14"
            />
          )}
        </div>

        <hr className="w-full bg-[#3C3B3B] my-3 mb-7" />

        {/* Menu Items */}
        <div className="flex flex-col px-3 justify-center">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4 p-3 hover:bg-[#2F2F2F] rounded-md cursor-pointer ${
                idx === 0 ? "bg-[#7A6EFF]" : ""
              }`}
            >
              <i
                className={`${item.icon} text-xl ${
                  idx === 0 ? "text-white" : "text-gray-300"
                }`}
              ></i>
              {isOpen && (
                <span
                  className={`text-sm font-medium ${
                    idx === 0 ? "text-white" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Theme & Logout */}
      <div className="px-2 pb-4 space-y-4">
        {/* Light Mode Toggle */}
        <div className="flex items-center justify-between px-3 py-2 rounded-lg">
          <div className="flex items-center gap-3">
            <i className="ri-moon-line text-white text-xl"></i>
            {isOpen && (
              <span className="text-sm text-white font-medium">Light Mode</span>
            )}
          </div>
          {isOpen && (
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isLightMode}
                onChange={toggleTheme}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-gray-600 rounded-full peer peer-checked:bg-violet-500"></div>
              <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></div>
            </label>
          )}
        </div>

        {/* Logout */}
        <div className="flex items-center gap-4 px-3 py-2 bg-[#313131] rounded-lg cursor-pointer">
          <i className="ri-logout-box-r-line text-xl text-red-500"></i>
          {isOpen && (
            <span className="text-sm font-medium text-red-500 ">Logout</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
