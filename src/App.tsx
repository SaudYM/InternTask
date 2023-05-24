import "./App.css";
import { SignIn } from "./components/SignIn";
import DashBoard from "./components/DashBoard";
import Studnet from "./components/Studnet";
import Payment from "./components/Payment";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <>
      <LandingPage></LandingPage>
    </>
  );
}

export default App;
