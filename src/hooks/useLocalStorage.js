import { useDispatch, useSelector } from 'react-redux';
import { actionGetLocalStorage } from '../redux/actions';

// option tem que ser get ou set
const useLocalStorage = (option) => {
  const {
    cocktailsToken,
    mealsToken,
    doneRecipes,
    favoriteRecipes,
    inProgressRecipes,
    user,
  } = useSelector((state) => state);

  const globalState = {
    cocktailsToken,
    mealsToken,
    doneRecipes,
    favoriteRecipes,
    inProgressRecipes,
    user,
  };

  const dispatch = useDispatch();

  return () => {
    if (option === 'get') {
      const savedState = Object.keys(globalState).reduce((acc, currKey) => {
        const currState = JSON.parse(localStorage.getItem(currKey));
        return { ...acc, [currKey]: currState };
      }, {});
      dispatch(actionGetLocalStorage(savedState));
    }
    if (option === 'set') {
      Object.entries(globalState)
        .forEach(([key, value]) => localStorage.setItem(key, JSON.stringify(value)));
    }
  };
};

export default useLocalStorage;
