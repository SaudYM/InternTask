import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Paymentbody from "./Paymentbody";

export default function Payment(props: any) {
  const [payments, setPayments] = [props.payments, props.setPayments];

  return (
    <Sidebar>
      <TopBar>
        <div className="StudnetInfo">
          <div className="StudentsHeader">
            <p>Payment Details</p>
            <div className="leftofHeadr">
              <img src="sort.svg" alt="" />
            </div>
          </div>
          <Paymentbody
            payments={payments}
            setPayments={setPayments}
          ></Paymentbody>
        </div>
      </TopBar>
    </Sidebar>
  );
}
