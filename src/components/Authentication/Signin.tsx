import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-100px)] items-center overflow-x-hidden px-4">
      <div className="w-full min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-138px)] flex items-center justify-center">
        <div className="bg-[#6B6B6B] bg-opacity-60 backdrop-blur-lg p-8 py-15 md:py-16 rounded-2xl max-w-2xl w-full shadow-xl">
          <div className="w-[90%] sm:w-[75%] md:w-[60%] mx-auto">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
              Welcome back!
            </h2>
            <p className="text-gray-300 text-sm md:text-md text-center mb-6">
              Access and manage your account
            </p>

            {/* Social Buttons */}
            <div className="space-y-2 md:space-y-3 mb-4">
              <button className="flex items-center justify-center w-full py-3 px-4 bg-none text-white border border-white/35 rounded-lg hover:bg-[#333] transition">
                <img
                  src="./Authentication/google.png"
                  className="px-2"
                  alt=""
                />{" "}
                Continue with Google
              </button>
              <button className="flex items-center justify-center w-full py-3 px-4 bg-none text-white border border-white/35 rounded-lg hover:bg-[#333] transition">
                <i className="ri-apple-fill mr-2 text-lg"></i> Continue with
                Apple
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center mb-6">
              <div className="flex-grow h-px bg-gray-700" />
              <span className="text-gray-400 text-sm px-3">
                or sign in with
              </span>
              <div className="flex-grow h-px bg-gray-700" />
            </div>

            {/* Email Input */}
            <div className="mb-4 relative">
              <i className="ri-mail-fill absolute left-5 top-1/2 -translate-y-1/2 text-[#702DFF] fill-[#702DFF]" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full pl-10 pr-4 py-2 bg-white text-black rounded-lg border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6 relative">
              <i className="ri-lock-fill absolute left-5 top-1/2 -translate-y-1/2 text-[#702DFF]" />
              <input
                type={`${isEyeOpen ? "text" : "password"}`}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-2 bg-white text-black rounded-lg border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
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
              Sign in
            </button>

            <p
              onClick={() => navigate("/reset-password")}
              className="text-sm text-gray-400 text-center mt-4 hover:underline cursor-pointer"
            >
              Forgot password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
