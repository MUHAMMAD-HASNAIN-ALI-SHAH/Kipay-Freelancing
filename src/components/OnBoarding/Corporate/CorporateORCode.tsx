const CorporateORCode = ({
  handleProgressChange,
}: {
  handleProgressChange: () => void;
}) => {
  return (
    <div className="w-[90%] sm:w-[75%] md:w-[60%] mx-auto py-10 md:py-16">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
        Scan QR Code
      </h2>
      <p className="text-gray-300 text-sm md:text-md text-center mb-4 md:mb-5">
        Scan the QR code below to connect <br /> with your smart phone
      </p>

      <div className="space-y-2 md:space-y-3 mb-4">
        <div className="bg-white rounded-lg p-4 flex items-center justify-center">
            <img src="./OnBoarding/or-code.png" alt="" />
        </div>
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

export default CorporateORCode;
