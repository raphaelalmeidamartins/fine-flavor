import React from 'react';
import '../sass/components/NavBar.css';
import IconButton from './IconButton';

function NavBar() {
  return (
    <nav data-testid="footer" className="NavBar">
      <ul>
        <li>
          <IconButton route="/drinks" dataTestId="drinks-bottom-btn" />
        </li>
        <li>
          <IconButton route="/explore" dataTestId="explore-bottom-btn" />
        </li>
        <li>
          <IconButton route="/foods" dataTestId="food-bottom-btn" />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
