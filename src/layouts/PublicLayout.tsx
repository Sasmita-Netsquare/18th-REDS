import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
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
          {children}
        </main>
      </div>
    </div>
  );
};

export default PublicLayout;
