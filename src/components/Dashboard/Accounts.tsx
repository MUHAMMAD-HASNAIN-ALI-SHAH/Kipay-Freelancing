const card = [
  {
    color: "bg-[#7A6EFF]",
    currency: "USD",
    ammount: "3,500",
  },
  {
    color: "bg-[#B548C6]",
    currency: "GBP",
    ammount: "3,500",
  },
  {
    color: "bg-[#531DC5]",
    currency: "CAD",
    ammount: "3,500",
  },
  {
    color: "bg-[#4BA83D]",
    currency: "CHF",
    ammount: "3,500",
  },
];

const activities = [
  {
    icon: "ri-shopping-cart-2-fill",
    name: "Grocery",
    time: "5:12 pm",
    status: "pending",
    price: -326.8,
    color: "bg-[#32A7E2]",
  },
  {
    icon: "ri-bus-line",
    name: "Transportation",
    time: "5:12 pm",
    status: "Completed",
    price: -15.0,
    color: "bg-[#B548C6]",
  },
  {
    icon: "ri-home-fill",
    name: "Housing",
    time: "5:12 pm",
    status: "Completed",
    price: -185.75,
    color: "bg-[#FF8700]",
  },
];

const activitesAfterDate = [
  {
    name: "Food and drinks",
    desc: "5:12 pm  •  Makan Steak",
    time: "25-05-2025",
    color: "bg-[#DC3434]",
    amount: -156.0,
    icon: <i className="ri-restaurant-line"></i>,
  },
  {
    name: "Entertainment",
    desc: "5:12 pm  •  Nonton Bioskop",
    time: "25-05-2025",
    color: "bg-[#4BA83D]",
    amount: -35.2,
    icon: <i className="ri-play-circle-fill"></i>,
  },
];

const Accounts = () => {
  return (
    <div className="w-full pt-5 px-4">
      {/* Responsive Buttons */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-wrap sm:flex-nowrap gap-3 mb-4">
          <button className="flex-1 sm:flex-none px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] bg-white text-[#4A4A4A]">
            Account 1
          </button>
          <button className="flex-1 sm:flex-none px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] text-white">
            Account 2
          </button>
          <button className="flex-1 sm:flex-none px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] text-white">
            Account 3
          </button>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-3 mb-4">
          <button className="flex-1 sm:flex-none px-6 py-3 font-semibold border rounded-md bg-[#7A6EFF] text-white border-none">
            Add account
          </button>
        </div>
      </div>

        {/* Responsive cards */}
      <div className="w-full flex items-center gap-4">
        <div className="flex justify-between gap-2 items-center mb-4 w-full">
          {card.map((c, i) => (
            <div
              key={i}
              className={`flex w-[25%] flex-col gap-1 justify-start px-4 rounded-lg py-7 ${c.color}`}
            >
              <img src="./Dashboard/arrow.png" className="w-10 h-10" alt="" />
              <h1 className="font-bold">{c.currency}</h1>
              <h2 className="text-3xl font-bold pt-1">${c.ammount}</h2>
            </div>
          ))}
        </div>
        <div className="px-5 py-5 bg-[#313131] border border-[#3B3A3A] rounded-full cursor-pointer h-20">
          <i className="ri-arrow-right-s-line text-4xl"></i>
        </div>
      </div>

      
      <div className="w-full flex flex-col rounded-lg overflow-x-auto lg:overflow-x-hidden">
        <div className="bg-[#262626] w-[65%] p-4">
          <h4 className="text-md font-semibold mb-3">Recent Transactions</h4>
          <hr className="w-full border-t border-[#313131] py-2 mt-4" />
          <ul className="space-y-4">
            {activities.map((a, i) => (
              <li
                key={i}
                className="flex justify-between items-center text-sm flex-wrap"
              >
                <div className="flex items-center gap-2">
                  <div className={`${a.color} px-4 py-3 rounded-full`}>
                    <i className={`${a.icon} text-xl`}></i>
                  </div>
                  <div>
                    <p>{a.name}</p>
                    <span className="text-[#CAD1DA]">
                      {a.time} - {a.status}
                    </span>
                  </div>
                </div>
                <span>{a.price}</span>
              </li>
            ))}
          </ul>
          <h6 className="text-[#D9DBE9] py-4">Monday, 23 March 2020</h6>
          <hr className="w-full border-t border-[#313131]" />
          <ul className="space-y-4 mt-4">
            {activitesAfterDate.map((a, i) => (
              <li key={i} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className={`${a.color} px-4 py-3 rounded-full`}>
                    {a.icon}
                  </div>
                  <div>
                    <p>{a.name}</p>
                    <p className="text-[#CAD1DA]">{a.desc}</p>
                  </div>
                </div>
                <span>{a.amount}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#262626] w-[35%]">
            
        </div>
      </div>
    </div>
  );
};

export default Accounts;
