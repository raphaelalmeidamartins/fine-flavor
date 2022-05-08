import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useShare } from '../hooks';
import { actionUnfavoriteRecipe } from '../redux/actions';
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
  const dispatch = useDispatch();
  const [alertStatus, handleShare] = useShare('/favorite-recipes', `/${type}s/${id}`);

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
          route="favorite-true"
          handleClick={ () => dispatch(actionUnfavoriteRecipe(id)) }
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
