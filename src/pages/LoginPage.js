import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateFields = () => {
    const emailRegExp = /^([a-z0-9]{1,}[._]{0,1}[a-z0-9]{1,})*(@[a-z0-9]{1,}.com)$/i;
    const passMinLength = 7;
    if (password.length < passMinLength || !email.match(emailRegExp)) return true;
    return false;
  };

  return (
    <div>
      <form>
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
          disabled={ validateFields() }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
