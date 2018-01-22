import { FETCH_POSTS , DISPLAY_POSTS , SORT_POSTS ,SHOW_POST,DISPLAY_COMMENT,
  SHOW_POST_COMMENTS,ADD_COMMENT_SUCESS,DELETE_COMMENT_SUCESS,UPDATE_COMMENT_SUCESS} from './postsActions';

const postsReducer = (state={},action)=>{
  switch(action.type){
    case FETCH_POSTS:
      return {...state,fetchingPosts:true};
    case DISPLAY_POSTS:
      return {...state,posts:action.posts,fetchingPosts:false};
    case SORT_POSTS:
      return {...state,sortBy:action.sortBy};
    case SHOW_POST:
        return {...state,post:action.post};
    case SHOW_POST_COMMENTS:
        return {...state,comments:action.comments};
    case ADD_COMMENT_SUCESS:
    let mpost=state.post;
    mpost.commentCount++;
    return {...state,post:mpost,
      comments:[...state.comments,action.newComment]};
    case DELETE_COMMENT_SUCESS:
    let dpost=state.post;
    dpost.commentCount--;
    return {...state,post:dpost,
      comments:state.comments.filter((c) => c.id!==action.idComment)};
    case UPDATE_COMMENT_SUCESS:
      var comments=state.comments.filter((c) => c.id!==action.comment.id);
      if(comments && comments.length>0){
        comments.push(action.comment);
      }else{
        comments=[action.comment];
      }
      return {...state,
        comments:comments
      };
    case DISPLAY_COMMENT:
      return {...state,comment:action.comment};
    default:
    break;
  }
  return state;

}
export default postsReducer;
