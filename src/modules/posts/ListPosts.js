import React, {Component} from 'react';
import {  Item, Label , Container, Select, Divider,Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchPosts,sortPosts,deletePostInList,votePost} from './postsActions'


export class ListPosts extends Component{

  componentDidMount() {
    const { match, sortBy,postChanged} = this.props
    this.props.dispatch(fetchPosts(match.params.category,sortBy));

  }

  componentWillReceiveProps(newProps) {
    if(newProps.match.params.category !== this.props.match.params.category
      || newProps.sortBy !== this.props.sortBy || newProps.postChanged ) {
      const { match, sortBy,postChanged} = newProps;
      this.props.dispatch(fetchPosts(match.params.category,sortBy));
    }

  }


  render (){
    console.log(this.props.match.params.category);
    return (
      <Container className="ListPosts">
       <Select
       onChange={(event,data)=>this.props.dispatch(sortPosts(data.value))}
              placeholder='Sort posts by'
        options={[{ key: 'voteScore', value: 'voteScore', icon :'sort ascending', text: 'Sort by vote '}
                 ,{ key: 'timestamp', value: 'timestamp', icon :'sort ascending', text: 'Sort by date'}]} />
       <Divider hidden/>
        <Item.Group relaxed>
            {this.props.posts && this.props.posts
              .map( (post)=>(
                <Item key={post.id} style={{ textAlign: 'left' }}>
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
                    <div>
                      <Button icon='edit' color={'green'} as={Link} to={`/edit-post/${post.id}`} content='Edit'/>
                      <Button icon='delete' color={'red'} onClick={()=>this.props.dispatch(deletePostInList(post.id))} content='Delete'/>
                      <Button icon='like outline' onClick={()=>this.props.dispatch(votePost(post.id,'upVote'))} />
                      <Button icon='dislike outline' onClick={()=>this.props.dispatch(votePost(post.id,'downVote'))} />
                    </div>
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
    posts: state.postsReducer.posts,
    sortBy: state.postsReducer.sortBy,
    postChanged:state.postsReducer.postChanged
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
