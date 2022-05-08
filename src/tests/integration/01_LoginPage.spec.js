// testar componente aqui
import { screen } from '@testing-library/react';
import React from 'react';
import App from '../../App';
import renderWithRouterAndRedux from '../helpers';

const emailInput = () => screen.getByPlaceholderText(/enter your email/i);
const passwordInput = () => screen.getByPlaceholderText(/enter your password/i);
const enterButton = () => screen.getByRole('button', { name: /enter/i });

describe('Test the login page', () => {
  beforeEach(() => {
    renderWithRouterAndRedux(<App />);
  });

  it('Check if the login form fields are on the screen', () => {
    expect(emailInput()).toBeInTheDocument();
    expect(passwordInput()).toBeInTheDocument();
    expect(enterButton()).toBeInTheDocument();
  });
});
