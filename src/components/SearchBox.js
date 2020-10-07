import React from "react";
import "../styles/SearchBox.css";
function SearchBox(props) {
  console.log(props)
  return (
    <div className="searchbox">
      <p><strong>Search by name:</strong></p>
      <form className="form-inline" onSubmit = {e=> {e.preventDefault();props.handleFormSubmit(e)}} >
        <input
          value={props.value}
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={e=>props.handleInputChange(e)}
        />
        <datalist id="">
        {console.log(props)}
          {/* {props.employees.map(name => (
            <option value={name} key={name} />
          ))} */}
        </datalist>

        <button className="btn my-2 my-sm-0" onClick={props.reset}>Search</button>
        &nbsp;
         <button className="btn my-2 my-sm-0" onClick={props.reset}>Reset</button>
      </form>
      {/* <form onSubmit = {(e)=> {e.preventDefault()}
      }>
      <button className="btn my-2 my-sm-0">
          Search
        </button>
        </form> */}
    </div>
  );
}
export default SearchBox;
