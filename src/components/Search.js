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
  //
  renderSortedEmployees = event => {
    console.log(event.target.id);
    const context = this
    function compareF(a, b) {
      return context.compareFirst(a, b, event.target.id)
    }
    // found at https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
    this.setState({ filteredResults: this.state.filteredResults.sort(compareF), order: !this.state.order })
  };
  //Comparing all headings 
  compareFirst = (a, b, item1, item2 = null) => {
    let nameA;
    let nameB;
    // console.log(item1)
    if (item1 === "firstName") {
      nameA = a.name.first.toUpperCase();
      nameB = b.name.first.toUpperCase();
    }
    if (item1 === "lastName") {
      nameA = a.name.last.toUpperCase();
      nameB = b.name.last.toUpperCase();
    }
    if (item1 === "phone") {
      nameA = a.phone.toUpperCase();
      nameB = b.phone.toUpperCase();
    }
    if (item1 === "email") {
      nameA = a.email.toUpperCase();
      nameB = b.email.toUpperCase();
    }
    if (item1 === "dob") {
      nameA = a.dob.date;
      nameB = b.dob.date;
    };

    // console.log(a, b);
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
  //rendering the pages  
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
            renderSortedEmployees={this.renderSortedEmployees}
          />
          <TableBody employees={this.state.filteredResults} />
        </table>
      </div>
    );
  }
}
export default Search;