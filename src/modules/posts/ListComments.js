import React, {Component} from 'react';
import { Comment,Header, Label , Container, Divider} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getPostComments} from './postsActions'


export class ListComments extends Component{


  render (){
    console.log(this.props.idPost);
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
                     <Comment.Action>Reply</Comment.Action>
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
