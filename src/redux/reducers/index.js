import { combineReducers } from 'redux';
import  categoriesReducer  from '../../modules/categories/categoriesReducer';
import  postsReducer  from '../../modules/posts/postsReducer';

export default combineReducers({
  categoriesReducer,
  postsReducer
})
