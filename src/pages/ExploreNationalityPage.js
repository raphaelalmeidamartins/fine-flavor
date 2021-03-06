import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import RecipeCard from '../components/RecipeCard';
import {
  actionCleanResults,
  actionDefaultSearch,
  actionSearchByArea,
} from '../redux/actions';
import '../sass/pages/ExploreNationalityPage.css';
import services from '../services';

function ExploreNationalityPage() {
  const [nationalities, setNationalities] = useState([]);
  const dispatch = useDispatch();
  const { foods } = useSelector((state) => state.search.results);
  const token = useSelector((state) => state.mealsToken);
  const { mealsAPI } = services;

  const handleSearch = async (area) => {
    dispatch(actionCleanResults);
    switch (area) {
    case 'All':
      dispatch(actionDefaultSearch(token, 'foods'));
      break;
    default:
      dispatch(actionSearchByArea(token, area));
    }
  };

  useEffect(() => {
    async function requestNationalities() {
      const countries = await mealsAPI.getMealsAreasList(token);
      setNationalities(countries);
    }
    requestNationalities();
    handleSearch('All');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ExploreNationalityPage">
      <Header title="Explore Nationalities" search />
      <section className="select-container">
        <select
          onChange={ ({ target }) => handleSearch(target.value) }
          data-testid="explore-by-nationality-dropdown"
        >
          <option value="All" data-testid="All-option">All</option>
          {nationalities.map(({ strArea }) => (
            <option
              key={ strArea }
              value={ strArea }
              data-testid={ `${strArea}-option` }
            >
              {strArea}
            </option>
          ))}
        </select>
      </section>
      <main>
        {foods.map(({ idMeal, strMeal, strMealThumb }, index) => (
          <RecipeCard
            key={ idMeal }
            id={ idMeal }
            mealOrDrink="Meal"
            title={ strMeal }
            thumbnail={ strMealThumb }
            index={ index }
          />
        ))}
      </main>
      <NavBar />
    </div>
  );
}

export default ExploreNationalityPage;
