import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

function RecipePageButton({ inProgress }) {
  const history = useHistory();

  return (
    <button
      type="button"
      onClick={ () => history.push(
        `${pathname}/${inProgress ? 'done-recipes' : 'in-progress'}`,
      ) }
      data-testid={ inProgress ? 'finish-recipe-btn' : 'start-recipe-btn' }
    >
      {inProgress ? 'Finish Recipe' : 'Start Recipe'}
    </button>
  );
}

RecipePageButton.propTypes = {
  inProgress: PropTypes.bool.isRequired,
};

export default RecipePageButton;
