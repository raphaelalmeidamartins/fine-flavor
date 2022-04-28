import PropTypes from 'prop-types';
import React from 'react';
import IconButton from './IconButton';
import SearchIconButton from './SearchIconButton';

function Header({ title }) {
  return (
    <header>
      <IconButton />
      <h1>{ title }</h1>
      <SearchIconButton />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
