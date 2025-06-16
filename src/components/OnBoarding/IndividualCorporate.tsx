import { useEffect, useState } from "react";

const IndividualCorporate = ({
  handleProgressChange,
}: {
  handleProgressChange: () => void;
}) => {
  const [selectedType, setSelectedType] = useState<string>("");

  useEffect(() => {
    // Load from localStorage on mount
    const stored = localStorage.getItem("type");
    if (stored) setSelectedType(stored);
  }, []);

  const handleSelect = (type: string) => {
    setSelectedType(type);
    localStorage.setItem("type", type);
  };

  return (
    <div className="w-[90%] sm:w-[75%] md:w-[60%] mx-auto py-10 md:py-16">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
        Account type
      </h2>
      <p className="text-gray-300 text-sm md:text-md text-center mb-4 md:mb-10">
        What type of account are you creating?
      </p>

      <div className="space-y-2 md:space-y-3 mb-4">
        <button
          onClick={() => handleSelect("individual")}
          className={`flex items-center justify-between w-full py-3 px-4 bg-[#313131] text-white ${
            selectedType === "individual"
              ? "border border-[#7A6EFF]"
              : "border-none"
          } rounded-lg`}
        >
          <span className="font-semibold">Individual</span>
          {selectedType === "individual" && (
            <i className="ri-checkbox-fill text-[#7A6EFF]"></i>
          )}
        </button>
        <button
          onClick={() => handleSelect("corporate")}
          className={`flex items-center justify-between w-full py-3 px-4 bg-[#313131] text-white ${
            selectedType === "corporate"
              ? "border border-[#7A6EFF]"
              : "border-none"
          } rounded-lg`}
        >
          <span className="font-semibold">Corporate</span>
          {selectedType === "corporate" && (
            <i className="ri-checkbox-fill text-[#7A6EFF]"></i>
          )}
        </button>
      </div>

      {/* Next Button */}
      <button
        disabled={!selectedType}
        onClick={handleProgressChange}
        className="w-full py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md font-semibold transition"
      >
        Next
      </button>
    </div>
  );
};

export default IndividualCorporate;
