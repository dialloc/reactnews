import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import {NavBar,ListPosts,Post,AddPost} from './modules';
import { Divider} from 'semantic-ui-react'
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Divider hidden/>
        <Route exact path='/' component={ListPosts} />
        <Route   path='/category/:category'  component={ListPosts} />
        <Route  path='/post/:id'  component={Post} />
        <Route  path='/add-post'  component={AddPost} />
      </div>
    );
  }
}

export default App;
