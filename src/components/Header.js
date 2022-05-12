import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { actionToggleSearchBar } from '../redux/actions/index';
import '../sass/components/Header.css';
import IconButton from './IconButton';
import SearchBar from './SearchBar';

function Header({ title, search }) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const toggleSearchBar = () => {
    dispatch(actionToggleSearchBar());
  };

  return (
    <header className="Header-container">
      <div className="Header">
        {pathname === '/profile' ? <div /> : <IconButton route="/profile" />}
        <h1>{title}</h1>
        {search ? <IconButton handleClick={ toggleSearchBar } /> : <div />}
      </div>
      {search && <SearchBar />}
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
