import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// import jsonp from 'jsonp';

// import { CSSTransition } from 'react-transition-group';

import Home from './Home';
const Saved = () => <h1>Saved</h1>;

// import Card from './Card';
// import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="page-heading">
            <h1 className="title">Tokopedia Hot Listr</h1>
            <h2 className="subtitle">Randomize Tokopedia Hot List for Your gift Inspiration</h2>
          </div>
          
          <Router>
            <div>
              <div className="nav">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/saved">Saved</NavLink>
              </div>
              <Route exact path="/" component={Home}></Route>
              <Route path="/saved" component={Saved}></Route>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
