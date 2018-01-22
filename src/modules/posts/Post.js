import React, {Component} from 'react';
import { Item, Label , Container, Button, Divider,Form} from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form';
import { TextAreaField } from 'react-semantic-redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getPostDetails,deletePost,votePost,getPostComments,addComment} from './postsActions'
import {ListComments} from './ListComments'
import {AddComment} from './AddComment'


export class Post extends Component{


  componentDidMount() {
    const { match} = this.props;
    this.props.dispatch(getPostDetails(match.params.id));
    this.props.dispatch(getPostComments(match.params.id));

  }

  render (){
     const post=this.props.post;
     if(post){
       let saveComment = (values)=>{
        this.props.dispatch(addComment(values,post));
      };
       return (
         <Container  style={{ textAlign: 'left' }}>
             <Item key={post.id}>
               <Item.Content>
                 <Item.Header as={Link} to={`/${post.category}/${post.id}`}>{post.title}</Item.Header>
                 <Item.Meta>
                   <span className='author'>by {post.author} on {post.timestamp}</span>
                 </Item.Meta>
                 <Item.Meta>
                   in <Link to={`/${post.category}`} name={post.category}>{post.category}</Link>
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
               <Button icon='edit' color={'green'} as={Link} to={`/edit-post/${post.id}`} content='Edit'/>
               <Button icon='delete' color={'red'} onClick={()=>this.props.dispatch(deletePost(post.id))} content='Delete'/>
               <Button icon='like outline' onClick={()=>this.props.dispatch(votePost(post.id,'upVote'))} />
               <Button icon='dislike outline' onClick={()=>this.props.dispatch(votePost(post.id,'downVote'))} />
             </div>
             <Divider hidden/>
             <ListComments comments={this.props.comments} dispatch={this.props.dispatch}/>
              <Divider hidden/>
             <AddComment post={post} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
