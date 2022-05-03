import PropTypes from 'prop-types';
import React from 'react';

function Ingredients({ data }) {
  return (
    <section className="Ingredients">
      <h2>Ingredientes</h2>
      <ul>
        {data.map(([ingredient, measure], index) => (
          <li key={ ingredient } data-testid={ `${index}-ingredient-name-and-measure` }>
            {`${ingredient} - ${measure}`}
          </li>
        ))}
      </ul>
    </section>
  );
}

Ingredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Ingredients;
