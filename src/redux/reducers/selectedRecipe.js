import { GET_RECIPE_SUCCESS } from '../actions';

const INITIAL_STATE = {};

const selectedRecipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_RECIPE_SUCCESS:
    return action.recipe;
  default:
    return state;
  }
};

export default selectedRecipe;
