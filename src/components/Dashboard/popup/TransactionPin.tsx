import { useRef, useState, type ChangeEvent } from "react";

type RecieveMoneyProps = {
  popupIndex: number;
  setPopupIndex: (index: number) => void;
  setShowModal: (show: boolean) => void;
};

const Transaction = ({
  popupIndex,
  setPopupIndex,
  setShowModal,
}: RecieveMoneyProps) => {
  const inputs = useRef<Array<HTMLInputElement | null>>([]);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return; // only allow one digit

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }

    if (!value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };
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
          Transaction Pin
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center w-full gap-6 px-3 sm:px-5">
        <div className="flex justify-center gap-2 px-1">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={otp[i]}
              onChange={(e) => handleChange(e, i)}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              className="w-12 h-12 text-center text-lg font-semibold text-white bg-transparent focus:ring-none outline-none border-b border-[#7A6EFF]"
            />
          ))}
        </div>
        <h1 className="text-[#7A6EFF]">Paste code</h1>
        <button className="max-w-96 w-full text-white font-bold text-lg py-3 bg-[#7A6EFF] rounded-lg hover:bg-[#685ef0] transition">
          Continue
        </button>
        <h1 className="text-xl text-center font-bold">
          Payment Awaiting <br /> Second Approval
        </h1>
        <h1 className="text-sm text-[#D9DBE9] text-center">
          This transfer requires one more <br /> to proceed.
        </h1>
        <button className="max-w-96 w-full text-white font-bold text-lg py-3 bg-[#7A6EFF] rounded-lg hover:bg-[#685ef0] transition">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Transaction;
