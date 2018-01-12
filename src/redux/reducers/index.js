import { combineReducers } from 'redux';
import  categoriesReducer  from '../../modules/categories/categoriesReducer';
import  postsReducer  from '../../modules/posts/postsReducer';
import { reducer as form  } from 'redux-form';

export default combineReducers({
  categoriesReducer,
  postsReducer,
  form
})
