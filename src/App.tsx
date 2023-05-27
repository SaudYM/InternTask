import "./App.css";
import { SignIn } from "./components/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Studnet from "./components/Studnet";
import Payment from "./components/Payment";
import { useState } from "react";
function App() {
  const [payments, setPayments] = useState([
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
  ]);
  const [studnets, setStudnets] = useState([
    {
      id: 1,
      img: "user.svg",
      name: "Karthi Madesh",
      email: "karthi@gmmail.com",
      phone: "9876543210",
      enroll: "123423256789",
      DoA: "08-Dec, 2021",
    },
    {
      id: 2,
      img: "user.svg",
      name: "Karthi Madesh",
      email: "karsdsthi@gmmail.com",
      phone: "9876543210",
      enroll: "123456789",
      DoA: "08-Dec, 2021",
    },
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/DashBoard" element={<DashBoard studnets={studnets} />} />
        <Route
          path="/Studnet"
          element={<Studnet studnets={studnets} setStudnets={setStudnets} />}
        />
        <Route path="/Payment" element={<Payment payments={payments} setPayments={setPayments} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
