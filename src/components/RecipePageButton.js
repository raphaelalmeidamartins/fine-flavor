import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import useGenerateRecipeObject from '../hooks/useGenerateRecipeObject';
import {
  actionFinishRecipe,
  actionUpdateInProgressIngredients,
} from '../redux/actions';
import '../sass/components/RecipePageButton.css';

function RecipePageButton({ inProgress, ingredientsData }) {
  const { id } = useParams();
  const { pathname } = useLocation();
  const history = useHistory();
  const { cocktails, meals } = useSelector((state) => state.inProgressRecipes);
  const checkedIngredients = pathname.includes('foods')
    ? meals[id]
    : cocktails[id];

  const returnButtonText = () => {
    if (!inProgress && checkedIngredients) {
      return 'Continue Recipe';
    }
    return inProgress ? 'Finish Recipe' : 'Start Recipe';
  };

  const isMeal = pathname.includes('food');
  const dispatch = useDispatch();
  const { recipeDoneObject } = useGenerateRecipeObject();

  const handleDone = () => {
    dispatch(actionFinishRecipe(recipeDoneObject));
    dispatch(actionUpdateInProgressIngredients(id, [], isMeal));
  };

  const handleClick = () => {
    if (inProgress) {
      handleDone();
      history.push(`${pathname}/done-recipes`);
    } else {
      history.push(`${pathname}/in-progress`);
    }
  };

  return (
    <button
      className="RecipePageButton"
      type="button"
      onClick={ handleClick }
      data-testid={ inProgress ? 'finish-recipe-btn' : 'start-recipe-btn' }
      disabled={
        inProgress
        && !ingredientsData.every(([ingrName]) => checkedIngredients?.includes(ingrName))
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
