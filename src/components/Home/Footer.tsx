const Footer = () => {
  return (
    <section className="relative w-full bg-[#0A0311] flex flex-col justify-center items-center pb-16 px-4 overflow-hidden">
      <div className="absolute bottom-[-700px] w-[1400px] h-[800px] bg-[#913ADE] blur-2xl opacity-10 rounded-full pointer-events-none" />
      <footer className="w-full max-w-7xl text-white">
        {/* upper section */}
        <div className="flex flex-col md:flex-row justify-between  gap-8 mb-8">
          {/* Logo and text */}
          <div>
            <img
              src="./logo-img.png"
              className="w-[152px] h-[56px] font-bold mb-4"
              alt="Logo"
            />
            <p className="text-gray-300 text-base md:text-lg max-w-xl">
              Experience a unified platform that empowers you to send and
              receive money globally
            </p>
          </div>

          {/* Learn More */}
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-semibold">Learn More</h1>
            <h1 className="text-lg font-semibold">Download our app</h1>
          </div>
        </div>

        {/* lower section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            ©2025 Kipay All Right Reserved
          </p>

          <div className="flex gap-4">
            {[
              { src: "./mail.png", alt: "Mail" },
              { icon: "ri-instagram-line" },
              { icon: "ri-telegram-2-line" },
              { icon: "ri-twitter-line" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-9 h-9 bg-[#702DFF] rounded-xl flex justify-center items-center"
              >
                {item.src ? (
                  <img
                    src={item.src}
                    className="w-[18px] h-[16px]"
                    alt={item.alt}
                  />
                ) : (
                  <i className={`${item.icon} text-white text-lg`}></i>
                )}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
