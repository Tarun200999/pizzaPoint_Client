import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navbar/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About} exact></Route>
      </Switch>
    </Router>
  );
};

export default App;
