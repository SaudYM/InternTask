import React from "react";

export default function Paymentbody() {
  const payments = [
    {
      name: "Karthi Madesh",
      paymentSchedule: "Monthly",
      billNumber: "123456789",
      amountPaid: "1000",
      balanceAmount: "1000",
      date: "08-Dec, 2021",
      img: "eye.svg",
    },
    {
      name: "Karthi Madesh",
      paymentSchedule: "Monthly",
      billNumber: "123456789",
      amountPaid: "1000",
      balanceAmount: "1000",
      date: "08-Dec, 2021",
      img: "eye.svg",
    },
    {
      name: "Karthi Madesh",
      paymentSchedule: "Monthly",
      billNumber: "123456789",
      amountPaid: "1000",
      balanceAmount: "1000",
      date: "08-Dec, 2021",
      img: "eye.svg",
    },
    {
      name: "Karthi Madesh",
      paymentSchedule: "Monthly",
      billNumber: "123456789",
      amountPaid: "1000",
      balanceAmount: "1000",
      date: "08-Dec, 2021",
      img: "eye.svg",
    },
  ];
  return (
    <>
      {" "}
      <div className="tablediv">
        <table id="customers">
          <tr>
            <th>Name</th>
            <th>Payment Schedule</th>
            <th>Bill Number</th>
            <th>Amount Paid</th>
            <th>Balance amount</th>
            <th>Date</th>
            <th></th>
          </tr>
          {/* <td>Alfreds Futterkiste</td> */}

          {payments.map((payment) => {
            return (
              <>
                <tr>
                  <td>{payment.name}</td>
                  <td>{payment.paymentSchedule}</td>
                  <td>{payment.billNumber}</td>
                  <td>{payment.amountPaid}</td>
                  <td>{payment.balanceAmount}</td>
                  <td>{payment.date}</td>
                  <td>
                    <img src="eye.svg" alt="" />
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
