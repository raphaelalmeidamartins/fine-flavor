import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import ExploreFoodOrDrinkPage from './pages/ExploreFoodOrDrinkPage';
import ExploreIngredientsPage from './pages/ExploreIngredientsPage';
import ExploreNationalityPage from './pages/ExploreNationalityPage';
import ExplorePage from './pages/ExplorePage';
import FavoriteRecipesPage from './pages/FavoriteRecipesPage';
// import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import RecipePage from './pages/RecipePage';
import RecipesDonePage from './pages/RecipesDonePage';

function Routes() {
  return (
    <Switch>
      {/* <Route exact path="/" component={ SplashScreen } /> */}
      <Route exact path="/" component={ SplashScreen } />
      <Route exact path="/foods" component={ MainPage } />
      <Route exact path="/drinks" component={ MainPage } />
      <Route exact path="/foods/:id" component={ RecipePage } />
      <Route exact path="/foods/:id/in-progress" component={ RecipePage } />
      <Route exact path="/drinks/:id" component={ RecipePage } />
      <Route exact path="/drinks/:id/in-progress" component={ RecipePage } />
      <Route exact path="/explore" component={ ExplorePage } />
      <Route exact path="/explore/foods" component={ ExploreFoodOrDrinkPage } />
      <Route
        exact
        path="/explore/foods/ingredients"
        component={ ExploreIngredientsPage }
      />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExploreNationalityPage }
      />
      <Route exact path="/explore/drinks" component={ ExploreFoodOrDrinkPage } />
      <Route
        exact
        path="/explore/drinks/ingredients"
        component={ ExploreIngredientsPage }
      />
      <Route exact path="/profile" component={ ProfilePage } />
      <Route exact path="/done-recipes" component={ RecipesDonePage } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipesPage } />
      <Route><h1>Not Found</h1></Route>
    </Switch>
  );
}

export default Routes;
