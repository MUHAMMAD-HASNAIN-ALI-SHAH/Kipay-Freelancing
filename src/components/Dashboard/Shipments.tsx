import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

const data = [
  {
    company: "HighR",
    orderId: "ATB548824",
    weight: "altig",
    arrivalDate: "26-90-2025",
    route: "775 testing times R4",
    status: "in transit",
    image: <img src="./Dashboard/majek.png" alt="" className="w-6 h-6" />,
    color: "bg-[#32A7E2]",
  },
  {
    company: "NotT",
    orderId: "ATB548824",
    weight: "altig",
    arrivalDate: "26-90-2025",
    route: "2050 route set",
    status: "inventry",
    image: <img src="./Dashboard/necy.png" alt="" className="w-6 h-6" />,
    color: "bg-[#6D32E2]",
  },
  {
    company: "NotT",
    orderId: "ATB548824",
    weight: "tiltig",
    arrivalDate: "25-90-2025",
    route: "2080 Route St.",
    status: "in transit",
    image: <img src="./Dashboard/krehf.png" alt="" className="w-6 h-6" />,
    color: "bg-[#B548C6]",
  },
  {
    company: "TotalOR",
    orderId: "ATB548824",
    weight: "altig",
    arrivalDate: "19-90-2025",
    route: "775 testing times R4",
    status: "in transit",
    image: <img src="./Dashboard/housey.png" alt="" className="w-6 h-6" />,
    color: "bg-[#FF8700]",
  },
];

const Shipments = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Top Section */}
      <div className="w-full flex flex-col xl:flex-row justify-between gap-4 items-center">
        <div className="w-full xl:w-[40%] flex flex-col gap-3 bg-[#262626] p-4 rounded-lg">
          <input
            placeholder="Search transactions"
            className="pl-8 pr-12 py-1.5 h-12 w-full rounded-md bg-[#2A2A2A] text-sm text-white outline-[#4A4A4A] focus:outline-none"
          />
          <button className="w-full bg-[#7A6EFF] py-2 px-4 rounded-lg font-bold">
            Track items
          </button>
        </div>
        <div className="w-full xl:w-[60%] hidden xl:block">
          <img
            src="./Dashboard/shipment-top.png"
            className="w-full h-32 object-cover rounded-lg"
            alt=""
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between gap-4">
        <div className="w-full lg:w-[65%] flex flex-col gap-3 bg-[#262626] p-4 rounded-lg">
          <h1 className="font-bold pl-2">Shipment activities</h1>
          <img src="./Dashboard/graph.png" className="h-72 object-contain" alt="" />
        </div>
        <div className="w-full lg:w-[35%] flex flex-col gap-3 bg-[#262626] p-4 rounded-lg">
          <h1 className="font-bold pl-2">Shipment Map</h1>
          <img src="./Dashboard/map.png" className="h-72 object-contain" alt="" />
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="w-full flex flex-col bg-[#262626] p-4 gap-4 rounded-lg">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <h1 className="text-xl font-bold">Shipment Overview</h1>
          <div className="flex flex-wrap gap-2">
            {["All shipments", "Delivered", "In transit", "Processing", "Pending"].map(
              (label, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 font-semibold border rounded-md ${
                    i === 0
                      ? "bg-white text-[#4A4A4A]"
                      : "text-white border-[#4A4A4A]"
                  }`}
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <Table className="min-w-[800px] w-full">
            <TableHeader>
              <TableRow className="border-none">
                {["Company", "Order ID", "Date", "Arrival Date", "Route", "Status"].map(
                  (head, i) => (
                    <TableHead key={i} className="text-white text-base font-bold">
                      {head}
                    </TableHead>
                  )
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((data, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-none border border-[#2B2B2B]"
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${data.color}`}
                      >
                        {data.image}
                      </div>
                      <div>{data.company}</div>
                    </div>
                  </TableCell>
                  <TableCell>{data.orderId}</TableCell>
                  <TableCell>{data.weight}</TableCell>
                  <TableCell>{data.arrivalDate}</TableCell>
                  <TableCell>{data.route}</TableCell>
                  <TableCell>{data.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Shipments;
