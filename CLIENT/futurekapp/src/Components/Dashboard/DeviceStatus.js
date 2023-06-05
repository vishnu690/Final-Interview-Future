import React from "react";

function DeviceStatus() {
  return (
    <div>
      <div className="Rectangle_179">
        {" "}
        <p className="Live_Statistics">Device Status</p>
        <span className="DeviceName">Device Name</span>
        <span className="Status">Status</span>
        <span className="LastResponse">Last Responce</span>
        <div className="Rectangle_188copy">
          <h6 className="Test_device_01">Test device 01</h6>
          <div className="Rectangle_617">
            <span className="Online">Online</span>
          </div>
          <span className="daydate">Wed Apr 26 2023 ; 03:00:10 </span>
        </div>
        <div className="blank">
          <h6 className="Test_device_01">Test device 02</h6>
          <div className="Rectangle_617">
            <span className="Online">Online</span>
          </div>
          <span className="daydate">
            Wed Apr 26 2023 ; 15:00:10 <span className="next"></span>{" "}
          </span>
        </div>
        <div className="Rectangle_186">
          <h6 className="Test_device_01">Test device 03</h6>
          <div className="Rectangle_619">
            <span className="Offline">Offline</span>
          </div>
          <span className="daydate">Wed Apr 26 2023 ; 20:00:10 </span>
        </div>
        <div className="blank1">
          <h6 className="Test_device_01">Test device 04</h6>
          <div className="Rectangle_619">
            <span className="Offline">Offline</span>
          </div>
          <span className="daydate">
            Wed Apr 26 2023 ; 15:00:10 <span className="next"></span>{" "}
          </span>
        </div>
        <div className="Rectangle_188copy1">
          <h6 className="Test_device_01">Test device 05</h6>
          <div className="Rectangle_617">
            <span className="Online">Online</span>
          </div>
          <span className="daydate">Wed Apr 26 2023 ; 12:00:10</span>
        </div>
      </div>
    </div>
  );
}

export default DeviceStatus;
