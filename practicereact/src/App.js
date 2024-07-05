import logo from "./logo.svg";
import "./App.css";
import Veryeasy from "./VERY_EASY/veryEasy";
import Basicinfo from "./components/basicinfo";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        { name: "ly", email: "lyy15@r2happrentice.org", birthday: "2/24/1997" },
        {
          name: "tom",
          email: "tomothytom@example.org",
          birthday: "8/27/1997",
        },
        {
          name: "isla",
          email: "island@example.org",
          birthday: "6/3/2024",
        },
      ],
    };
  }

  render() {
    const { person } = this.state;

    return (
      <div className="App">
        {person.map((indiv) => (
          <Basicinfo person={indiv} />
        ))}
      </div>
    );
  }
}

export default App;
