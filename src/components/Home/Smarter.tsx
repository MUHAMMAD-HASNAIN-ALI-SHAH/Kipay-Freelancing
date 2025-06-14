const Smarter = () => {
  return (
    <section className="w-full relative px-4 py-12 bg-transparent">
      <div className="max-w-2xl lg:max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center">
        {/* Text Section */}
        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start gap-6">
          <div className="w-fit border border-[#3C3C3C] flex justify-center items-center gap-4 rounded-2xl py-2 px-4">
            <div className="w-6 h-5 bg-[#404040] flex items-center justify-center rounded-md">
              <div className="w-4 h-3 bg-[#7A6EFF] rounded-md"></div>
            </div>
            <p className="text-[#DBD8D8] text-sm sm:text-base">
              What we offer our customers
            </p>
          </div>

          <h1 className="text-center lg:text-left text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Smart, Secure,
            <br />
            Scalable and Reliable
          </h1>

          <p className="text-center lg:text-left text-base sm:text-lg md:text-xl text-[#82788b] leading-relaxed">
            As a business owner managing cross-border operations, finding a
            reliable banking partner was crucial. This platform has not only
            simplified currency management and international transfers.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="bg-cover bg-center w-full lg:w-[50%] h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl border border-gray-700"
          style={{
            backgroundImage: "url('./smarter.png')",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Smarter;
