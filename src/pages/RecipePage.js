import React from 'react';
import Ingredients from '../components/Ingredients';
import RecipeInfo from '../components/RecipeInfo';

function RecipePage() {
  return (
    <div>
      <main>
        <Ingredients />
        {/* deve retornar checklist ou lista não ordenada */}
        <RecipeInfo />
      </main>
    </div>
  );
}

export default RecipePage;
