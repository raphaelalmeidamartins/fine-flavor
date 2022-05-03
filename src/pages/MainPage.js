import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CategoryButton from '../components/CategoryButton';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import { actionDefaultSearch } from '../redux/actions';

function MainPage() {
  const { pathname } = useLocation();
  const mealsToken = useSelector((state) => state.mealsToken);
  const cocktailsToken = useSelector((state) => state.cocktailsToken);
  const results = useSelector((state) => state.search.results);
  const categories = useSelector((state) => state.search.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname === '/foods') {
      dispatch(actionDefaultSearch(mealsToken, 'food'));
    }
    if (pathname === '/drinks') {
      dispatch(actionDefaultSearch(cocktailsToken, 'drink'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const key = pathname === '/foods' ? 'Meal' : 'Drink';

  return (
    <div>
      <Header title={ pathname === '/foods' ? 'Foods' : 'Drinks' } search />
      <SearchBar />
      <section>
        {Boolean(categories.length && results.length && results[0][`id${key}`])
          && categories.map((name) => (
            <CategoryButton key={ name } categoryName={ name } />
          ))}
      </section>
      <main>
        {Boolean(results.length && results[0][`id${key}`])
          && results.map((recipe, index) => (
            <RecipeCard
              key={ recipe[`id${key}`] }
              id={ recipe[`id${key}`] }
              mealOrDrink={ key }
              index={ index }
              thumbnail={ recipe[`str${key}Thumb`] }
              title={ recipe[`str${key}`] }
            />
          ))}
      </main>
      <NavBar />
    </div>
  );
}

export default MainPage;
