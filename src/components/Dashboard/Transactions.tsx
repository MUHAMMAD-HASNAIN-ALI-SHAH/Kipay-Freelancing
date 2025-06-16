const Transactions = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row gap-4">
        {/* transactions */}
      <div className="flex gap-3">
        <button className="px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] bg-white text-[#4A4A4A]">All transactions</button>
        <button className="px-6 py-2 font-semibold border rounded-md border-[#4A4A4A]">Sent</button>
        <button className="px-6 py-2 font-semibold border rounded-md border-[#4A4A4A]">Recieved</button>
        <button className="px-6 py-2 font-semibold border rounded-md border-[#4A4A4A]">Deposits</button>
      </div>
    </div>
  );
};

export default Transactions;
