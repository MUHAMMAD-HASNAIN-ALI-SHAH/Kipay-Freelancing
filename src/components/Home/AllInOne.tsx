const AllInOne = () => {
  return (
    <section className="w-full relative min-h-[570px] bg-transparent px-4 overflow-hidden">
      <div className="absolute top-[-450px] left-1/2 -translate-x-1/2 w-[1700px] h-[800px] bg-[#913ADE] blur-2xl opacity-10 rounded-full pointer-events-none" />

      {/* Content container */}
      <div className="w-full max-w-2xl lg:max-w-7xl mx-auto flex flex-col justify-center items-center h-full py-12">
        <div
          className="w-full bg-cover bg-center opacity-70 border border-gray-200 rounded-3xl flex flex-col lg:flex-row mx-auto justify-between gap-10 items-center p-6 md:pl-14 md:pr-10"
          style={{ backgroundImage: "url('./desktop-bg-image.png')" }}
        >
          {/* Text content */}
          <div className="flex flex-col gap-10 justify-center w-full md:w-[60%] text-center lg:text-left">
            <h1 className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[38px] font-bold text-white leading-tight">
              All-in-One Platform for <br className="hidden sm:block" />
              Everyday Operations is <br className="hidden md:block" />
              now on the store
            </h1>
            <div className="w-full flex justify-center lg:justify-start">
              <button className="w-[200px] md:w-[292px] flex justify-center gap-2 items-center rounded-2xl border-gray-700 h-[56px] bg-gradient-to-br from-[#7A6EFF] to-[#431D79] text-white text-sm md:text-base">
                <img
                  src="./playstore.png"
                  className="w-4 h-4"
                  alt="Play Store"
                />
                <img src="./adobe.png" className="w-4 h-4 mr-2" alt="Adobe" />
                <p>Download</p>
              </button>
            </div>
          </div>

          {/* Mobile image */}
          <div className="w-full md:w-[40%] flex justify-center items-center">
            <img
              src="./mobile-home.png"
              className="h-auto max-h-[500px] w-auto"
              alt="Mobile UI"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllInOne;
