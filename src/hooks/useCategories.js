import { useSelector } from 'react-redux';
import useFoodsOrDrinks from './useFoodsOrDrinks';

function useCategories(option) {
  let categories = useSelector((state) => state.search.categories);
  const foodsOrDrinks = useFoodsOrDrinks('boolean');
  if (option === 'all') {
    return categories;
  }
  const { foods, drinks } = categories;
  categories = foodsOrDrinks ? foods : drinks;
  return categories;
}

export default useCategories;
