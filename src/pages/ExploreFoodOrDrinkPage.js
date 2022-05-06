import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ExploreOption from '../components/ExploreOption';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import services from '../services';

function ExploreFoodOrDrinkPage() {
  const { pathname } = useLocation();
  const { mealsToken, cocktailsToken } = useSelector((state) => state);
  const { mealsAPI, cocktailsAPI } = services;

  const isMeal = pathname.includes('foods');
  const foodOrDrink = isMeal ? 'foods' : 'drinks';

  const [options, setOptions] = useState([
    ['By Ingredient', `/explore/${foodOrDrink}/ingredients`, 'explore-by-ingredient'],
  ]);

  useEffect(() => {
    if (foodOrDrink !== 'drinks') {
      options.push(
        ['By Nationality', '/explore/foods/nationalities', 'explore-by-nationality'],
      );
    }

    const token = isMeal ? mealsToken : cocktailsToken;
    const fetchFunction = isMeal
      ? mealsAPI.getSingleRandomMealDetails
      : cocktailsAPI.getSingleRandomCocktailDetails;

    async function randomRecipe() {
      const [{ idMeal, idDrink }] = await fetchFunction(token);
      const id = idMeal || idDrink;
      setOptions((prevOptions) => [
        ...prevOptions,
        ['Surprise me!', `/${foodOrDrink}/${id}`, 'explore-surprise'],
      ]);
    }
    randomRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header title="Explore" />
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
    </>
  );
}

export default ExploreFoodOrDrinkPage;
