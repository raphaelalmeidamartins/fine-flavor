import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import RecipeCard from '../components/RecipeCard';

function ExploreNationalityPage() {
  return (
    <div>
      <Header title="Explore Nationalities" />
      <main>
        <RecipeCard />
        {/* tem que renderizar mais de um RecipeCard */}
      </main>
      <NavBar />
    </div>
  );
}

export default ExploreNationalityPage;
