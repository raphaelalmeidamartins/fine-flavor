import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ExploreOption from '../components/ExploreOption';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { useFoodsOrDrinks, useToken } from '../hooks';
import {
  actionCleanResults,
  actionSearchByIngredients,
} from '../redux/actions';
import services from '../services';

function ExploreIngredientsPage() {
  const dispatch = useDispatch();
  const { mealsAPI, cocktailsAPI } = services;

  const isMeal = useFoodsOrDrinks('boolean');
  const foodsOrDrinks = useFoodsOrDrinks();
  const token = useToken();
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
        {ingredientsList.map(({ strIngredient, strIngredient1 }, index) => {
          const ingredientName = strIngredient || strIngredient1;
          const imageSrc = isMeal
            ? mealsAPI.getMealsIngredientThumbnail(ingredientName)
            : cocktailsAPI.getCocktailsIngredientThumbnail(ingredientName);

          return (
            <ExploreOption
              key={ ingredientName }
              text={ ingredientName }
              route={ isMeal ? '/foods' : '/drinks' }
              image={ imageSrc }
              callback={ () => {
                dispatch(actionCleanResults());
                dispatch(
                  actionSearchByIngredients(
                    token,
                    foodsOrDrinks,
                    ingredientName,
                  ),
                );
              } }
              dataTestId={ `${index}-ingredient-card` }
              imageTestId={ `${index}-card-img` }
              nameTestId={ `${index}-card-name` }
            />
          );
        })}
        {/* tem que renderizar mais de um ExploreOption */}
      </main>
      <NavBar />
    </div>
  );
}

export default ExploreIngredientsPage;
