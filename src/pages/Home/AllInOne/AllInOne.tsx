const AllInOne = () => {
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
          <div className="h-full flex flex-col gap-10 justify-center pl-14 w-[75%]">
            <h1 className="text-[40px] font-bold text-white">
              All-in-One Platform for <br /> Everyday Operations is <br /> now
              on the store
            </h1>
            <button className="w-[292px] flex justify-center gap-1 items-center rounded-2xl border-gradient-to-br text-[15px] border-gray-700 h-[56px] mx-auto bg-gradient-to-br from-[#7A6EFF] to-[#431D79]">
              <img src="./playstore.png" className="w-[14px] h-[16px]" alt="" />
              <img
                src="./adobe.png"
                className="w-[14px] h-[16px] mr-2"
                alt=""
              />
              <p>Download</p>
            </button>
          </div>
          <div className="w-[900px] h-full flex justify-center items-center pr-10 pt-16">
            <img src="./mobile-home.png" className="h-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllInOne;
