import Accounts from "./Accounts";
import Card from "./Card";
import Compliance from "./Compliance";
import DashboardMain from "./DashboardMain";
import DashboardNavbar from "./DashboardNavbar";
import Setting from "./Setting";
import Shipments from "./Shipments";
import Support from "./Support";
import Transactions from "./Transactions";

const Main = ({ activeTab }: { activeTab: string }) => {
  return (
    <div className="text-white">
      <DashboardNavbar />
      {activeTab === "Dashboard" && <DashboardMain />}
      {activeTab === "Transactions" && <Transactions />}
      {activeTab === "Cards" && <Card />}
      {activeTab === "Shipments" && <Shipments />}
      {activeTab === "Accounts" && <Accounts />}
      {activeTab === "Compliance" && <Compliance />}
      {activeTab === "Support" && <Support />}
      {activeTab === "Settings" && <Setting />}
    </div>
  );
};

export default Main;
