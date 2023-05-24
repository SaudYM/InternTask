import Studnet from ".//Studnet";
import Payment from "./Payment";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Home from "./home";
export default function DashBoard() {
  return (
    <Sidebar>
      <TopBar>
        <Home></Home>
      </TopBar>
    </Sidebar>
  );
}
