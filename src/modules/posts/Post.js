import React, {Component} from 'react';
import { Button, Item, Label , Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchPosts} from './postsActions'


export class Post extends Component{


  componentWillReceiveProps() {
    const { match} = this.props
  //  this.props.dispatch(fetchPosts(match.params.id));

  }

  render (){
console.log("xxxxxxxxxxxxxxxxxxxxxxx");
    return (
<h1>{this.props.match.params.id}</h1>
    )
  }
}

function mapStateToProps (state) {
  return {
    post: state.postsReducer.post
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
