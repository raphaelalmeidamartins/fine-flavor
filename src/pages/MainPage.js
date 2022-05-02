import React from 'react';
import { useLocation } from 'react-router-dom';
import CategoryButton from '../components/CategoryButton';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';

function MainPage() {
  const { pathname } = useLocation();

  return (
    <div>
      <Header title={ pathname === '/foods' ? 'Foods' : 'Drinks' } />
      <SearchBar />
      <CategoryButton />
      {/* tem que renderizar mais de um CategoryButton */}
      <main>
        <RecipeCard />
        {/* tem que renderizar mais de um RecipeCard */}
      </main>
      <NavBar />
    </div>
  );
}

export default MainPage;
