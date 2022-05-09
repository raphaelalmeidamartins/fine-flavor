import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    expect(enterButton()).toBeDisabled();
  });

  it(
    'The password length should be 7 or more or else the enter button should be disabled',
    () => {
      userEvent.type(emailInput(), 'person@email.com');
      userEvent.type(passwordInput(), '123');

      expect(emailInput().value).toBe('person@email.com');
      expect(passwordInput().value).toBe('123');
      expect(enterButton()).toBeDisabled();

      userEvent.type(passwordInput(), '1234567');

      expect(passwordInput().value).toBe('1234567');
      expect(enterButton()).not.toBeDisabled();
    },
  );

  it('The enter button should be disabled if the email is invalid', () => {
    userEvent.type(emailInput(), 'person@email..com');
    userEvent.type(passwordInput(), '1234567');

    expect(emailInput().value).toBe('person@email..com');
    expect(passwordInput().value).toBe('1234567');
    expect(enterButton()).toBeDisabled();
  });
});

describe('The enter button should redirect the user to the \'/foods\' route', () => {
  it('should redirect to the \'/foods\' route', async () => {
    const {
      history: { location },
    } = renderWithRouterAndRedux(<App />);
    const second = 1000;

    userEvent.type(emailInput(), 'email.person@email.com');
    userEvent.type(passwordInput(), '1234567');
    userEvent.click(enterButton());
    setTimeout(() => expect(location.pathname).toBe('/foods'), second);
  });
});
