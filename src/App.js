import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/clients/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Dashboard />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
