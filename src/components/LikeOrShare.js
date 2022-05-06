import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useGenerateRecipeObject from '../hooks/useGenerateRecipeObject';
import {
  actionFavoriteRecipe, actionUnfavoriteRecipe,
} from '../redux/actions';
import IconButton from './IconButton';

function LikeOrShare() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    favoriteRecipes,
  } = useSelector((state) => state);

  const [alertStatus, setAlertStatus] = useState(false);

  const { recipeFavoriteObject } = useGenerateRecipeObject();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href.replace('/in-progress', ''));
    setAlertStatus(true);
    const fourSeconds = 4000;
    setTimeout(() => setAlertStatus(false), fourSeconds);
  };

  const isFavorite = () => favoriteRecipes
    .some(({ id: favoriteId }) => id === favoriteId); // verifica se a receita já está entre os favoritos

  const handleFavorite = () => {
    if (isFavorite()) {
      dispatch(actionUnfavoriteRecipe(id)); // envia o id do objeto que deve ser removido dos favoritos
    } else {
      dispatch(actionFavoriteRecipe(recipeFavoriteObject)); // envia o objeto para o reducer
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
