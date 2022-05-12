import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import IconCheckboxChecked from '../assets/icons/IconCheckboxChecked';
import IconCheckboxUnchecked from '../assets/icons/IconCheckboxUnchecked';
import { useCheckedIngredients, useInProgress } from '../hooks';
import { actionUpdateInProgressIngredients } from '../redux/actions';
import '../sass/components/Ingredients.css';

function Ingredients({ ingredientsData, id, isMeal }) {
  const inProgress = useInProgress();
  const dispatch = useDispatch();

  let checkedIngredients = useCheckedIngredients();
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

  const isChecked = (ingredient) => checkedIngredients.includes(ingredient);

  return (
    <section
      className={
        inProgress ? 'Ingredients Ingredients-InProgress' : 'Ingredients'
      }
    >
      <h2>Ingredients</h2>
      <ul>
        {ingredientsData.map(([ingredient, measure], index) => (
          <li key={ ingredient } className={ isChecked(ingredient) ? 'checked' : '' }>
            {inProgress ? (
              <label htmlFor={ `ingredient-${index}` }>
                {isChecked(ingredient) ? (
                  <IconCheckboxChecked />
                ) : (
                  <IconCheckboxUnchecked />
                )}
                <input
                  type="checkbox"
                  checked={ isChecked(ingredient) }
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
