import React, { Component } from "react";
import Home from "./components/Home";
import Index from "./components/Index";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { BrowserRouter as Router, Route } from "react-router-dom"


class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <NavBar />

        <Route
          path="/"
          exact
          render={() => 
          <Home />}
        />
        <Route
          path="/"
          exact
          render={() => 
          <Index />}
        />

        <Route
          path="/"
          exact
          render={() => 
          <Products />}
        />
        <Route
          path="/"
          exact
          render={() => 
          <Landing />}
        />

        <Route
          path="/"
          exact
          render={() => 
          <Footer />}
        />
        </Router>
    </div>
    );
  }
}

export default App;