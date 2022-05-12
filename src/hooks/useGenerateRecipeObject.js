import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { actionGetRecipeById } from '../redux/actions';

function useGenerateRecipeObject(recipeId, type) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { mealsToken, cocktailsToken } = useSelector((state) => state);
  const foodsOrDrinks = pathname.includes('foods') || pathname.includes('drinks')
    ? pathname
    : type;
  const { id } = useParams();
  const isMeal = foodsOrDrinks?.includes('food');

  if (!id) {
    const token = isMeal ? mealsToken : cocktailsToken;
    dispatch(actionGetRecipeById(recipeId, foodsOrDrinks, token));
  }

  const returnDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const {
    strMeal,
    strMealThumb,
    strCategory,
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strArea,
    strTags,
  } = useSelector((state) => state.selectedRecipe);

  const recipeBasicInfo = {
    thumbnail: isMeal ? strMealThumb : strDrinkThumb,
    title: isMeal ? strMeal : strDrink,
    category: isMeal ? strCategory : strAlcoholic,
  };

  const recipeDoneObject = {
    id: recipeId || id,
    type: isMeal ? 'food' : 'drink',
    nationality: isMeal ? strArea : '',
    category: strCategory,
    alcoholicOrNot: isMeal ? '' : strAlcoholic,
    name: recipeBasicInfo.title,
    image: recipeBasicInfo.thumbnail,
    doneDate: returnDate(),
    tags: strTags ? strTags.split(',') : [],
  };

  const recipeFavoriteObject = { ...recipeDoneObject };
  delete recipeFavoriteObject.doneDate;
  delete recipeFavoriteObject.tags;

  return { recipeBasicInfo, recipeDoneObject, recipeFavoriteObject };
}

export default useGenerateRecipeObject;
