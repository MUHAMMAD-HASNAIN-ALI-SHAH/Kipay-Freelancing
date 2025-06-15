import { useNavigate } from "react-router-dom";

type OnBoardingNavbarProps = {
  handleReverseProgressChange?: () => void;
};

const OnBoardingNavbar = ({
  handleReverseProgressChange = () => {},
}: OnBoardingNavbarProps) => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center items-center px-6 bg-[#2A2A2A] min-h-[70px] md:min-h-[100px]">
      <div className="relative flex justify-center items-center w-full max-w-7xl lg:px-14 py-3">
        <img
          onClick={() => navigate("/")}
          src="./Authentication/logo.png"
          className="max-w-11 2xl:max-w-16 min-h-14 2xl:min-h-20 cursor-pointer"
          alt=""
        />
        <div onClick={handleReverseProgressChange} className="absolute left-0 flex gap-2 cursor-pointer">
          <i className="ri-arrow-left-line text-white"></i>
          <span className="text-white font-semibold">Back</span>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingNavbar;
