import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

function ExploreOption(
  { text, route, image, callback, dataTestId, imageTestId, nameTestId },
) {
  const history = useHistory();
  const handleClick = callback
    ? () => { callback(); history.push(route); }
    : () => history.push(route);
  return (
    <button
      type="button"
      onClick={ handleClick }
      data-testid={ dataTestId }
    >
      {image ? <img src={ image } alt={ text } data-testid={ imageTestId } /> : null}
      <p { ...nameTestId ? { 'data-testid': nameTestId } : {} }>{ text }</p>
    </button>
  );
}

ExploreOption.defaultProps = {
  image: '',
  callback: null,
  imageTestId: '',
  nameTestId: '',
};

ExploreOption.propTypes = {
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  image: PropTypes.string,
  callback: PropTypes.func,
  dataTestId: PropTypes.string.isRequired,
  imageTestId: PropTypes.string,
  nameTestId: PropTypes.string,
};

export default ExploreOption;
