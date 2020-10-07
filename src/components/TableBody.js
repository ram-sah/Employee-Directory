import React from "react";
import Gender from './Gender';
export default function TableBody({ employees }) {
    
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
                    <td > <img src={emp.picture.medium} alt="employeePhoto"></img></td>
                    <td >{emp.name.first}</td>
                    <td >{emp.name.last}</td>
                    <td >{emp.phone}</td>
                    <td >{emp.email}</td>
                    <td >{formatDate(emp.dob.date)}</td>
                    <td >{emp.gender}   <Gender gender={emp.gender}/></td>
                </tr>
            ))
            }
        </tbody>
    )
}