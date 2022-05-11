import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import IconRadioChecked from '../assets/icons/IconRadioChecked';
import IconRadioUnchecked from '../assets/icons/IconRadioUnchecked';
import { useFoodsOrDrinks, useResults, useToken } from '../hooks';
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

  const results = useResults();

  const foodsOrDrinks = useFoodsOrDrinks();
  const mealOrDrink = () => (foodsOrDrinks === 'foods' ? 'Meal' : 'Drink');
  const token = useToken();

  const [searchValue, setSearchValue] = useState('');
  const [ingredient, setIngredient] = useState('Off');
  const [name, setName] = useState('On');
  const [firstLetter, setFirstLetter] = useState('Off');

  const displayClass = 'SearchBar SearchBar-display';
  const hiddenClass = 'SearchBar SearchBar-hidden';
  const { display } = useSelector((state) => state.search.searchBar);

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

  const handleSubmit = () => {
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
    const [key] = Object.entries(fields).find(
      ([currKey]) => fields[currKey].value === 'On',
    );
    const { action } = fields[key];
    dispatch(action(token, foodsOrDrinks, searchValue));
  };

  return (
    <form
      className={ display ? displayClass : hiddenClass }
      onSubmit={ handleSubmit }
    >
      <fieldset>
        <input
          data-testid="search-input"
          type="text"
          value={ searchValue }
          onChange={ ({ target }) => setSearchValue(target.value) }
          placeholder="Search Recipe"
        />
        <button
          type="button"
          onClick={ handleSubmit }
          disabled={ searchValue === '' }
        >
          Search
        </button>
      </fieldset>
      <fieldset>
        <label htmlFor="ingredient-search-radio">
          { ingredient === 'On' ? <IconRadioChecked /> : <IconRadioUnchecked /> }
          <input
            id="ingredient-search-radio"
            type="radio"
            name="searchType"
            value={ ingredient }
            onChange={ handleChange }
          />
          Ingredient
        </label>
        <label htmlFor="name-search-radio">
          { name === 'On' ? <IconRadioChecked /> : <IconRadioUnchecked /> }
          <input
            id="name-search-radio"
            type="radio"
            name="searchType"
            value={ name }
            onChange={ handleChange }
          />
          Name
        </label>
        <label htmlFor="first-letter-search-radio">
          { firstLetter === 'On' ? <IconRadioChecked /> : <IconRadioUnchecked /> }
          <input
            id="first-letter-search-radio"
            type="radio"
            name="searchType"
            value={ firstLetter }
            onChange={ handleChange }
          />
          First Letter
        </label>
      </fieldset>
    </form>
  );
}

export default SearchBar;
