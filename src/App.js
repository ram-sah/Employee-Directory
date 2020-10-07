import React, { Component } from "react";
import './App.css';
// import API from "./utils/API";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Headings from "./components/Headings";
import TableBody from "./components/TableBody";
import Search from "./components/Search";
// import SearchBox from "./components/SearchBox";

function App() {
  // state = {
  //   employees: [],
  // };
  // componentDidMount() {
  //   API.getUsers()
  //     .then(res => {
  //       console.log(res.data.results)
  //       this.setState({ employees: res.data.results })
  //     })
  //     .catch(err => console.log(err));
  // }
  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

    return (
      <div className="App">
        <Header />
        
      
          <Search />
          {/* <SearchBox employees={this.state.employees}/> */}
        
      </div>
    );
  }


export default App;
