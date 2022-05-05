import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function RecipePageButton() {
  const history = useHistory();
  const { pathname } = useLocation();
  const inProgress = pathname.includes('in-progress');

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

export default RecipePageButton;
