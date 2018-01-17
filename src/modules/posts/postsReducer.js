import { FETCH_POSTS , DISPLAY_POSTS , SORT_POSTS ,SHOW_POST,SHOW_POST_COMMENTS} from './postsActions';

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
    default:
    break;
  }
  return state;

}
export default postsReducer;
