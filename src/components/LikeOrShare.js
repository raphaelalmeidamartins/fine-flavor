import React from 'react';
import { useParams } from 'react-router-dom';
import { useFavorite, useShare } from '../hooks';
import IconButton from './IconButton';
import '../sass/components/LikeOrShare.css';

function LikeOrShare() {
  const { id } = useParams();
  const [alertStatus, handleShare] = useShare('/in-progress', '');
  const [isFavorite, handleFavorite] = useFavorite(id);

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

export default LikeOrShare;
