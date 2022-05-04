import { GET_LOCAL_STORAGE, FAVORITE_RECIPE, UNFAVORITE_RECIPE } from '../actions';

const INITIAL_STATE = [];

const favoriteRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOCAL_STORAGE:
    return action.favoriteRecipes === null
      ? state
      : action.favoriteRecipes;
  case FAVORITE_RECIPE:
    return [...state, action.recipe];
  case UNFAVORITE_RECIPE:
    return state.filter(({ id }) => action.recipeId !== id);
  default:
    return state;
  }
};

export default favoriteRecipes;
