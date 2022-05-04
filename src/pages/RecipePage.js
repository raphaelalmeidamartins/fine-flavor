import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../components/IconButton';
import Ingredients from '../components/Ingredients';
import RecipeInfo from '../components/RecipeInfo';
import {
  getRecipeByIdThunk, actionFavoriteRecipe, actionUnfavoriteRecipe,
} from '../redux/actions';

function RecipePage(props) {
  const dispatch = useDispatch();
  const { match: { params: { id } }, history: { location: { pathname } } } = props;
  const globalState = useSelector((state) => state);
  const { mealsToken, cocktailsToken, selectedRecipe } = globalState;
  const [alertStatus, setAlertStatus] = useState(false);

  const [ingredients, setIngredients] = useState([]);
  // const [recommendedRecipes, setRecommendations] = useState([]);
  const isAMeal = pathname.includes('food');

  useEffect(() => {
    const token = isAMeal
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

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setAlertStatus(true);
    const fourSeconds = 4000;
    setTimeout(() => setAlertStatus(false), fourSeconds);
  };

  const isFavorite = () => {
    const { favoriteRecipes } = globalState;
    const idFound = favoriteRecipes.some(({ id: favoriteId }) => id === favoriteId);
    return idFound;
  }; // verifica se a receita já está entre os favoritos

  const {
    strMeal, strMealThumb, strCategory,
    strDrink, strDrinkThumb, strAlcoholic,
    strArea,
  } = selectedRecipe;

  const recipe = {
    thumbnail: isAMeal ? strMealThumb : strDrinkThumb,
    title: isAMeal ? strMeal : strDrink,
    category: isAMeal ? strCategory : strAlcoholic,
  };

  const handleFavorite = () => {
    const recipeDetails = {
      id,
      type: isAMeal ? 'food' : 'drink',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: strAlcoholic || 'Non alcoholic',
      name: recipe.title,
      image: recipe.thumbnail,
    };
    if (isFavorite()) {
      dispatch(actionUnfavoriteRecipe(id)); // envia o id do objeto que deve ser removido dos favoritos
    } else {
      dispatch(actionFavoriteRecipe(recipeDetails)); // envia o objeto para o reducer
    }
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
          handleClick={ handleShare }
          dataTestId="share-btn"
        />
        <IconButton
          route={ `favorite-${isFavorite()}` }
          handleClick={ handleFavorite }
          dataTestId="favorite-btn"
        />
        <span
          className={ `alert alert-success fade ${alertStatus ? 'show' : ''}` }
          role="alert"
          aria-label="close"
        >
          Link copied!
        </span>
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
