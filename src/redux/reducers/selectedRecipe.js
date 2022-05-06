import { RECEIVE_RECIPE_SUCCESS } from '../actions';

const INITIAL_STATE = {};

const selectedRecipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_RECIPE_SUCCESS:
    return action.recipe;
  default:
    return state;
  }
};

export default selectedRecipe;
