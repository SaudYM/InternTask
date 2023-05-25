import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Paymentbody from "./Paymentbody";

export default function Payment() {
  return (
    <Sidebar>
      <TopBar>
        <body className="StudnetInfo">
          <div className="StudentsHeader">
            <p>Payment Details</p>
            <div className="leftofHeadr">
              <img src="sort.svg" alt="" />
            </div>
          </div>
          <Paymentbody></Paymentbody>
        </body>
      </TopBar>
    </Sidebar>
  );
}
