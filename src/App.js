import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import Routes from './Routes';

function App() {
  const globalState = useSelector((state) => state);

  const getLocalStorage = useLocalStorage('get');
  const setLocalStorage = useLocalStorage('set');

  useEffect(getLocalStorage, []); // semelhante ao componentDidMount
  useEffect(setLocalStorage, [globalState]); // semelhante ao componentDidUpdate

  return (
    <Routes />
  );
}

export default App;
