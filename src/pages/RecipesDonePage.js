import React from 'react';
import CategoryButton from '../components/CategoryButton';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import RecipeDoneCard from '../components/RecipeDoneCard';

function RecipesDonePage() {
  return (
    <div>
      <Header title="Done Recipes" />
      <CategoryButton />
      <main>
        <RecipeDoneCard />
      </main>
      <NavBar />
    </div>
  );
}

export default RecipesDonePage;
