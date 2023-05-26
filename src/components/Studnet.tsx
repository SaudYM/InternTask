import { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import AddStudnet from "./AddStudnet";
import EditStudnet from "./EditStudent";
interface Student {
  id: number;
  img: string;
  name: string;
  email: string;
  phone: string;
  enroll: string;
  DoA: string;
}
export default function Studnet() {
  const removeStudnet = (deletingstudent: Student) => {
    const newStudnets = studnets.filter(
      (studnet) => studnet.id !== deletingstudent.id
    );
    setStudnets(newStudnets);
  };
  const [studnets, setStudnets] = useState([
    {
      id: 1,
      img: "user.svg",
      name: "Karthi Madesh",
      email: "karthi@gmmail.com",
      phone: "9876543210",
      enroll: "123423256789",
      DoA: "08-Dec, 2021",
    },
    {
      id: 2,
      img: "user.svg",
      name: "Karthi Madesh",
      email: "karsdsthi@gmmail.com",
      phone: "9876543210",
      enroll: "123456789",
      DoA: "08-Dec, 2021",
    },
  ]);
  function addStudnet(
    name: any,
    email: any,
    phone: any,
    enroll: any,
    DoA: any
  ) {
    const newStudnet = {
      id: studnets.length + 1,
      img: "user.svg",
      name: name,
      email: email,
      phone: phone,
      enroll: enroll,
      DoA: DoA,
    };
    setStudnets([...studnets, newStudnet]);
  }
  function EditStudent(
    id: any,
    name: any,
    email: any,
    phone: any,
    enroll: any,
    DoA: any
  ) {
    const updatedStundet = studnets.map((studnet) => {
      if (id === studnet.id) {
        return {
          ...studnet,
          id: studnet.id,
          name: name,
          email: email,
          phone: phone,
          enroll: enroll,
          DoA: DoA,
        };
      } else {
        return studnet;
      }
    });
    setStudnets(updatedStundet);
  }

  return (
    <Sidebar>
      <TopBar>
        <body className="StudnetInfo">
          <div className="StudentsHeader">
            <p>Students List</p>
            <div className="leftofHeadr">
              <img src="sort.svg" alt="" />
              <AddStudnet addStudnet={addStudnet} />
            </div>
          </div>
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
                  <EditStudnet
                    EditStudent={EditStudent}
                    id={studnet.id}
                    name={studnet.name}
                    email={studnet.email}
                    phone={studnet.phone}
                    enroll={studnet.enroll}
                    DoA={studnet.DoA}
                  />
                  <img
                    onClick={() => removeStudnet(studnet)}
                    className="deletelogo"
                    src="delete.svg"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </body>
      </TopBar>
    </Sidebar>
  );
}
