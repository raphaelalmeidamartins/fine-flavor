import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CategoryButton from '../components/CategoryButton';
import Header from '../components/Header';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';

function FavoriteRecipesPage() {
  const { favoriteRecipes } = useSelector((state) => state);
  const [filter, setFilter] = useState('All');

  return (
    <div>
      <Header title="Favorite Recipes" />
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
        {filter === 'All' && favoriteRecipes?.length
          ? favoriteRecipes.map((recipe, index) => (
            <FavoriteRecipeCard key={ recipe.id } index={ index } { ...recipe } />
          ))
          : favoriteRecipes.filter(({ type }) => type === filter).map((recipe, index) => (
            <FavoriteRecipeCard key={ recipe.id } index={ index } { ...recipe } />
          ))}
      </main>
    </div>
  );
}

export default FavoriteRecipesPage;
