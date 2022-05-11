import React from 'react';
import '../sass/components/NavBar.css';
import IconButton from './IconButton';

function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <IconButton route="/foods" />
        </li>
        <li>
          <IconButton route="/drinks" />
        </li>
        <li>
          <IconButton route="/explore" />
        </li>
        <li>
          <IconButton route="/favorite-recipes" />
        </li>
        <li>
          <IconButton route="/profile" />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
