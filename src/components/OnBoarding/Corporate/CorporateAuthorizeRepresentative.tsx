const CorporateAuthorizeRepresentative = ({
  handleProgressChange,
}: {
  handleProgressChange: () => void;
}) => {
  return (
    <div className="w-[90%] sm:w-[75%] md:w-[60%] mx-auto py-10 md:py-16">
      <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-2">
        Authorized Representative
      </h2>
      <p className="text-gray-300 text-sm md:text-md text-center mb-4 md:mb-10">
        This person will sign and manage the account <br /> n behalf o the
        company
      </p>

      <div className="space-y-2 md:space-y-3 mb-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 bg-[#313131] text-[#A0A3BD] placeholder-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-[#313131]"
        />
        <input
          type="text"
          placeholder="Contact Email Address"
          className="w-full px-4 py-3 bg-[#313131] text-[#A0A3BD] placeholder-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-[#313131]"
        />

        {/* Gender Dropdown */}
        <div className="pr-3 bg-[#313131]">
          <select
            className="w-full px-4 py-3 bg-[#313131] text-[#A0A3BD] placeholder-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-[#313131]"
            defaultValue=""
          >
            <option className="bg-[#313131]" value="" disabled>
              Role/Postion
            </option>
          </select>
        </div>

        <button className="flex items-center justify-between w-full py-3 px-4 bg-none bg-[#313131] text-white border border-none rounded-lg">
          <div className="flex items-center space-x-2">
            <i className="ri-id-card-line"></i>
            <span className="font-semibold">Register of shareholder</span>
          </div>
          <i className="ri-arrow-right-fill text-white"></i>
        </button>
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

export default CorporateAuthorizeRepresentative;
