import React from "react";
import { Header, Sidebar } from "../../Components";
import "./DashboardLayuout.scss";

function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="dasbard-sidebar-container">{children}</div>
    </>
  );
}

export default DashboardLayout;
