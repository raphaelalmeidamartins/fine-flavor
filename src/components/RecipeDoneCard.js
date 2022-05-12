import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useShare } from '../hooks';
import '../sass/components/RecipeDoneCard.css';
import IconButton from './IconButton';

function RecipeDoneCard({
  id,
  type,
  image,
  category,
  name,
  nationality,
  alcoholicOrNot,
  doneDate,
  tags,
}) {
  const history = useHistory();
  const [alertStatus, handleShare] = useShare('/done-recipes', `/${type}s/${id}`);

  return (
    <section className="RecipeDoneCard">
      <input
        src={ image }
        alt="thumbnail"
        type="image"
        onClick={ () => history.push(`/${type}s/${id}`) }
      />
      <p>
        {type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot}
      </p>
      <p>{doneDate}</p>
      <a href={ `/${type}s/${id}` }>{name}</a>
      <IconButton
        route="share"
        handleClick={ handleShare }
      />
      <span
        className={ `alert alert-success fade ${alertStatus ? 'show' : ''}` }
        role="alert"
        aria-label="close"
      >
        Link copied!
      </span>
      {type === 'food' && (
        <section>
          {tags.slice(0, 2).map((tagName) => (
            <span
              key={ tagName }
            >
              {tagName}
            </span>
          ))}
        </section>
      )}
    </section>
  );
}

RecipeDoneCard.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  doneDate: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RecipeDoneCard;
