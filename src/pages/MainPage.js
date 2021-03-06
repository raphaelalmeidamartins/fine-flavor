import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CategoryButton from '../components/CategoryButton';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import RecipeCard from '../components/RecipeCard';
import { useCategories, useFoodsOrDrinks, useResults, useToken } from '../hooks';
import { actionDefaultSearch, actionRequestCategories } from '../redux/actions';
import '../sass/pages/MainPage.css';

function MainPage() {
  const { pathname } = useLocation();
  const { loading } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const foodsOrDrinks = useFoodsOrDrinks();
  const foodsOrDrinksBool = useFoodsOrDrinks('boolean');
  const results = useResults();
  const token = useToken();
  const categories = useCategories();
  const key = () => (foodsOrDrinksBool ? 'Meal' : 'Drink');

  useEffect(() => {
    if (!loading) {
      dispatch(actionDefaultSearch(token, foodsOrDrinks));
    }
    dispatch(actionRequestCategories(token, foodsOrDrinks));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className="MainPage">
      <Header title={ foodsOrDrinksBool ? 'Foods' : 'Drinks' } search />
      <section className="MainPage-categories">
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
          && results.map((recipe) => (
            <RecipeCard
              key={ recipe[`id${key()}`] }
              id={ recipe[`id${key()}`] }
              mealOrDrink={ key() }
              thumbnail={ recipe[`str${key()}Thumb`] }
              title={ recipe[`str${key()}`] }
            />
          ))}
      </main>
      <NavBar />
    </div>
  );
}

export default MainPage;
