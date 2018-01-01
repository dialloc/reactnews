import * as newsApi from '../../apis/NewsAPI';


export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const DISPLAY_CATEGORIES = 'DISPLAY_CATEGORIES';

export function fetchCategories () {
  return (dispatch) => {
    return  newsApi.getCategories().then((categories) => {
           dispatch({type:DISPLAY_CATEGORIES,categories:categories});
         });
    }
};
