import React, { Component } from "react";
import './App.css';
import API from "./utils/API";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Headings from "./components/Headings";
import TableBody from "./components/TableBody";

class App extends Component {
  state = {
    employees: [],
  };
  componentDidMount() {
    API.getUsers()
      .then(res => {
        console.log(res.data.results)
        this.setState({ employees: res.data.results })
      })
      .catch(err => console.log(err));
  }
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <table className="table">
          <Headings />

          <TableBody employees={this.state.employees} />

        </table>

      </div>
    );
  }
}

export default App;
