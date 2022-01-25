import React, { useState } from 'react';
import {Modal, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from 'react-calendar'
import "../components/styles/calendar.scss"

export default function Calender() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChange = (date) => {
        console.log(date.toString());
      };

    return (
        <div className="container">
            <Button className="button" onClick={handleShow}>
            CHECK AVAILABILITY
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Package Availability</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-wrapper">
                        <div className="modal-adult">Adult</div>
                        <div className="modal-button-wrapper">
                            <button />1
                            <button />
                        </div>
                        <div className="modal-children-wrapper">
                            <div className="modal-children">Children</div>
                            <div className="modal-children-years">3-15 Years</div>
                        </div>
                        <div className="modal-button-wrapper">
                            <button />1
                            <button />
                        </div>
                        
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="modal-footer-wrapper">
                        <div className="modal-calendar">
                        <Calendar />
                        </div>
                        <div className="modal-packages"></div>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>

           
    )
}
