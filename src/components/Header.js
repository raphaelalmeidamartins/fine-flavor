import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import SearchIconButton from './SearchIconButton';
import '../sass/components/Header.css';

function Header({ title }) {
  return (
    <header className="Header">
      <IconButton route="/profile" data-testid="profile-top-btn" />
      <h1 data-testid="page-title">{ title }</h1>
      <SearchIconButton data-testid="search-top-btn" />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
