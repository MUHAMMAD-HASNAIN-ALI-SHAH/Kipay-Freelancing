const IndividualChooseCurrency = ({
  handleProgressChange,
}: {
  handleProgressChange: () => void;
}) => {
  return (
    <div className="w-[90%] sm:w-[75%] md:w-[60%] mx-auto py-10 md:py-16">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
        Choose Currency
      </h2>
      <p className="text-gray-300 text-sm md:text-md text-center mb-4 md:mb-10">
        Select your preferred currency
      </p>

      <div className="space-y-2 md:space-y-3 mb-10">
        <div className="flex w-full">
          <ul className="flex justify-between w-full">
            <li className="py-3 px-6 rounded-full border border-[#7A6EFF] text-[#7A6EFF]">
              USD
            </li>
            <li className="py-3 px-6 rounded-full border border-[#7A6EFF] text-[#7A6EFF]">
              EUR
            </li>
            <li className="py-3 px-6 rounded-full border border-[#4B4A4A] text-white">
              CNY
            </li>
            <li className="py-3 px-6 rounded-full border border-[#4B4A4A] text-white">
              GBP
            </li>
          </ul>
        </div>
      </div>

      {/* Sign In Button */}
      <button
        onClick={handleProgressChange}
        className="w-full py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md font-semibold transition"
      >
        Complete Verification
      </button>
    </div>
  );
};

export default IndividualChooseCurrency;
