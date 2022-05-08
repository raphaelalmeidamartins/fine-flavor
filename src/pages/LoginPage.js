import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocalStorage } from '../hooks';
import { actionUpdateUser } from '../redux/actions';

function LoginPage({ history }) {
  const email = useSelector((state) => state.user.email);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const setLocalStorage = useLocalStorage('set');

  const validateFields = () => {
    const emailRegExp = /^([a-z0-9]{1,}[._]{0,1}[a-z0-9]{1,})*(@[a-z0-9]{1,}.com)$/i;
    const passMinLength = 7;
    if (password.length < passMinLength || !email.match(emailRegExp)
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocalStorage();
    if (validateFields()) history.push('/foods');
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          name="email"
          type="email"
          data-testid="email-input"
          onChange={ ({ target }) => {
            dispatch(actionUpdateUser(target.name, target.value));
          } }
        />
        <input
          name="password"
          type="password"
          data-testid="password-input"
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
