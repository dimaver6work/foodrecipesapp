import { AnyAction } from 'redux';
import {
  MODAL_RECIPE_PUSH,
  SHOP_DELETE,
} from './modalRecipe.type';
import { Recipe } from '../interfaces/redux/Recipe'

const initialState:Recipe= {
     name: '',
  img: '',
  ingredients: [],
  description:'',
  category: '',
  id: 0,
}


export const modalRecipeReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case MODAL_RECIPE_PUSH:
      return { ...state, name:action.payload.name,img: action.payload.img,ingredients: [...action.payload.ingredients], description: action.payload.description,category: action.payload.category,id: action.payload.id  };
 

    default:
      return state;
  }
};

