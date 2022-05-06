import { FINISH_RECIPE, GET_LOCAL_STORAGE, UNFINISH_RECIPE } from '../actions';

const INITIAL_STATE = [];

const doneRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOCAL_STORAGE:
    return action.doneRecipes === null ? state : action.doneRecipes;
  case FINISH_RECIPE:
    return [...state, action.recipe];
  case UNFINISH_RECIPE:
    return state.filter(({ id }) => action.recipeId !== id);
  default:
    return state;
  }
};

export default doneRecipes;
