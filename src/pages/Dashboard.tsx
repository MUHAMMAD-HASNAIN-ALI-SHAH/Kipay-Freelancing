import Main from "../components/Dashboard/Main";
import { AppSidebar } from "../components/sidebar/AppSidebar";
import { SidebarProvider } from "../components/ui/sidebar";

const Dashboard = () => {
  return (
    <div className="w-full h-full bg-[#2A2A2A] overflow-x-hidden">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full p-4">
          <Main />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
