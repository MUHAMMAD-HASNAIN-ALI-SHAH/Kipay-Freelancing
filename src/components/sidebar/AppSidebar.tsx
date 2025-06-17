import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "../../components/ui/sidebar";

import {
  Home,
  CreditCard,
  Truck,
  User,
  ShieldCheck,
  Headphones,
  Settings,
  Moon,
  LogOut,
  CardSim,
} from "lucide-react";

const items = [
  { icon: Home, title: "Dashboard" },
  { icon: CreditCard, title: "Transactions" },
  { icon: CardSim, title: "Cards" },
  { icon: Truck, title: "Shipments" },
  { icon: User, title: "Accounts" },
  { icon: ShieldCheck, title: "Compliance" },
  { icon: Headphones, title: "Support" },
  { icon: Settings, title: "Settings" },
];

export function AppSidebar({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  return (
    <Sidebar className="bg-[#262626] border-r border-[#262626] text-white h-screen w-64 px-4">
      {/* Header */}
      <SidebarHeader className="flex justify-start py-6 bg-[#262626]">
        <img src="./Authentication/logo.png" alt="Logo" className="w-14 h-14" />
      </SidebarHeader>

      <hr className="w-full border-t border-[#313131]" />

      {/* Content */}
      <SidebarContent className="bg-[#262626]">
        <SidebarGroup>
          <div>
            <br />
            <br />
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, idx) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    onClick={() => setActiveTab(item.title)}
                    className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
                      activeTab === item.title
                        ? "hover:bg-[#7A6EFF]"
                        : "hover:bg-[#2F2F2F]"
                    } ${activeTab === item.title ? "bg-[#7A6EFF]" : ""}`}
                  >
                    <a className="flex items-center gap-4 w-full">
                      <item.icon
                        size={20}
                        className={`${
                          idx === 0 ? "text-white" : "text-gray-300"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium ${
                          idx === 0 ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="px-4 pb-4 space-y-4 bg-[#262626]">
        {/* Light Mode */}
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-3">
            <Moon size={18} className="text-white" />
            <span className="text-sm text-white font-medium">Light Mode</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-600 rounded-full peer peer-checked:bg-violet-500"></div>
            <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></div>
          </label>
        </div>

        {/* Logout */}
        <div className="flex items-center gap-3 px-3 py-2 bg-[#313131] rounded-lg cursor-pointer">
          <LogOut size={18} className="text-red-500" />
          <span className="text-sm font-medium">Logout</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
