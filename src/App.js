import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import {NavBar,ListPosts} from './modules';
import { Divider} from 'semantic-ui-react'
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
          <Route exact path='/' render={() => (
            <div  className="Main">
              <NavBar/>
              <Divider hidden/>
              <ListPosts/>
            </div>

          )}/>
          <Route exact path='/search' render={({ history }) => (
            <div>
            <h1 className="App-title">Nice</h1>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
          )}/>
      </div>
    );
  }
}

export default App;
