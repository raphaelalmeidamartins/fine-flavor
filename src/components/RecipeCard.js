import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../sass/components/RecipeCard.css';

function RecipeCard({ id, mealOrDrink, title, thumbnail, index }) {
  const history = useHistory();
  const route = mealOrDrink === 'Meal' ? '/food' : '/drink';

  return (
    <button
      data-testid={ `${index}-recipe-card` }
      type="button"
      className="RecipeCard"
      onClick={ () => history.push(`${route}/${id}`) }
    >
      <img data-testid={ `${index}-card-img` } src={ thumbnail } alt={ title } />
      <h3 data-testid={ `${index}-card-name` }>{title}</h3>
    </button>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.string.isRequired,
  mealOrDrink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
