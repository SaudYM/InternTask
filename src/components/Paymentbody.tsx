import React, { useState } from "react";
interface Payment {
  name: string;
  paymentSchedule: string;
  billNumber: string;
  amountPaid: string;
  balanceAmount: string;
  date: string;
  img: string;
}
export default function Paymentbody(props: any) {
  const [hiddenRows, setHiddenRows] = useState([{}]);
  const [payments, setPayments] = [props.payments, props.setPayments];
  const toggleRowVisibility = (index: number) => {
    if (hiddenRows.includes(index)) {
      setHiddenRows(hiddenRows.filter((item) => item !== index));
    } else {
      setHiddenRows([...hiddenRows, index]);
    }
  };
  return (
    <>
      {" "}
      <div className="tablediv">
        <table id="payments">
          <tr>
            <th>Name</th>
            <th>Payment Schedule</th>
            <th>Bill Number</th>
            <th>Amount Paid</th>
            <th>Balance amount</th>
            <th>Date</th>
            <th></th>
          </tr>

          {payments.map((payment: Payment, index: number) => {
            return (
              <>
                <tr
                  key={index}
                  className={hiddenRows.includes(index) ? "hidden-row" : ""}
                >
                  <td>{payment.name}</td>
                  <td>{payment.paymentSchedule}</td>
                  <td>{payment.billNumber}</td>
                  <td>{payment.amountPaid}</td>
                  <td>{payment.balanceAmount}</td>
                  <td>{payment.date}</td>
                  <td>
                    <img
                      src="eye.svg"
                      alt="visiable"
                      onClick={() => toggleRowVisibility(index)}
                    />
                  </td>
                </tr>{" "}
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}
