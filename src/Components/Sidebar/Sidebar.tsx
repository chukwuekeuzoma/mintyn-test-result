import React from "react";
import "./Sidebar.scss";
import OverviewIcon from "../../Asset/Svg/OverviewIcon.svg";
import Allorders from "../../Asset/Svg/Allorders.svg";
import Allpayment from "../../Asset/Svg/Allpaymentwallet.svg";
import Manualsettelment from "../../Asset/Svg/Manualsettelment.svg";
import Merchentprofile from "../../Asset/Svg/Merchentprofile.svg";
import Pendingorders from "../../Asset/Svg/Pendingorders.svg";
import Reconcilledorders from "../../Asset/Svg/Reconcilledorders.svg";
import ReconcilledPaymentswallet from "../../Asset/Svg/ReconcilledPaymentswallet.svg";
import UnReconcilledPaymentswallet from "../../Asset/Svg/UnReconcilledPaymentswallet.svg";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="generate-invoice">Generate Invoice</div>
      <div className="main">Main</div>
      <div className="overview">
        <img src={OverviewIcon} alt="overviewicon" className="overview-icon" />
        <div>Overview</div>
      </div>
      <div className="main">Payments</div>
      <div className="overview">
        <img src={Allpayment} alt="overviewicon" className="overview-icon" />
        All Payments
      </div>
      <div className="overview-one">
        <img
          src={ReconcilledPaymentswallet}
          alt="overviewicon"
          className="overview-icon-one"
        />
        Reconcilled Payments
      </div>
      <div className="overview-one">
        <img
          src={UnReconcilledPaymentswallet}
          alt="overviewicon"
          className="overview-icon-one"
        />
        Un - Reconcilled Payments
      </div>
      <div className="overview-one">
        <img
          src={Manualsettelment}
          alt="overviewicon"
          className="overview-icon-one"
        />
        Manual Settlement
      </div>
      <div className="main">Orders</div>
      <div className="overview">
        <img src={Allorders} alt="overviewicon" className="overview-icon" />
        All Orders
      </div>
      <div className="overview-one">
        <img
          src={Pendingorders}
          alt="overviewicon"
          className="overview-icon-one"
        />
        Pending Orders
      </div>
      <div className="overview-one">
        <img
          src={Reconcilledorders}
          alt="overviewicon"
          className="overview-icon-one"
        />
        Reconcilled Orders
      </div>
      <div className="overview">
        <img
          src={Merchentprofile}
          alt="overviewicon"
          className="overview-icon"
        />
        Merchant Profile
      </div>
    </div>
  );
}

export default Sidebar;
