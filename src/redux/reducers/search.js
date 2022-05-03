import { RECIEVE_CATEGORIES, RECIEVE_RECIPES, START_LOADING } from '../actions';

const INITIAL_STATE = {
  results: [],
  categories: [],
  searchBar: {
    display: false,
  },
  loading: true,
};

const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case START_LOADING:
    return {
      ...state,
      results: [],
      loading: true,
    };
  case RECIEVE_RECIPES:
    return {
      ...state,
      results: action.results,
      loading: false,
    };
  case RECIEVE_CATEGORIES:
    return {
      ...state,
      categories: action.categories,
    };
  default:
    return state;
  }
};

export default search;
