import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../sass/components/RecipeCard.css';

function RecipeCard({ id, mealOrDrink, title, thumbnail }) {
  const history = useHistory();
  const route = mealOrDrink === 'Meal' ? '/foods' : '/drinks';

  return (
    <button
      type="button"
      className="RecipeCard"
      onClick={ () => history.push(`${route}/${id}`) }
    >
      <img src={ thumbnail } alt={ title } />
      <h3>{title}</h3>
    </button>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.string.isRequired,
  mealOrDrink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default RecipeCard;
