import { combineReducers } from 'redux';
import cocktailsToken from './cocktailsToken';
import doneRecipes from './doneRecipes';
import favoriteRecipes from './favoriteRecipes';
import inProgressRecipes from './inProgressRecipes';
import mealsToken from './mealsToken';
import user from './user';
import search from './search';

const rootReducer = combineReducers({
  mealsToken,
  cocktailsToken,
  user,
  doneRecipes,
  favoriteRecipes,
  inProgressRecipes,
  search,
});

export default rootReducer;
