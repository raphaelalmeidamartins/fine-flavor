import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

function ExploreOption({ text, route, image, dataTestId, imageTestId, nameTestId }) {
  const history = useHistory();
  return (
    <button
      type="button"
      onClick={ () => history.push(route) }
      data-testid={ dataTestId }
    >
      {image ? <img src={ image } alt={ text } data-testid={ imageTestId } /> : null}
      <p { ...nameTestId ? { 'data-testid': nameTestId } : {} }>{ text }</p>
    </button>
  );
}

ExploreOption.defaultProps = {
  image: '',
  imageTestId: '',
  nameTestId: '',
};

ExploreOption.propTypes = {
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  image: PropTypes.string,
  dataTestId: PropTypes.string.isRequired,
  imageTestId: PropTypes.string,
  nameTestId: PropTypes.string,
};

export default ExploreOption;
