import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import {
  actionFavoriteRecipe, actionUnfavoriteRecipe,
} from '../redux/actions';
import IconButton from './IconButton';

function LikeOrShare() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { pathname } = useLocation();

  const {
    selectedRecipe,
    favoriteRecipes,
  } = useSelector((state) => state);

  const [alertStatus, setAlertStatus] = useState(false);

  const isMeal = pathname.includes('food');

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href.replace('/in-progress', ''));
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

  const isFavorite = () => favoriteRecipes
    .some(({ id: favoriteId }) => id === favoriteId); // verifica se a receita já está entre os favoritos

  const handleFavorite = () => {
    const recipeDetailedInfo = {
      id,
      type: isMeal ? 'food' : 'drink',
      nationality: isMeal ? strArea : '',
      category: strCategory,
      alcoholicOrNot: isMeal ? '' : strAlcoholic,
      name: isMeal ? strMeal : strDrink,
      image: isMeal ? strMealThumb : strDrinkThumb,
    };

    if (isFavorite()) {
      dispatch(actionUnfavoriteRecipe(id)); // envia o id do objeto que deve ser removido dos favoritos
    } else {
      dispatch(actionFavoriteRecipe(recipeDetailedInfo)); // envia o objeto para o reducer
    }
  };

  return (
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
  );
}

export default LikeOrShare;
