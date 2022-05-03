import services from '../../services';

const { mealsAPI, cocktailsAPI } = services;

/* Aqui criaremos as actions */
const GET_LOCAL_STORAGE = 'GET_LOCAL_STORAGE';
const SAVE_USER = 'SAVE_USER';
const UPDATE_USER = 'UPDATE_USER';
const START_LOADING = 'START_LOADING';
const RECIEVE_RECIPES = 'RECIEVE_RECIPES';
const RECIEVE_CATEGORIES = 'RECIEVE_CATEGORIES';

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

const actionRecieveCategories = (categories) => ({
  type: RECIEVE_CATEGORIES,
  categories,
});

const actionDefaultSearch = (token, foodOrDrink) => (
  async (dispatch) => {
    dispatch(actionStartLoading());
    let defaultSearch = [];
    let categories = [];
    if (foodOrDrink === 'food') {
      defaultSearch = await mealsAPI.getMealsDefault(token);
      categories = await mealsAPI.getMealsCategoriesList(token);
    }
    if (foodOrDrink === 'drink') {
      defaultSearch = await cocktailsAPI.getCocktailsDefault(token);
      categories = await cocktailsAPI.getCocktailsCategoriesList(token);
    }
    const maxDefaultSearch = 12;
    defaultSearch = defaultSearch.splice(0, maxDefaultSearch);
    const maxCategories = 5;
    categories = categories
      .map((category) => category.strCategory)
      .splice(0, maxCategories);
    dispatch(actionRecieveRecipes(defaultSearch));
    dispatch(actionRecieveCategories(categories));
  }
);

const actionSearchByCategory = (token, foodOrDrink, category) => (
  async (dispatch) => {
    dispatch(actionStartLoading());
    let results = [];
    if (foodOrDrink === 'food') {
      results = await mealsAPI.getMealsByCategory(token, category);
    }
    if (foodOrDrink === 'drink') {
      results = await cocktailsAPI.getCocktailsByCategory(token, category);
    }
    const maxResults = 12;
    results = results.splice(0, maxResults);
    dispatch(actionRecieveRecipes(results));
  }
);

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
  actionDefaultSearch,
  RECIEVE_CATEGORIES,
  actionRecieveCategories,
  actionSearchByCategory,
};
