/* eslint-disable react-hooks/exhaustive-deps */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import Routes from './Routes';

function App() {
  const globalState = useSelector((state) => state);
  const getLocalStorage = useLocalStorage('get');
  const setLocalStorage = useLocalStorage('set');

  useLayoutEffect(getLocalStorage, []); // semelhante ao componentDidMount
  useLayoutEffect(setLocalStorage, [globalState]);

  return <Routes />;
}

export default App;
