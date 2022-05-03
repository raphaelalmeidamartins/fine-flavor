import PropTypes from 'prop-types';
import React from 'react';

function CategoryButton({ categoryName }) {
  return (
    <button type="button" data-testid={ `${categoryName}-category-filter` }>
      {categoryName}
    </button>
  );
}

CategoryButton.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default CategoryButton;
