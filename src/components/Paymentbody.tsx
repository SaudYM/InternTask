import  { useState } from "react";
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
  const [payments] = [props.payments];
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
        {payments.length > 0 && (
          <table id="payments" key="tableofPay">
            <thead>
              <tr>
                <th>Name</th>
                <th>Payment Schedule</th>
                <th>Bill Number</th>
                <th>Amount Paid</th>
                <th>Balance amount</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment: Payment, index: number) => (
                <tr
                  key={payment.billNumber}
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
                      alt="visible"
                      onClick={() => toggleRowVisibility(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
