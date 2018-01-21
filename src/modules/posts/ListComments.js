import React, {Component} from 'react';
import { Comment,Header, Label , Container, Divider, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getPostComments , deleteComment, voteComment} from './postsActions'


export class ListComments extends Component{


  render (){
    console.log(this.props.idPost);
    const {idPost , dispatch , comments}=this.props;
    return (
      <Container className="ListComments">
       <Header as='h3' dividing>Comments</Header>
       <Divider hidden/>
        <Comment.Group relaxed>
            {this.props.comments && this.props.comments
              .map((com)=>(
                <Comment key={com.id} style={{ textAlign: 'left' }}>
                  <Comment.Content>
                    <Comment.Author as='a'>{com.author}</Comment.Author>
                    <Comment.Metadata>
                      <div>at on {com.timestamp}</div>
                    </Comment.Metadata>
                    <Comment.Text>{com.body}</Comment.Text>
                    <Comment.Metadata>
                    {com.voteScore >0 &&
                        <Label icon='like outline' content={com.voteScore} />
                    }
                    {com.voteScore <0 &&
                        <Label icon='dislike outline' content={-1 * com.voteScore} />
                    }
                    </Comment.Metadata>
                    <Comment.Actions>
                    <Comment.Action>
                      <Button icon='edit' as={Link} to={`/edit-comment/${com.id}`} content='Edit'/>
                    </Comment.Action>
                    <Comment.Action>
                      <Button icon='delete'onClick={()=>this.props.dispatch(deleteComment(com.id))} content='Delete'/>
                    </Comment.Action>
                    <Comment.Action>
                      <Button icon='like outline' onClick={()=>this.props.dispatch(voteComment(com.id,'upVote'))} />
                    </Comment.Action>
                    <Comment.Action>
                      <Button icon='dislike outline' onClick={()=>this.props.dispatch(voteComment(com.id,'downVote'))} />
                     </Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
              ))
            }
         </Comment.Group>
         </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
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
)(ListComments)
