import { useState } from "react";
import OnBoardingCard from "../components/OnBoarding/OnBoardingCard";
import OnBoardingNavbar from "../components/OnBoarding/OnBoardingNavbar";

const OnboardingPage = () => {
  const [progress, setProgress] = useState(10);
  const [index, setIndex] = useState(1);

  const handleProgressChange = () => {
    if (progress >= 100) {
      return;
    }
    setProgress(progress + 10);
    setIndex(index + 1);
  };

  const handleReverseProgressChange = () => {
    if (progress <= 10) {
      return;
    }
    setProgress(progress - 10);
    setIndex(index - 1);
  };

  return (
    <div className="flex flex-col justify-center bg-[#262626]  min-h-screen items-center overflow-x-hidden overflow-y-hidden">
      <div className="w-full min-h-screen bg-cover bg-center">
        <div className="w-full h-full">
          <OnBoardingNavbar
            handleReverseProgressChange={handleReverseProgressChange}
          />
          <OnBoardingCard
            progress={progress}
            index={index}
            handleProgressChange={handleProgressChange}
          />
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
