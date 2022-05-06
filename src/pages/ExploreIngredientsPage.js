import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ExploreOption from '../components/ExploreOption';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import services from '../services';

function ExploreIngredientsPage() {
  const { pathname } = useLocation();
  const { mealsToken, cocktailsToken } = useSelector((state) => state);
  const { mealsAPI, cocktailsAPI } = services;

  const isMeal = pathname.includes('foods');

  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    const token = isMeal ? mealsToken : cocktailsToken;
    const fetchFunction = isMeal
      ? mealsAPI.getMealsIngredientList
      : cocktailsAPI.getCocktailsIngredientList;

    async function getAllIngredients() {
      const results = await fetchFunction(token);
      const maxResults = 12;
      const slicedResults = results.slice(0, maxResults);
      setIngredientsList(slicedResults);
      console.log(slicedResults);
    }
    getAllIngredients();
  }, []);

  return (
    <div>
      <Header title="Explore Ingredients" />
      <main>
        {
          ingredientsList.map(({ strIngredient, strIngredient1 }, index) => {
            const ingredientName = strIngredient || strIngredient1;
            const imageSrc = isMeal
              ? `https://www.themealdb.com/images/ingredients/${ingredientName}-Small.png`
              : `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Small.png`;

            return (
              <ExploreOption
                key={ ingredientName }
                text={ ingredientName }
                route={ isMeal ? '/foods' : '/drinks' }
                image={ imageSrc }
                dataTestId={ `${index}-ingredient-card` }
                imageTestId={ `${index}-card-img` }
                nameTestId={ `${index}-card-name` }
              />
            );
          })
        }
        {/* tem que renderizar mais de um ExploreOption */}
      </main>
      <NavBar />
    </div>
  );
}

export default ExploreIngredientsPage;
