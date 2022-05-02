import React from 'react';

function SearchBar() {
  return (
    <form>
      <input
        data-testid="exec-search-btn"
        type="text"
        placeholder="Search Recipe"
      />
      <fieldset>
        <label htmlFor="ingredient-search-radio">
          <input
            id="ingredient-search-radio"
            data-testid="ingredient-search-radio"
            type="radio"
          />
          Ingredient
        </label>
        <label htmlFor="ame-search-radio">
          <input
            id="name-search-radio"
            data-testid="name-search-radio"
            type="radio"
          />
          Name
        </label>
        <label htmlFor="first-letter-search-radio">
          <input
            id="first-letter-search-radio"
            data-testid="first-letter-search-radio"
            type="radio"
          />
          First Letter
        </label>
      </fieldset>
      <button type="button">Search</button>
    </form>
  );
}

export default SearchBar;
