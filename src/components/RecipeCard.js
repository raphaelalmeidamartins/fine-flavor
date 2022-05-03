import PropTypes from 'prop-types';
import React from 'react';
import '../sass/components/RecipeCard.css';

function RecipeCard({ title, thumbnail, index }) {
  return (
    <section data-testid={ `${index}-recipe-card` } className="RecipeCard">
      <img data-testid={ `${index}-card-img` } src={ thumbnail } alt={ title } />
      <h3 data-testid={ `${index}-card-name` }>{ title }</h3>
    </section>
  );
}

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
