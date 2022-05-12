import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ExploreOption from '../components/ExploreOption';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { useFoodsOrDrinks, useToken } from '../hooks';
import services from '../services';

function ExploreFoodOrDrinkPage() {
  const { pathname } = useLocation();
  const { mealsAPI, cocktailsAPI } = services;

  const isMeal = useFoodsOrDrinks('boolean');
  const foodsOrDrinks = useFoodsOrDrinks();
  const token = useToken();

  const [options, setOptions] = useState([
    ['By Ingredient', `/explore/${foodsOrDrinks}/ingredients`, 'explore-by-ingredient'],
  ]);

  useEffect(() => {
    if (foodsOrDrinks !== 'drinks') {
      options.push(
        ['By Nationality', '/explore/foods/nationalities', 'explore-by-nationality'],
      );
    }

    const fetchRecipes = isMeal
      ? mealsAPI.getSingleRandomMealDetails
      : cocktailsAPI.getSingleRandomCocktailDetails;

    async function randomRecipe() {
      const [{ idMeal, idDrink }] = await fetchRecipes(token);
      const id = idMeal || idDrink;
      setOptions((prevOptions) => [
        ...prevOptions,
        ['Surprise me!', `/${foodsOrDrinks}/${id}`, 'explore-surprise'],
      ]);
    }
    randomRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header
        title={
          pathname === '/explore/foods' ? 'Explore Foods' : 'Explore Drinks'
        }
      />
      <main>
        {options.map(([exploreText, route, dataTestId]) => (
          <ExploreOption
            key={ exploreText }
            text={ exploreText }
            route={ route }
            dataTestId={ dataTestId }
          />
        ))}
      </main>
      <NavBar />
    </div>
  );
}

export default ExploreFoodOrDrinkPage;
