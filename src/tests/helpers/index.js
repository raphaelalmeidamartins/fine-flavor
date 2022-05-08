import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import rootReducer from '../../redux/reducers';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

function renderWithRouterAndRedux(
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {},
) {
  const history = createMemoryHistory();
  return {
    ...render(
      <Provider store={ store }>
        <Router history={ history }>{component}</Router>
      </Provider>,
    ),
    history,
    store,
  };
}

export default renderWithRouterAndRedux;
