import React from 'react';
import '../sass/components/NavBar.css';
import IconButton from './IconButton';

function NavBar() {
  return (
    <nav className="NavBar">
      <IconButton route="/foods" />
      <IconButton route="/drinks" />
      <IconButton route="/explore" />
      <IconButton route="/favorite-recipes" />
      <IconButton route="/profile" />
    </nav>
  );
}

export default NavBar;
