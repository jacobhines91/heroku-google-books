import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Results from "./components/Results";
import Saved from "./components/Saved";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Results} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="*" component={Results} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
