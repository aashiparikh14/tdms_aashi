import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import ListDocument from "./components/Documents/ListDocument";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/listDocument" component={ListDocument} />
      </Router>
    </Provider>
  );
}

export default App;
