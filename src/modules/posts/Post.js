import React, {Component} from 'react';
import { Item, Label , Container, Button, Divider} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getPostDetails} from './postsActions'


export class Post extends Component{


  componentDidMount() {
    const { match} = this.props;
    this.props.dispatch(getPostDetails(match.params.id));

  }

  render (){
     const post=this.props.post;
     if(post){
       return (
         <Container>
             <Item key={post.id} style={{ textAlign: 'left' }}>
               <Item.Content>
                 <Item.Header as={Link} to={"/post/"+post.id}>{post.title}</Item.Header>
                 <Item.Meta>
                   <span className='author'>by {post.author} on {post.timestamp}</span>
                 </Item.Meta>
                 <Item.Description>{post.body}</Item.Description>
                 <Item.Extra>
                 {post.voteScore >0 &&
                     <Label icon='like outline' content={post.voteScore} />
                 }
                 {post.voteScore <0 &&
                     <Label icon='dislike outline' content={-1 * post.voteScore} />
                 }
                   <Label icon='comments' content={post.commentCount} />
                 </Item.Extra>
               </Item.Content>
             </Item>
             <Divider hidden/>
             <div>
               <Button icon='edit' content='Edit'/>
               <Button icon='delete' content='Delete'/>
               <Button icon='like outline' content='Vote'/>
             </div>
         </Container>
       )
     } return null;

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
