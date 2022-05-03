import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionSearchByCategory } from '../redux/actions';

function CategoryButton({ categoryName, mealOrDrink }) {
  const mealsToken = useSelector((state) => state.mealsToken);
  const cocktailsToken = useSelector((state) => state.cocktailsToken);
  const token = mealOrDrink === 'Meal' ? mealsToken : cocktailsToken;
  const foodOrDrink = mealOrDrink === 'Meal' ? 'food' : 'drink';
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      data-testid={ `${categoryName}-category-filter` }
      onClick={ () => dispatch(actionSearchByCategory(token, foodOrDrink, categoryName)) }
    >
      {categoryName}
    </button>
  );
}

CategoryButton.propTypes = {
  categoryName: PropTypes.string.isRequired,
  mealOrDrink: PropTypes.string.isRequired,
};

export default CategoryButton;
