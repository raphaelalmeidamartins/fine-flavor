import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealsIcon from '../images/mealIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function IconButton({ route, handleClick, dataTestId }) {
  const images = {
    '/foods': mealsIcon,
    '/profile': profileIcon,
    '/drinks': drinkIcon,
    '/explore': exploreIcon,
    '/favorites-recipes': blackHeartIcon,
    'favorite-true': blackHeartIcon,
    'favorite-false': whiteHeartIcon,
    share: shareIcon,
    search: searchIcon,
  };
  const history = useHistory();

  return (
    <input
      src={ images[route] }
      alt={ route }
      data-testid={ dataTestId }
      type="image"
      onClick={ () => handleClick(history, route) }
    />
  );
}

IconButton.defaultProps = {
  route: 'search',
  handleClick: (history, route) => {
    history.push(route);
  },
  dataTestId: '',
};

IconButton.propTypes = {
  route: PropTypes.string,
  handleClick: PropTypes.func,
  dataTestId: PropTypes.string,
};

export default IconButton;
