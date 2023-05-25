import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function Studnet() {
  const studnets = [
    {
      img: "user.svg",
      name: "Karthi Madesh",
      email: "karthi@gmmail.com",
      phone: "9876543210",
      enroll: "123456789",
      DoA: "08-Dec, 2021",
    },
    {
      img: "user.svg",
      name: "Karthi Madesh",
      email: "karthi@gmmail.com",
      phone: "9876543210",
      enroll: "123456789",
      DoA: "08-Dec, 2021",
    },
    {
      img: "user.svg",
      name: "Karthi Madesh",
      email: "karthi@gmmail.com",
      phone: "9876543210",
      enroll: "123456789",
      DoA: "08-Dec, 2021",
    },
    {
      img: "user.svg",
      name: "Karthi Madesh",
      email: "karthi@gmmail.com",
      phone: "9876543210",
      enroll: "123456789",
      DoA: "08-Dec, 2021",
    },
  ];
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
            <div className="studentCard"></div>
          </nav>
        </body>
      </TopBar>
    </Sidebar>
  );
}
