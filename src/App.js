import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {NavBar,ListPosts,Post,AddPost,EditPost,EditComment} from './modules';
import { Divider} from 'semantic-ui-react'
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Divider hidden/>
        <Switch>
          <Route exact path='/' component={ListPosts} />
          <Route exact  path='/add-post'  component={AddPost} />
          <Route exact path='/edit-post/:id'  component={EditPost} />
          <Route exact path='/edit-comment/:id'  component={EditComment} />
          <Route exact  path='/:category'  component={ListPosts} />
          <Route exact path='/:category/:id'  component={Post} />
        </Switch>
      </div>
    );
  }
}

export default App;
