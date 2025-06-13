const Seamless = () => {
  return (
    <section className="w-full relative h-[902px]">
      <div className="w-[1079px] h-full mx-auto flex gap-20 justify-center items-center">
        {/* Image Section */}
        <div
          className="bg-cover bg-center w-[551px] h-[498px] rounded-2xl border border-gray-700"
          style={{
            backgroundImage: "url('./seamless-control.png')",
          }}
        ></div>

        {/* Text Section */}
        <div className="mb-10 flex flex-col gap-5">
          <div className="w-[300px] h-[45px] border border-[#3C3C3C] flex justify-center items-center gap-4 rounded-2xl py-3 px-3">
            <div className="w-[24.55px] h-[20px] bg-[#404040] flex items-center justify-center rounded-md">
              <div className="w-[15.45px] h-[11.82px] bg-[#7A6EFF] rounded-md"></div>
            </div>
            <div>
              <p className="text-[#DBD8D8]">What we offer our customers</p>
            </div>
          </div>
          <h1 className="text-[60px] md:text-5xl font-bold text-white">
            Seamless Control <br />
            Across Every <br />
            Transaction
          </h1>
          <p className="text-lg text-[#82788b] text-[30px] max-w-2xl leading-[40px]">
            As a business owner managing cross-border operations, finding a reliable banking partner was crucial. This platform has not only simplified currency management and international transfers 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Seamless;
