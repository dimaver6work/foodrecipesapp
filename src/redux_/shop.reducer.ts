import { AnyAction } from 'redux';
import {
  SHOP_PUSH,
  SHOP_DELETE,
} from './shop.type';

const initialState= {
   items: []
}


export const shopReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SHOP_PUSH:
      return { ...state, items: Array.from(new Set(([...state.items, action.payload]))) };
    case SHOP_DELETE:
      return {
        ...state,
        items: state.items.filter((product) => product != action.payload),
      };

    default:
      return state;
  }
};


