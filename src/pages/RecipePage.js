import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../components/IconButton';
import Ingredients from '../components/Ingredients';
import RecipeInfo from '../components/RecipeInfo';
import { getRecipeByIdThunk } from '../redux/actions';

function RecipePage(props) {
  const dispatch = useDispatch();
  const { match: { params: { id } }, history: { location: { pathname } } } = props;
  const globalState = useSelector((state) => state);
  const { mealsToken, cocktailsToken, selectedRecipe } = globalState;

  const [ingredients, setIngredients] = useState([]);
  // const [recommendedRecipes, setRecommendations] = useState([]);

  useEffect(() => {
    const token = pathname.includes('food')
      ? mealsToken
      : cocktailsToken;
    dispatch(getRecipeByIdThunk(id, pathname, token));
  }, []);

  useEffect(() => {
    const generateIngredientArray = (keyName) => (
      Object.entries(selectedRecipe)
        .filter(([key, value]) => (key.includes(keyName) && value))
        .map(([, value], index) => (
          [value, selectedRecipe[`strMeasure${index + 1}`]]
        ))
    ); // filtra todos os ingredientes e quantidades para formar um array de arrays no formato [ingrediente, quantidade]
    setIngredients(generateIngredientArray('strIngredient'));
  }, [selectedRecipe]);

  const {
    strMeal, strMealThumb, strCategory,
    strDrink, strDrinkThumb, strAlcoholic,
  } = selectedRecipe;
  const isAMeal = pathname.includes('food');
  const recipe = {
    thumbnail: isAMeal ? strMealThumb : strDrinkThumb,
    title: isAMeal ? strMeal : strDrink,
    category: isAMeal ? strCategory : strAlcoholic,
  };

  const favoriteRecipe = () => {
    // const recipeDetails = {
    //   id,
    //   type: pathname.includes('food') ? 'food' : 'drink',
    //   nationality,
    //   category,
    //   alcoholicOrNot,
    //   name,
    //   image
    // }
  };

  return (
    <main>
      <section>
        <img src={ recipe.thumbnail } alt={ recipe.title } data-testid="recipe-photo" />
        <h1 data-testid="recipe-title">{ recipe.title }</h1>
        <h4 data-testid="recipe-category">{ recipe.category }</h4>
      </section>
      <section>
        <IconButton
          route="share"
          dataTestId="share-btn"
        />
        <IconButton
          route="favorite-false"
          handleClick={ favoriteRecipe }
          dataTestId="favorite-btn"
        />
      </section>
      <Ingredients data={ ingredients } />
      {/* deve retornar checklist ou lista não ordenada */}
      <RecipeInfo />
    </main>
  );
}

RecipePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({ pathname: PropTypes.string }),
  }).isRequired,
};

export default RecipePage;
