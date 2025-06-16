const CorporateUserInfo = ({
  handleProgressChange,
}: {
  handleProgressChange: () => void;
}) => {
  return (
    <div className="w-[90%] sm:w-[75%] md:w-[60%] mx-auto py-10 md:py-16">
      <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-2">
        Lets Get To Know You
      </h2>
      <p className="text-gray-300 text-sm md:text-md text-center mb-4 md:mb-10">
        Share some basic details to help us <br /> create your profile
      </p>

      <div className="space-y-2 md:space-y-3 mb-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 bg-[#313131] text-[#A0A3BD] placeholder-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-[#313131]"
        />

        {/* Nationality Dropdown */}
        <div className="pr-3 bg-[#313131]">
          <select
            className="w-full px-4 py-3 bg-[#313131] text-[#A0A3BD] placeholder-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-[#313131]"
            defaultValue=""
          >
            <option value="" disabled>
              Select Nationality
            </option>
            <option value="pakistan">Pakistan</option>
            <option value="india">India</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Gender Dropdown */}
        <div className="pr-3 bg-[#313131]">
          <select
            className="w-full px-4 py-3 bg-[#313131] text-[#A0A3BD] placeholder-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-[#313131]"
            defaultValue=""
          >
            <option className="bg-[#313131]" value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Date Input */}
        <input
          type="date"
          className="w-full px-4 py-3 bg-[#313131] text-[#A0A3BD] placeholder-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-[#313131]"
        />
      </div>

      {/* Sign In Button */}
      <button
        onClick={handleProgressChange}
        className="w-full py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md font-semibold transition"
      >
        Next
      </button>
    </div>
  );
};

export default CorporateUserInfo;
