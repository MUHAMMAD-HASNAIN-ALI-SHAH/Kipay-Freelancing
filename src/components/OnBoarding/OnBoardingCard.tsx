const OnBoardingCard = ({
  progress,
  index,
  handleProgressChange,
}: {
  progress: number;
  index: number;
  handleProgressChange: () => void;
}) => {
  let size = 30;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-100px)] items-center overflow-x-hidden px-4">
      <div className="w-full min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-138px)] flex items-center justify-center">
        {/* Onboarding Card */}
        <div className="bg-[#2D2D2D] rounded-xl max-w-xl w-full shadow-xl">
          <div className="border-b border-[#4A4949] w-full flex items-center justify-center gap-3 py-5">
            <svg width={size} height={size} className="transform -rotate-90">
              {/* Background Circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#e5e7eb"
                strokeWidth={strokeWidth}
                fill="none"
              />
              {/* Progress Circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#6366f1"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            <h1 className="text-white">Step {index}</h1>
          </div>
          <div className="w-[90%] sm:w-[75%] md:w-[60%] mx-auto py-10 md:py-16">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
              Account type
            </h2>
            <p className="text-gray-300 text-sm md:text-md text-center mb-4 md:mb-10">
              What type of account are you creating?
            </p>

            <div className="space-y-2 md:space-y-3 mb-4">
              <button className="flex items-center justify-between w-full py-3 px-4 bg-none bg-[#313131] text-white border-none rounded-lg">
                <span className="font-semibold">Individual</span>
                <i className="ri-checkbox-fill text-[#7A6EFF]"></i>
              </button>
              <button className="flex items-center justify-between w-full py-3 px-4 bg-none bg-[#313131] text-white border-none rounded-lg">
                <span className="font-semibold">Corporate</span>
                <i className="ri-checkbox-fill text-[#7A6EFF]"></i>
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
        </div>
      </div>
    </div>
  );
};

export default OnBoardingCard;
