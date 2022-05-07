import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ExploreOption from '../components/ExploreOption';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { actionCleanResults, actionSearchByIngredients } from '../redux/actions';
import services from '../services';

function ExploreIngredientsPage() {
  const { pathname } = useLocation();
  const { mealsToken, cocktailsToken } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { mealsAPI, cocktailsAPI } = services;

  const isMeal = pathname.includes('foods');
  const foodOrDrink = isMeal ? 'foods' : 'drinks';
  const token = isMeal ? mealsToken : cocktailsToken;
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    const fetchFunction = isMeal
      ? mealsAPI.getMealsIngredientList
      : cocktailsAPI.getCocktailsIngredientList;

    async function getAllIngredients() {
      const results = await fetchFunction(token);
      const maxResults = 12;
      const slicedResults = results.slice(0, maxResults);
      setIngredientsList(slicedResults);
    }
    getAllIngredients();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
                callback={ () => {
                  dispatch(actionCleanResults());
                  dispatch(actionSearchByIngredients(token, foodOrDrink, ingredientName));
                } }
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
