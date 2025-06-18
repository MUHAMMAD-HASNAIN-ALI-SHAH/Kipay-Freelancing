type RecieveMoneyProps = {
  popupIndex: number;
  setPopupIndex: (index: number) => void;
  setShowModal: (show: boolean) => void;
};

const SendMoney = ({
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
          Send Money
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center w-full gap-6 px-3 sm:px-5">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-2 w-full sm:w-auto">
          <button className="bg-white text-black px-6 py-2 rounded-lg text-sm sm:text-base">
            Company
          </button>
          <button className="border border-[#4A4A4A] px-6 py-2 rounded-lg text-white text-sm sm:text-base">
            Individual
          </button>
        </div>

        {/* Currency Cards */}
        <div className="flex flex-col gap-4 w-full">
          {[
            { label: "Recipient receives", amount: "$0" },
            { label: "You send", amount: "$0" },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#313131] w-full p-4 flex justify-between items-start sm:items-center gap-3 sm:gap-0"
            >
              <div>
                <h2 className="text-sm text-white mb-1">{item.label}</h2>
                <p className="text-lg font-semibold text-white">{item.amount}</p>
              </div>
              <select
                defaultValue={"USD"}
                className="bg-[#2C2C2C] text-white border border-[#3B3B3B] rounded-full px-4 py-2 text-sm sm:text-base"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          ))}

          {/* Continue Button */}
          <button className="bg-[#7A6EFF] py-3 w-full rounded-xl text-white font-semibold hover:bg-[#685ef0] transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
