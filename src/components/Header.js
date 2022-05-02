import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import '../sass/components/Header.css';
import IconButton from './IconButton';

function Header({ title, search }) {
  const dispatch = useDispatch();

  const toggleSearchBar = () => {
    dispatch(actionToggleSearchBar());
  };

  return (
    <header className="Header">
      <IconButton route="/profile" dataTestId="profile-top-btn" />
      <h1 data-testid="page-title">{title}</h1>
      { search && (
        <IconButton
          handleClick={ toggleSearchBar }
          dataTestId="search-top-btn"
        />
      ) }
    </header>
  );
}

Header.defaultProps = {
  search: false,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.bool,
};

export default Header;
