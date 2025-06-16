const CorporateCompleteVerification = ({
  handleProgressChange,
}: {
  handleProgressChange: () => void;
}) => {
  return (
    <div className="w-[100%] sm:w-[100%] md:w-[100%] px-5 mx-auto py-10 md:py-16 flex flex-col items-center justify-center">
      <h2 className="text-white text-xl md:text-2xl font-bold text-center mb-2">
        Complete the Verification
      </h2>
      <p className="text-gray-300 text-xs md:text-sm text-center mb-4 md:mb-10">
        Complete the verification step on your <br /> phone and come back when you are <br /> done
      </p>

      <div className="space-y-2 md:space-y-3 mb-4 w-[90%] md:w-full">
        <button className="flex items-center justify-center gap-5 w-full py-3 px-4 bg-none bg-[#313131] text-white border-none rounded-lg">
          <span className="font-semibold text-sm md:text-xl">Begin the process on your phone</span>
          <div className="relative">
            <img src="./OnBoarding/phone.png" alt="" />
            <img className="absolute top-1/2 bottom-1/2 -translate-y-1/2 translate-x-1/2 rounded-lg" src="./OnBoarding/card.png" alt="" />
            <img className="absolute top-1 left-1/2 -translate-x-1/2 rounded-lg" src="./OnBoarding/circle.png" alt="" />
          </div>
        </button>
      </div>

      {/* Sign In Button */}
      <button
        onClick={handleProgressChange}
        className="w-[60%] py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md font-semibold transition"
      >
        Proceed
      </button>
    </div>
  )
}

export default CorporateCompleteVerification
