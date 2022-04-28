import { GET_LOCAL_STORAGE } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOCAL_STORAGE:
    return action.user === null
      ? state
      : action.user;
  default:
    return state;
  }
};

export default user;
