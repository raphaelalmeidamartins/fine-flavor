import { FAVORITE_RECIPE, GET_LOCAL_STORAGE } from '../actions';

const INITIAL_STATE = [];

const favoriteRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOCAL_STORAGE:
    return action.favoriteRecipes === null
      ? state
      : action.favoriteRecipes;
  case FAVORITE_RECIPE:
    return [...state, action.recipe];
  default:
    return state;
  }
};

export default favoriteRecipes;
