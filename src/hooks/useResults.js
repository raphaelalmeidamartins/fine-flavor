import { useSelector } from 'react-redux';
import useFoodsOrDrinks from './useFoodsOrDrinks';

function useResults() {
  const foodsOrDrinks = useFoodsOrDrinks('boolean');
  const { foods, drinks } = useSelector((state) => state.search.results);
  const results = foodsOrDrinks ? foods : drinks;
  return results;
}

export default useResults;
