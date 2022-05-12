import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { actionToggleSearchBar } from '../redux/actions/index';
import '../sass/components/Header.css';
import GoBackButton from './GoBackButton';
import IconButton from './IconButton';
import SearchBar from './SearchBar';

function Header({ title, search, back }) {
  const dispatch = useDispatch();

  const toggleSearchBar = () => {
    dispatch(actionToggleSearchBar());
  };

  return (
    <header className="Header-container">
      <div className="Header">
        {back ? <GoBackButton /> : <IconButton route="/profile" />}
        <h1>{title}</h1>
        {search ? <IconButton handleClick={ toggleSearchBar } /> : <div />}
      </div>
      {search && <SearchBar />}
    </header>
  );
}

Header.defaultProps = {
  search: false,
  back: false,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.bool,
  back: PropTypes.bool,
};

export default Header;
