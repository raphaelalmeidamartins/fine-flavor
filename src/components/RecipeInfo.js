import React from 'react';
import { useSelector } from 'react-redux';

function RecipeInfo() {
  const { strYoutube, strInstructions } = useSelector((state) => state.selectedRecipe);
  return (
    <section className="RecipeInfo">
      <div>
        <h2>Modo de preparo</h2>
        <p data-testid="instructions">{strInstructions}</p>
      </div>
      {strYoutube && (
        <iframe
          src={ strYoutube.replace('watch?v=', 'embed/') }
          title="Recipe video"
          height="300px"
          width="500px"
          allowFullScreen
          data-testid="video"
        />
      )}
    </section>
  );
}

export default RecipeInfo;
