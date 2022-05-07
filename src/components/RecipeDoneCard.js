import React from 'react';
import useShare from '../hooks/useShare';
import IconButton from './IconButton';
import '../sass/components/RecipeDoneCard.css';

function RecipeDoneCard(
  index,
  { id, type, image, category, name, nationality, alcoholicOrNot, tags },
) {
  const [alertStatus, handleShare] = useShare(`${type}s/${id}`);

  return (
    <section className="RecipeDoneCard">
      <img
        src={ image }
        alt="thumbnail"
        data-testid={ `${index}-horizontal-image` }
      />
      <p data-testid={ `${index}-horizontal-top-text` }>
        {type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot}
      </p>
      <h3 data-testid={ `${index}-horizontal-name` }>{name}</h3>
      <IconButton
        route="share"
        handleClick={ handleShare }
        dataTestId={ `${index}-horizontal-share-btn` }
      />
      <span
        className={ `alert alert-success fade ${alertStatus ? 'show' : ''}` }
        role="alert"
        aria-label="close"
      >
        Link copied!
      </span>
      { type === 'food' && (
        <section>
          {tags.slice(0, 2).map((tagName) => (
            <span
              data-testid={ `${index}-${tagName}-horizontal-tag` }
              key={ tagName }
            >
              {tagName}
            </span>
          ))}
        </section>
      ) }
    </section>
  );
}

export default RecipeDoneCard;
