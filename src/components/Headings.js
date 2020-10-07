import React from "react";
export default function Headings(props) {
    return (
        <thead>
            <tr>
                <th onClick= {props.renderSortedEmployees}>IMAGE<hr/></th>
                <th onClick= {props.renderSortedEmployees}>FIRST-NAME<hr/></th>
                <th onClick= {props.renderSortedEmployees}>LAST-NAME<hr/></th>
                <th onClick= {props.renderSortedEmployees}>PHONE<hr/></th>
                <th onClick= {props.renderSortedEmployees}>EMAIL<hr/></th>
                <th onClick= {props.renderSortedEmployees}>DOB<hr/></th>   
                <th onClick= {props.renderSortedEmployees}>GENDER<hr/></th> 
                          
            </tr>
        </thead>
    )
}