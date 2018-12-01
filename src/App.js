import React, { Component } from 'react';
import './App.css';
import Landing from "./page/landing/landing";
import Reader from './page/Reader/reader';
import BookSelection from './page/BookSelection/bookSelection.jsx';
// Router
import { Switch, BrowserRouter, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/reader" exact component={Reader} />
          <Route path="/bookSelection" exact component={BookSelection}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
