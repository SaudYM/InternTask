import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function EditStudnet(props: any) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);
  const [enroll, setEnroll] = useState(props.enroll);
  const [DoA, setDoA] = useState(props.DoA);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img onClick={handleShow} className="editlogo" src="edit.svg" alt="" />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editing a Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(props.id);
              props.EditStudent(props.id, name, email, phone, enroll, DoA);
            }}
          >
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                value={name}
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Student Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                value={email}
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Phone">Phone</label>
              <input
                value={phone}
                type="text"
                className="form-control"
                id="Phone"
                placeholder="Enter Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>{" "}
            <div className="form-group">
              <label htmlFor="Enroll Number">Enroll Number</label>
              <input
                value={enroll}
                type="number"
                className="form-control"
                id="Enroll Number"
                placeholder="Enroll Number"
                onChange={(e) => setEnroll(e.target.value)}
              />
            </div>{" "}
            <div className="form-group">
              <label
                htmlFor="Date of admission
"
              >
                Date of admission
              </label>
              <input
                value={DoA}
                type="date"
                className="form-control"
                id="Date of admission
                "
                placeholder="Date of admission
                "
                onChange={(e) => setDoA(e.target.value)}
              />
            </div>{" "}
            <br />
            <button
              type="submit"
              onClick={handleClose}
              className="btn btn-primary"
              style={{ backgroundColor: "#FEAF00", borderColor: "#FEAF00" }}
            >
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
