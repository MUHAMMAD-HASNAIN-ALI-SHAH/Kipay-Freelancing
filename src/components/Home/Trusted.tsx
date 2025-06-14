const Trusted = () => {
  return (
    <section className="w-full relative min-h-[1150px] lg:min-h-[900px] flex flex-col justify-center items-center px-4 overflow-hidden">
      <div className="absolute top-[-350px] left-1/4 -rotate-45 -translate-x-1/2 w-[500px] h-[1000px] bg-[#913ADE] blur-2xl opacity-10 rounded-full pointer-events-none" />
      <div className="absolute top-[-0px] right-0 rotate-45 -translate-y-1/2 w-[500px] h-[1000px] bg-[#913ADE] blur-2xl opacity-10 rounded-full pointer-events-none" />

      {/* Content */}
      <div className="max-w-2xl lg:max-w-7xl mx-auto w-full z-10">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-10">
          Trusted by Thousands of Users Across the Globe
        </h1>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-between w-full">
          {/* Left Card */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Top */}
            <div className="flex flex-col justify-between p-6 gap-7">
              <h1 className="text-3xl sm:text-4xl md:text-[50px] font-bold text-blue-600">
                95%
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-[40px] font-semibold text-gray-800">
                Monitor and track shipments
              </h2>
              <p className="text-base sm:text-lg md:text-[20px] text-gray-600">
                Monitor every step of your alignment journey, from dispatch to
                delivery.
              </p>
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-7 bg-gradient-to-br from-[#8357EA] to-[#540DAA] p-6 rounded-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-[50px] font-bold text-white">
                4.9/5
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-[40px] font-semibold text-white">
                Swift customer response
              </h2>
              <p className="text-base sm:text-lg md:text-[20px] text-white">
                Monitor every step of your shipment journey, from dispatch to
                delivery.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div
            className="w-full lg:w-1/2 bg-cover bg-center border border-gray-200 rounded-3xl flex flex-col justify-between items-center gap-10 p-6 sm:p-10 min-h-[460px] lg:min-h-[450px]"
            style={{
              backgroundImage: "url('./desktop-bg-image.png')",
            }}
          >
            <div className="flex flex-col gap-5 items-center text-center">
              <h1 className="font-extrabold text-white text-xl sm:text-2xl md:text-[25px] leading-snug z-50">
                Reliable Partner for Global Transactions
              </h1>
              <p className="text-base sm:text-lg md:text-[20px] text-[#CBBBDD] leading-relaxed z-50">
                As a business owner managing cross-border operations, finding a
                reliable banking partner was crucial. This platform has not only
                simplified currency management and international transfers but
                also given me peace of mind with their compliance and shipment
                tracking tools. It's truly transformed how I handle my finances.
              </p>
            </div>

            <hr className="text-[#33184A] w-full" />

            <div className="flex items-center gap-3">
              <img src="./image.png" className="w-[50px] h-[50px]" alt="User" />
              <div className="text-white">
                <h1 className="text-[18px] font-semibold">David Thompson</h1>
                <h2 className="text-[16px]">Product Designer</h2>
              </div>
            </div>

            <div className="flex gap-1">
              <hr className="w-[60px] h-[8px] bg-[#7A6EFF] border-none rounded-lg" />
              <hr className="w-[9px] h-[8px] bg-[#230F36] border-none rounded-lg" />
              <hr className="w-[9px] h-[8px] bg-[#230F36] border-none rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
