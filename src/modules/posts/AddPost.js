import React, {Component} from 'react';
import { Button, Item, Label , Container , Grid, Form} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addPost} from './postsActions'


export class AddPost extends Component{

  componentDidMount() {
  }




  render (){
    console.log(this.props.match.params.category);
    return (
      <Container>
      <Grid className="AddPost" columns={3}
      style={{ height: '100%'}}
      verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
        </Grid.Column>
         </Grid>
         </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.postsReducer.posts,
    sortBy: state.postsReducer.sortBy
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
)(AddPost)
