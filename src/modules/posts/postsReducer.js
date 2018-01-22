import { FETCH_POSTS , DISPLAY_POSTS , SORT_POSTS ,SHOW_POST,DISPLAY_COMMENT,
  SHOW_POST_COMMENTS,ADD_COMMENT_SUCESS,DELETE_COMMENT_SUCESS,UPDATE_COMMENT_SUCESS,DELETE_POST} from './postsActions';

const postsReducer = (state={},action)=>{
  switch(action.type){
    case FETCH_POSTS:
      return {...state,fetchingPosts:true,postChanged:false};
    case DISPLAY_POSTS:
      return {...state,posts:action.posts,fetchingPosts:false,postChanged:false};
    case SORT_POSTS:
      return {...state,sortBy:action.sortBy};
    case SHOW_POST:
      let lpost=state.posts;
        if(lpost!=null && lpost!==undefined && lpost.length>0){
          lpost.forEach((v,i)=>{
            if(v.id==action.post.id){
              lpost[i]=action.post;
            }
          });
        }
        return {...state,posts:lpost,post:action.post,postChanged:true};
      case DELETE_POST:
      return {...state,
        posts:state.posts.filter((p) => p.id!==action.idPost)};
      return
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
