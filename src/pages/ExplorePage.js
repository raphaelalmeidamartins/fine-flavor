import React from 'react';
import ExploreOption from '../components/ExploreOption';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import '../sass/pages/ExplorePage.css';

function ExplorePage() {
  return (
    <div className="ExplorePage">
      <Header title="Explore" />
      <main>
        <ExploreOption
          key="Explore Foods"
          text="Explore Foods"
          route="/explore/foods"
        />
        <ExploreOption
          key="Explore Drinks"
          text="Explore Drinks"
          route="/explore/drinks"
        />
      </main>
      <NavBar />
    </div>
  );
}

export default ExplorePage;
