import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Studnetbody from "./studnetbody";
export default function Studnet() {
  return (
    <Sidebar>
      <TopBar>
        <body className="StudnetInfo">
          <nav className="StudentsHeader">
            <p>Students List</p>
            <div className="leftofHeadr">
              <img src="sort.svg" alt="" />
              <button>ADD NEW STUDENT</button>
            </div>
          </nav>
          <Studnetbody></Studnetbody>
        </body>
      </TopBar>
    </Sidebar>
  );
}
