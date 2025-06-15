const ResetPassword = () => {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-100px)] items-center overflow-x-hidden px-4">
      <div className="w-full min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-138px)] flex items-center justify-center">
        <div className="bg-[#6B6B6B] bg-opacity-60 backdrop-blur-lg p-8 py-15 md:py-16 rounded-2xl max-w-2xl w-full shadow-xl">
          <div className="w-[90%] sm:w-[75%] md:w-[60%] mx-auto">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
              Reset Password
            </h2>
            <p className="text-gray-300 text-sm text-center mb-6">
              Enter your email below to receive a password reset email.
            </p>

            {/* Email Input */}
            <div className="mb-4 relative">
              <i className="ri-mail-fill absolute left-5 top-1/2 -translate-y-1/2 text-[#702DFF] fill-[#702DFF]" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full pl-10 pr-4 py-2 bg-white text-black rounded-lg border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            {/* Sign In Button */}
            <button className="w-full py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold transition">
              Send Reset Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
