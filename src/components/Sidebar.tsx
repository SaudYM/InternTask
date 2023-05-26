import React from "react";
import { NavLink } from "react-router-dom";
function Sidebar({ children }: any) {
  const menuItems = [
    {
      path: "/DashBoard",
      name: "Home",
      icon: "home.svg",
    },
    {
      path: "/Studnet",
      name: "Studnet",
      icon: "student.svg",
    },
    {
      path: "/Payment",
      name: "Payment",
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
            <img src="user.svg" alt="user" className="UserIMG" />
            <p className="AdminFont">
              Karthi Madesh
              <p className="AdminFont2">Admin</p>
            </p>
          </div>
          <div className="SidebarlinksContainer">
            {menuItems.map((item, index) => (
              <NavLink to={item.path} key={index} className={"link"}>
                <div className="linksContainer">
                  <img className="icon" src={item.icon} alt="" />
                  <span className="linktext">{item.name}</span>
                </div>
              </NavLink>
            ))}
          </div>
          <NavLink to="/" className={"footerLink"}>
            <div className="Footer">
              <span className="linktext2">
                <b>Logout</b>
              </span>
              <img className="icon" src="logout.svg" alt="" />
            </div>
          </NavLink>
        </div>

        <main>{children}</main>
      </div>
    </>
  );
}

export default Sidebar;
