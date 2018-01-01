import * as newsApi from '../../apis/NewsAPI';


export const FETCH_POSTS = 'FETCH_POSTS';

export const DISPLAY_POSTS = 'DISPLAY_POSTS';

export function fetchPosts (category,sortBy) {
  return (dispatch) => {
    return  newsApi.getPosts(category,sortBy).then((posts) => {
           dispatch({type:DISPLAY_POSTS,posts:posts});
         });
    }
};
