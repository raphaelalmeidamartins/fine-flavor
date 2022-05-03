import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionDefaultSearch, actionSearchByCategory } from '../redux/actions';

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
      onClick={ () => {
        if (categoryName !== 'All') {
          dispatch(actionSearchByCategory(token, foodOrDrink, categoryName));
        } else {
          dispatch(actionDefaultSearch(token, foodOrDrink));
        }
      } }
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
