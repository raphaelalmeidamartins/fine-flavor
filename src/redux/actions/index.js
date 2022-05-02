import { getCocktailDetailsById } from '../../services/cocktailsAPI';
import { getMealDetailsById } from '../../services/mealsAPI';

/* Aqui criaremos as actions */
const GET_LOCAL_STORAGE = 'GET_LOCAL_STORAGE';
const SAVE_USER = 'SAVE_USER';
const UPDATE_USER = 'UPDATE_USER';
const GET_RECIPE = 'GET_RECIPE';
const GET_RECIPE_SUCCESS = 'GET_RECIPE_SUCCESS';
const GET_RECIPE_ERROR = 'GET_RECIPE_ERROR';

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

const getRecipe = () => ({
  type: GET_RECIPE,
});

const getRecipeSuccess = (recipe) => ({
  type: GET_RECIPE_SUCCESS,
  recipe,
});

const getRecipeError = (error) => ({
  type: GET_RECIPE_ERROR,
  error,
});

const getRecipeByIdThunk = (id, pathname, token) => async (dispatch) => {
  const getDetailsById = pathname.includes('foods')
    ? getMealDetailsById
    : getCocktailDetailsById;

  dispatch(getRecipe());
  try {
    const response = await getDetailsById(token, id);
    dispatch(getRecipeSuccess(response));
  } catch (error) {
    dispatch(getRecipeError(error));
  }
};

export {
  GET_LOCAL_STORAGE,
  actionGetLocalStorage,
  SAVE_USER,
  actionSaveUser,
  UPDATE_USER,
  actionUpdateUser,
  GET_RECIPE_SUCCESS,
  getRecipeByIdThunk,
};
