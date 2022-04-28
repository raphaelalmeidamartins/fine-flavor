import { GET_LOCAL_STORAGE } from '../actions';

const INITIAL_STATE = 1;

const mealsToken = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOCAL_STORAGE:
    return action.mealsToken === null
      ? state
      : action.mealsToken;
  default:
    return state;
  }
};

export default mealsToken;
