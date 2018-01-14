import * as newsApi from '../../apis/NewsAPI';
import {  push } from 'react-router-redux'

export const FETCH_POSTS = 'FETCH_POSTS';

export const DISPLAY_POSTS = 'DISPLAY_POSTS';

export const SORT_POSTS = 'SORT_POSTS';

export const ADD_POST = 'ADD_POST';

export const UPDATE_POST = 'UPDATE_POST';

export const SAVE_POST_SUCCESS = 'SAVE_POST_SUCCESS';

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
           dispatch(push('/'));
         });
    }
}
