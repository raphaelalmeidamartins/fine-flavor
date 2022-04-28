/* Aqui criaremos as actions */
const GET_LOCAL_STORAGE = 'GET_LOCAL_STORAGE';
const SAVE_USER = 'SAVE_USER';

const actionGetLocalStorage = (state) => ({
  type: GET_LOCAL_STORAGE,
  ...state,
});

const actionSaveUser = (user) => ({
  type: SAVE_USER,
  user,
});

export {
  GET_LOCAL_STORAGE,
  actionGetLocalStorage,
  SAVE_USER,
  actionSaveUser,
};
