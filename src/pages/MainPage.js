import React from 'react';
import CategoryButton from '../components/CategoryButton';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';

function MainPage() {
  return (
    <div>
      <Header />
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
