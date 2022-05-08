import { useLocation } from 'react-router-dom';

function useFoodsOrDrinks(option) {
  const { pathname } = useLocation();
  if (option === 'boolean') {
    if (pathname.includes('foods')) return true;
    return false;
  }
  if (pathname.includes('foods')) return 'foods';
  if (pathname.includes('drinks')) return 'drinks';
}

export default useFoodsOrDrinks;
