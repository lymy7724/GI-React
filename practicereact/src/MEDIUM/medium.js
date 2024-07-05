import logo from "./logo.svg";
import "./App.css";
import Veryeasy from "./VERY_EASY/veryEasy";
import Basicinfo from "./components/basicinfo";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "ly",
        email: "lyy15@r2happrentice.org",
        birthday: "2/24/1997",
      },
    };
  }
  render() {
    return (
      <div className="App">
        <Basicinfo person={this.state.person} />
      </div>
    );
  }
}

export default App;