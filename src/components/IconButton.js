import PropTypes from 'prop-types';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import IconDrinks from '../assets/icons/IconDrinks';
import IconExplore from '../assets/icons/IconExplore';
import IconFavoriteFill from '../assets/icons/IconFavoriteFill';
import IconFavoriteOutline from '../assets/icons/IconFavoriteOutline';
import IconMeals from '../assets/icons/IconMeals';
import IconProfile from '../assets/icons/IconProfile';
import IconSearch from '../assets/icons/IconSearch';
import IconShare from '../assets/icons/IconShare';
import '../sass/components/IconButton.css';

function IconButton({ route, handleClick }) {
  const icons = {
    '/foods': <IconMeals />,
    '/profile': <IconProfile />,
    '/drinks': <IconDrinks />,
    '/explore': <IconExplore />,
    '/favorite-recipes': <IconFavoriteFill />,
    'favorite-true': <IconFavoriteFill />,
    'favorite-false': <IconFavoriteOutline />,
    share: <IconShare />,
    search: <IconSearch />,
  };
  const history = useHistory();
  const { pathname } = useLocation();
  const className = pathname === route ? 'IconButton IconButton-selected' : 'IconButton';

  return (
    <button
      className={ className }
      type="button"
      onClick={ () => handleClick(history, route) }
    >
      {icons[route]}
    </button>
  );
}

IconButton.defaultProps = {
  route: 'search',
  handleClick: (history, route) => {
    history.push(route);
  },
};

IconButton.propTypes = {
  route: PropTypes.string,
  handleClick: PropTypes.func,
};

export default IconButton;
