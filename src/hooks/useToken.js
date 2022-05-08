import { useSelector } from 'react-redux';
import useFoodsOrDrinks from './useFoodsOrDrinks';

function useToken() {
  const mealsToken = useSelector((state) => state.mealsToken);
  const cocktailsToken = useSelector((state) => state.cocktailsToken);
  const foodsOrDrinks = useFoodsOrDrinks('boolean');
  return foodsOrDrinks ? mealsToken : cocktailsToken;
}

export default useToken;
