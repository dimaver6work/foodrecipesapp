import axios from 'axios';
import { ErrorResponse } from '../interfaces/index';
import {
  RECIPES_SUCCESS,
  RECIPES_PENDING,
 RECIPES_FAILED,
} from './recipes.type';

export const getRecipes = (): any => {
  const pending = () => ({
    type: RECIPES_PENDING,
  });
  const success = (data: any) => ({
    type: RECIPES_SUCCESS,
    payload: data,
  });
  const failure = (error: ErrorResponse) => ({
    type: RECIPES_FAILED,
    payload: error,
  });
  return async (dispatch: any) => {
    dispatch(pending());
    const { data, error } = await axios.get<any, any>(
      'https://6375172408104a9c5f91fd66.mockapi.io/new'
    );

    if (data) {
      dispatch(success(data));
      return { data, error: null };
    }
    dispatch(failure(error));
    return { data: null, error };
  };
};
