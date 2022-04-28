import { GET_LOCAL_STORAGE } from '../actions';

const INITIAL_STATE = {
  cocktails: {},
  meals: {},
};

/* cada item desses objetos vai ser um chave com o id da comida e um array com os ingredientes */

const inProgressRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOCAL_STORAGE:
    return action.inProgressRecipes;
  default:
    return state;
  }
};

export default inProgressRecipes;
