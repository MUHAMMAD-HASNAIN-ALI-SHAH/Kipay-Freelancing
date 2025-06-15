const StayConnected = ({
  handleProgressChange,
}: {
  handleProgressChange: () => void;
}) => {
  return (
    <div className="w-[90%] sm:w-[75%] md:w-[60%] mx-auto py-10 md:py-16">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
        Stay Connected
      </h2>
      <p className="text-gray-300 text-sm md:text-md text-center mb-4 md:mb-10">
        Add your contact details so we can <br /> reach you when necessary
      </p>

      <div className="space-y-2 md:space-y-3 mb-4">
        <input
          type="text"
          placeholder="Email Address"
          className="w-full px-4 py-3 bg-[#313131] text-[#A0A3BD] placeholder-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-[#313131]"
        />

        {/* Nationality Dropdown */}
        <div className="pr-3 bg-[#313131] flex gap-2 justify-between px-3">
          <select
            className="w-[25%] py-3 bg-[#313131] text-[#A0A3BD] placeholder-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-[#313131]"
            defaultValue="+92"
          >
            <option value="+92" disabled>
              +92
            </option>
            <option value="+1">+1</option>
            <option value="+2">+2</option>
            <option value="+100">+100</option>
          </select>
          <input
            type="text"
            className="w-full px-4 py-3 bg-[#313131] text-[#A0A3BD] placeholder-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-[#313131]"
          />
        </div>

        {/* Date Input */}
        <textarea
          placeholder="Residence Address"
          className="resize-none w-full px-4 py-3 bg-[#313131] text-[#A0A3BD] placeholder-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-[#313131]"
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

export default StayConnected;
