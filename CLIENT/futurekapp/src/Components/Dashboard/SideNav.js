import React from 'react'
import { Link } from "react-router-dom";
function SideNav() {
  return (
    <div> <div className="Reactngle2">
    {" "}
    <div className="logo"></div>
    <div className="sidebar">
      <div className="data1">
        <span className="dashboard_1"></span>
        <Link className="active" to="#home">
          Dashboard
        </Link>
      </div>
      <div className="data1">
        <span className="dashboard_2"></span>
        <Link className="nav_item" to="#news">
          Campaigns
        </Link>
      </div>
      <div className="data1">
        <span className="dashboard_3"></span>
        <Link className="nav_item" to="#news">
          Commands
        </Link>
      </div>
      <div className="data1">
        <span className="dashboard_4"></span>
        <Link className="nav_item" to="#news">
          Zones
        </Link>
      </div>
      <div className="data1">
        <span className="dashboard_5"></span>
        <Link className="nav_item" to="#news">
          Channels
        </Link>
      </div>
      <div className="data1">
        <span className="dashboard_6"></span>
        <Link className="nav_item" to="#news">
          Devices
        </Link>
      </div>
      <div className="data1">
        <span className="dashboard_7"></span>
        <Link className="nav_item" to="#news">
          Media Library
        </Link>
      </div>
      <div className="data1">
        <span className="dashboard_8"></span>
        <Link className="nav_item" to="#news">
          History
        </Link>
      </div>
    </div>
  </div></div>
  )
}

export default SideNav