import React from 'react';
import { useLocation } from 'react-router-dom';
import ExploreOption from '../components/ExploreOption';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

function ExploreFoodOrDrinkPage() {
  const { pathname } = useLocation();

  return (
    <div>
      <Header
        title={
          pathname === '/explore/foods' ? 'Explore Foods' : 'Explore Drinks'
        }
      />
      <main>
        <ExploreOption />
        {/* tem que renderizar mais de um ExploreOption */}
      </main>
      <NavBar />
    </div>
  );
}

export default ExploreFoodOrDrinkPage;
