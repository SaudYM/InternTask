import DashBoard from "./DashBoard";
import Studnet from "./Studnet";
import Payment from "./Payment";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
export default function LandingPage() {
  return (
    <BrowserRouter>
      <Sidebar>
        <TopBar>
          <Routes>
            <Route path="/DashBoard" element={<DashBoard />} />
            <Route path="/Studnet" element={<Studnet />} />
            <Route path="/Payment" element={<Payment />} />
          </Routes>
        </TopBar>
      </Sidebar>
    </BrowserRouter>
  );
}
