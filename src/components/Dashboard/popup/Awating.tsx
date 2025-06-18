type RecieveMoneyProps = {
  popupIndex: number;
  setPopupIndex: (index: number) => void;
  setShowModal: (show: boolean) => void;
};

const Awating = ({
  popupIndex,
  setPopupIndex,
  setShowModal,
}: RecieveMoneyProps) => {
  return (
    <div className="bg-[#262626] w-[98%] sm:w-[80%] md:w-[70%] xl:w-[35%] px-3 sm:px-6 py-6 sm:py-8 rounded-lg flex flex-col items-center justify-center relative">
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
          Awaiting for payment
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center w-full gap-2 px-3 sm:px-5">
        <img src="./popup/awating1.png" alt="" />
        <h1 className="text-xl pt-5">Awating Payment</h1>
        <h1 className="text-[#D9DBE9] text-center">Youll be notified once payment has <br /> been made</h1>
        <img src="./popup/awating2.png" alt="" />
        <h1 className="text-xl pt-5">Payment received</h1>
        <h1 className="text-[#D9DBE9] text-center">Youll be notified once payment has <br /> been made</h1>
      </div>
    </div>
  );
};

export default Awating;
