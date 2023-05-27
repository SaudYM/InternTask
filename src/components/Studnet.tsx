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
export default function Studnet(props: any) {
  const [studnets, setStudnets] = [props.studnets, props.setStudnets];

  const removeStudnet = (deletingstudent: Student) => {
    const newStudnets = studnets.filter(
      (studnet: Student) => studnet.id !== deletingstudent.id
    );
    setStudnets(newStudnets);
  };
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
    const updatedStundet = studnets.map((studnet: Student) => {
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
        <div className="StudnetInfo">
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
              {studnets.map((studnet: Student) => (
                <div className="listcard" key={studnet.id}>
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
        </div>
      </TopBar>
    </Sidebar>
  );
}
