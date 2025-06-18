type RecieveMoneyProps = {
  popupIndex: number;
  setPopupIndex: (index: number) => void;
  setShowModal: (show: boolean) => void;
};

const Upload = ({
  popupIndex,
  setPopupIndex,
  setShowModal,
}: RecieveMoneyProps) => {
  return (
    <div className="bg-[#262626] w-[98%] sm:w-[80%] md:w-[70%] xl:w-[35%] px-2 md:px-6 py-6 sm:p-8 rounded-lg flex flex-col items-center justify-center relative">
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
      <div className="w-full flex justify-center mb-6 px-5">
        <h1 className="text-xl font-semibold text-white text-center">Upload</h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center w-full gap-6 px-3 sm:px-5">
        <h1 className="text-lg font-bold">Upload Transaction Justification</h1>
        <p className="text-center text-[#D9DBE9]">
          To ensure secure payments, please upload <br /> the relevant document{" "}
        </p>
        <div className="w-full flex items-center justify-between bg-[#2C2C2C] px-5 py-4 rounded-2xl">
          <span className="text-md">Select document type</span>
          <span className=" text-xl font-semibold text-white">
            <i className="ri-arrow-down-s-line"></i>
          </span>
        </div>
        <div className="h-[190px] w-[160px] bg-[#2E2E2E] p-5 rounded-lg">
          <div className="w-full h-full bg-[#414141] rounded-lg flex flex-col justify-center items-center">
            <img src="./popup/download.png" alt="" />
            <h1>Upload</h1>
          </div>
        </div>
        <h1>Upload Document</h1>
        <button className=" w-full text-white font-bold text-lg py-3 bg-[#7A6EFF] rounded-lg hover:bg-[#685ef0] transition">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Upload;
