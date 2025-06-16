import { useRef, useState, type ChangeEvent } from "react";

const IndividualOTPVerification = ({
  handleProgressChange,
}: {
  handleProgressChange: () => void;
}) => {
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

//   const handleSubmit = () => {
//     const otpValue = otp.join("");
//     if (otpValue.length === 6) {
//       handleProgressChange(otpValue);
//     } else {
//       alert("Please enter all 6 digits of the OTP.");
//     }
//   };

  return (
    <div className="w-[90%] sm:w-[75%] md:w-[60%] mx-auto py-10 md:py-16">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
        OTP Verification
      </h2>
      <p className="text-gray-300 text-sm md:text-md text-center mb-6 md:mb-10">
        Enter the verification code sent to your <br /> email address
      </p>

      {/* OTP Inputs */}
      <div className="flex justify-center gap-2 px-1 mb-8">
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

      {/* Submit Button */}
      <button
        onClick={handleProgressChange}
        className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-md font-semibold transition"
      >
        Verify
      </button>
    </div>
  );
};

export default IndividualOTPVerification;
