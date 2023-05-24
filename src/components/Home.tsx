import React from "react";

export default function Home() {
  return (
    <div className="StudentContainer">
      <div className="SummeryCards">
        <div className="CardInfo">
          <img src="StudentDB.svg" alt="" />
          <p className="Tag">Student</p>
          <p className="NumberDB">243</p>
        </div>
      </div>
      <div className="SummeryCards">
        <img src="StudentDB.svg" alt="" />
        <p>Student</p>
        <p className="NumberDB">243</p>
      </div>
      <div className="SummeryCards">
        <img src="StudentDB.svg" alt="" />
        <p>Student</p>
        <p className="NumberDB">243</p>
      </div>
      <div className="SummeryCards">
        <img src="StudentDB.svg" alt="" />
        <p>Student</p>
        <p className="NumberDB">243</p>
      </div>
    </div>
  );
}
