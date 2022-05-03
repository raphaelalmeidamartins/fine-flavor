import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionDefaultSearch,
  actionSearchByCategory,
  actionToggleFilter,
} from '../redux/actions';

function CategoryButton({ categoryName, mealOrDrink }) {
  const mealsToken = useSelector((state) => state.mealsToken);
  const cocktailsToken = useSelector((state) => state.cocktailsToken);
  const token = mealOrDrink === 'Meal' ? mealsToken : cocktailsToken;
  const foodsOrDrinks = mealOrDrink === 'Meal' ? 'foods' : 'drinks';
  const categories = useSelector((state) => state.search.categories);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (categoryName !== 'All' && !categories.filter) {
      dispatch(actionToggleFilter(categoryName));
      dispatch(actionSearchByCategory(token, foodsOrDrinks, categoryName));
    }
    if (categoryName !== 'All' && categories.filter) {
      dispatch(actionToggleFilter(''));
      dispatch(actionDefaultSearch(token, foodsOrDrinks, categoryName));
    }
    if (categoryName === 'All') {
      dispatch(actionToggleFilter(''));
      dispatch(actionDefaultSearch(token, foodsOrDrinks, categoryName));
    }
  };

  return (
    <button
      type="button"
      data-testid={ `${categoryName}-category-filter` }
      onClick={ handleClick }
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
