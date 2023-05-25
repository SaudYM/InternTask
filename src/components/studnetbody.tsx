import React from "react";

export default function Studnetbody() {
  const studnets = [
    {
      img: "user.svg",
      name: "Karthi Madesh",
      email: "karthi@gmmail.com",
      phone: "9876543210",
      enroll: "123423256789",
      DoA: "08-Dec, 2021",
    },
    {
      img: "user.svg",
      name: "Karthi Madesh",
      email: "karsdsthi@gmmail.com",
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
      email: "karti@gmmail.com",
      phone: "9876543210",
      enroll: "123456789",
      DoA: "08-Dec, 2021",
    }, {
        img: "user.svg",
        name: "Karthi Madesh",
        email: "karti@gmmail.com",
        phone: "9876543210",
        enroll: "123456789",
        DoA: "08-Dec, 2021",
      }, {
        img: "user.svg",
        name: "Karthi Madesh",
        email: "karti@gmmail.com",
        phone: "9876543210",
        enroll: "123456789",
        DoA: "08-Dec, 2021",
      }, {
      img: "user.svg",
      name: "Karthi Madesh",
      email: "karti@gmmail.com",
      phone: "9876543210",
      enroll: "123456789",
      DoA: "08-Dec, 2021",
    },
  ];
  return (
    <>
    <div className="SbackG">
      <div className="HaedeOfSB">
        <span>Name</span>
        <span>Email</span>
        <span>Phone</span>
        <span>Enroll Number</span>
        <span>Date of admission</span>
      </div>
      <div className="CardsContainer">
        {studnets.map((studnet) => (
          <div className="listcard">
            <img className="studentimg" src="user.svg" alt="studentimg" />
            <span className="name">{studnet.name}</span>
            <span className="email">{studnet.email}</span>
            <span className="phone">{studnet.phone}</span>
            <span className="enroll">{studnet.enroll}</span>
            <span className="date">{studnet.DoA}</span>
            <img className="editlogo" src="edit.svg" alt="" />
            <img className="deletelogo" src="delete.svg" alt="" />
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
