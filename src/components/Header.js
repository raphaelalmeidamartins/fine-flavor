import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import '../sass/components/Header.css';
import IconButton from './IconButton';

function Header({ title }) {
  const dispatch = useDispatch();

  const toggleSearchBar = () => {
    dispatch(actionToggleSearchBar());
  };

  return (
    <header className="Header">
      <IconButton route="/profile" data-testid="profile-top-btn" />
      <h1 data-testid="page-title">{title}</h1>
      <IconButton
        handleClick={ toggleSearchBar }
        data-testid="search-top-btn"
      />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
