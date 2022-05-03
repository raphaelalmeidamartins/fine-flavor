import React from 'react';
import ExploreOption from '../components/ExploreOption';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

function ExplorePage() {
  return (
    <div>
      <Header title="Explore" />
      <main>
        <ExploreOption title="Explore" />
        {/* tem que renderizar mais de um ExploreOption */}
      </main>
      <NavBar />
    </div>
  );
}

export default ExplorePage;
