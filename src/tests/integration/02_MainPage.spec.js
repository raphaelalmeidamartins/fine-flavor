import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../../App';
import renderWithRouterAndRedux from '../helpers';
import fetchMock from '../../../cypress/mocks/fetch';

const recipeCards = async () => screen.findAllByTestId(/[0-9]{1,2}-recipe-card/i);

describe('Test the main (search) page', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(fetchMock);

    renderWithRouterAndRedux(<App />, '/foods');
  });

  afterEach(() => jest.clearAllMocks());

  it('There should be 12 Recipe Cards when the user first enter the page', async () => {
    const cards = await recipeCards();
    const defaultCardsQuantity = 12;
    expect(cards).toHaveLength(defaultCardsQuantity);
  });
});
