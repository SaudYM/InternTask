import React from "react";
import { NavLink } from "react-router-dom";
function Sidebar({ children }: any) {
  const menuItems = [
    {
      path: "/DashBoard",
      name: "dashboard",
      icon: "home.svg",
    },
    {
      path: "/Studnet",
      name: "studnet",
      icon: "student.svg",
    },
    {
      path: "/Payment",
      name: "payment",
      icon: "payment.svg",
    },
    {
      path: "/report",
      name: "Report",
      icon: "repo.svg",
    },
    {
      path: "/Settings",
      name: "Settings",
      icon: "settings.svg",
    },
  ];

  return (
    <>
      <div className="Container">
        <div className="sidebar">
          <div className="top_section">
            <img src="Logo.svg" alt="logo" className="LogoInSide" />
          </div>
          <div className="UserInfo">
            <img src="user.png" alt="user" className="UserIMG" />
            <p className="AdminFont">
              Karthi Madesh
              <p className="AdminFont2">Admin</p>
            </p>
          </div>
          {menuItems.map((item, index) => (
            <NavLink to={item.path} key={index} className={"link"}>
              <img className="icon" src={item.icon} alt="" />
              <span className="linktext">{item.name}</span>
            </NavLink>
          ))}
          <div className="Footer">
            <span className="linktext">Logout</span>
            <img className="icon" src="logout.svg" alt="" />

          </div>
        </div>

        <main>{children}</main>
      </div>
    </>
  );
}

export default Sidebar;
