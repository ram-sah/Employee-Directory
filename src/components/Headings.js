import React from "react";
export default function Headings(props) {
    return (
        <thead>
            <tr>
                <th ><button className="bn">IMAGE</button><hr /></th>
                <th ><button id="firstName" className="bn" onClick={props.renderSortedEmployees}>FIRST-NAME</button><hr /></th>
                <th ><button id="lastName" className="bn" onClick={props.renderSortedEmployees}>LAST-NAME</button><hr /></th>
                <th ><button id="phone" className="bn" onClick={props.renderSortedEmployees}>PHONE</button><hr /></th>
                <th ><button id="email" className="bn" onClick={props.renderSortedEmployees}>EMAIL</button><hr /></th>
                <th ><button id="dob" className="bn" onClick={props.renderSortedEmployees}>DOB</button><hr /></th>
                <th ><button className="bn">GENDER</button><hr /></th>
            </tr>
        </thead>
    )
}