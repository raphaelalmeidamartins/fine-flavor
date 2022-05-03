import services from '../../services';

const { mealsAPI, cocktailsAPI } = services;

/* Aqui criaremos as actions */
const GET_LOCAL_STORAGE = 'GET_LOCAL_STORAGE';
const SAVE_USER = 'SAVE_USER';
const UPDATE_USER = 'UPDATE_USER';
const GET_RECIPE = 'GET_RECIPE';
const GET_RECIPE_SUCCESS = 'GET_RECIPE_SUCCESS';
const GET_RECIPE_ERROR = 'GET_RECIPE_ERROR';
const START_LOADING = 'START_LOADING';
const RECIEVE_RECIPES = 'RECIEVE_RECIPES';
const RECIEVE_CATEGORIES = 'RECIEVE_CATEGORIES';
const TOGGLE_FILTER = 'TOGGLE_FILTER';
const FAVORITE_RECIPE = 'FAVORITE_RECIPE';

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
    ? mealsAPI.getMealDetailsById
    : cocktailsAPI.getCocktailDetailsById;

  dispatch(getRecipe());
  try {
    const [response] = await getDetailsById(token, id);
    dispatch(getRecipeSuccess(response));
  } catch (error) {
    dispatch(getRecipeError(error));
  }
};

const actionStartLoading = () => ({
  type: START_LOADING,
});

const actionRecieveRecipes = (results) => ({
  type: RECIEVE_RECIPES,
  results,
});

const actionRecieveCategories = (categories) => ({
  type: RECIEVE_CATEGORIES,
  categories,
});

const actionRequestCategories = (token, foodsOrDrinks) => (
  async (dispatch) => {
    dispatch(actionStartLoading());
    const maxCategories = 5;
    if (foodsOrDrinks === 'foods') {
      let foods = await mealsAPI.getMealsCategoriesList(token);
      foods = foods
        .map((category) => category.strCategory)
        .slice(0, maxCategories);
      dispatch(actionRecieveCategories({ foods }));
    }
    if (foodsOrDrinks === 'drinks') {
      let drinks = await cocktailsAPI.getCocktailsCategoriesList(token);
      drinks = drinks
        .map((category) => category.strCategory)
        .slice(0, maxCategories);
      dispatch(actionRecieveCategories({ drinks }));
    }
  }
);

const actionDefaultSearch = (token, foodsOrDrinks) => (
  async (dispatch) => {
    dispatch(actionStartLoading());
    const maxResults = 12;
    if (foodsOrDrinks === 'foods') {
      let foods = await mealsAPI.getMealsDefault(token);
      foods = foods.slice(0, maxResults);
      dispatch(actionRecieveRecipes({ foods }));
    }
    if (foodsOrDrinks === 'drinks') {
      let drinks = await cocktailsAPI.getCocktailsDefault(token);
      drinks = drinks.slice(0, maxResults);
      dispatch(actionRecieveRecipes({ drinks }));
    }
  }
);

const actionSearchByCategory = (token, foodsOrDrinks, category) => (
  async (dispatch) => {
    dispatch(actionStartLoading());
    const maxResults = 12;
    if (foodsOrDrinks === 'foods') {
      let foods = await mealsAPI.getMealsByCategory(token, category);
      foods = foods.slice(0, maxResults);
      dispatch(actionRecieveRecipes({ foods }));
    }
    if (foodsOrDrinks === 'drinks') {
      let drinks = await cocktailsAPI.getCocktailsByCategory(token, category);
      drinks = drinks.slice(0, maxResults);
      dispatch(actionRecieveRecipes({ drinks }));
    }
  }
);

const actionToggleFilter = (filter) => ({
  type: TOGGLE_FILTER,
  filter,
});

const actionFavoriteRecipe = (recipe) => ({
  type: FAVORITE_RECIPE,
  recipe,
});

export {
  GET_LOCAL_STORAGE,
  actionGetLocalStorage,
  SAVE_USER,
  actionSaveUser,
  UPDATE_USER,
  actionUpdateUser,
  GET_RECIPE_SUCCESS,
  getRecipeByIdThunk,
  START_LOADING,
  actionStartLoading,
  RECIEVE_RECIPES,
  actionDefaultSearch,
  RECIEVE_CATEGORIES,
  actionRequestCategories,
  actionSearchByCategory,
  TOGGLE_FILTER,
  actionToggleFilter,
  FAVORITE_RECIPE,
  actionFavoriteRecipe,
};
