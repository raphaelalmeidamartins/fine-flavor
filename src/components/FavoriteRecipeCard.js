import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useFavorite from '../hooks/useFavorite';
import useShare from '../hooks/useShare';
import IconButton from './IconButton';

function FavoriteRecipeCard({
  index,
  id,
  type,
  image,
  category,
  name,
  nationality,
  alcoholicOrNot,
}) {
  const history = useHistory();
  const [alertStatus, handleShare] = useShare('/favorite-recipes', `/${type}s/${id}`);
  const [isFavorite, handleFavorite] = useFavorite(id, type);

  return (
    <section className="RecipeDoneCard">
      <input
        src={ image }
        alt="thumbnail"
        type="image"
        onClick={ () => history.push(`/${type}s/${id}`) }
        data-testid={ `${index}-horizontal-image` }
      />
      <p data-testid={ `${index}-horizontal-top-text` }>
        {type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot}
      </p>
      <a href={ `/${type}s/${id}` } data-testid={ `${index}-horizontal-name` }>{name}</a>
      <div>
        <IconButton
          route="share"
          handleClick={ handleShare }
          dataTestId={ `${index}-horizontal-share-btn` }
        />
        <IconButton
          route={ `favorite-${isFavorite()}` }
          handleClick={ () => handleFavorite(isFavorite()) }
          dataTestId={ `${index}-horizontal-favorite-btn` }
        />
        <span
          className={ `alert alert-success fade ${alertStatus ? 'show' : ''}` }
          role="alert"
          aria-label="close"
        >
          Link copied!
        </span>
      </div>
    </section>
  );
}

FavoriteRecipeCard.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
};

export default FavoriteRecipeCard;
