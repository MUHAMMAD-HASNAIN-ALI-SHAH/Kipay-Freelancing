type RecieveMoneyProps = {
  popupIndex: number;
  setPopupIndex: (index: number) => void;
  setShowModal: (show: boolean) => void;
};

const ConfirmDetails = ({
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
        <h1 className="text-xl font-semibold text-white text-center">
          Confirm Details
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col w-full gap-6 px-3 sm:px-5">
        <div className="w-full p-5 rounded-lg text-white flex flex-col gap-5 items-center">
          {/* Recipient Info */}
          <div className="flex flex-col items-center gap-1 text-center">
            <img
              src="./popup/confirm-person.png"
              alt="Account Icon"
              className="w-20 h-20 object-contain"
            />
            <p className="text-[#9C9C9C] text-sm">You’re about to transfer to</p>
            <p className="text-lg font-semibold text-white">Cameron</p>
          </div>

          <hr className="w-full border-t border-[#313131]" />

          {/* Amount */}
          <h1 className="text-2xl font-bold">$12,000.67</h1>

          {/* Detail Rows */}
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center justify-between bg-[#2C2C2C] px-5 py-4 rounded-2xl">
              <span className="text-sm text-[#B8B8B8]">Account balance</span>
              <span className="text-xl font-semibold text-white">
                $12,500.90
              </span>
            </div>

            <DetailRow label="Bank name" value="HNCH Bank" />
            <DetailRow label="Account number" value="0123456785" />

            {/* Currency Select */}
            <div className="flex items-center justify-between w-full">
              <span className="text-sm text-[#B8B8B8]">Payment Account</span>
              <select
                defaultValue="USD"
                className="bg-transparent border-none text-white text-sm outline-none"
              >
                <option value="USD" className="bg-[#262626] text-white">USD</option>
                <option value="EUR" className="bg-[#262626] text-white">EUR</option>
              </select>
            </div>

            <DetailRow label="Swift code" value="0123456785" />
            <DetailRow label="Bank code" value="0123456785" />
            <DetailRow label="Bank code" value="0123456785" />
          </div>

          {/* Continue Button */}
          <button className="mt-4 w-full text-white font-bold text-lg py-3 bg-[#7A6EFF] rounded-lg hover:bg-[#685ef0] transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable detail row
const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between w-full">
    <span className="text-sm text-[#B8B8B8]">{label}</span>
    <span className="text-sm sm:text-base font-semibold text-white">
      {value}
    </span>
  </div>
);

export default ConfirmDetails;
