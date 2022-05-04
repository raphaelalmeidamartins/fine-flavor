import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionToggleSearchBar } from '../redux/actions/index';
import '../sass/components/Header.css';
import IconButton from './IconButton';
import SearchBar from './SearchBar';

function Header({ title, search }) {
  const dispatch = useDispatch();
  const { display } = useSelector((state) => state.search.searchBar);

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
      { display && search && <SearchBar /> }
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
