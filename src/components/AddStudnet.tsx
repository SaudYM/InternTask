import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function AddStudnet(props: any) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enroll, setEnroll] = useState("");
  const [DoA, setDoA] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>ADD NEW STUDENT</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding a new Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.addStudnet(name, email, phone, enroll, DoA);
            }}
          >
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
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
