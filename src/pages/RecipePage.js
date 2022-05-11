import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Ingredients from '../components/Ingredients';
import LikeOrShare from '../components/LikeOrShare';
import RecipeInfo from '../components/RecipeInfo';
import RecipePageButton from '../components/RecipePageButton';
import RecommendationsCarousel from '../components/RecommendationsCarousel';
import {
  useFoodsOrDrinks,
  useGenerateRecipeObject,
  useInProgress,
  useToken,
} from '../hooks';
import { actionDefaultSearch, actionGetRecipeById } from '../redux/actions';
import '../sass/pages/RecipePage.css';

function RecipePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { pathname } = useLocation();

  const selectedRecipe = useSelector((state) => state.selectedRecipe);
  const doneRecipes = useSelector((state) => state.doneRecipes);
  const isRecipeDone = doneRecipes.map((recipe) => recipe.id).includes(id);
  const token = useToken();
  const isMeal = useFoodsOrDrinks('boolean');
  const inProgress = useInProgress();

  const [ingredients, setIngredients] = useState([]);

  useLayoutEffect(() => {
    dispatch(actionGetRecipeById(id, pathname, token));
    dispatch(actionDefaultSearch(token, 'foods'));
    dispatch(actionDefaultSearch(token, 'drinks'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useLayoutEffect(() => {
    const generateIngredientArray = () => Object.entries(selectedRecipe)
      .filter(([key, value]) => key.includes('strIngredient') && value)
      .map(([, value], index) => [
        value,
        selectedRecipe[`strMeasure${index + 1}`],
      ]); // filtra todos os ingredientes e quantidades para formar um array de arrays no formato [ingrediente, quantidade]
    setIngredients(generateIngredientArray());
  }, [selectedRecipe]);

  const { recipeBasicInfo } = useGenerateRecipeObject();

  return (
    <main className="RecipePage">
      <img
        src={ recipeBasicInfo.thumbnail }
        alt={ recipeBasicInfo.title }
        data-testid="recipe-photo"
      />
      <section className="RecipePage-info">
        <div>
          <LikeOrShare />
          <h1 data-testid="recipe-title">{recipeBasicInfo.title}</h1>
          <h2 data-testid="recipe-category">{recipeBasicInfo.category}</h2>
        </div>
        <Ingredients
          ingredientsData={ ingredients }
          inProgress={ inProgress }
          id={ id }
          isMeal={ isMeal }
        />
        <RecipeInfo />
        <RecommendationsCarousel type={ isMeal ? 'drinks' : 'foods' } />
        {!isRecipeDone && (
          <RecipePageButton
            inProgress={ inProgress }
            ingredientsData={ ingredients }
          />
        )}
      </section>
    </main>
  );
}

export default RecipePage;
