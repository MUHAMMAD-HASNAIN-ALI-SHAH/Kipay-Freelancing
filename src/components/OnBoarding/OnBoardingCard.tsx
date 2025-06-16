import CorporateAuthorizeRepresentative from "./Corporate/CorporateAuthorizeRepresentative";
import CorporateCompanyInformation from "./Corporate/CorporateCompanyInformation";
import CorporateCompleteVerification from "./Corporate/CorporateCompleteVerification";
import CorporateIdentityVerification from "./Corporate/CorporateIdentityVerification";
import CorporateORCode from "./Corporate/CorporateORCode";
import CorporateOTPVerification from "./Corporate/CorporateOTPVerification";
import CorporateStayConnected from "./Corporate/CorporateStayConnected";
import CorporateUserInfo from "./Corporate/CorporateUserInfo";
import CorporateVerificationCompleted from "./Corporate/CorporateVerificationCompleted";
import IndividualChooseCurrency from "./Individual/IndividualChooseCurrency";
import IndividualCompleteVerification from "./Individual/IndividualCompleteVerification";
import IndividualORCode from "./Individual/IndividualORCode";
import IndividualOTPVerification from "./Individual/IndividualOTPVerification";
import IndividualRegistrationCompleted from "./Individual/IndividualRegistrationCompleted";
import IndividualStayConnected from "./Individual/IndividualStayConnected";
import IndividualUserInfo from "./Individual/IndividualUserInfo";
import IndividualVerificationCompleted from "./Individual/IndividualVerificationCompleted";
import IndividualCorporate from "./IndividualCorporate";

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
          {localStorage.getItem("type") === "individual" && index === 2 && (
            <IndividualUserInfo handleProgressChange={handleProgressChange} />
          )}
          {localStorage.getItem("type") === "individual" && index === 3 && (
            <IndividualStayConnected
              handleProgressChange={handleProgressChange}
            />
          )}
          {localStorage.getItem("type") === "individual" && index === 4 && (
            <IndividualOTPVerification
              handleProgressChange={handleProgressChange}
            />
          )}
          {localStorage.getItem("type") === "individual" && index === 5 && (
            <IndividualOTPVerification
              handleProgressChange={handleProgressChange}
            />
          )}
          {localStorage.getItem("type") === "individual" && index === 6 && (
            <IndividualORCode handleProgressChange={handleProgressChange} />
          )}
          {localStorage.getItem("type") === "individual" && index === 7 && (
            <IndividualCompleteVerification
              handleProgressChange={handleProgressChange}
            />
          )}
          {localStorage.getItem("type") === "individual" && index === 8 && (
            <IndividualVerificationCompleted
              handleProgressChange={handleProgressChange}
            />
          )}
          {localStorage.getItem("type") === "individual" && index === 9 && (
            <IndividualChooseCurrency
              handleProgressChange={handleProgressChange}
            />
          )}
          {localStorage.getItem("type") === "individual" && index === 10 && (
            <IndividualRegistrationCompleted
              handleProgressChange={handleProgressChange}
            />
          )}
          {localStorage.getItem("type") === "corporate" && index === 2 && (
            <CorporateUserInfo handleProgressChange={handleProgressChange} />
          )}
          {localStorage.getItem("type") === "corporate" && index === 3 && (
            <CorporateStayConnected
              handleProgressChange={handleProgressChange}
            />
          )}
          {localStorage.getItem("type") === "corporate" && index === 4 && (
            <CorporateOTPVerification
              handleProgressChange={handleProgressChange}
            />
          )}
          {localStorage.getItem("type") === "corporate" && index === 5 && (
            <CorporateIdentityVerification
              handleProgressChange={handleProgressChange}
            />
          )}
          {localStorage.getItem("type") === "corporate" && index === 6 && (
            <CorporateORCode handleProgressChange={handleProgressChange} />
          )}
          {localStorage.getItem("type") === "corporate" && index === 7 && (
            <CorporateCompleteVerification
              handleProgressChange={handleProgressChange}
            />
          )}
          {localStorage.getItem("type") === "corporate" && index === 8 && (
            <CorporateVerificationCompleted
              handleProgressChange={handleProgressChange}
            />
          )}
          {localStorage.getItem("type") === "corporate" && index === 9 && (
            <CorporateCompanyInformation
              handleProgressChange={handleProgressChange}
            />
          )}
          {localStorage.getItem("type") === "corporate" && index === 10 && (
            <CorporateAuthorizeRepresentative
              handleProgressChange={handleProgressChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OnBoardingCard;
