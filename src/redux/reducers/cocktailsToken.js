import { GET_LOCAL_STORAGE } from '../actions';

const INITIAL_STATE = 1;

const cocktailsToken = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOCAL_STORAGE:
    return action.cocktailsToken;
  default:
    return state;
  }
};

export default cocktailsToken;
