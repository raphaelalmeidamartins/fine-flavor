import services from '../../services';

/* Aqui criaremos as actions */
const GET_LOCAL_STORAGE = 'GET_LOCAL_STORAGE';
const SAVE_USER = 'SAVE_USER';
const UPDATE_USER = 'UPDATE_USER';
const START_LOADING = 'START_LOADING';
const RECIEVE_RECIPES = 'RECIEVE_RECIPES';

const actionGetLocalStorage = (state) => ({
  type: GET_LOCAL_STORAGE,
  ...state,
});

const actionSaveUser = (user) => ({
  type: SAVE_USER,
  user,
});

const actionUpdateUser = (name, value) => ({
  type: UPDATE_USER,
  name,
  value,
});

const actionStartLoading = () => ({
  type: START_LOADING,
});

const actionRecieveRecipes = (results) => ({
  type: RECIEVE_RECIPES,
  results,
});

const actionDefaultSearch = (token) => async function searchRecipes(dispatch) {
  dispatch(actionStartLoading());
  const { mealsAPI } = services;
  const defaultSearch = await mealsAPI.getMealsDefault(token);
  dispatch(actionRecieveRecipes(defaultSearch));
};

export {
  GET_LOCAL_STORAGE,
  actionGetLocalStorage,
  SAVE_USER,
  actionSaveUser,
  UPDATE_USER,
  actionUpdateUser,
  START_LOADING,
  actionStartLoading,
  RECIEVE_RECIPES,
  actionRecieveRecipes,
  actionDefaultSearch,
};
