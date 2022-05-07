import React from 'react';
import { useParams } from 'react-router-dom';
import useFavorite from '../hooks/useFavorite';
import useShare from '../hooks/useShare';
import IconButton from './IconButton';

function LikeOrShare() {
  const { id } = useParams();
  const [alertStatus, handleShare] = useShare('/in-progress', '');
  const [isFavorite, handleFavorite] = useFavorite(id);

  return (
    <section>
      <IconButton
        route="share"
        handleClick={ handleShare }
        dataTestId="share-btn"
      />
      <IconButton
        route={ `favorite-${isFavorite()}` }
        handleClick={ () => handleFavorite(isFavorite()) }
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
