import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

const Transactions = () => {
  const transactionData = [
    {
      description: "Received Money from Fade",
      id: "#215243624",
      type: "Transfer",
      date: "25-05-2025",
      amount: "$40,000.78",
      color: "bg-[#32A7E2]",
      icon: <i className="ri-arrow-down-line"></i>,
    },
    {
      description: "Sent money to George",
      id: "#215243624",
      type: "Transfer",
      date: "25-05-2025",
      color: "bg-[#8132E2]",
      amount: "$40,000.78",
      icon: <i className="ri-arrow-up-line"></i>,
    },
    {
      description: "Shopping",
      id: "#215243624",
      type: "Transfer",
      date: "25-05-2025",
      color: "bg-[#6D32E2]",
      amount: "$40,000.78",
      icon: <i className="ri-shopping-cart-2-fill"></i>,
    },
    {
      description: "Transport",
      id: "#215243624",
      type: "Transfer",
      date: "25-05-2025",
      color: "bg-[#B548C6]",
      amount: "$40,000.78",
      icon: <i className="ri-bus-line"></i>,
    },
    {
      description: "Housing",
      id: "#215243624",
      type: "Transfer",
      date: "25-05-2025",
      color: "bg-[#B548C6]",
      amount: "$40,000.78",
      icon: <i className="ri-home-2-fill"></i>,
    },
    {
      description: "Food and drinks",
      id: "#215243624",
      type: "Transfer",
      date: "25-05-2025",
      color: "bg-[#DC3434]",
      amount: "$40,000.78",
      icon: <i className="ri-restaurant-line"></i>,
    },
    {
      description: "Entertainment",
      id: "#215243624",
      type: "Transfer",
      date: "25-05-2025",
      color: "bg-[#4BA83D]",
      amount: "$40,000.78",
      icon: <i className="ri-play-circle-fill"></i>,
    },
  ];

  return (
    <div className="w-full pt-5 px-4">
      {/* Responsive Buttons */}
      <div className="flex flex-wrap sm:flex-nowrap gap-3 mb-4">
        <button className="flex-1 sm:flex-none px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] bg-white text-[#4A4A4A]">
          All transactions
        </button>
        <button className="flex-1 sm:flex-none px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] text-white">
          Sent
        </button>
        <button className="flex-1 sm:flex-none px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] text-white">
          Recieved
        </button>
        <button className="flex-1 sm:flex-none px-6 py-2 font-semibold border rounded-md border-[#4A4A4A] text-white">
          Deposits
        </button>
      </div>

      {/* Responsive Table */}
      <div className="w-full bg-[#262626] rounded-lg p-4 overflow-x-auto lg:overflow-x-hidden">
        <Table className="min-w-[700px]">
          <TableHeader>
            <TableRow className="border-none">
              <TableHead>Description</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactionData.map((transaction, index) => (
              <TableRow
                key={index}
                className="hover:bg-none border border-[#2B2B2B]"
              >
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-10 h-10 text-lg rounded-full flex items-center justify-center ${transaction.color}`}
                    >
                      {transaction.icon}
                    </div>
                    <div>{transaction.description}</div>
                  </div>
                </TableCell>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell className="text-right">{transaction.date}</TableCell>
                <TableCell className="text-right">
                  {transaction.amount}
                </TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Transactions;
