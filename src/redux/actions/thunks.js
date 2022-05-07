import services from '../../services';

const { mealsAPI, cocktailsAPI } = services;

/* Aqui criaremos as actions */
const REQUEST_RECIPE = 'REQUEST_RECIPE';
const RECEIVE_RECIPE_SUCCESS = 'RECEIVE_RECIPE_SUCCESS';
const RECEIVE_RECIPE_ERROR = 'RECEIVE_RECIPE_ERROR';
const START_LOADING = 'START_LOADING';
const RECIEVE_RECIPES = 'RECIEVE_RECIPES';
const RECIEVE_CATEGORIES = 'RECIEVE_CATEGORIES';

const requestRecipe = () => ({
  type: REQUEST_RECIPE,
});

const receiveRecipeSuccess = (recipe) => ({
  type: RECEIVE_RECIPE_SUCCESS,
  recipe,
});

const receiveRecipeError = (error) => ({
  type: RECEIVE_RECIPE_ERROR,
  error,
});

const actionGetRecipeById = (id, pathname, token) => async (dispatch) => {
  const getDetailsById = pathname.includes('foods')
    ? mealsAPI.getMealDetailsById
    : cocktailsAPI.getCocktailDetailsById;

  dispatch(requestRecipe());
  try {
    const [response] = await getDetailsById(token, id);
    dispatch(receiveRecipeSuccess(response));
  } catch (error) {
    dispatch(receiveRecipeError(error));
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

const notFound = (array) => {
  if (array.length === 0) {
    // eslint-disable-next-line no-alert
    alert('Sorry, we haven\'t found any recipes for these filters.');
  }
};

const actionDefaultSearch = (token, foodsOrDrinks) => (
  async (dispatch) => {
    dispatch(actionStartLoading());
    const maxResults = 12;
    if (foodsOrDrinks === 'foods') {
      let foods = await mealsAPI.getMealsDefault(token);
      foods = !foods ? [] : foods.slice(0, maxResults);
      notFound(foods);
      dispatch(actionRecieveRecipes({ foods }));
    }
    if (foodsOrDrinks === 'drinks') {
      let drinks = await cocktailsAPI.getCocktailsDefault(token);
      drinks = !drinks ? [] : drinks.slice(0, maxResults);
      notFound(drinks);
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
      foods = !foods ? [] : foods.slice(0, maxResults);
      notFound(foods);
      dispatch(actionRecieveRecipes({ foods }));
    }
    if (foodsOrDrinks === 'drinks') {
      let drinks = await cocktailsAPI.getCocktailsByCategory(token, category);
      drinks = !drinks ? [] : drinks.slice(0, maxResults);
      notFound(drinks);
      dispatch(actionRecieveRecipes({ drinks }));
    }
  }
);

const actionSearchByIngredients = (token, foodsOrDrinks, ingredient) => (
  async (dispatch) => {
    dispatch(actionStartLoading());
    const maxResults = 12;
    if (foodsOrDrinks === 'foods') {
      let foods = await mealsAPI.getMealsByMainIngredient(token, ingredient);
      foods = !foods ? [] : foods.slice(0, maxResults);
      notFound(foods);
      dispatch(actionRecieveRecipes({ foods }));
    }
    if (foodsOrDrinks === 'drinks') {
      let drinks = await cocktailsAPI.getCocktailsByMainIngredient(token, ingredient);
      drinks = !drinks ? [] : drinks.slice(0, maxResults);
      notFound(drinks);
      dispatch(actionRecieveRecipes({ drinks }));
    }
  }
);

const actionSearchByFirstLetter = (token, foodsOrDrinks, letter) => (
  async (dispatch) => {
    dispatch(actionStartLoading());
    const maxResults = 12;
    if (foodsOrDrinks === 'foods') {
      let foods = await mealsAPI.getMealsByFirstLetter(token, letter);
      foods = !foods ? [] : foods.slice(0, maxResults);
      notFound(foods);
      dispatch(actionRecieveRecipes({ foods }));
    }
    if (foodsOrDrinks === 'drinks') {
      let drinks = await cocktailsAPI.getCocktailsByFirstLetter(token, letter);
      drinks = !drinks ? [] : drinks.slice(0, maxResults);
      notFound(drinks);
      dispatch(actionRecieveRecipes({ drinks }));
    }
  }
);

const actionSearchByName = (token, foodsOrDrinks, name) => (
  async (dispatch) => {
    dispatch(actionStartLoading());
    const maxResults = 12;
    if (foodsOrDrinks === 'foods') {
      let foods = await mealsAPI.getMealsByName(token, name);
      foods = !foods ? [] : foods.slice(0, maxResults);
      notFound(foods);
      dispatch(actionRecieveRecipes({ foods }));
    }
    if (foodsOrDrinks === 'drinks') {
      let drinks = await cocktailsAPI.getCocktailsByName(token, name);
      drinks = !drinks ? [] : drinks.slice(0, maxResults);
      notFound(drinks);
      dispatch(actionRecieveRecipes({ drinks }));
    }
  }
);

const actionSearchByArea = (token, area) => (
  async (dispatch) => {
    dispatch(actionStartLoading());
    let foods = await mealsAPI.getMealsByArea(token, area);
    const maxResults = 12;
    foods = !foods ? [] : foods.slice(0, maxResults);
    notFound(foods);
    dispatch(actionRecieveRecipes({ foods }));
  }
);

export {
  RECEIVE_RECIPE_SUCCESS,
  actionGetRecipeById,
  START_LOADING,
  actionStartLoading,
  RECIEVE_RECIPES,
  actionDefaultSearch,
  RECIEVE_CATEGORIES,
  actionRequestCategories,
  actionSearchByCategory,
  actionSearchByIngredients,
  actionSearchByFirstLetter,
  actionSearchByName,
  actionSearchByArea,
};
