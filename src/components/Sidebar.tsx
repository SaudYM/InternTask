import React from "react";

function Sidebar() {
  return (
    <>
      <div>
        <div className="SaidebarContainer">
          <img src="Logo.svg" alt="logo" className="LogoInNav" />

          <div className="UserInfo">
            <img src="user.png" alt="user" className="UserIMG" />
            <p className="AdminFont">
              Karthi Madesh
              <p className="AdminFont2">Admin</p>
            </p>
          </div>

          <div className="navbuttons">
            <button>
              <img src="home.svg" alt="jome" />
              Home
            </button>
            <button>
              <img src="student.svg" alt="studentIcon" />
              Students
            </button>
            <button>
              <img src="payment.svg" alt="PaymentIcon" />
              Payment
            </button>
            <button>
              <img src="repo.svg" alt="reporIcon" />
              Report
            </button>
            <button>
              <img src="settings.svg" alt="SettingsIcon" />
              Settings
            </button>
          </div>
          <div className="FooterOfNav">
            <button className="LogOutButton">Logout</button>
            <img src="logout.svg" alt="logouticon" className="logouticon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
