/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LogoNegative from '../assets/imgs/LogoNegative';
import plate1 from '../assets/imgs/plate-1.png';
import '../sass/pages/SplashScreen.css';

function SplashScreen() {
  const history = useHistory();
  useEffect(() => {
    const twoSeconds = 2000;
    setTimeout(() => history.push('/login'), twoSeconds);
  }, []);

  return (
    <div className="SplashScreen">
      <LogoNegative />
      <p>
        <strong>Powered by</strong>
        <br />
        TheMealDB
        <br />
        TheCocktailDB
      </p>
      <img src={ plate1 } alt="" />
    </div>
  );
}

export default SplashScreen;
