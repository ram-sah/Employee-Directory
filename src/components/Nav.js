import React from "react";
import SearchBox from "./SearchBox.js";
import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">   
      <div className="collapse navbar-collapse row" id="navbarNav">
        <div className="input-group col-8">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              DOB
            </span>
          </div>
          <input type="date" className="form-control" />
          <input type="date" className="form-control" />
        </div>
        <div className="search-area col-4">
          <SearchBox />
        </div>
      </div>
    </nav>
  );
}
export default Nav;
