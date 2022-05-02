import React from 'react';

function SearchBar() {
  return (
    <form>
      <input data-testid="exec-search-btn" type="text" placeholder="" />
      <fieldset>
        <input data-testid="ingredient-search-radio" type="radio" />
        <input data-testid="name-search-radio" type="radio" />
        <input data-testid="first-letter-search-radio" type="radio" />
      </fieldset>
      <button type="button">Search</button>
    </form>
  );
}

export default SearchBar;
