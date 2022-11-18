import React from "react";
import { Header, Sidebar, Chart} from "../../Components";
import "./DashboardLayuout.scss";

function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="dasbard-sidebar-container">
        <Chart />
        <br/>
        {children}
      </div>
    </>
  );
}

export default DashboardLayout;
