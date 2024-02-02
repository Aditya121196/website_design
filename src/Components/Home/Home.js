import React, { useState } from "react";
import OurServices from "./OurServices";
import Why from "./Why";
import OurClient from "./OurClient";
import Client from "./Client";
import './HomeStyle.css'
import { Modal, ModalBody, ModalHeader } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
  const [modal, setModal] = useState(false)

  return (
    <div className="container-fluid home-container" >
      <div className="row home-row">
        <div className="col-lg-12 col-md-12 col-sm-12 home-col " >
          <h1>Boost your Business with<br />
            our solutions.
          </h1>
          <p>Revolutionizing Business with innovative<br />
            Empowerment Solutions</p>
          <button className="btn btn-lg rounded-pill" onClick={() => setModal(true)}>Contact now</button>
          <div>
            <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)} className="modal-dialog-centered">
              <ModalHeader toggle={() => setModal(!modal)}>
                <h2>Fill The Form</h2>
              </ModalHeader>
              <ModalBody>
                <form className="form-group contacts-form-group" >
                  <label className="form-label" >Name</label><br />
                  <input type="text" className="form-control rounded-pill custom-placeholder" placeholder="Enter Name" /><br />
                  <label className="form-label">Email Address</label><br />
                  <input type="email" className="form-control rounded-pill custom-placeholder" placeholder="Enter email address" /><br />
                  <label className="form-label">Phone Number</label><br />
                  <input type="number" className="form-control rounded-pill custom-placeholder" placeholder="Enter phone number" /><br />
                  <button className="btn btn-lg form-control rounded-pill" >Submit</button>
                </form>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
      <OurServices />
      <Why />
      <OurClient />
      <Client />
    </div >
  );
}

export default Home;
