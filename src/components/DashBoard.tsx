
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Home from "./Home";
export default function DashBoard( props: any) {
  return (
    <Sidebar>
      <TopBar>
        <Home studnets={props.studnets}></Home>
      </TopBar>
    </Sidebar>
  );
}
