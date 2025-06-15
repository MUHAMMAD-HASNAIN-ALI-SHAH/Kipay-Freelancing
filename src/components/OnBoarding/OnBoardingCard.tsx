import ChooseCurrency from "./ChooseCurrency";
import CompleteVerification from "./CompleteVerification";
import IdentityVerification from "./IdentityVerification";
import IndividualCorporate from "./IndividualCorporate";
import ORCode from "./ORCode";
import OTPVerification from "./OTPVerification";
import RegistrationCompleted from "./RegistrationCompleted";
import StayConnected from "./StayConnected";
import UserInfo from "./UserInfo";
import VerificationCompleted from "./VerificationCompleted";

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
          {index === 1 && (
            <IndividualCorporate handleProgressChange={handleProgressChange} />
          )}
          {index === 2 && (
            <UserInfo handleProgressChange={handleProgressChange} />
          )}
          {index === 3 && (
            <StayConnected handleProgressChange={handleProgressChange} />
          )}
          {index === 4 && (
            <OTPVerification handleProgressChange={handleProgressChange} />
          )}
          {index === 5 && (
            <IdentityVerification handleProgressChange={handleProgressChange} />
          )}
          {index === 6 && (
            <ORCode handleProgressChange={handleProgressChange} />
          )}
          {index === 7 && (
            <CompleteVerification handleProgressChange={handleProgressChange} />
          )}
          {index === 8 && (
            <VerificationCompleted handleProgressChange={handleProgressChange} />
          )}
          {index === 9 && (
            <ChooseCurrency handleProgressChange={handleProgressChange} />
          )}
          {index === 10 && (
            <RegistrationCompleted handleProgressChange={handleProgressChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default OnBoardingCard;
