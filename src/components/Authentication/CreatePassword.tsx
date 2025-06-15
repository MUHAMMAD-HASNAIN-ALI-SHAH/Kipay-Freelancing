import { useState } from "react";

const CreatePassword = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-100px)] items-center overflow-x-hidden px-4">
      <div className="w-full min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-138px)] flex items-center justify-center">
        <div className="bg-[#6B6B6B] bg-opacity-60 backdrop-blur-lg p-8 py-15 md:py-16 rounded-2xl max-w-2xl w-full shadow-xl">
          <div className="w-[90%] sm:w-[75%] md:w-[60%] mx-auto">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
              Create Password
            </h2>
            <p className="text-gray-300 text-sm md:text-md text-center mb-6">
              Create a new password for your account
            </p>

            {/* Password Input */}
            <div className="mb-6 relative">
              <i className="ri-lock-fill absolute left-5 top-1/2 -translate-y-1/2 text-[#702DFF]" />
              <input
                type={`${isEyeOpen ? "text" : "password"}`}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-2 bg-white text-white rounded-lg border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <i
                onClick={() => setIsEyeOpen(!isEyeOpen)}
                className={`${
                  isEyeOpen ? "ri-eye-off-fill" : "ri-eye-fill"
                } absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-black`}
              />
            </div>

            {/* Password Input */}
            <div className="mb-6 relative">
              <i className="ri-lock-fill absolute left-5 top-1/2 -translate-y-1/2 text-[#702DFF]" />
              <input
                type={`${isEyeOpen ? "text" : "password"}`}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-2 bg-white text-white rounded-lg border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <i
                onClick={() => setIsEyeOpen(!isEyeOpen)}
                className={`${
                  isEyeOpen ? "ri-eye-off-fill" : "ri-eye-fill"
                } absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-black`}
              />
            </div>

            {/* Sign In Button */}
            <button className="w-full py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold transition">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
