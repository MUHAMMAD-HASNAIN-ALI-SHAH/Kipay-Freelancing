import { Tooltip } from "@radix-ui/react-tooltip";
import { BarChart, Bar, ResponsiveContainer, XAxis } from "recharts";

const card = [
  { color: "bg-[#7A6EFF]", currency: "USD", ammount: "3,500" },
  { color: "bg-[#B548C6]", currency: "GBP", ammount: "3,500" },
  { color: "bg-[#531DC5]", currency: "CAD", ammount: "3,500" },
  { color: "bg-[#4BA83D]", currency: "CHF", ammount: "3,500" },
];

const barData = [
  { name: "Linux", value: 18000 },
  { name: "Mac", value: 24000 },
  { name: "iOS", value: 18000 },
  { name: "Windows", value: 26000 },
  { name: "Android", value: 20000 },
  { name: "Other", value: 24000 },
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
      {/* Top Buttons */}
      <div className="flex flex-col md:flex-row justify-between gap-3 mb-6">
        <div className="flex flex-wrap gap-2">
          <button className="px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] bg-white text-[#4A4A4A]">
            Account 1
          </button>
          <button className="px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] text-white">
            Account 2
          </button>
          <button className="px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] text-white">
            Account 3
          </button>
        </div>
        <button className="px-6 py-3 font-semibold rounded-md bg-[#7A6EFF] text-white">
          Add account
        </button>
      </div>

      {/* Card Row */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        {card.map((c, i) => (
          <div
            key={i}
            className={`flex-1 min-w-[160px] ${c.color} rounded-lg px-4 py-6`}
          >
            <img
              src="./Dashboard/arrow.png"
              className="w-10 h-10 mb-2"
              alt=""
            />
            <h1 className="font-bold">{c.currency}</h1>
            <h2 className="text-3xl font-bold pt-1">${c.ammount}</h2>
          </div>
        ))}
        <div className="px-5 py-5 bg-[#313131] border border-[#3B3A3A] rounded-full cursor-pointer h-20 flex items-center justify-center">
          <i className="ri-arrow-right-s-line text-4xl"></i>
        </div>
      </div>

      {/* Main Panels */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left Section */}
        <div className="bg-[#262626] w-full lg:w-2/3 rounded-lg p-4">
          <h4 className="text-md font-semibold mb-3 text-white">
            Recent Transactions
          </h4>
          <hr className="w-full border-t border-[#313131] mb-4" />
          <ul className="space-y-4">
            {activities.map((a, i) => (
              <li key={i} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className={`${a.color} px-4 py-3 rounded-full`}>
                    <i className={`${a.icon} text-xl`}></i>
                  </div>
                  <div>
                    <p className="text-white">{a.name}</p>
                    <span className="text-[#CAD1DA]">
                      {a.time} - {a.status}
                    </span>
                  </div>
                </div>
                <span className="text-white">{a.price}</span>
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
                    <p className="text-white">{a.name}</p>
                    <p className="text-[#CAD1DA]">{a.desc}</p>
                  </div>
                </div>
                <span className="text-white">{a.amount}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="bg-[#262626] w-full lg:w-1/3 rounded-lg flex flex-col">
          <div className="p-4 w-full">
            <h1 className="text-white text-lg font-semibold">
              Account Information
            </h1>
            <hr className="w-full border-t border-[#313131] my-4" />
            <div className="space-y-3">
              {[
                { label: "Account Number", value: "012345678902" },
                { label: "IBAN", value: "012345678902" },
                { label: "SWIFT/BIC code", value: "012345678902" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="text-sm text-gray-300">{item.label}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">
                      {item.value}
                    </span>
                    <i className="ri-file-copy-line text-gray-400 hover:text-white cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button className="flex-1 py-2 bg-[#2A2A2A] text-white rounded-md border border-[#4A4A4A] hover:bg-[#333333]">
                Edit
              </button>
              <button className="flex-1 py-2 bg-[#7A6EFF] text-white rounded-md hover:bg-[#675ce7]">
                Delete account
              </button>
            </div>
          </div>
          <div className="p-4 w-full">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <XAxis dataKey="name" stroke="#999" />
                <Tooltip />
                <Bar dataKey="value" fill="#735BF2" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
