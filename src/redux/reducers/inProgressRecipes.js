import { GET_LOCAL_STORAGE, UPDATE_IN_PROGRESS } from '../actions';

const INITIAL_STATE = {
  cocktails: {},
  meals: {},
};

/* cada item desses objetos vai ser um chave com o id da comida e um array com os ingredientes */

const inProgressRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOCAL_STORAGE:
    return action.inProgressRecipes === null
      ? state
      : action.inProgressRecipes;
  case UPDATE_IN_PROGRESS:
    return {
      cocktails: action.isMeal
        ? state.cocktails
        : { ...state.cocktails, ...action.inProgressRecipe },
      meals: action.isMeal
        ? { ...state.meals, ...action.inProgressRecipe }
        : state.meals,
    };
  default:
    return state;
  }
};

export default inProgressRecipes;
