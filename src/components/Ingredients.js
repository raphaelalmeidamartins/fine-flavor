import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { actionUpdateInProgressIngredients } from '../redux/actions';

function Ingredients({ ingredientsData, id, isMeal }) {
  const { pathname } = useLocation();
  const inProgress = pathname.includes('in-progress');
  const dispatch = useDispatch();

  const { cocktails, meals } = useSelector((state) => state.inProgressRecipes);
  let checkedIngredients = pathname.includes('foods') ? meals[id] : cocktails[id];
  checkedIngredients = checkedIngredients || [];

  const addIngredient = (ingredient) => {
    let updatedArray = [...checkedIngredients];
    updatedArray = [...updatedArray, ingredient];
    dispatch(actionUpdateInProgressIngredients(id, updatedArray, isMeal));
  };

  const removeIngredient = (ingredient) => {
    const updatedArray = [...checkedIngredients];
    const index = updatedArray.indexOf(ingredient);
    updatedArray.splice(index, 1);
    dispatch(actionUpdateInProgressIngredients(id, updatedArray, isMeal));
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
  ingredientsData: PropTypes.arrayOf(PropTypes.array).isRequired,
  id: PropTypes.string.isRequired,
  isMeal: PropTypes.bool.isRequired,
};

export default Ingredients;
