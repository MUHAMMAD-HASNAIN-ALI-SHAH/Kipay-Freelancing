type RecieveMoneyProps = {
  popupIndex: number;
  setPopupIndex: (index: number) => void;
  setShowModal: (show: boolean) => void;
};

const EnterDetails = ({
  popupIndex,
  setPopupIndex,
  setShowModal,
}: RecieveMoneyProps) => {
  return (
    <div className="bg-[#262626] w-[98%] overflow-y-auto sm:w-[80%] md:w-[70%] xl:w-[35%] px-3 sm:px-6 py-6 sm:py-8 rounded-lg flex flex-col items-center justify-center relative">
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
          <div className="h-[120px] bg-[#464646] w-[120px] rounded-lg flex flex-col justify-center items-center">
            <div className="p-3 py-2 bg-[#454545] border border-gray-400 flex flex-col justify-between rounded-full">
              <i className="ri-add-line text-3xl"></i>
            </div>
            <h1>Add</h1>
          </div>
          <div className="h-[120px] bg-[#464646] w-[120px] rounded-lg flex flex-col justify-center items-center">
            <img
              src="./popup/confirm-person.png"
              className="w-10 h-10"
              alt=""
            />
            <h1 className="text-lg">Cameron</h1>
            <h1 className="text-xs text-[#9C9C9C]">HNCG Bank</h1>
          </div>
          <div className="h-[120px] bg-[#464646] w-[120px] rounded-lg flex flex-col justify-center items-center">
            <img
              src="./popup/confirm-person.png"
              className="w-10 h-10"
              alt=""
            />
            <h1 className="text-lg">Annette </h1>
            <h1 className="text-xs text-[#9C9C9C]">HNCG Bank</h1>
          </div>
        </div>

        {/* Currency Cards */}
        <div className="flex flex-col gap-4 w-full h-[500px] overflow-y-auto">
          {[
            { label: "Enter account number", amount: "3634628354736" },
            { label: "IBAN", amount: "3544838522" },
            {
              label: "Address",
              amount: "6391 Elgin St. Celina, Delaware 10299",
            },
            { label: "Choose bank", amount: "HNCH Bank" },
            {
              label: "Banks Address",
              amount: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
            },
            { label: "Bank code", amount: "45364" },
            { label: "Swift code", amount: "45364" },
            { label: "Narration or purpose (Optional)", amount: "Finance" },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#313131] w-full p-4 flex justify-between items-start sm:items-center gap-3 sm:gap-0"
            >
              <div>
                <h2 className="text-sm text-white mb-1">{item.label}</h2>
                <p className="text-lg font-semibold text-white">
                  {item.amount}
                </p>
              </div>
            </div>
          ))}

          {/* Continue Button */}
        </div>
        <button className="bg-[#7A6EFF] py-3 w-full rounded-xl text-white font-semibold hover:bg-[#685ef0] transition">
          Continue
        </button>
      </div>
    </div>
  );
};

export default EnterDetails;
