import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import {
  RiCheckLine,
  RiMailSendLine,
  RiTruckLine,
  RiBankCardLine,
  RiWallet3Line,
} from "react-icons/ri";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import RecieveMoney from "./popup/RecieveMoney";
import AddAccount from "./popup/AddAccount";
import ConfirmDetails from "./popup/ConfirmDetails";
import SendMoney from "./popup/SendMoney";
import EnterDetails from "./popup/EnterDetails";
import Upload from "./popup/Upload";
import Transaction from "./popup/TransactionPin";
import RequestMoney from "./popup/RequestMoney";
import Share from "./popup/Share";
import Awating from "./popup/Awating";

const actionItems = [
  { icon: <BiPlus size={20} />, label: "Deposit", color: "bg-[#32A7E2]" },
  { icon: <RiCheckLine size={20} />, label: "Receive", color: "bg-[#B548C6]" },
  {
    icon: <RiMailSendLine size={20} />,
    label: "Request",
    color: "bg-[#32A7E2]",
  },
  { icon: <RiTruckLine size={20} />, label: "Shipment", color: "bg-[#FF8700]" },
  { icon: <RiBankCardLine size={20} />, label: "Cards", color: "bg-[#6D32E2]" },
  {
    icon: <RiWallet3Line size={20} />,
    label: "Crypto portfolio",
    color: "bg-[#B548C6]",
  },
];

const barData = [
  { name: "Jan", value: 18000 },
  { name: "Feb", value: 24000 },
  { name: "Mar", value: 18000 },
  { name: "Apr", value: 26000 },
  { name: "May", value: 20000 },
  { name: "Jun", value: 24000 },
  { name: "Jul", value: 30000 },
  { name: "Aug", value: 29000 },
  { name: "Sep", value: 10000 },
  { name: "Oct", value: 27000 },
  { name: "Nov", value: 28000 },
  { name: "Dec", value: 23000 },
];

const Transactions = [
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
    name: "Transporation",
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

const crypto = [
  {
    icon: <img src="./Dashboard/USDT.png" alt="" />,
    name: "USDT",
    desc: "USD",
    price: 12000,
    rounded: 0.99,
    color: "bg-[#26A17B]",
  },
  {
    icon: <img src="./Dashboard/BTC.png" alt="" />,
    name: "BTC",
    desc: "Bitcoin",
    price: 0.8534,
    rounded: 97000,
    color: "bg-[#F7931A]",
  },
  {
    icon: <img src="./Dashboard/ETH.png" alt="" />,
    name: "ETH",
    desc: "Ethereum",
    price: 200,
    rounded: 1700,
    color: "bg-[#627EEA]",
  },
];

const pieData = [
  { name: "Transfer", value: 52.1 },
  { name: "Transportation", value: 22.5 },
  { name: "Grocery", value: 11.9 },
  { name: "Other", value: 11.2 },
];

const colors = ["#735BF2", "#49A3F1", "#26C09D", "#F3BA2F"];

const DashboardMain = () => {
  const [showModal, setShowModal] = useState(false);

  const [popupIndex, setPopupIndex] = useState(0);

  return (
    <div className="w-full flex flex-col xl:flex-row gap-4">
      {/* LEFT SECTION */}
      <div className="w-full xl:w-[70%] flex flex-col gap-5">
        {/* Top Info Boxes */}
        <div className="flex flex-col sm:flex-row w-full relative">
          <div className="bg-[#1F1F1F] p-6 py-8 w-full sm:w-1/2">
            <p className="text-gray-400 text-sm">Available Balance</p>
            <h3 className="text-4xl font-semibold">$40,000.65</h3>
          </div>
          <div className="bg-[#1F1F1F] p-6 py-8 w-full sm:w-1/2">
            <p className="text-gray-400 text-sm">Shipment in transit</p>
            <h3 className="text-4xl font-semibold">123</h3>
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-[#1F1F1F] rounded-md p-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {actionItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:opacity-90"
            >
              <div className={`${item.color} p-3 rounded-full`}>
                {item.icon}
              </div>
              <span className="text-sm text-gray-300">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Bar Chart */}
        <div className="bg-[#1F1F1F] p-4 rounded-md w-full">
          <h4 className="text-md font-semibold mb-4">Transaction Overview</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="name" stroke="#999" />
              <Tooltip />
              <Bar dataKey="value" fill="#735BF2" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Transactions */}
        <div className="bg-[#1F1F1F] p-4 rounded-md">
          <h4 className="text-md font-semibold mb-3">Recent Transactions</h4>
          <ul className="space-y-2">
            {Transactions.map((t, i) => (
              <li key={i} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className={`${t.color} px-4 py-3 rounded-full`}>
                    <i className={`${t.icon} text-xl`}></i>
                  </div>
                  <div className="flex flex-col">
                    <span>{t.name}</span>
                    <span className="text-[#CAD1DA]">
                      {t.time} - {t.status}
                    </span>
                  </div>
                </div>
                <span>{t.price}</span>
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
          <div className="flex flex-col sm:flex-row mt-4">
            <div className="flex items-center justify-center w-full sm:w-1/2">
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
            <div className="flex flex-col justify-center gap-3 w-full sm:w-1/2">
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

        {/* Quick Transfers */}
        <div className="bg-[#1F1F1F] p-4 rounded-lg">
          <h4 className="text-md font-semibold mb-3">Quick Transfers</h4>
          <hr className="w-full border-t border-[#313131] py-2" />
          <div className="flex gap-3 flex-wrap items-center justify-between mb-3">
            {["Anna", "Zach", "Lizzy"].map((name, i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/40?img=${i + 1}`}
                className="w-16 h-16 rounded-full"
                alt={name}
              />
            ))}
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2A2A2A] cursor-pointer hover:bg-[#313131]">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </div>
          <input
            placeholder="Write amount"
            className="w-full p-2 py-3 mb-3 rounded-lg text-sm bg-[#2A2A2A] text-white"
          />
          <div className="flex gap-2 flex-wrap sm:flex-nowrap justify-between">
            <button className="text-md font-semibold rounded-lg border border-gray-600 py-2 px-6">
              Save as draft
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="text-md font-semibold px-6 py-2 rounded-lg bg-[#735BF2]"
            >
              Send money
            </button>
          </div>
        </div>

        {/* Crypto Portfolio */}
        <div className="bg-[#1F1F1F] p-4 rounded-lg">
          <h4 className="text-md font-semibold mb-3">Crypto Portfolio</h4>
          <ul className="space-y-2 text-sm">
            {crypto.map((c, i) => (
              <li key={i} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className={`${c.color} px-4 py-3 rounded-full`}>
                    {c.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>{c.name}</span>
                    <span className="text-[#8E8E93]">{c.desc}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span>{c.price}</span>
                  <span className="text-[#8E8E93]">≈ {c.rounded}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center">
          {popupIndex === 0 && (
            <RecieveMoney
              popupIndex={popupIndex}
              setPopupIndex={setPopupIndex}
              setShowModal={setShowModal}
            />
          )}
          {popupIndex === 1 && (
            <AddAccount
              popupIndex={popupIndex}
              setPopupIndex={setPopupIndex}
              setShowModal={setShowModal}
            />
          )}
          {popupIndex === 2 && (
            <SendMoney
              popupIndex={popupIndex}
              setPopupIndex={setPopupIndex}
              setShowModal={setShowModal}
            />
          )}
          {popupIndex === 3 && (
            <EnterDetails
              popupIndex={popupIndex}
              setPopupIndex={setPopupIndex}
              setShowModal={setShowModal}
            />
          )}
          {popupIndex === 4 && (
            <ConfirmDetails
              popupIndex={popupIndex}
              setPopupIndex={setPopupIndex}
              setShowModal={setShowModal}
            />
          )}
          {popupIndex === 5 && (
            <Upload
              popupIndex={popupIndex}
              setPopupIndex={setPopupIndex}
              setShowModal={setShowModal}
            />
          )}
          {popupIndex === 6 && (
            <Transaction
              popupIndex={popupIndex}
              setPopupIndex={setPopupIndex}
              setShowModal={setShowModal}
            />
          )}
          {popupIndex === 7 && (
            <RequestMoney
              popupIndex={popupIndex}
              setPopupIndex={setPopupIndex}
              setShowModal={setShowModal}
            />
          )}
          {popupIndex === 8 && (
            <Share
              popupIndex={popupIndex}
              setPopupIndex={setPopupIndex}
              setShowModal={setShowModal}
            />
          )}
          {popupIndex === 9 && (
            <Awating
              popupIndex={popupIndex}
              setPopupIndex={setPopupIndex}
              setShowModal={setShowModal}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardMain;
