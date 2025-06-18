import { useState } from "react";

const Security = () => {
  const [activeTab, setActiveTab] = useState("password");

  return (
    <div className="w-full mx-auto flex flex-col gap-6 py-10">
      {/* Tabs */}
      <div className="flex flex-wrap sm:flex-nowrap gap-3 mb-4">
        <button
          onClick={() => setActiveTab("password")}
          className={`flex-1 sm:flex-none px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] ${
            activeTab === "password" ? "bg-white text-[#4A4A4A]" : "text-white"
          }`}
        >
          Change password
        </button>
        <button
          onClick={() => setActiveTab("2fa")}
          className={`flex-1 sm:flex-none px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] ${
            activeTab === "2fa" ? "bg-white text-[#4A4A4A]" : "text-white"
          }`}
        >
          Two-factor authentication
        </button>
      </div>

      {/* Change Password Tab */}
      {activeTab === "password" && (
        <>
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm text-white font-semibold">
              Old Password
            </label>
            <input
              type="text"
              placeholder="Enter old password"
              className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-[#8E8E93] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#313131]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-white font-semibold">
              New Password
            </label>
            <input
              type="text"
              placeholder="Enter new password"
              className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-[#8E8E93] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#313131]"
            />
          </div>

          <button className="self-start mt-1 px-14 py-2 rounded-md bg-[#7A6EFF] text-white font-semibold hover:bg-[#6756e8] transition">
            Save
          </button>
        </>
      )}

      {/* Two-Factor Authentication Tab */}
      {activeTab === "2fa" && (
        <div className="w-full flex flex-col gap-5 items-center mt-0">
          <label htmlFor="2fa" className="w-full cursor-pointer">
            <div className="w-full flex items-center gap-2 border border-[#313131] py-3 px-5 rounded-md transition-colors">
              <div className="flex justify-between items-center w-full">
                <h1>Enable Two-factor authentication</h1>
                <div className="relative">
                  <input
                    type="radio"
                    name="twoFactor"
                    id="2fa"
                    className="accent-[#7A6EFF] bg-none"
                  />
                </div>
              </div>
            </div>
          </label>
        </div>
      )}
    </div>
  );
};

export default Security;
