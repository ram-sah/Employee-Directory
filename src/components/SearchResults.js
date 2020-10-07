import React from "react";
// import "../styles";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Employee" src={result} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
