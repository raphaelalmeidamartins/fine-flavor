import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';

function Ingredients({ data, inProgress, id, isAMeal }) {
  // const dispatch = useDispatch();
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  useEffect(() => {
    console.log('222');
  }, [checkedIngredients]);

  const handleChange = ({ target: { checked } }) => {
    if (checked) {
      console.log('checkado');
    } else {
      setCheckedIngredients([...checkedIngredients, index]);
    }
  };

  return (
    <section className="Ingredients">
      <h2>Ingredientes</h2>
      <ul>
        {data.map(([ingredient, measure], index) => (
          <li
            key={ ingredient }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {inProgress
              ? (
                <label
                  htmlFor={ `ingredient-${index}` }
                  data-testid={ `${index}-ingredient-step` }
                >
                  <input
                    type="checkbox"
                    value={ index }
                    onChange={ handleChange }
                    id={ `ingredient-${index}` }
                  />

                  {`${ingredient} - ${measure}`}
                </label>
              )
              : `${ingredient} - ${measure}`}
          </li>
        ))}
      </ul>
    </section>
  );
}

Ingredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  inProgress: PropTypes.bool.isRequired,
};

export default Ingredients;
