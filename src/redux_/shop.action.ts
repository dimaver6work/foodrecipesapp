import {
  SHOP_PUSH,
  SHOP_DELETE
} from './shop.type';


export const addToShop = (payload:any) => ({ type: SHOP_PUSH, payload });

export const removeFromShop = (payload:String) => ({ type: SHOP_DELETE, payload });
  