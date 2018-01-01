import { FETCH_CATEGORIES , DISPLAY_CATEGORIES} from './categoriesActions';

const categoriesReducer = (state={},action)=>{
  switch(action.type){
    case FETCH_CATEGORIES:
      return {...state,fetchingCategories:true};
    case DISPLAY_CATEGORIES:
      return {...state,categories:action.categories,fetchingCategories:false};

    default:
    break;
  }
  return state;

}
export default categoriesReducer;
