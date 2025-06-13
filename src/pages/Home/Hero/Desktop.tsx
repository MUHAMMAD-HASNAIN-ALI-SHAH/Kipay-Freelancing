const Desktop = () => {
  return (
    <div className="relative w-full h-[580px] flex justify-center items-center">
      {/* Background glow */}
      <img
        src="./Ellipse-navbar-top.png"
        alt=""
        style={{ transform: "scaleY(-1)" }}
        className="absolute bottom-0 transform -translate-x-1/2 opacity-100 [mask-image:radial-gradient(circle,white_40%,transparent_80%)] w-[2000px] h-full"
      />

      {/* Container with custom left/right gradient borders */}
      <div className="relative w-[1200px] h-full flex justify-center items-end">
        {/* Left gradient border */}
        <div
          className="absolute left-0 top-0 h-full w-px border-l border-dashed border-[#454343]"
          style={{
            maskImage:
              "linear-gradient(to bottom, white 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, white 0%, transparent 100%)",
          }}
        ></div>

        {/* Right gradient border */}
        <div
          className="absolute right-0 top-0 h-full w-px border-r border-dashed border-[#454343]"
          style={{
            maskImage:
              "linear-gradient(to bottom, white 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, white 0%, transparent 100%)",
          }}
        ></div>

        {/* Content */}
        <div
          className="w-[1037px] h-[511px] bg-cover bg-center rounded-t-3xl p-4 pb-0"
          style={{ backgroundImage: "url('./desktop-bg-image.png')" }}
        >
          <div className="bg-white w-full h-full rounded-t-3xl">
            <img
              src="./DASHBOARD-LANDING.png"
              className="w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
