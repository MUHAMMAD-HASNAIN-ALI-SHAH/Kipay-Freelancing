const CorporateIdentityVerification = ({
  handleProgressChange,
}: {
  handleProgressChange: () => void;
}) => {
  return (
    <div className="w-[90%] sm:w-[75%] md:w-[60%] mx-auto py-10 md:py-16">
      <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-2">
        Verify Business Identity
      </h2>
      <p className="text-gray-300 text-sm md:text-md text-center mb-4 md:mb-10">
        To protect your account, we need to <br /> confirm your identity
      </p>

      <div className="space-y-2 md:space-y-3 mb-4">
        <button className="flex items-center justify-between w-full py-3 px-4 bg-none bg-[#313131] text-white border border-[#7A6EFF] rounded-lg">
          <div className="flex items-center space-x-2">
            <i className="ri-id-card-line"></i>
            <span className="font-semibold">Upload Goverment Issued ID</span>
          </div>
          <i className="ri-checkbox-fill text-[#7A6EFF]"></i>
        </button>
        <button className="flex items-center justify-between w-full py-3 px-4 bg-none bg-[#313131] text-white border border-[#7A6EFF] rounded-lg">
          <div className="flex items-center space-x-2">
            <i className="ri-id-card-line"></i>
            <span className="font-semibold">
              Extract of Register of Commerce
            </span>
          </div>
          <i className="ri-arrow-right-fill text-white"></i>
        </button>
        <button className="flex items-center justify-between w-full py-3 px-4 bg-none bg-[#313131] text-white border border-[#7A6EFF] rounded-lg">
          <div className="flex items-center space-x-2">
            <i className="ri-id-card-line"></i>
            <span className="font-semibold">Directors Certified Passport</span>
          </div>
          <i className="ri-arrow-right-fill text-white"></i>
        </button>
        <button className="flex items-center justify-between w-full py-3 px-4 bg-none bg-[#313131] text-white border border-[#7A6EFF] rounded-lg">
          <div className="flex items-center space-x-2">
            <i className="ri-id-card-line"></i>
            <span className="font-semibold">Articles of Association</span>
          </div>
          <i className="ri-arrow-right-fill text-white"></i>
        </button>
        <button className="flex items-center justify-between w-full py-3 px-4 bg-none bg-[#313131] text-white border border-[#7A6EFF] rounded-lg">
          <div className="flex items-center space-x-2">
            <i className="ri-id-card-line"></i>
            <span className="font-semibold">Register of shareholder</span>
          </div>
          <i className="ri-arrow-right-fill text-white"></i>
        </button>
        <button className="flex items-center justify-between w-full py-3 px-4 bg-none bg-[#313131] text-white border border-[#7A6EFF] rounded-lg">
          <div className="flex items-center space-x-2">
            <i className="ri-id-card-line"></i>
            <span className="font-semibold">Proof of Residence</span>
          </div>
          <i className="ri-arrow-right-fill text-white"></i>
        </button>
      </div>

      {/* Sign In Button */}
      <button
        onClick={handleProgressChange}
        className="w-full py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md font-semibold transition"
      >
        Verify
      </button>
    </div>
  );
};

export default CorporateIdentityVerification;
