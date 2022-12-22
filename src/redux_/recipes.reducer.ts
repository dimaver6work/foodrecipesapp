import { Store } from '../interfaces/index';
import { AnyAction } from 'redux';
import {
  RECIPES_SUCCESS,
  RECIPES_PENDING,
  RECIPES_FAILED,
} from './recipes.type';

const initialState = {
    data: null,
    pending: false,
    error: null,

};

const recipesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case RECIPES_SUCCESS:
      return {
       
          data: action['payload'],
          pending: false,
          error: null,
      };
    case RECIPES_PENDING:
      return {
          data: null,
          pending: true,
          error: null,
      };
    case RECIPES_FAILED:
      return {
          data: null,
          pending: false,
          error: action['payload'],
      };
    default:
      return state;
  }
};

export default recipesReducer;
