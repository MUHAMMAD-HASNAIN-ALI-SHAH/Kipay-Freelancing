import { useState } from "react";

const ShipmentTracker = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const shipmentData = [
    {
      id: "HFGD7WF35",
      date: "20/04",
      status: "In transit",
      expanded: open1,
      setExpanded: setOpen1,
      details: [
        { label: "Packaging in store", date: "20/04 12:34 PM" },
        { label: "Shipped to China center", date: "22/04" },
        { label: "Sorted and shipped", date: "23/04" },
        { label: "Arrived at US", date: "25/04" },
        { label: "Post office", date: "30/04" },
      ],
    },
    {
      id: "HFGD7WF35",
      date: "20/04",
      status: "In transit",
      expanded: open2,
      setExpanded: setOpen2,
      details: [
        { label: "Packaging in store", date: "20/04 12:34 PM" },
        { label: "Shipped to China center", date: "22/04" },
        { label: "Sorted and shipped", date: "23/04" },
        { label: "Arrived at US", date: "25/04" },
        { label: "Post office", date: "30/04" },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col gap-1 py-10 px-4 md:px-5">
      {/* Tabs */}
      <div className="flex flex-wrap sm:flex-nowrap gap-3 mb-4">
        <button className="flex-1 sm:flex-none px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] text-white">
          All
        </button>
        <button className="flex-1 sm:flex-none px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] bg-white text-[#4A4A4A]">
          In transit
        </button>
        <button className="flex-1 sm:flex-none px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] text-white">
          Pending
        </button>
      </div>

      {/* Shipments */}
      <div className="w-full flex flex-col gap-4">
        {shipmentData.map((item, index) => (
          <div
            key={index}
            className="w-full border border-[#313131] rounded-md"
          >
            <div
              onClick={() => item.setExpanded(!item.expanded)}
              className="flex items-center justify-between py-3 px-5 cursor-pointer"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 flex justify-center items-center bg-[#7A6EFF] rounded-full">
                  <i className="ri-send-backward pt-1"></i>
                </div>
                <h1>{item.id}</h1>
                <h1 className="text-sm text-[#B8B2B2]">{item.status}</h1>
              </div>
              <div className="flex items-center gap-3">
                <h1>{item.date}</h1>
                <i
                  className={`ri-arrow-${item.expanded ? "down" : "up"}-s-line`}
                ></i>
              </div>
            </div>

            {/* Expanded Section */}
            {item.expanded && (
              <div className="w-full md:w-[70%] mx-auto px-4 md:px-12 py-5 flex flex-col gap-6 text-sm">
                {item.details.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 relative">
                    {/* Icon / Dot */}
                    <div className="absolute left-[-60px] top-0 hidden md:block">
                      {idx === 0 ? (
                        <div className="w-10 h-10 flex justify-center items-center bg-[#7A6EFF] rounded-full">
                          <i className="ri-send-backward pt-1 text-white text-lg"></i>
                        </div>
                      ) : (
                        <div className="w-2 h-2 bg-white rounded-full mt-2 ml-4" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="w-full flex justify-between">
                      <span
                        className={`${
                          idx === 0
                            ? "text-white"
                            : "pl-3 text-[#B7B1B1]"
                        }`}
                      >
                        {step.label}
                      </span>
                      <span className="text-[#B8B2B2]">{step.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipmentTracker;
