import { useNavigate } from "react-router-dom";

const Navbar = ({ buttonText }: { buttonText: string }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (buttonText === "Signup") {
      navigate("/signup");
    } else if (buttonText === "Signin") {
      navigate("/signin");
    }
  };

  return (
    <div className="w-full flex justify-center items-center px-6 bg-[#0B0B0B] min-h-[70px] md:min-h-[100px]">
      <div className="flex justify-between items-center w-full max-w-7xl lg:px-14 py-3">
        <img
          onClick={() => navigate("/")}
          src="./Authentication/logo.png"
          className="max-w-11 2xl:max-w-16 min-h-14 2xl:min-h-20 cursor-pointer"
          alt=""
        />
        <button
          onClick={handleNavigation}
          className="bg-[#7A6EFF] px-10 py-3 rounded-md font-semibold text-white"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
