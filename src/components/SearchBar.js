import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import {
  actionSearchByFirstLetter,
  actionSearchByIngredients,
  actionSearchByName,
} from '../redux/actions';
import '../sass/components/SearchBar.css';

function SearchBar() {
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { foods, drinks } = useSelector((state) => state.search.results);
  const results = pathname === '/foods' ? foods : drinks;

  const mealsToken = useSelector((state) => state.mealsToken);
  const cocktailsToken = useSelector((state) => state.cocktailsToken);
  const foodsOrDrinks = pathname === '/foods' ? 'foods' : 'drinks';
  const mealOrDrink = () => (pathname === '/foods' ? 'Meal' : 'Drink');
  const token = pathname === '/foods' ? mealsToken : cocktailsToken;

  const [searchValue, setSearchValue] = useState('');
  const [ingredient, setIngredient] = useState('Off');
  const [name, setName] = useState('Off');
  const [firstLetter, setFirstLetter] = useState('Off');

  const displayClass = 'SearchBar SearchBar-display';
  // const hiddenClass = 'SearchBar SearchBar-hidden';

  // const { display } = useSelector((state) => state.search.searchBar);

  useEffect(() => {
    if (results.length === 1) {
      history.push(`${pathname}/${results[0][`id${mealOrDrink()}`]}`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);

  const handleChange = ({ target }) => {
    const fields = {
      'ingredient-search-radio': setIngredient,
      'first-letter-search-radio': setFirstLetter,
      'name-search-radio': setName,
    };
    Object.keys(fields).forEach((key) => {
      if (key === target.id) fields[key]('On');
      else fields[key]('Off');
    });
  };

  const handleClick = () => {
    const fields = {
      'ingredient-search-radio': {
        value: ingredient,
        action: actionSearchByIngredients,
      },
      'first-letter-search-radio': {
        value: firstLetter,
        action: actionSearchByFirstLetter,
      },
      'name-search-radio': {
        value: name,
        action: actionSearchByName,
      },
    };
    const [key] = Object.entries(fields)
      .find(([currKey]) => fields[currKey].value === 'On');
    const { action } = fields[key];
    dispatch(action(token, foodsOrDrinks, searchValue));
  };

  return (
    <form className={ displayClass }>
      <input
        data-testid="search-input"
        type="text"
        value={ searchValue }
        onChange={ ({ target }) => setSearchValue(target.value) }
        placeholder="Search Recipe"
      />
      <fieldset>
        <label htmlFor="ingredient-search-radio">
          <input
            id="ingredient-search-radio"
            data-testid="ingredient-search-radio"
            type="radio"
            name="searchType"
            value={ ingredient }
            onChange={ handleChange }
          />
          Ingredient
        </label>
        <label htmlFor="name-search-radio">
          <input
            id="name-search-radio"
            data-testid="name-search-radio"
            type="radio"
            name="searchType"
            value={ name }
            onChange={ handleChange }
          />
          Name
        </label>
        <label htmlFor="first-letter-search-radio">
          <input
            id="first-letter-search-radio"
            data-testid="first-letter-search-radio"
            type="radio"
            name="searchType"
            value={ firstLetter }
            onChange={ handleChange }
          />
          First Letter
        </label>
      </fieldset>
      <button data-testid="exec-search-btn" type="button" onClick={ handleClick }>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
