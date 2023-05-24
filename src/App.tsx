import "./App.css";
import { SignIn } from "./components/SignIn";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import DashBoard from "./components/DashBoard";
import Studnet from "./components/Studnet";
import Payment from "./components/Payment";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/Studnet" element={<Studnet />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
