import React, { Component } from 'react';
import './App.css';
import Landing from "./page/landing/landing";
import Reader from './page/Reader/reader';
// Router
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/" exact component={Reader} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
