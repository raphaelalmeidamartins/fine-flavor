import React from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

// como condicionar os icons aos endereços corretos?
function IconButton() {
  const { route } = this.props;
  const images = [
    ['/profile', blackHeartIcon],
    ['/profile', searchIcon],
    ['/profile', drinkIcon],
    ['/profile', exploreIcon],
    ['/profile', mealIcon],
    ['/profile', shareIcon],
    ['/profile', whiteHeartIcon],
    ['/profile', blackHeartIcon],
  ];

  function handleChangeIcon(event) {
    event.preventDefault();
  }
  return (
    <button
      type="button"
      onClick={ handleChangeIcon }
    >
      IconButton

    </button>
  );
}

IconButton.propTypes = {
  route: PropTypes.string.isRequired,
};

export default IconButton;
