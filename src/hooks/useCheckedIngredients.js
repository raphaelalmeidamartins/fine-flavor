import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useFoodsOrDrinks from './useFoodsOrDrinks';

function useCheckedIngredients() {
  const { cocktails, meals } = useSelector((state) => state.inProgressRecipes);
  const { id } = useParams();
  const foodsOrDrinks = useFoodsOrDrinks('boolean');
  const checkedIngredients = foodsOrDrinks ? meals[id] : cocktails[id];
  return checkedIngredients;
}

export default useCheckedIngredients;
