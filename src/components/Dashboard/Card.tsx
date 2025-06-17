import { PieChart, Pie, Cell } from "recharts";

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
    amount: -156.000,
    icon: <i className="ri-restaurant-line"></i>,
  },
  {
    name: "Entertainment",
    desc: "5:12 pm  •  Nonton Bioskop",
    time: "25-05-2025",
    color: "bg-[#4BA83D]",
    amount: -35.200,
    icon: <i className="ri-play-circle-fill"></i>,
  },
];

const cardSetting = [
  {
    icon: <img src="./Dashboard/block.png" alt="" className="w-6 h-6" />,
    name: "Block Card",
    desc: "Instantly block your card",
  },
  {
    icon: <img src="./Dashboard/change-pin.png" alt="" className="w-6 h-6" />,
    name: "Change pin code",
    desc: "Choose another pin code",
  },
  {
    icon: <img src="./Dashboard/set-budget.png" alt="" className="w-6 h-6" />,
    name: "Set budget",
    desc: "Manage your settings",
  },
];

const pieData = [
  { name: "Transfer", value: 52.1 },
  { name: "Transportation", value: 22.5 },
  { name: "Grocery", value: 11.9 },
  { name: "Other", value: 11.2 },
];

const colors = ["#735BF2", "#49A3F1", "#26C09D", "#F3BA2F"];

const Card = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row gap-6">
      {/* LEFT SECTION */}
      <div className="w-full xl:w-[70%] bg-[#1F1F1F] p-4 rounded-md">
        {/* Active Card */}
        <div className="pt-7">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">My Active Card</h1>
            <i className="ri-more-2-fill"></i>
          </div>
          <hr className="w-full border-t border-[#313131]" />
          <div className="flex flex-col lg:flex-row justify-start items-center gap-7 my-6">
            <img
              src="./Dashboard/card.png"
              className="w-full max-w-xs rounded-xl"
              alt="Active Card"
            />
            <div className="px-5 py-5 bg-[#2A2A2A] border border-[#3B3A3A] rounded-full cursor-pointer">
              <i className="ri-add-fill text-4xl"></i>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <h2 className="text-2xl font-semibold">Monthly Limit</h2>
            <p className="text-sm text-[#CAD1DA]">$4,000 used from $12,000</p>
          </div>
          <div className="my-6 relative">
            <hr className="absolute border-t-8 border-[#7A6EFF] w-[40%] rounded-lg" />
            <hr className="w-full border-t-8 border-[#313131] rounded-lg" />
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
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
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full xl:w-[30%] space-y-4">
        {/* Pie Chart */}
        <div className="bg-[#1F1F1F] p-4 rounded-lg">
          <h4 className="text-md font-semibold mb-3">Expenses Statistics</h4>
          <hr className="w-full border-t border-[#313131]" />
          <div className="flex flex-col sm:flex-row items-center mt-4 gap-6">
            <div className="flex justify-center w-full sm:w-1/2">
              <PieChart width={150} height={150}>
                <Pie
                  data={pieData}
                  cx={75}
                  cy={75}
                  innerRadius={35}
                  outerRadius={60}
                  dataKey="value"
                >
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={colors[index]} />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <div className="flex flex-col gap-3 w-full sm:w-1/2">
              {pieData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm text-white"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: colors[index] }}
                    ></div>
                    <span>{item.name}</span>
                  </div>
                  <span className="text-gray-400">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card Settings */}
        <div className="bg-[#1F1F1F] p-4 rounded-lg">
          <h4 className="text-lg font-bold mb-3">Card settings</h4>
          <hr className="w-full border-t border-[#313131] py-2 mt-4" />
          <ul className="space-y-4 text-sm">
            {cardSetting.map((c, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="px-3 py-3 rounded-full bg-[#2A2A2A]">
                  {c.icon}
                </div>
                <div className="flex flex-col">
                  <span>{c.name}</span>
                  <span className="text-[#8E8E93]">{c.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
