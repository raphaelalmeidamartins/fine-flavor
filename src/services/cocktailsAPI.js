// referência: https://www.thecocktaildb.com/api.php

async function getCocktailsByName(token, name) {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/${token}/search.php?s==${name}`,
  );
  const cocktails = await response.json();
  return cocktails;
  // retorna lista de bebidas de acordo com o nome fornecido. Obs: retorna objetos detalhados.
}

async function getCocktailsByFirstLetter(token, letter) {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/${token}/search.php?f=${letter}`,
  );
  const cocktails = await response.json();
  return cocktails;
  // retorna lista com bebidas cujo nome começam com a letra fornecida. Obs: retorna objetos detalhados
}

async function getCocktailsIngredientByName(token, name) {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/${token}/search.php?i=${name}`,
  );
  const ingredient = await response.json();
  return ingredient;
  // retorna lista com ingredientes.
}

async function getCocktailDetailsById(token, id) {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/${token}/lookup.php?i=${id}`,
  );
  const cocktail = await response.json();
  return cocktail;
  // retorna objeto detalhado de uma bebida de acordo com o id fornecido
}

async function getCocktailsIngredientById(token, id) {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/${token}/lookup.php?iid==${id}`,
  );
  const ingredient = await response.json();
  return ingredient;
  // retorna objeto de um ingrediente de acordo com o id fornecido
}

async function getSingleRandomCocktailDetails(token) {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/${token}/random.php`,
  );
  const cocktail = await response.json();
  return cocktail;
  // retorna objeto detalhado de uma bebida aleatória
}

async function getCocktailsCategoriesList(token) {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/${token}/list.php?c=list`,
  );
  const categories = await response.json();
  return categories;
  // retorna lista de categorias disponíveis para bebidas
}

async function getCocktailssGlassesList(token) {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/${token}/list.php?g=list`,
  );
  const glasses = await response.json();
  return glasses;
  // retorna lista com tipos de copos disponíveis para bebidas
}

async function getCocktailsIngredientList(token) {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/${token}/list.php?i=list`,
  );
  const ingredients = await response.json();
  return ingredients;
  // retorna lista de ingredientes disponíveis para bebidas
}

async function getCocktailsAlcoholicList(token) {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/${token}/list.php?a=list`,
  );
  const alcoholic = await response.json();
  return alcoholic;
  // retorna lista com opções disponíveis para filtros de bebidas alcólicas
}

async function getCocktailsByMainIngredient(token, ingredient) {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/${token}/filter.php?i=${ingredient}`,
  );
  const cocktails = await response.json();
  return cocktails;
  // retorna listas de bebidas de acordo com o ingrediente principal fornecido. Obs: não retorna objeto detalhado de cada bebida
}

async function getCocktailsByCategory(token, category) {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/${token}/filter.php?c=${category}`,
  );
  const cocktails = await response.json();
  return cocktails;
  // retorna lista de bebidas de acordo com a categoria fornecida. Obs: não retorna objeto detalhado de cada bebida
}

async function getCocktailsByGlass(token, glass) {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/${token}/filter.php?g=${glass}`,
  );
  const cocktails = await response.json();
  return cocktails;
  // retorna lista de bebidas de acordo com o tipo de copo fornecido. Obs: não retorna objeto detalhado de cada bebidas
}

function getCocktailsIngredientThumbnail(ingredient) {
  return `www.thecocktaildb.com/images/ingredients/${ingredient}.png`;
  // retorna imagem do ingrediente fornecido. Esta função não é assíncrona
}

export {
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
