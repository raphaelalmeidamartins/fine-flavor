import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import IconButton from '../components/IconButton';
import Ingredients from '../components/Ingredients';
import RecipeInfo from '../components/RecipeInfo';
import RecipePageButton from '../components/RecipePageButton';
import {
  actionFavoriteRecipe,
  actionGetRecipeById,
  actionUnfavoriteRecipe,
} from '../redux/actions';

function RecipePage() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    mealsToken,
    cocktailsToken,
    selectedRecipe,
    favoriteRecipes,
  } = useSelector((state) => state);

  const [ingredients, setIngredients] = useState([]);
  const [alertStatus, setAlertStatus] = useState(false);

  const isAmeal = pathname.includes('food');
  const inProgress = pathname.includes('in-progress');

  useEffect(() => {
    const token = isAmeal ? mealsToken : cocktailsToken;
    dispatch(actionGetRecipeById(id, pathname, token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const generateIngredientsArray = () => Object.entries(selectedRecipe)
      .filter(([key, value]) => key.includes('strIngredient') && value)
      .map(([, value], index) => [
        value,
        selectedRecipe[`strMeasure${index + 1}`],
      ]); // filtra todos os ingredientes e quantidades para formar um array de arrays no formato [ingrediente, quantidade]
    setIngredients(generateIngredientsArray());
  }, [selectedRecipe]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setAlertStatus(true);
    const fourSeconds = 4000;
    setTimeout(() => setAlertStatus(false), fourSeconds);
  };

  const {
    strMeal,
    strMealThumb,
    strCategory,
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strArea,
  } = selectedRecipe;

  const recipeSuccintObject = {
    thumbnail: isAmeal ? strMealThumb : strDrinkThumb,
    title: isAmeal ? strMeal : strDrink,
    category: isAmeal ? strCategory : strAlcoholic,
  };

  const isFavorite = () => {
    const idFound = favoriteRecipes.some(
      ({ id: favoriteId }) => id === favoriteId,
    );
    return idFound;
  }; // verifica se a receita já está entre os favoritos

  const handleFavorite = () => {
    const recipeDetailedObject = {
      id,
      type: isAmeal ? 'food' : 'drink',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: strAlcoholic || 'Non alcoholic',
      name: recipeSuccintObject.title,
      image: recipeSuccintObject.thumbnail,
    };

    if (isFavorite()) dispatch(actionUnfavoriteRecipe(id)); // envia o id do objeto que deve ser removido dos favoritos
    else dispatch(actionFavoriteRecipe(recipeDetailedObject)); // envia o objeto para o reducer
  };

  return (
    <main>
      <section>
        <img
          src={ recipeSuccintObject.thumbnail }
          alt={ recipeSuccintObject.title }
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">{recipeSuccintObject.title}</h1>
        <h4 data-testid="recipe-category">{recipeSuccintObject.category}</h4>
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
      <Ingredients
        data={ ingredients }
        inProgress={ inProgress }
        id={ id }
        isAMeal={ isAmeal }
      />
      <RecipeInfo />
      <RecipePageButton inProgress={ inProgress } />
    </main>
  );
}

export default RecipePage;
