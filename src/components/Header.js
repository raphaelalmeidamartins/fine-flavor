import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { actionToggleSearchBar } from '../redux/actions/index';
import '../sass/components/Header.css';
import IconButton from './IconButton';
import SearchBar from './SearchBar';

function Header({ title, search }) {
  const dispatch = useDispatch();

  const toggleSearchBar = () => {
    dispatch(actionToggleSearchBar());
  };

  return (
    <header className="Header-container">
      <div className="Header">
        <h1>{title}</h1>
        { search && (
          <IconButton
            handleClick={ toggleSearchBar }
          />
        ) }
      </div>
      { search && <SearchBar /> }
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
