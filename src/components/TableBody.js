import React from "react";
import Gender from './Gender';
export default function TableBody({ employees }) {
    // convert date formate mm-dd-yyy
    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
    }
    return (
        <tbody>
            {employees.map(emp => (
                <tr>
                    <td > <img src={emp.picture.medium} className='rounded-circle border border-success ml-2 mt-2'
                        alt="employeePhoto"></img></td>
                    <th >{emp.name.first}</th>
                    <th >{emp.name.last}</th>
                    <td >{emp.phone}</td>
                    <td ><a href={"mailto:" + emp.email}>{emp.email}</a></td>
                    <td >{formatDate(emp.dob.date)}</td>
                    <td >{emp.gender}   <Gender gender={emp.gender} /></td>
                </tr>
            ))
            }
        </tbody>
    )
}