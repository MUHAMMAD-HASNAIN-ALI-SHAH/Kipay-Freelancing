const Hero = () => {
  return (
    <div className="relative w-full border-b border-dashed border-[#454343] h-[429px] flex justify-center items-center">
      <div className="relative w-[1200px] h-full border-l border-r border-dashed border-[#454343] flex justify-center items-center">
        {/* Content */}
        <div className="w-[1100px] mx-auto h-[353px] flex flex-col items-center justify-center gap-8">
          <div className="w-[321px] h-[45px] border border-[#3C3C3C] flex justify-center items-center gap-4 rounded-md py-3 px-3">
            <div className="w-[24.55px] h-[20px] bg-[#404040] flex items-center justify-center rounded-md">
              <div className="w-[15.45px] h-[11.82px] bg-[#7A6EFF] rounded-md"></div>
            </div>
            <div >
              <p className="text-[#DBD8D8]">Join our 10,000+ happy users</p>
            </div>
          </div>

          {/* Heading + Text */}
          <div className="text-center max-w-[537px]">
            <h1 className="text-[64px] leading-[64px] font-bold mb-4 w-full">
              Smarter Financial Freedom
            </h1>
            <p className="text-lg leading-[28px] text-[#DEDEDE] w-full">
              Send, receive, invest, and track your finances—all in one secure
              platform built for global users.
            </p>
          </div>

          {/* Button with gradient border */}
          <div className="p-[2px] rounded-3xl [background-image:linear-gradient(to_left,#6C46C2_1%,#FFFFFFB3_100%)] inline-block">
            <button className="w-[292px] h-[64px] font-bold py-3 px-6 text-white rounded-3xl [background-image:linear-gradient(to_right,#7A6EFF,#431D79)]">
              Get Started
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Hero;
