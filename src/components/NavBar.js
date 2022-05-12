import React from 'react';
import '../sass/components/NavBar.css';
import IconButton from './IconButton';

function NavBar() {
  return (
    <nav className="NavBar">
      <IconButton route="/foods" />
      <IconButton route="/drinks" />
      <IconButton route="/explore" />
      <IconButton route="/done-recipes" />
      <IconButton route="/favorite-recipes" />
    </nav>
  );
}

export default NavBar;
