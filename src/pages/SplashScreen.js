import React from 'react';
import LogoNegative from '../assets/imgs/LogoNegative';
import plate1 from '../assets/imgs/plate-1.png';
import '../sass/pages/SplashScreen.css';

function SplashScreen() {
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
