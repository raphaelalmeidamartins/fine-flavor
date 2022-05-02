import { GET_LOCAL_STORAGE, SAVE_USER, UPDATE_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOCAL_STORAGE:
    return action.user === null
      ? state
      : action.user;
  case SAVE_USER:
    return {
      ...state,
      email: action.user,
    };
  case UPDATE_USER:
    return {
      ...state,
      [action.name]: action.value,
    };
  default:
    return state;
  }
};

export default user;
