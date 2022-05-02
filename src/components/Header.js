import React from 'react';
import { useLocation } from 'react-router-dom';
import IconButton from './IconButton';
import SearchIconButton from './SearchIconButton';
import '../sass/components/Header.css';

function Header() {
  const { pathname } = useLocation();
  const titles = [
    ['/foods', 'Foods'],
    ['/drinks', 'Drinks'],
    ['/explore', 'Explore'],
    ['/explore/foods', 'Explore Foods'],
    ['/explore', 'Explore Drinks'],
    ['/explore/foods/ingredients', 'Explore Ingredients'],
    ['/explore/drinks/ingredients', 'Explore Ingredients'],
    ['/explore/foods/nationalities', 'Explore Nationalities'],
    ['/profile', 'Profile'],
    ['/done-recipes', 'Done Recipes'],
    ['/favorite-recipes', 'Favorite Recipes'],
  ];

  return (
    <header className="Header">
      <IconButton route="/profile" data-testid="profile-top-btn" />
      <h1 data-testid="page-title">{ titles.find((item) => item[0] === pathname)[1] }</h1>
      <SearchIconButton data-testid="search-top-btn" />
    </header>
  );
}

export default Header;
