import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useToken from '../hooks/useToken';
import {
  actionDefaultSearch, actionSearchByCategory, actionToggleFilter,
} from '../redux/actions';

function CategoryButton({ categoryName, mealOrDrink, handleClick, dataTestId }) {
  const token = useToken();
  const foodsOrDrinks = mealOrDrink === 'Meal' ? 'foods' : 'drinks';
  const categories = useSelector((state) => state.search.categories);
  const dispatch = useDispatch();

  const handleDefaultClick = () => {
    switch (true) {
    case categoryName !== 'All'
        && (categories.filter !== categoryName || categories.filter === ''):
      dispatch(actionToggleFilter(categoryName));
      dispatch(actionSearchByCategory(token, foodsOrDrinks, categoryName));
      break;

    default:
      dispatch(actionToggleFilter(''));
      dispatch(actionDefaultSearch(token, foodsOrDrinks, categoryName));
      break;
    }
  };

  return (
    <button
      type="button"
      data-testid={ dataTestId(categoryName) }
      onClick={ () => handleClick(handleDefaultClick) }
    >
      {categoryName}
    </button>
  );
}

CategoryButton.defaultProps = {
  mealOrDrink: 'Meal',
  handleClick: (handleDefaultClick) => handleDefaultClick(),
  dataTestId: (categoryName) => `${categoryName}-category-filter`,
};

CategoryButton.propTypes = {
  categoryName: PropTypes.string.isRequired,
  mealOrDrink: PropTypes.string,
  handleClick: PropTypes.func,
  dataTestId: PropTypes.func,
};

export default CategoryButton;
