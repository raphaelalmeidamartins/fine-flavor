import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import Routes from './Routes';

function App() {
  const { pathname } = useLocation();
  const globalState = useSelector((state) => state);
  const getLocalStorage = useLocalStorage('get');
  const setLocalStorage = useLocalStorage('set');

  useEffect(getLocalStorage, []); // semelhante ao componentDidMount
  useEffect(() => {
    if (pathname !== '/') setLocalStorage();
  }, [globalState]);

  return (
    <Routes />
  );
}

export default App;
