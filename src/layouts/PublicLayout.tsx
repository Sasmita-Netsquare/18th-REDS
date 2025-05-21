import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const PublicLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "240px",
          backgroundColor: "#fff",
          borderRight: "1px solid #e5e7eb",
        }}
      >
        <Sidebar />
      </aside>

      {/* Main area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <header style={{ borderBottom: "1px solid #e5e7eb" }}>
          <Header />
        </header>

        {/* Page content */}
        <main
          style={{
            flex: 1,
            padding: "1.5rem",
            backgroundColor: "#f9fafb",
            overflow: "auto",
          }}
        >
          <Outlet /> {/* 👈 This is where nested routes render */}
        </main>
      </div>
    </div>
  );
};

export default PublicLayout;
