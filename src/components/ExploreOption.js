import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../sass/components/ExploreOption.css';

function ExploreOption(
  { text, route, image, callback },
) {
  const history = useHistory();
  const handleClick = callback
    ? () => { callback(); history.push(route); }
    : () => history.push(route);
  return (
    <button
      className="ExploreOption"
      type="button"
      onClick={ handleClick }
    >
      {image ? <img src={ image } alt={ text } /> : null}
      <p>{ text }</p>
    </button>
  );
}

ExploreOption.defaultProps = {
  image: '',
  callback: null,
};

ExploreOption.propTypes = {
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  image: PropTypes.string,
  callback: PropTypes.func,
};

export default ExploreOption;
