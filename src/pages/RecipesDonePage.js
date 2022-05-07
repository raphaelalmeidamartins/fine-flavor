import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CategoryButton from '../components/CategoryButton';
import Header from '../components/Header';
import RecipeDoneCard from '../components/RecipeDoneCard';

function RecipesDonePage() {
  const { doneRecipes } = useSelector((state) => state);
  const [filter, setFilter] = useState('All');

  return (
    <div>
      <Header title="Done Recipes" />
      <section>
        <CategoryButton
          categoryName="All"
          dataTestId={ () => 'filter-by-all-btn' }
          handleClick={ () => setFilter('All') }
        />
        <CategoryButton
          categoryName="Foods"
          dataTestId={ () => 'filter-by-food-btn' }
          handleClick={ () => setFilter('food') }
        />
        <CategoryButton
          categoryName="Drinks"
          dataTestId={ () => 'filter-by-drink-btn' }
          handleClick={ () => setFilter('drink') }
        />
      </section>
      <main>
        {filter === 'All' && doneRecipes?.length
          ? doneRecipes.map((recipe, index) => (
            <RecipeDoneCard key={ recipe.id } index={ index } { ...recipe } />
          ))
          : doneRecipes.filter(({ type }) => type === filter).map((recipe, index) => (
            <RecipeDoneCard key={ recipe.id } index={ index } { ...recipe } />
          ))}
      </main>
    </div>
  );
}

export default RecipesDonePage;
