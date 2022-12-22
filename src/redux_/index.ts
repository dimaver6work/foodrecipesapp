import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipes.reducer';
import { shopReducer } from './shop.reducer';
import { combineReducers } from 'redux'
import { modalRecipeReducer } from './modalRecipe.reducer'


const rootReducer = combineReducers({
recipesReducer: recipesReducer,
 shopReducer: shopReducer,
 modalRecipeReducer: modalRecipeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});




