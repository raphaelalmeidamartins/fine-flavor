import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { actionUpdateInProgressIngredients } from '../redux/actions';

function Ingredients({ ingredientsData, id, isMeal }) {
  const { pathname } = useLocation();
  const inProgress = pathname.includes('in-progress');
  const dispatch = useDispatch();

  const [checkedIngredients, setCheckedIngredients] = useState([]);

  useEffect(() => {
    dispatch(actionUpdateInProgressIngredients(id, checkedIngredients, isMeal));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedIngredients]);

  const addIngredient = (ingredient) => {
    let updatedArray = [...checkedIngredients];
    updatedArray = [...updatedArray, ingredient];
    setCheckedIngredients(updatedArray);
  };

  const removeIngredient = (ingredient) => {
    console.log('entrou');
    const updatedArray = [...checkedIngredients];
    const index = updatedArray.indexOf(ingredient);
    updatedArray.splice(index, 1);
    setCheckedIngredients(updatedArray);
  };

  const handleChange = ({ target: { checked } }, ingredient) => {
    if (checked) addIngredient(ingredient);
    else removeIngredient(ingredient);
  };

  return (
    <section className="Ingredients">
      <h2>Ingredientes</h2>
      <ul>
        {ingredientsData.map(([ingredient, measure], index) => (
          <li
            key={ ingredient }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {inProgress ? (
              <label
                htmlFor={ `ingredient-${index}` }
                data-testid={ `${index}-ingredient-step` }
              >
                <input
                  type="checkbox"
                  checked={ checkedIngredients.includes(ingredient) }
                  onChange={ (e) => handleChange(e, ingredient) }
                  id={ `ingredient-${index}` }
                />

                {`${ingredient} - ${measure}`}
              </label>
            ) : (
              `${ingredient} - ${measure}`
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

Ingredients.propTypes = {
  ingredientsData: PropTypes.arrayOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
  isMeal: PropTypes.bool.isRequired,
};

export default Ingredients;
