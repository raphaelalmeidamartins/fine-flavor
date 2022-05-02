import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import profileIcon from '../images/profileIcon.svg';

function IconButton({ route, handleClick }) {
  const images = {
    '/profile': profileIcon,
    '/drinks': drinkIcon,
    '/explore': exploreIcon,
    '/favorites-recipes': blackHeartIcon,
    '/search': searchIcon,
  };
  const history = useHistory();

  return (
    <button
      type="button"
      onClick={ () => handleClick(history, route) }
    >
      <img src={ images[route] } alt={ route } />
    </button>
  );
}

IconButton.defaultProps = {
  handleClick: (history, route) => {
    history.push(route);
  },
};

IconButton.propTypes = {
  route: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default IconButton;
