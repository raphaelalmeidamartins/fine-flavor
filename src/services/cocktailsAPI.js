// referência: https://www.thecocktaildb.com/api.php

async function getCocktailsDefault(token) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/${token}/search.php?s=`,
  );
  const { drinks } = await response.json();
  return drinks;
  // retorna 12 bebidas padrão que devem aparecer ao usuário entrar na página de bebidas
}

async function getCocktailsByName(token, name) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/${token}/search.php?s=${name}`,
  );
  const { drinks } = await response.json();
  return drinks;
  // retorna lista de bebidas de acordo com o nome fornecido. Obs: retorna objetos detalhados.
}

async function getCocktailsByFirstLetter(token, letter) {
  if (letter.length === 1) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/${token}/search.php?f=${letter}`,
    );
    const { drinks } = await response.json();
    return drinks;
  }
  // eslint-disable-next-line no-alert
  alert('Your search must have only 1 (one) character');
  // retorna lista com bebidas cujo nome começam com a letra fornecida. Obs: retorna objetos detalhados
}

async function getCocktailsIngredientByName(token, name) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/${token}/search.php?i=${name}`,
  );
  const { drinks } = await response.json();
  return drinks;
  // retorna lista com ingredientes.
}

async function getCocktailDetailsById(token, id) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/${token}/lookup.php?i=${id}`,
  );
  const { drinks } = await response.json();
  return drinks;
  // retorna objeto detalhado de uma bebida de acordo com o id fornecido
}

async function getCocktailsIngredientById(token, id) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/${token}/lookup.php?iid==${id}`,
  );
  const { drinks } = await response.json();
  return drinks;
  // retorna objeto de um ingrediente de acordo com o id fornecido
}

async function getSingleRandomCocktailDetails(token) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/${token}/random.php`,
  );
  const { drinks } = await response.json();
  return drinks;
  // retorna objeto detalhado de uma bebida aleatória
}

async function getCocktailsCategoriesList(token) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/${token}/list.php?c=list`,
  );
  const { drinks } = await response.json();
  return drinks;
  // retorna lista de categorias disponíveis para bebidas
}

async function getCocktailssGlassesList(token) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/${token}/list.php?g=list`,
  );
  const { drinks } = await response.json();
  return drinks;
  // retorna lista com tipos de copos disponíveis para bebidas
}

async function getCocktailsIngredientList(token) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/${token}/list.php?i=list`,
  );
  const { drinks } = await response.json();
  return drinks;
  // retorna lista de ingredientes disponíveis para bebidas
}

async function getCocktailsAlcoholicList(token) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/${token}/list.php?a=list`,
  );
  const { drinks } = await response.json();
  return drinks;
  // retorna lista com opções disponíveis para filtros de bebidas alcólicas
}

async function getCocktailsByMainIngredient(token, ingredient) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/${token}/filter.php?i=${ingredient}`,
  );
  const { drinks } = await response.json();
  return drinks;
  // retorna listas de bebidas de acordo com o ingrediente principal fornecido. Obs: não retorna objeto detalhado de cada bebida
}

async function getCocktailsByCategory(token, category) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/${token}/filter.php?c=${category}`,
  );
  const { drinks } = await response.json();
  return drinks;
  // retorna lista de bebidas de acordo com a categoria fornecida. Obs: não retorna objeto detalhado de cada bebida
}

async function getCocktailsByGlass(token, glass) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/${token}/filter.php?g=${glass}`,
  );
  const { drinks } = await response.json();
  return drinks;
  // retorna lista de bebidas de acordo com o tipo de copo fornecido. Obs: não retorna objeto detalhado de cada bebidas
}

function getCocktailsIngredientThumbnail(ingredient) {
  return `https://www.thecocktaildb.com/images/ingredients/${ingredient}.png`;
  // retorna imagem do ingrediente fornecido. Esta função não é assíncrona
}

const cocktailsAPI = {
  getCocktailsDefault,
  getCocktailsByName,
  getCocktailsByFirstLetter,
  getCocktailsIngredientByName,
  getCocktailDetailsById,
  getCocktailsIngredientById,
  getSingleRandomCocktailDetails,
  getCocktailsCategoriesList,
  getCocktailssGlassesList,
  getCocktailsIngredientList,
  getCocktailsAlcoholicList,
  getCocktailsByMainIngredient,
  getCocktailsByCategory,
  getCocktailsByGlass,
  getCocktailsIngredientThumbnail,
};

export default cocktailsAPI;
