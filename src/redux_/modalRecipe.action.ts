import {
  MODAL_RECIPE_PUSH,
  SHOP_DELETE
} from './modalRecipe.type';


export const addModalRecipe = (payload:any) => ({ type: MODAL_RECIPE_PUSH, payload });

export const removeFromShop = (payload:String) => ({ type: SHOP_DELETE, payload });
  