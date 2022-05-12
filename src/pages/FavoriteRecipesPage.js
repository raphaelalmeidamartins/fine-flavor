import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CategoryButton from '../components/CategoryButton';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import '../sass/pages/FavoriteRecipesPage.css';

function FavoriteRecipesPage() {
  const { favoriteRecipes } = useSelector((state) => state);
  const [filter, setFilter] = useState('All');

  return (
    <div className="FavoriteRecipesPage">
      <Header title="Favorite Recipes" />
      <section className="FavoriteRecipesPage-categories">
        <CategoryButton
          categoryName="All"
          handleClick={ () => setFilter('All') }
          isSelected={ filter === 'All' }
        />
        <CategoryButton
          categoryName="Foods"
          handleClick={ () => setFilter('food') }
          isSelected={ filter === 'food' }
        />
        <CategoryButton
          categoryName="Drinks"
          handleClick={ () => setFilter('drink') }
          isSelected={ filter === 'drink' }
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
      <NavBar />
    </div>
  );
}

export default FavoriteRecipesPage;
