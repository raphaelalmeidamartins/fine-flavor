import {
  GET_LOCAL_STORAGE,
  UPDATE_IN_PROGRESS_INGREDIENTS,
} from '../actions';

const INITIAL_STATE = {
  cocktails: {},
  meals: {},
};

const returnRecipeObject = ({ recipeId, checkedIngredients }, state) => {
  if (checkedIngredients.length) {
    return {
      ...state,
      [recipeId]: checkedIngredients,
    };
  }
  const updatedState = { ...state };
  delete updatedState[recipeId];
  return updatedState;
};

/* cada item desses objetos vai ser um chave com o id da comida e um array com os ingredientes */

const inProgressRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOCAL_STORAGE:
    return action.inProgressRecipes === null
      ? state
      : action.inProgressRecipes;
  case UPDATE_IN_PROGRESS_INGREDIENTS:
    return {
      cocktails: action.isMeal
        ? state.cocktails
        : returnRecipeObject(action, state.cocktails),
      meals: action.isMeal
        ? returnRecipeObject(action, state.meals)
        : state.meals,
    };
  default:
    return state;
  }
};

export default inProgressRecipes;
