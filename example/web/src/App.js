import React, { Component } from "react";
import { Button } from "pseudo-class-example";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Button>Button</Button>
        </div>
        <p>
          hover: black,
          active: <span style={{ color: "gray" }} >gray</span>,
          focus: <span style={{ color: "red" }} >red</span>
          </p>
      </div>
    );
  }
}

export default App;
