import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CategoryButton from '../components/CategoryButton';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import RecipeCard from '../components/RecipeCard';
import { actionDefaultSearch, actionRequestCategories } from '../redux/actions';

function MainPage() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const mealsToken = useSelector((state) => state.mealsToken);
  const { foods, drinks } = useSelector((state) => state.search.results);
  const results = pathname === '/foods' ? foods : drinks;
  const cocktailsToken = useSelector((state) => state.cocktailsToken);
  const { foods: foodsCategories, drinks: drinksCategories } = useSelector(
    (state) => state.search.categories,
  );
  const categories = pathname === '/foods' ? foodsCategories : drinksCategories;
  const key = () => (pathname === '/foods' ? 'Meal' : 'Drink');

  useEffect(() => {
    dispatch(actionRequestCategories(mealsToken, 'foods'));
    dispatch(actionRequestCategories(cocktailsToken, 'drinks'));
    dispatch(actionDefaultSearch(mealsToken, 'foods'));
    dispatch(actionDefaultSearch(cocktailsToken, 'drinks'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title={ pathname === '/foods' ? 'Foods' : 'Drinks' } search />
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
              titleTestId={ `${index}-data-name` }
            />
          ))}
      </main>
      <NavBar />
    </div>
  );
}

export default MainPage;
