import { RiSearchLine } from "react-icons/ri";

const DashboardNavbar = () => {
  return (
    <div className="flex justify-between items-center h-20 mb-3">
      <h2 className="text-2xl font-semibold">Welcome Jacob</h2>
      <div className="flex items-center gap-3">
        <div className="relative">
          <RiSearchLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Search transactions"
            className="pl-8 pr-12 py-1.5 h-12 rounded-md bg-[#1C1C1E] text-sm text-white outline-[#4A4A4A] focus:outline-none"
          />
        </div>
        <div className="w-12 h-12 border bg-[#262626] border-[#4A4A4A] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#313131] transition">
          <i className="ri-notification-2-line pt-1"></i>
        </div>

        <div className="h-12 p-2 border rounded-md bg-[#262626] border-[#4A4A4A] flex items-center justify-center gap-1">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="rounded-full w-10 h-10 border border-[#7A6EFF]"
          />
          <h1>Hi Jacob</h1>
          <i className="ri-arrow-down-s-line pt-1"></i>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
