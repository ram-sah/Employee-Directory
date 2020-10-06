import React from "react";
export default function TableBody({ employees }) {
    return (
        <tbody>
            {employees.map(emp => (
                <tr>
                    <th > <img src={emp.picture.large}></img></th>
                    <th >{emp.name.first}</th>
                    <th >{emp.name.last}</th>
                    <th >{emp.phone}</th>
                    <th >{emp.email}</th>
                    <th >{emp.dob.date}</th>
                </tr>
            ))
            }
        </tbody>
    )
}