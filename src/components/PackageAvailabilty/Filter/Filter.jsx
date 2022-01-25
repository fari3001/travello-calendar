import React from 'react';
import {DropdownButton, Dropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Deals from '../Deals/Deals'



export default function DealTime() {
  return <div>
        <div className="modal-packages">
            <div className="modal-date-filter">
                <div className="modal-date">12 September 2021</div>
                <div className="modal-filter">
                <DropdownButton className="modal-filter-dropdown" id="dropdown-basic-button" title="Times: All">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                </div>
            </div>    
            <Deals />
        </div>
  </div>;
}
