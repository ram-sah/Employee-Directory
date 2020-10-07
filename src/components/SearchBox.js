import React from "react";
import "../styles/SearchBox.css";
function SearchBox(props) {
  console.log(props)
  return (
    <div className="searchbox">
      <h5><strong>Search by First Name:</strong></h5>
      <form className="form-inline">
        <input
          value={props.value}
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={e=>props.handleInputChange(e)}
        />      
        {/* <button className="btn my-2 my-sm-2" onClick={props.submit}>Search</button> */}
        &nbsp;
         <button className="btn my-2 my-sm-2" onClick={props.reset}>Reset</button>
      </form>
      <div className="space">
      <h5><strong>Click Headers to Sort</strong></h5>
      </div>
    </div>
  );
}
export default SearchBox;
