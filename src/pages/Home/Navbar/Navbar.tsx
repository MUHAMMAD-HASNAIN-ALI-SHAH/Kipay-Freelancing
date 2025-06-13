const Navbar = () => {
  return (
    <div className="relative w-full border-b border-dashed border-[#454343] h-[160px] flex justify-center items-center">
      <div className="relative w-[1200px] border-l border-r border-dashed border-[#454343] h-full">
        <div className="absolute left-[-12.5px] bottom-[-12.5px] w-[25px] h-[25px] bg-[#313131] rounded-full flex items-center justify-center">
          <div className="w-[15px] h-[15px] bg-[#7A6EFF] rounded-full"></div>
        </div>
        <div className="absolute right-[-12.5px] bottom-[-12.5px] w-[25px] h-[25px] bg-[#313131] rounded-full flex items-center justify-center">
          <div className="w-[15px] h-[15px] bg-[#7A6EFF] rounded-full"></div>
        </div>

        <nav className="w-[1100px] flex justify-between items-center mx-auto h-full pt-5">
          <div>
            <img src="./logo-img.png" alt="" className="h-[56px] w-[152px]" />
          </div>
          <div className="">
            <div className="p-[2px] rounded-2xl [background-image:linear-gradient(to_left,#6C46C2_1%,#FFFFFFB3_100%)] inline-block">
              <button className="py-3 px-6 font-bold text-white rounded-2xl [background-image:linear-gradient(to_right,#7A6EFF,#431D79)]">
                Learn More
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
