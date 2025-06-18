type RecieveMoneyProps = {
  popupIndex: number;
  setPopupIndex: (index: number) => void;
  setShowModal: (show: boolean) => void;
};

const AddAccount = ({
  popupIndex,
  setPopupIndex,
  setShowModal,
}: RecieveMoneyProps) => {
  return (
    <div className="bg-[#262626] w-[90%] sm:w-[80%] md:w-[70%] xl:w-[35%] p-6 sm:p-8 rounded-lg flex flex-col items-center justify-center relative">
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
        <h1 className="text-xl font-semibold text-white text-center">Add Account</h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col w-full gap-6 px-3 sm:px-5">
        <div className="w-full p-5 rounded-lg text-white flex flex-col gap-5 items-center bg-transparent">
          {/* Account Image */}
          <img
            src="./popup/a1.png"
            alt="Account Icon"
            className="w-20 h-20 object-contain"
          />

          {/* Account Name */}
          <div className="flex flex-col items-start bg-[#2C2C2C] border border-[#3B3B3B] w-full px-5 py-4 rounded-2xl">
            <span className="text-sm text-[#B8B8B8]">Account name</span>
            <span className="text-xl font-semibold text-white">Account 5</span>
          </div>

          {/* Account Details */}
          <h2 className="text-[#8E8E93] text-sm w-full text-left mt-2">Account Details</h2>
          <div className="w-full space-y-3 bg-[#2C2C2C] border border-[#3B3B3B] rounded-xl px-4 py-2">
            {[
              { label: "Account Number", value: "012345678902" },
              { label: "IBAN", value: "012345678902" },
              { label: "SWIFT/BIC code", value: "012345678902" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2"
              >
                <span className="text-sm text-gray-400 mb-1 sm:mb-0">
                  {item.label}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">
                    {item.value}
                  </span>
                  <i className="ri-file-copy-line text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccount;
