const Home = () => {
  return (
    <section className="w-full relative bg-transparent overflow-hidden">
      {/* Top Glow */}
      <div className="absolute top-[-650px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#913ADE] blur-2xl opacity-5 rounded-full pointer-events-none" />
      {/* Navbar */}
      <div className="relative w-full px-4 border-b border-dashed border-[#454343] flex justify-center">
        <div className="w-full max-w-7xl px-4 border-l border-r border-dashed border-[#454343] relative">
          {/* Dots at Bottom Corners */}
          <div className="absolute left-[-12.5px] bottom-[-12.5px] w-[25px] h-[25px] bg-[#313131] rounded-full flex items-center justify-center">
            <div className="w-[15px] h-[15px] bg-[#7A6EFF] rounded-full"></div>
          </div>
          <div className="absolute right-[-12.5px] bottom-[-12.5px] w-[25px] h-[25px] bg-[#313131] rounded-full flex items-center justify-center">
            <div className="w-[15px] h-[15px] bg-[#7A6EFF] rounded-full"></div>
          </div>

          {/* Nav Content */}
          <nav className="flex justify-between items-center h-[100px]">
            <img
              src="./Home-Page/logo-img.png"
              alt="Logo"
              className="h-[46px] md:h-[56px] w-auto"
            />
            <div className="p-[2px] rounded-2xl [background-image:linear-gradient(to_left,#6C46C2_1%,#FFFFFFB3_100%)] inline-block">
              <button className="py-2 md:py-3 px-4 md:px-6 font-bold text-white rounded-2xl [background-image:linear-gradient(to_right,#7A6EFF,#431D79)]">
                Learn More
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full px-4 border-b border-dashed border-[#454343] flex justify-center overflow-hidden">
        <div className="absolute -bottom-[640px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#913ADE] blur-2xl opacity-10 rounded-full pointer-events-none" />

        <div className="w-full max-w-7xl px-4 border-l border-r border-dashed border-[#454343] py-12 flex flex-col items-center text-center gap-8">
          {/* Tagline */}
          <div className="border border-[#3C3C3C] flex justify-center items-center gap-4 rounded-lg py-2 px-4">
            <div className="w-[24px] h-[20px] bg-[#404040] flex items-center justify-center rounded-md">
              <div className="w-[15px] h-[11px] bg-[#7A6EFF] rounded-md"></div>
            </div>
            <p className="text-[#DBD8D8] text-sm sm:text-base">
              Join our 10,000+ happy users
            </p>
          </div>

          {/* Heading */}
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-5xl md:text-[64px] font-bold leading-tight mb-4 text-white">
              Smarter Financial Freedom
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#DEDEDE] leading-relaxed">
              Send, receive, invest, and track your finances—all in one secure
              platform built for global users.
            </p>
          </div>

          {/* Button */}
          <div className="p-[2px] rounded-3xl [background-image:linear-gradient(to_left,#6C46C2_1%,#FFFFFFB3_100%)] inline-block">
            <button className="w-[200px] sm:w-[292px] h-[56px] sm:h-[64px] font-bold text-white rounded-3xl [background-image:linear-gradient(to_right,#7A6EFF,#431D79)]">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Preview */}
      <div className="relative w-full flex justify-center items-center h-auto px-4">
        {/* Bottom Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#913ADE] blur-2xl opacity-5 rounded-full pointer-events-none z-0" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#913ADE] blur-2xl opacity-5 rounded-full pointer-events-none z-0" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#913ADE] blur-2xl opacity-5 rounded-full pointer-events-none z-0" />

        {/* Container */}
        <div className="relative w-full max-w-7xl px-0 lg:px-4 flex justify-center">
          {/* Left/Right Dashed Borders */}
          <div
            className="absolute left-0 top-0 h-full border-l border-dashed border-[#454343]"
            style={{
              maskImage:
                "linear-gradient(to bottom, white 0%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, white 0%, transparent 100%)",
            }}
          ></div>
          <div
            className="absolute right-0 top-0 h-full border-r border-dashed border-[#454343]"
            style={{
              maskImage:
                "linear-gradient(to bottom, white 0%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, white 0%, transparent 100%)",
            }}
          ></div>

          {/* Image Wrapper */}
          <div
            className="w-full mx-5 lg:mx-10 mt-7 lg:mt-14 bg-cover bg-center rounded-t-3xl px-5 pt-5"
            style={{ backgroundImage: "url('./desktop-bg-image.png')" }}
          >
            <div className="bg-white rounded-t-3xl overflow-hidden">
              <img
                src="./Home-Page//DASHBOARD-LANDING.png"
                className="w-full h-auto"
                alt="Dashboard Preview"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

{
  /* <div className="absolute w-80 h-80 bg-[#913ADE] blur-2xl opacity-30 overflow-hidden rounded-full" /> */
}
