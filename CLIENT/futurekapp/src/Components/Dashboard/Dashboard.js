import React from "react";
import dashboard from "./assets/dashboard.png";
import cardimage1 from "./assets/cardimage1.png";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import Header from "./Header";
import Footer from "./Footer";
import MainHeader from "./MainHeader";
import General from "./General";
import Statics from "./Statics";
import Maps from "./Maps";
import DeviceStatus from "./DeviceStatus";
import Logs from "./Logs";
function Dashboard() {
  return (
    <div>
      <SideNav />
      <MainHeader />
      <General />
      <Statics />
      <Maps />
      <DeviceStatus />
      <Logs />
      <div className="Rectangle_192">Domain Quota </div>
      <Footer />
      <Header />
    </div>
  );
}

export default Dashboard;
