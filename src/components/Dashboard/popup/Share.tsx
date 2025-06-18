type RecieveMoneyProps = {
  popupIndex: number;
  setPopupIndex: (index: number) => void;
  setShowModal: (show: boolean) => void;
};

const Share = ({
  popupIndex,
  setPopupIndex,
  setShowModal,
}: RecieveMoneyProps) => {
  return (
    <div className="bg-[#262626] w-[98%] sm:w-[80%] md:w-[70%] xl:w-[50%] px-3 sm:px-6 py-6 sm:py-8 rounded-lg flex flex-col items-center justify-center relative">
      {/* Navigation Arrows */}
      <div className="absolute top-4 left-4 flex gap-4 text-white text-2xl">
        <i
          onClick={() => setPopupIndex(popupIndex - 1)}
          className="ri-arrow-left-fill cursor-pointer hover:text-gray-300 transition"
          title="Back"
        />
        <i
          onClick={() => setPopupIndex(popupIndex + 1)}
          className="ri-arrow-right-fill cursor-pointer hover:text-gray-300 transition"
          title="Next"
        />
      </div>

      {/* Close Button */}
      <div className="absolute top-4 right-4 cursor-pointer">
        <i
          onClick={() => setShowModal(false)}
          className="ri-close-circle-fill text-2xl text-gray-400 hover:text-white transition"
          title="Close"
        />
      </div>

      {/* Header */}
      <div className="w-full flex justify-center mb-6 px-3 sm:px-5">
        <h1 className="text-xl font-semibold text-white text-center">
          Share to friends
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col justify-center items-center gap-6 px-3">
        <div className="flex justify-center items-center w-full gap-7">
          <div className="flex flex-col justify-center items-center gap-2">
            <img src="./popup/google.png" alt="" />
            <h1>Email</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img src="./popup/whatsapp.png" alt="" />
            <h1>Whatsapp</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img src="./popup/instagram.png" alt="" />
            <h1>Instagram</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img src="./popup/discord.png" alt="" />
            <h1>Discord</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img src="./popup/x.png" alt="" />
            <h1>X</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img src="./popup/facebook.png" alt="" />
            <h1>Facebook</h1>
          </div>
        </div>
        <h1>or</h1>
        <button className="bg-[#7A6EFF] py-3 w-full rounded-xl text-white font-semibold">
            Copy Link
          </button>
      </div>
    </div>
  );
};

export default Share;
