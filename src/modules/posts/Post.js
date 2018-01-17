import React, {Component} from 'react';
import { Item, Label , Container, Button, Divider,Form} from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form';
import { TextAreaField } from 'react-semantic-redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getPostDetails,deletePost,votePost,getPostComments} from './postsActions'
import {ListComments} from './ListComments'

export class Post extends Component{


  componentDidMount() {
    const { match} = this.props;
    this.props.dispatch(getPostDetails(match.params.id));
    this.props.dispatch(getPostComments(match.params.id));

  }

  render (){
     const post=this.props.post;
     if(post){
       return (
         <Container  style={{ textAlign: 'left' }}>
             <Item key={post.id}>
               <Item.Content>
                 <Item.Header as={Link} to={"/post/"+post.id}>{post.title}</Item.Header>
                 <Item.Meta>
                   <span className='author'>by {post.author} on {post.timestamp}</span>
                 </Item.Meta>
                 <Item.Meta>
                   in <Link to={`/category/${post.category}`} name={post.category}>{post.category}</Link>
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
               <Button icon='edit' as={Link} to={`/edit-post/${post.id}`} content='Edit'/>
               <Button icon='delete'onClick={()=>this.props.dispatch(deletePost(post.id))} content='Delete'/>
               <Button icon='like outline' onClick={()=>this.props.dispatch(votePost(post.id,'upVote'))} />
               <Button icon='dislike outline' onClick={()=>this.props.dispatch(votePost(post.id,'downVote'))} />
             </div>
             <ListComments comments={this.props.comments}/>
             <Divider hidden/>
             <Form>
             <Field name='body' component={TextAreaField} placeholder='Your comment' />
             <Form.Field control={Button} primary className='submit-btn'
               type='submit'>
               Add Comment
             </Form.Field>
           </Form>
         </Container>

       )
     } return null;

  }
}

function mapStateToProps (state) {
  return {
    post: state.postsReducer.post,
    comments: state.postsReducer.comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

Post= connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)

export default reduxForm({
    form: 'addCommentForm'
})(Post);
