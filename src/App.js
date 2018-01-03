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
        <NavBar/>
        <Divider hidden/>
          <Route exact path='/' render={() => (
              <ListPosts/>
          )}/>
          <Route  exact path='/category/:category' render={(match) => (
              <ListPosts category={match.params}/>
          )}/>
      </div>
    );
  }
}

export default App;
