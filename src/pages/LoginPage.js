import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actionSaveUser } from '../redux/actions';
import useLocalStorage from '../hooks/useLocalStorage';

function LoginPage({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const setLocalStorage = useLocalStorage('set');

  const validateFields = () => {
    const emailRegExp = /^([a-z0-9]{1,}[._]{0,1}[a-z0-9]{1,})*(@[a-z0-9]{1,}.com)$/i;
    const passMinLength = 7;
    if (password.length < passMinLength || !email.match(emailRegExp)) return false;
    return true;
  };

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(actionSaveUser(email));
    setLocalStorage();

    if (validateFields()) history.push('/foods');
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          name="email"
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          name="password"
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ !validateFields() }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

LoginPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default LoginPage;
