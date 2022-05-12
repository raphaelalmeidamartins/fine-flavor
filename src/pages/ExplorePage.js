import React from 'react';
import ExploreOption from '../components/ExploreOption';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

function ExplorePage() {
  const options = [
    ['Explore Foods', '/explore/foods', 'explore-foods'],
    ['Explore Drinks', '/explore/drinks', 'explore-drinks'],
  ];

  return (
    <div>
      <Header title="Explore" />
      <main>
        {options.map(([exploreText, route, dataTestId]) => (
          <ExploreOption
            key={ exploreText }
            text={ exploreText }
            route={ route }
            dataTestId={ dataTestId }
          />
        ))}
      </main>
      <NavBar />
    </div>
  );
}

export default ExplorePage;
