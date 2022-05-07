import {
  CLEAN_RESULTS,
  RECIEVE_CATEGORIES,
  RECIEVE_RECIPES,
  START_LOADING,
  TOGGLE_FILTER,
  TOGGLE_SEARCHBAR,
} from '../actions';

const INITIAL_STATE = {
  results: {
    foods: [],
    drinks: [],
  },
  categories: {
    filter: '',
    foods: [],
    drinks: [],
  },
  searchBar: {
    display: false,
  },
  loading: false,
};

const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case START_LOADING:
    return {
      ...state,
      loading: true,
    };
  case RECIEVE_RECIPES:
    return {
      ...state,
      results: {
        ...state.results,
        ...action.results,
      },
      loading: false,
    };
  case RECIEVE_CATEGORIES:
    return {
      ...state,
      categories: {
        ...state.categories,
        ...action.categories,
      },
    };
  case TOGGLE_FILTER:
    return {
      ...state,
      categories: {
        ...state.categories,
        filter: action.filter,
      },
    };
  case TOGGLE_SEARCHBAR:
    return { ...state,
      searchBar: {
        ...state.searchBar,
        display: !state.searchBar.display,
      },
    };
  case CLEAN_RESULTS:
    return {
      ...state,
      results: INITIAL_STATE.results,
    };
  default:
    return state;
  }
};

export default search;
