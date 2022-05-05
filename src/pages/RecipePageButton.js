import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';

function RecipePageButton({ inProgress, ingredientsData }) {
  const { pathname } = useLocation();
  const { id } = useParams();
  const history = useHistory();
  const { cocktails, meals } = useSelector((state) => state.inProgressRecipes);
  let checkedIngredients = pathname.includes('foods')
    ? meals[id]
    : cocktails[id];
  checkedIngredients = checkedIngredients || [];

  const returnButtonText = () => {
    if (!inProgress && checkedIngredients.length) {
      return 'Continue Recipe';
    }
    return inProgress ? 'Finish Recipe' : 'Start Recipe';
  };

  return (
    <button
      type="button"
      onClick={ () => history.push(
        `${pathname.slice(0, pathname.length)}/${
          inProgress ? 'done-recipes' : 'in-progress'
        }`,
      ) }
      data-testid={ `${inProgress ? 'finish' : 'start'}-recipe-btn` }
      disabled={
        inProgress
        && !ingredientsData.every(([ingrName]) => checkedIngredients.includes(ingrName))
      }
    >
      {returnButtonText()}
    </button>
  );
}

RecipePageButton.propTypes = {
  inProgress: PropTypes.bool.isRequired,
  ingredientsData: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default RecipePageButton;
