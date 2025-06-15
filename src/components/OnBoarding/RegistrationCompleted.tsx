const RegistrationCompleted = ({
  handleProgressChange,
}: {
  handleProgressChange: () => void;
}) => {
  return (
    <div className="w-[90%] sm:w-[75%] md:w-[60%] mx-auto py-10 md:py-10">
      <img
        src="./OnBoarding/reg-completed.png"
        className="w-full max-auto py-4"
        alt=""
      />
      <h2 className="text-white text-xl md:text-2xl font-bold text-center mb-2">
        Registration completed
      </h2>
      <p className="text-gray-300 text-sm md:text-sm text-center mb-4 md:mb-10">
        While we are verifying your document, <br /> you can explore more of our
        features
      </p>

      {/* Sign In Button */}
      <button
        onClick={handleProgressChange}
        className="w-full py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md font-semibold transition"
      >
        Okay Got it!
      </button>
    </div>
  );
};

export default RegistrationCompleted;
