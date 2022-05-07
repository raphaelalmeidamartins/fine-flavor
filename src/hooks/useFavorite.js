import { useDispatch, useSelector } from 'react-redux';
import { actionFavoriteRecipe, actionUnfavoriteRecipe } from '../redux/actions';
import useGenerateRecipeObject from './useGenerateRecipeObject';

function useFavorite(recipeId) {
  const dispatch = useDispatch();

  const { favoriteRecipes } = useSelector((state) => state);

  const { recipeFavoriteObject } = useGenerateRecipeObject(recipeId);

  const isFavorite = () => favoriteRecipes
    .some(({ id: favoriteId }) => recipeId === favoriteId); // verifica se a receita já está entre os favoritos

  const handleFavorite = () => {
    if (isFavorite()) {
      dispatch(actionUnfavoriteRecipe(recipeId)); // envia o id do objeto que deve ser removido dos favoritos
    } else {
      dispatch(actionFavoriteRecipe(recipeFavoriteObject)); // envia o objeto para o reducer
    }
  };

  return [isFavorite, handleFavorite];
}

export default useFavorite;
