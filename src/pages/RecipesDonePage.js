import React from 'react';
import CategoryButton from '../components/CategoryButton';
import Header from '../components/Header';
import RecipeDoneCard from '../components/RecipeDoneCard';

function RecipesDonePage() {
  return (
    <div>
      <Header title="Done Recipes" />
      <CategoryButton />
      <main>
        <RecipeDoneCard />
      </main>
    </div>
  );
}

export default RecipesDonePage;
