type RecieveMoneyProps = {
  popupIndex: number;
  setPopupIndex: (index: number) => void;
  setShowModal: (show: boolean) => void;
};

const RecieveMoney = ({
  popupIndex,
  setPopupIndex,
  setShowModal,
}: RecieveMoneyProps) => {
  return (
    <div className="bg-[#262626] w-[90%] xl:w-[60%] p-6 sm:p-8 rounded-lg flex flex-col items-center justify-center relative">
      
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
        <h1 className="text-xl font-semibold text-white">Receive Money</h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row w-full gap-6 px-3 sm:px-5">
        {/* Left - QR Code */}
        <div className="flex-1 min-h-[320px] p-4 sm:p-5 rounded-md flex flex-col">
          <h2 className="text-md font-medium mb-4 text-white">
            Scan QR Code to make deposit
          </h2>
          <div className="bg-[#313131] p-5 rounded-lg flex-grow flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg w-full h-full flex items-center justify-center">
              <img
                src="./popup/barcode.png"
                alt="QR Code"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right - Copy Info */}
        <div className="flex-1 min-h-[320px] p-4 sm:p-5 rounded-md flex flex-col">
          <h2 className="text-md font-medium mb-4 text-white">
            Copy information below
          </h2>
          <div className="bg-[#313131] p-5 rounded-lg flex-grow flex flex-col justify-center space-y-4">
            {[
              { label: "Account Number", value: "1234567890" },
              { label: "Account Name", value: "Maurice Alexander" },
              { label: "Bank Name", value: "United State Bank" },
              { label: "Bank Swift code (International)", value: "12467306" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center text-white"
              >
                <h1 className="text-lg font-semibold">
                  {item.value}{" "}
                  <i className="ri-file-copy-line cursor-pointer" />
                </h1>
                <p className="text-sm text-gray-400">{item.label}</p>
                {idx !== 3 && (
                  <hr className="w-full border-t border-[#3A3939] my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecieveMoney;
