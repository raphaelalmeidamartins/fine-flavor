import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CategoryButton from '../components/CategoryButton';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import RecipeCard from '../components/RecipeCard';
import { useCategories, useFoodsOrDrinks, useResults, useToken } from '../hooks';
import { actionDefaultSearch, actionRequestCategories } from '../redux/actions';

function MainPage() {
  const { pathname } = useLocation();
  const { loading } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const foodsOrDrinks = useFoodsOrDrinks();
  const results = useResults();
  const token = useToken();
  const categories = useCategories();
  const key = () => (foodsOrDrinks === 'foods' ? 'Meal' : 'Drink');

  useEffect(() => {
    if (!loading) {
      dispatch(actionDefaultSearch(token, foodsOrDrinks));
    }
    dispatch(actionRequestCategories(token, foodsOrDrinks));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div>
      <Header title={ foodsOrDrinks === 'foods' ? 'Foods' : 'Drinks' } search />
      <section>
        <CategoryButton categoryName="All" mealOrDrink={ key() } />
        {Boolean(categories.length)
          && categories.map((name) => (
            <CategoryButton
              key={ name }
              categoryName={ name }
              mealOrDrink={ key() }
            />
          ))}
      </section>
      <main>
        {Boolean(results?.length)
          && results.map((recipe, index) => (
            <RecipeCard
              key={ recipe[`id${key()}`] }
              id={ recipe[`id${key()}`] }
              mealOrDrink={ key() }
              index={ index }
              thumbnail={ recipe[`str${key()}Thumb`] }
              title={ recipe[`str${key()}`] }
              titleTestId={ `${index}-card-name` }
            />
          ))}
      </main>
      <NavBar />
    </div>
  );
}

export default MainPage;
