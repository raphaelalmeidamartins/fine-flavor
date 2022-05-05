import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import IconButton from '../components/IconButton';
import Ingredients from '../components/Ingredients';
import RecipeInfo from '../components/RecipeInfo';
import {
  actionFavoriteRecipe,
  actionGetRecipeById,
  actionUnfavoriteRecipe,
} from '../redux/actions';
import RecipePageButton from './RecipePageButton';

function RecipePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { pathname } = useLocation();

  const {
    mealsToken,
    cocktailsToken,
    selectedRecipe,
    favoriteRecipes,
  } = useSelector((state) => state);

  const [ingredients, setIngredients] = useState([]);
  const [alertStatus, setAlertStatus] = useState(false);

  const isMeal = pathname.includes('food');
  const inProgress = pathname.includes('in-progress');

  useEffect(() => {
    const token = isMeal ? mealsToken : cocktailsToken;
    dispatch(actionGetRecipeById(id, pathname, token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const generateIngredientArray = () => Object.entries(selectedRecipe)
      .filter(([key, value]) => key.includes('strIngredient') && value)
      .map(([, value], index) => [
        value,
        selectedRecipe[`strMeasure${index + 1}`],
      ]); // filtra todos os ingredientes e quantidades para formar um array de arrays no formato [ingrediente, quantidade]
    setIngredients(generateIngredientArray());
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

  const recipeBasicInfo = {
    thumbnail: isMeal ? strMealThumb : strDrinkThumb,
    title: isMeal ? strMeal : strDrink,
    category: isMeal ? strCategory : strAlcoholic,
  };

  const isFavorite = () => favoriteRecipes
    .some(({ id: favoriteId }) => id === favoriteId); // verifica se a receita já está entre os favoritos

  const handleFavorite = () => {
    const recipeDetailedInfo = {
      id,
      type: isMeal ? 'food' : 'drink',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: strAlcoholic || 'Non alcoholic',
      name: recipeBasicInfo.title,
      image: recipeBasicInfo.thumbnail,
    };

    if (isFavorite()) {
      dispatch(actionUnfavoriteRecipe(id)); // envia o id do objeto que deve ser removido dos favoritos
    } else {
      dispatch(actionFavoriteRecipe(recipeDetailedInfo)); // envia o objeto para o reducer
    }
  };

  return (
    <main>
      <section>
        <img
          src={ recipeBasicInfo.thumbnail }
          alt={ recipeBasicInfo.title }
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">{recipeBasicInfo.title}</h1>
        <h4 data-testid="recipe-category">{recipeBasicInfo.category}</h4>
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
        ingredientsData={ ingredients }
        inProgress={ inProgress }
        id={ id }
        isMeal={ isMeal }
      />
      <RecipeInfo />
      <RecipePageButton inProgress={ inProgress } />
    </main>
  );
}

export default RecipePage;
