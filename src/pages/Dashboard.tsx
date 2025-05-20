import DashboardCompnent from "../components/layouts/DashboardCompnent";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 bg-gray-100 flex-1 overflow-auto">
          <DashboardCompnent />
        </main>
      </div>
    </div>
  );
}
