import React, { useState } from 'react';
import {Modal, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from 'react-calendar';
import "../../styles/calendar.scss";
import Filter from '../Filter/Filter'

export default function Calender(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }
    


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
                            <button className="modal-body-buttons-left"/>
                            <input className="number-input" min="1" name="quantity" value="1" type="number" id="adultValue"></input>
                            <button className="modal-body-buttons-right"/>
                        </div>
                        <div className="modal-children-wrapper">
                            <div className="modal-children">Children</div>
                            <div className="modal-children-years">3-15 Years</div>
                        </div>
                        <div className="modal-button-wrapper">
                            <button className="modal-body-buttons-left"/>
                            <input className="number-input" min="0" name="quantity" value="0" type="number"></input>
                            <button className="modal-body-buttons-right"/>
                        </div>
                        
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="modal-footer-wrapper">
                        <div className="modal-calendar">
                        <Calendar onChange={onChange} date={date} hover />
                        </div>
                        <Filter />
                    </div>
                </Modal.Footer>
            </Modal>
        </div>

           
    )
}
