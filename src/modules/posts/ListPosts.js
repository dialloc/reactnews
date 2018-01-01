import React, {Component} from 'react';
import { Button, Item, Label , Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchPosts} from './postsActions'


export class ListPosts extends Component{



  componentDidMount() {
    const { category, sortBy, dispatch} = this.props
    this.props.dispatch(fetchPosts(category,sortBy));

  }

  render (){
    return (
      <Container className="ListPosts">
        <Item.Group relaxed>
            {this.props.posts && this.props.posts
              .map( (post)=>(
                <Item key={post.id}>
                  <Item.Content>
                    <Item.Header as={Link} to={"/post/"+post.id}>{post.title}</Item.Header>
                    <Item.Meta>
                      <span className='author'>by {post.author} on {post.timestamp}</span>
                    </Item.Meta>
                    <Item.Description>{post.body}</Item.Description>
                    <Item.Extra>
                      <Label icon='like outline' content={post.voteScore} />
                      <Label icon='comments' content={post.commentCount} />
                    </Item.Extra>
                  </Item.Content>
                </Item>
              ))
            }
         </Item.Group>
         </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.postsReducer.posts
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
)(ListPosts)
