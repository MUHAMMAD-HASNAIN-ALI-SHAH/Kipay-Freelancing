const Oversight = () => {
  return (
    <section className="w-full relative h-[902px]">
      <img
        src="./Ellipse-navbar-top.png"
        alt=""
        className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-100 [mask-image:radial-gradient(circle,white_5%,transparent_80%)] w-[1400px]"
      />
      <div className="w-[1440px] h-full mx-auto flex flex-col gap-20 justify-center items-center">
        <h1 className="text-center text-[50px] font-bold">
          Complete Oversight of you financial <br /> Ecosystem
        </h1>
        <div
          className="h-[564px] w-[1200px] bg-cover bg-center opacity-70 border border-gray-200 rounded-3xl flex justify-between gap-10 items-end pb-0"
          style={{
            backgroundImage: "url('./desktop-bg-image.png')",
          }}
        >
          <div className="w-[900px] h-full flex justify-center items-center pl-16 pt-16">
            <img src="./mobile-home.png" className="h-full" alt="" />
          </div>
          <div className="h-full flex flex-col justify-center gap-3 pr-16">
            <div className="w-[60px] h-[60px] bg-[#702DFF] rounded-md flex items-center justify-center mb-5">
              <img src="./Vector-icon.png" className="w-10 h-w-10" alt="" />
            </div>
            <h1 className="text-[40px] font-bold text-white leading-[50px]">
              Powerful Tools for Smarter <br /> Financial Management
            </h1>
            <h1 className="text-[20px] text-white">
              Experience a unified platform that empowers you to send and
              receive money globally, manage multiple accounts and cards,
              monitor real-time shipment progress, and stay compliant with ease
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oversight;
