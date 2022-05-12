import React from 'react';
import { useHistory } from 'react-router-dom';
import IconGoBack from '../assets/icons/IconGoBack';
import '../sass/components/GoBackButton.css';

function GoBackButton() {
  const history = useHistory();

  return (
    <button
      className="GoBackButton"
      type="button"
      onClick={ () => history.goBack() }
    >
      <IconGoBack />
    </button>
  );
}

export default GoBackButton;
