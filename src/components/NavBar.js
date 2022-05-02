import React from 'react';
import IconButton from './IconButton';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><IconButton route="/drinks" /></li>
        <li><IconButton route="/explore" /></li>
        <li><IconButton route="/foods" /></li>
      </ul>
    </nav>
  );
}

export default NavBar;
