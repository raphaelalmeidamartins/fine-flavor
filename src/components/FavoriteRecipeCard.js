import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useShare } from '../hooks';
import { actionUnfavoriteRecipe } from '../redux/actions';
import '../sass/components/FavoriteRecipeCard.css';
import IconButton from './IconButton';

function FavoriteRecipeCard({
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
    <section className="FavoriteRecipeCard">
      <input
        src={ image }
        alt="thumbnail"
        type="image"
        onClick={ () => history.push(`/${type}s/${id}`) }
      />
      <div className="FavoriteRecipeCard-info">
        <div>
          <p>
            {type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot}
          </p>
          <a href={ `/${type}s/${id}` }>{name}</a>
        </div>
        <div className="FavoriteRecipeCard-LikeOrShare">
          <IconButton
            route="share"
            handleClick={ handleShare }
          />
          <IconButton
            route="favorite-true"
            handleClick={ () => dispatch(actionUnfavoriteRecipe(id)) }
          />
          <span
            className={ `alert alert-success fade ${alertStatus ? 'show' : ''}` }
            role="alert"
            aria-label="close"
          >
            Link copied!
          </span>
        </div>
      </div>
    </section>
  );
}

FavoriteRecipeCard.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
};

export default FavoriteRecipeCard;
