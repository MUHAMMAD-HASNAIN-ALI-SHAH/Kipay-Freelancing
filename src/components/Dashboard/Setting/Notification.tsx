import { useState } from "react";

const Notification = () => {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [alertEnabled, setAlertEnabled] = useState(false);

  return (
    <div className="w-full flex flex-col gap-6 py-10">
      {/* Push Notification */}
      <div className="w-full flex items-center justify-between border border-[#313131] rounded-md px-4 py-3">
        <h1 className="text-white font-medium">Push Notification</h1>
        <button
          onClick={() => setPushEnabled(!pushEnabled)}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
            pushEnabled ? "bg-[#7A6EFF]" : "bg-gray-500"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
              pushEnabled ? "translate-x-6" : ""
            }`}
          />
        </button>
      </div>

      {/* Alert for Transfer */}
      <div className="w-full flex items-center justify-between border border-[#313131] rounded-md px-4 py-3">
        <h1 className="text-white font-medium">Alert for Transfer</h1>
        <button
          onClick={() => setAlertEnabled(!alertEnabled)}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
            alertEnabled ? "bg-[#7A6EFF]" : "bg-gray-500"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
              alertEnabled ? "translate-x-6" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Notification;
