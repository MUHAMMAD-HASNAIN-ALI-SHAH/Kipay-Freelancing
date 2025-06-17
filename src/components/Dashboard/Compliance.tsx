import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";

const data = [
  {
    name: "Passport of UBO (UBO)",
    role: "Ultimate Beneficial Owner",
    date: "25-05-2025",
    uploadStatus: "Uploaded",
    reviewStatus: "Pending",
    showUpload: false,
  },
  {
    name: "Proof of Residence",
    role: "UBO / Signatory",
    date: "25-05-2025",
    uploadStatus: "Uploaded",
    reviewStatus: "Approved",
    showUpload: false,
  },
  {
    name: "Signatory Passport (Certified)",
    role: "Authorized Signatory",
    date: "25-05-2025",
    uploadStatus: "Uploaded",
    reviewStatus: "Approved",
    showUpload: false,
  },
  {
    name: "Certified Extract from Register of Commerce",
    role: "Company",
    date: "25-05-2025",
    uploadStatus: "Not uploaded",
    reviewStatus: "Rejected",
    showUpload: true,
  },
  {
    name: "Articles of Association",
    role: "Company",
    date: "25-05-2025",
    uploadStatus: "Uploaded",
    reviewStatus: "Approved",
    showUpload: false,
  },
  {
    name: "Register of Shareholders / UBO (Certified)",
    role: "Shareholders",
    date: "25-05-2025",
    uploadStatus: "Uploaded",
    reviewStatus: "Approved",
    showUpload: false,
  },
  {
    name: "Register of Shareholders / UBO (Certified)",
    role: "Directors",
    date: "25-05-2025",
    uploadStatus: "Submitted",
    reviewStatus: "Approved",
    showUpload: false,
  },
  {
    name: "Form K (Fill Online)",
    role: "User",
    date: "25-05-2025",
    uploadStatus: "Submitted",
    reviewStatus: "Approved",
    showUpload: false,
  },
  {
    name: "Form K (Fill Online)",
    role: "User",
    date: "25-05-2025",
    uploadStatus: "Submitted",
    reviewStatus: "Approved",
    showUpload: false,
  },
];

const Compliance = () => {
  return (
    <div className="w-full pt-5 px-4 bg-[#262626]">
      <div className="rounded-lg overflow-x-auto">
        <Table className="min-w-[900px] text-white">
          <TableHeader>
            <TableRow className="border-none hover:bg-transparent">
              <TableHead className="text-white">Document Name</TableHead>
              <TableHead className="text-white">Required For</TableHead>
              <TableHead className="text-white">Uploaded on</TableHead>
              <TableHead className="text-white">Upload Status</TableHead>
              <TableHead className="text-white">Review Status</TableHead>
              <TableHead className="text-white text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((doc, i) => (
              <TableRow
                key={i}
                className="border border-[#2B2B2B] hover:bg-transparent transition-colors"
              >
                <TableCell className="text-[#E8E7E7]">{doc.name}</TableCell>
                <TableCell className="text-[#E8E7E7]">{doc.role}</TableCell>
                <TableCell className="text-[#E8E7E7]">{doc.date}</TableCell>
                <TableCell>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold">
                    {doc.uploadStatus}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold">
                    {doc.reviewStatus}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  {doc.showUpload ? (
                    <Button className="text-white text-xs bg-[#7A6EFF] hover:bg-[#685fdf] rounded-lg px-3 py-1 h-8">
                      Upload
                    </Button>
                  ) : (
                    <i className="ri-more-2-fill text-gray-400 text-xl cursor-pointer hover:text-white" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Compliance;
