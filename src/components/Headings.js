import React from "react";
export default function Headings(props) {
    return (
        <thead>
            <tr>
            <th ><button className="bn">IMAGE</button><hr/></th>
            <th onClick= {props.renderSortedEmployeesByFirst}><button className="bn">FIRST-NAME</button><hr/></th>
            <th onClick= {props.renderSortedEmployeesByLast}><button className="bn">LAST-NAME</button><hr/></th>
            <th ><button className="bn">PHONE</button><hr/></th>
            <th onClick= {props.renderSortedEmployeesByFirst}><button className="bn">EMAIL</button><hr/></th>
            <th ><button className="bn">DOB</button><hr/></th>   
            <th ><button className="bn">GENDER</button><hr/></th>                           
            </tr>
        </thead>
    )
}