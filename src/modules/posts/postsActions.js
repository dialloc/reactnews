import * as newsApi from '../../apis/NewsAPI';
import {  push } from 'react-router-redux';

export const FETCH_POSTS = 'FETCH_POSTS';

export const DISPLAY_POSTS = 'DISPLAY_POSTS';

export const SORT_POSTS = 'SORT_POSTS';

export const ADD_POST = 'ADD_POST';

export const EDIT_POST = 'EDIT_POST';

export const SHOW_POST = 'SHOW_POST';

export const VOTE_POST = 'VOTE_POST';

export const SHOW_POST_COMMENTS = 'SHOW_POST_COMMENTS';

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
  return (dispatch) => {
    return  newsApi.addPost(data).then((result) => {
      console.log(result);
           dispatch(push(`/post/${result.id}`));
         });
    }
}

export function editPost (data) {
  console.log('update post : '+data);
  return (dispatch) => {
    return  newsApi.editPost(data).then((result) => {
      console.log(result);
           dispatch(push(`/post/${result.id}`));
         });
    }
}

export function deletePost (idPost) {
  console.log('delete post : '+idPost);
  return (dispatch) => {
    return  newsApi.deletePost(idPost).then((result) => {
      console.log(result);
           dispatch(push(`/`));
         });
    }
}

export function votePost (idPost,option) {
  console.log('votePost post : '+idPost+' option: '+option);
  return (dispatch) => {
    return  newsApi.votePost(idPost,option).then((result) => {
      console.log(result);
            dispatch({type:SHOW_POST,post:result});
         });
    }
}

export function getPostDetails (idPost) {
  console.log('get post details : '+idPost);
  return (dispatch) => {
    return  newsApi.getPostDetails(idPost).then((result) => {
      console.log(result);
           dispatch({type:SHOW_POST,post:result});
         });
    }
}
