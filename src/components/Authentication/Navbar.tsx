const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center px-6 bg-[#0B0B0B] min-h-[100px] md:min-h-[138px]">
      <div className="flex justify-between items-center w-full max-w-7xl lg:px-14 py-7">
        <img
          src="./Authentication/logo.png"
          className="max-w-11 2xl:max-w-16 min-h-14 2xl:min-h-20"
          alt=""
        />
        <button className="bg-[#7A6EFF] px-10 py-3 rounded-md font-semibold text-white">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
