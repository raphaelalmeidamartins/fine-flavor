import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToken } from '../hooks';
import {
  actionDefaultSearch,
  actionSearchByCategory,
  actionToggleFilter,
} from '../redux/actions';
import '../sass/components/CategoryButton.css';

function CategoryButton({ categoryName, mealOrDrink, handleClick, isSelected }) {
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

  const returnClassName = () => {
    const { filter } = categories;

    const selected = 'CategoryButton CategoryButton-selected';
    const unselected = 'CategoryButton CategoryButton-unselected';

    if (isSelected) return selected;
    if (!mealOrDrink) return unselected;
    if (categoryName === 'All' && filter === '') {
      return selected;
    }
    return filter === categoryName ? selected : unselected;
  };

  return (
    <button
      className={ returnClassName() }
      type="button"
      onClick={ () => handleClick(handleDefaultClick) }
    >
      {categoryName}
    </button>
  );
}

CategoryButton.defaultProps = {
  mealOrDrink: undefined,
  handleClick: (handleDefaultClick) => handleDefaultClick(),
  isSelected: false,
};

CategoryButton.propTypes = {
  categoryName: PropTypes.string.isRequired,
  mealOrDrink: PropTypes.string,
  handleClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default CategoryButton;
