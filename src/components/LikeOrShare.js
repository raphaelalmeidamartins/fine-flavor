import PropTypes from 'prop-types';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useFavorite, useShare } from '../hooks';
import '../sass/components/LikeOrShare.css';
import IconButton from './IconButton';

function LikeOrShare({ recipeId }) {
  const { id } = useParams();
  const [alertStatus, handleShare] = useShare('/in-progress', '');
  const [isFavorite, handleFavorite] = useFavorite(id || recipeId);

  return (
    <section className="LikeOrShare">
      <IconButton
        route="share"
        handleClick={ handleShare }
      />
      <IconButton
        route={ `favorite-${isFavorite()}` }
        handleClick={ () => handleFavorite(isFavorite()) }
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

LikeOrShare.defaultProps = {
  recipeId: undefined,
};

LikeOrShare.propTypes = {
  recipeId: PropTypes.string,
};

export default LikeOrShare;
