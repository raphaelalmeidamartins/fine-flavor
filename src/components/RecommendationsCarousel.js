import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import RecipeCard from './RecipeCard';

function RecommendationsCarousel({ type }) {
  const { results } = useSelector((state) => state.search);

  const maxResults = 6;
  const slicedResults = results[type].slice(0, maxResults);

  const key = () => (type === 'foods' ? 'Meal' : 'Drink');

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <Slider { ...settings }>
      { slicedResults.map(((recipe, index) => (
        <div key={ recipe[`id${key()}`] } data-testid={ `${index}-recomendation-card` }>
          <RecipeCard
            id={ recipe[`id${key()}`] }
            mealOrDrink={ key() }
            index={ index }
            thumbnail={ recipe[`str${key()}Thumb`] }
            title={ recipe[`str${key()}`] }
            titleTestId={ `${index}-recomendation-title` }
          />
        </div>
      ))) }
    </Slider>
  );
}

RecommendationsCarousel.propTypes = {
  type: PropTypes.string.isRequired,
};

export default RecommendationsCarousel;
