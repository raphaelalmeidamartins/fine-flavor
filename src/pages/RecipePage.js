import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Ingredients from '../components/Ingredients';
import RecipeInfo from '../components/RecipeInfo';
import { getRecipeByIdThunk } from '../redux/actions';

function RecipePage(props) {
  const dispatch = useDispatch();
  const { match: { params: { id } }, history: { location: { pathname } } } = props;
  const globalState = useSelector((state) => state);

  useEffect(() => {
    const token = pathname.includes('food')
      ? globalState.mealsToken
      : globalState.cocktailsToken;
    dispatch(getRecipeByIdThunk(id, pathname, token));
  }, []);

  return (
    <div>
      <main>
        <Ingredients />
        {/* deve retornar checklist ou lista não ordenada */}
        <RecipeInfo />
      </main>
    </div>
  );
}

RecipePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
};

export default RecipePage;
