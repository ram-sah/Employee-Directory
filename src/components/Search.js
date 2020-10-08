import React, { Component } from "react";
import API from "../utils/API";
import SearchBox from "../components/SearchBox";
import TableBody from "../components/TableBody";
import Headings from "../components/Headings";
class Search extends Component {
  state = {
    search: "",
    results: [],
    filteredResults: [],
    order: false
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
    // console.log(event.target.value)
    // console.log(event.target.name)
    const { value } = event.target
    this.setState({
      search: value, filteredResults: this.state.results.filter(
        item => item.name.first.toLowerCase().indexOf(value.toLowerCase()) !== -1)
    })
  };

  renderSortedEmployeesByFirst = event => {
    // event.preventDefault();  
    // found at https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
    this.setState({ filteredResults: this.state.filteredResults.sort(this.compareFirst), order: !this.state.order })
  };
  renderSortedEmployeesByLast = event => {
    console.log(this.state.filteredResults)
    this.setState({ filteredResults: this.state.filteredResults.sort(this.compareLast), order: !this.state.order })
  };
  compareFirst = (a, b) => {
    const nameA = a.name.first.toUpperCase();
    const nameB = b.name.first.toUpperCase();
    let comparison = 0;
    if (this.state.order) {
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      };
    }
    else {
      if (nameA > nameB) {
        comparison = -1;
      } else if (nameA < nameB) {
        comparison = 1;
      };
    }
    return comparison;
  };
  compareLast = (a, b) => {
    const nameA = a.name.last.toUpperCase();
    const nameB = b.name.last.toUpperCase();
    let comparison = 0;
    if (this.state.order) {
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      };
    }
    else {
      if (nameA > nameB) {
        comparison = -1;
      } else if (nameA < nameB) {
        comparison = 1;
      };
    }
    return comparison;
  };
  render() {
    return (
      <div>
        <SearchBox
          employees={this.state.results}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          value={this.state.search}>
        </SearchBox>
        <table className="table table-striped">
          <Headings
            renderSortedEmployeesByFirst={this.renderSortedEmployeesByFirst}
            renderSortedEmployeesByLast={this.renderSortedEmployeesByLast} />
          <TableBody employees={this.state.filteredResults} />
        </table>
      </div>
    );
  }
}
export default Search;