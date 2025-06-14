const Oversight = () => {
  return (
    <section className="w-full relative px-4 py-12 bg-transparent min-h-[570px]">
      {/* Background Glow */}
      <div className="absolute top-[-450px] left-1/2 -translate-x-1/2 w-[1700px] h-[800px] bg-[#913ADE] blur-2xl opacity-10 rounded-full pointer-events-none" />


      {/* Main Container */}
      <div className="w-full max-w-2xl lg:max-w-7xl mx-auto flex flex-col gap-10 justify-center items-center">
        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-[45px] font-bold text-white leading-tight">
          Complete Oversight of Your <br className="hidden md:block" />
          Financial Ecosystem
        </h1>

        {/* Card Section */}
        <div
          className="w-full bg-cover bg-center opacity-70 border border-gray-200 rounded-3xl flex flex-col-reverse lg:flex-row justify-between gap-10 items-center p-6 md:pl-14 md:pr-10"
          style={{ backgroundImage: "url('./desktop-bg-image.png')" }}
        >
          {/* Mobile Image */}
          <div className="w-full lg:w-[55%] flex justify-center items-center">
            <img
              src="./Home-Page/mobile-home.png"
              className="h-auto max-h-[500px] w-auto"
              alt="Mobile App"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center gap-6 text-center lg:text-left">
            <div className="w-[60px] h-[60px] bg-[#702DFF] rounded-md flex items-center justify-center mx-auto lg:mx-0">
              <img src="./Home-Page/Vector-icon.png" className="w-8 h-8" alt="Icon" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-[30px] font-bold text-white leading-snug">
              Powerful Tools for Smarter <br className="hidden sm:block" />
              Financial Management
            </h1>
            <p className="text-base sm:text-lg md:text-[18px] text-white leading-relaxed">
              Experience a unified platform that empowers you to send and
              receive money globally, manage multiple accounts and cards,
              monitor real-time shipment progress, and stay compliant with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oversight;
