import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getRecipes } from '../redux_/recipes.action';

export const useRateApi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await dispatch(getRecipes());
      if (data) {
        toast.success('RESPONSE SUCCESS');
      }
      if (error) {
        toast.error('REQUEST FAILED. RELOAD PAGE');
      }
    };
    fetch();
  }, [dispatch]);
};
