import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CategoryButton from '../components/CategoryButton';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import RecipeDoneCard from '../components/RecipeDoneCard';
import '../sass/pages/DoneRecipesPage.css';

function DoneRecipesPage() {
  const { doneRecipes } = useSelector((state) => state);
  const [filter, setFilter] = useState('All');

  return (
    <div className="DoneRecipesPage">
      <Header title="Done Recipes" />
      <section className="DoneRecipesPage-categories">
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
        {filter === 'All' && doneRecipes?.length
          ? doneRecipes.map((recipe, index) => (
            <RecipeDoneCard key={ recipe.id } index={ index } { ...recipe } />
          ))
          : doneRecipes.filter(({ type }) => type === filter).map((recipe, index) => (
            <RecipeDoneCard key={ recipe.id } index={ index } { ...recipe } />
          ))}
      </main>
      <NavBar />
    </div>
  );
}

export default DoneRecipesPage;
