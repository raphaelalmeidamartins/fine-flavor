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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getLocalStorage, []); // semelhante ao componentDidMount
  useEffect(() => {
    if (pathname !== '/') setLocalStorage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalState]);

  return (
    <Routes />
  );
}

export default App;
