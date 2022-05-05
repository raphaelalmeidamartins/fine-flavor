import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { actionUpdateInProgress } from '../redux/actions';

function Ingredients({ ingredientsData, id, isMeal }) {
  const { pathname } = useLocation();
  const inProgress = pathname.includes('in-progress');
  const dispatch = useDispatch();

  const { cocktails, meals } = useSelector((state) => state.inProgressRecipes);
  const currProgress = pathname.includes('food') ? meals[id] : cocktails[id];

  const [checkedIngredients, setCheckedIngredients] = useState([]);

  useEffect(() => {
    dispatch(actionUpdateInProgress(id, checkedIngredients, isMeal));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedIngredients]);

  const handleChange = ({ target: { checked } }, index, ingredient) => {
    if (!checked) {
      const updatedCheckedIngredients = [...checkedIngredients];
      updatedCheckedIngredients.splice(index, 1);
      setCheckedIngredients(updatedCheckedIngredients);
    } else {
      setCheckedIngredients([...checkedIngredients, ingredient]);
    }
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
                  value={ index }
                  checked={ currProgress?.includes(ingredient) }
                  onChange={ (e) => handleChange(e, index, ingredient) }
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
