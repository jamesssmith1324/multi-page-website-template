import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Destination from "./components/pages/Destination";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/signUp" component={SignUp} />
            <Route path="/destination" component={Destination} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
