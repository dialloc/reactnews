import { FETCH_POSTS , DISPLAY_POSTS} from './postsActions';

const postsReducer = (state={},action)=>{
  switch(action.type){
    case FETCH_POSTS:
      return {...state,fetchingPosts:true};
    case DISPLAY_POSTS:
      return {...state,posts:action.posts,fetchingPosts:false};

    default:
    break;
  }
  return state;

}
export default postsReducer;
