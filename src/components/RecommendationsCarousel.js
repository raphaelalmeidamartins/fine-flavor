import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import '../sass/components/RecommendationsCarousel.css';
import RecipeCard from './RecipeCard';

function RecommendationsCarousel({ type }) {
  const { results } = useSelector((state) => state.search);

  const maxResults = 6;
  const slicedResults = results[type].slice(0, maxResults);

  const key = () => (type === 'foods' ? 'Meal' : 'Drink');

  return (
    <div className="RecommendationsCarousel-container">
      <h2>Recommended</h2>
      <div className="RecommendationsCarousel">
        { slicedResults.map((recipe, index) => (
          <RecipeCard
            key={ recipe[`id${key()}`] }
            id={ recipe[`id${key()}`] }
            mealOrDrink={ key() }
            index={ index }
            thumbnail={ recipe[`str${key()}Thumb`] }
            title={ recipe[`str${key()}`] }
          />
        ))}
      </div>
    </div>
  );
}

RecommendationsCarousel.propTypes = {
  type: PropTypes.string.isRequired,
};

export default RecommendationsCarousel;
