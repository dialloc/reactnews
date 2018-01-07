import * as newsApi from '../../apis/NewsAPI';


export const FETCH_POSTS = 'FETCH_POSTS';

export const DISPLAY_POSTS = 'DISPLAY_POSTS';

export const SORT_POSTS = 'SORT_POSTS';

export const ADD_POST = 'ADD_POST';

export function fetchPosts (category,sortBy) {
  return (dispatch) => {
    return  newsApi.getPosts(category,sortBy).then((posts) => {
           dispatch({type:DISPLAY_POSTS,posts:posts});
         });
    }
}

export function sortPosts (sortBy) {
  console.log('change sortBy : '+sortBy);
  return  {type:SORT_POSTS,sortBy:sortBy};
}

export function addPost (data) {
  console.log('add post : '+data);
  return  {type:ADD_POST,data:data};
}
