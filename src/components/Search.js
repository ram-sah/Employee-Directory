import React, { Component } from "react";
import API from "../utils/API";
import SearchBox from "../components/SearchBox";
import TableBody from "../components/TableBody";
import Headings from "../components/Headings";

class Search extends Component {
  state = {
    search: "",
    results: [],
    filteredResults: []
  };

  // When the component mounts, get a list of all available base employee and update this.state.employee
  componentDidMount() {
    API.getUsers()
      .then(res => this.setState({ 
      results: res.data.results,
      filteredResults: res.data.results 
      }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    console.log(event.target.value)
    console.log(event.target.name)
    const { name, value } = event.target
    
    this.setState( {search: value, filteredResults: this.state.results.filter(
      item=>item.name.first.toLowerCase().indexOf(value.toLowerCase()) !== -1)})

  };

  handleFormSubmit = event => {
    event.preventDefault();

    // this.setState(() => {
    //     const updatedResults = this.state.filteredResults.filter(x => 
    //         x.name.first.includes(this.state.search) || 
    //         x.name.last.includes(this.state.search) ||
    //         x.login.username.includes(this.state.search) || 
    //         x.location.state.includes(this.state.search) ||
    //         x.location.city.includes(this.state.search))
    //     if (!this.state.search) {
    //         return { filteredResults: this.state.results }
    //     } else {
    //         return { filteredResults: updatedResults }
    //     };
    // });

    
};

renderSortedEmployees = event => {
  // event.preventDefault();

  // found at https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
  function compare(a, b) {
      const nameA = a.name.last.toUpperCase();
      const nameB = b.name.last.toUpperCase();

      let comparison = 0;
      if (nameA > nameB) {
          comparison = 1;
      } else if (nameA < nameB) {
          comparison = -1;
      };
      return comparison;
  };

  return this.setState({ filteredResults: this.state.filteredResults.sort(compare) })
};

  render() {
    return (
      <div>  
        
        <SearchBox  
          employees = { this.state.results }
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            value={this.state.search}>
          
        </SearchBox> 
        
        <table className="table table-striped">
          <Headings renderSortedEmployees={this.renderSortedEmployees}/>
        <TableBody employees={this.state.filteredResults} /> 
        </table>      
      </div>
    );
  }
}

export default Search;
