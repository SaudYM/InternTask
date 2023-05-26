// import React, { useState } from "react";
// interface Student {
//   id: number;
//   img: string;
//   name: string;
//   email: string;
//   phone: string;
//   enroll: string;
//   DoA: string;
// }

// export default function Studnetbody(studnets: Student[]) {
//   const removeStudnet = (deletingstudent: Student) => {
//     const newStudnets = studnets.filter(
//       (studnet) => studnet.id !== deletingstudent.id
//     );
//     setStudnets(newStudnets);
//   };

//   return (
//     <>
//       <div className="SbackG">
//         <div className="HaedeOfSB">
//           <span>Name</span>
//           <span>Email</span>
//           <span>Phone</span>
//           <span>Enroll Number</span>
//           <span>Date of admission</span>
//         </div>
//         <div className="CardsContainer">
//           {studnets.map((studnet) => (
//             <div className="listcard">
//               <img className="studentimg" src="user.svg" alt="studentimg" />
//               <span className="name">{studnet.name}</span>
//               <span className="email">{studnet.email}</span>
//               <span className="phone">{studnet.phone}</span>
//               <span className="enroll">{studnet.enroll}</span>
//               <span className="date">{studnet.DoA}</span>
//               <img className="editlogo" src="edit.svg" alt="" />
//               <img
//                 onClick={() => removeStudnet(studnet)}
//                 className="deletelogo"
//                 src="delete.svg"
//                 alt=""
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
