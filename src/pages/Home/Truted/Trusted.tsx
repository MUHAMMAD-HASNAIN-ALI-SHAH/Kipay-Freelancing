const Trusted = () => {
  return (
    <section className="w-full relative h-[902px]">
      <img
        src="./Ellipse-navbar-top.png"
        alt=""
        className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-100 [mask-image:radial-gradient(circle,white_5%,transparent_80%)] w-[1400px]"
      />
      <div className="w-[1440px] h-full mx-auto flex flex-col gap-20 justify-center items-center">
        <h1 className="text-center text-[50px] font-bold">
          Trusted by Thousands of Users <br /> Across the Globe
        </h1>

        <div className="flex gap-6 h-[560px]">
          <div className="max-w-md mx-auto h-full flex flex-col gap-0 justify-between bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="flex flex-col justify-between p-6 gap-3">
              <h1 className="text-[50px] font-bold text-blue-600">95%</h1>
              <h2 className="text-[25px] font-semibold text-gray-800">
                Monitor and track shipments
              </h2>
              <p className="text-[20px] text-gray-600">
                Monitor every step of your alignment journey, from dispatch to
                delivery.
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-gradient-to-br from-[#8357EA] to-[#540DAA] p-6 rounded-2xl">
              <h1 className="text-[50px] font-bold text-white">4.9/5</h1>
              <h2 className="text-[25px] font-semibold text-white mb-4">
                Swift customer response
              </h2>
              <p className="text-[20px] text-white">
                Monitor every step of your shipment journey, from dispatch to
                delivery,
              </p>
            </div>
          </div>

          <div
            className="w-[669px] bg-cover bg-center opacity-80 border border-gray-200 rounded-3xl flex flex-col justify-between items-center gap-10 p-8 px-20"
            style={{
              backgroundImage: "url('./desktop-bg-image.png')",
            }}
          >
            <div className="flex flex-col gap-5 items-center">
              <h1 className="font-bold text-white text-[30px] z-50">
                Reliable Partner for Global Transactions
              </h1>
              <p className="text-[20px] text-[#82788B] leading-[30px] z-50 text-center">
                As a business owner managing cross-border operations, timing as
                reliable banking partner was crucial. This platform has not only
                simplified, easy management and international tremities but also
                given the peace of mind with the compliance and alignment
                looking back. It's truly transformed
              </p>
            </div>

            <hr className="text-[#33184A] w-full" />

            <div className="flex gap-3 items-center">
              <img src="./image.png" className="w-[50px] h-[50px]" alt="" />
              <div>
                <h1 className="text-[20px]">David Thompson</h1>
                <h1 className="text-[18px]">Product Designer</h1>
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
