import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/Dashboard/Main";

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-[#2A2A2A] p-6">
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
