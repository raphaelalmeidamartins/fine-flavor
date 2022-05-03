// referência: https://www.themealdb.com/api.php

async function getMealsDefault(token) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/${token}/search.php?s=`,
  );
  const { meals } = await response.json();
  return meals;
  // retorna 12 refeições padrão que devem aparecer ao usuário entrar na página de refeições
}

async function getMealsByName(token, name) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/${token}/search.php?s=${name}`,
  );
  const { meals } = await response.json();
  return meals;
  // retorna lista com refeições de acordo com o nome fornecido. Obs: retorna objetos detalhados
}

async function getMealsByFirstLetter(token, letter) {
  if (letter.length === 1) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/${token}/search.php?f=${letter}`,
    );
    const { meals } = await response.json();
    return meals;
  }
  // eslint-disable-next-line no-alert
  alert('Your search must have only 1 (one) character');
  // retorna lista com refeições cujo nome começam com a letra fornecida. Obs: retorna objetos detalhados
}

async function getMealDetailsById(token, id) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/${token}/lookup.php?i=${id}`,
  );
  const { meals } = await response.json();
  return meals;
  // retorna objeto com todos os detalhes de uma única refeição correspondente ao id fornecido
}

async function getSingleRandomMealDetails(token) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/${token}/random.php`,
  );
  const { meals } = await response.json();
  return meals;
  // retorna objeto com todos os detalhes de uma única refeição aleatória
}

async function getMealsCategoriesList(token) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/${token}/list.php?c=list`,
  );
  const { meals } = await response.json();
  return meals;
  // retorna lista de categorias disponíveis para refeições.
}

async function getMealsAreasList(token) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/${token}/list.php?a=list`,
  );
  const { meals } = await response.json();
  return meals;
  // retorna lista de areas (países) disponíveis para refeições
}

async function getMealsIngredientList(token) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/${token}/list.php?i=list`,
  );
  const { meals } = await response.json();
  return meals;
  // retorna lista de ingredientes disponíveis para refeições
}

async function getMealsByMainIngredient(token, ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/${token}/filter.php?i=${ingredient}`,
  );
  const { meals } = await response.json();
  return meals;
  // retorna lista de refeições de acordo com o ingrediente fornecido. Obs: não retorna o objeto detalhado
}

async function getMealsByCategory(token, category) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/${token}/filter.php?c=${category}`,
  );
  const { meals } = await response.json();
  return meals;
  // retorna lista de refeições de acordo com a categoria fornecida. Obs: não retorna o objeto detalhado
}

async function getMealsByArea(token, area) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/${token}/filter.php?a=${area}`,
  );
  const { meals } = await response.json();
  return meals;
  // retorna lista de refeições de acordo com o país fornecido. Obs: não retorna o objeto detalhado
}

function getMealsIngredientThumbnail(ingredient) {
  return `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
  // retorna imagem de um ingrediente. Obs: não é uma função assíncrona
}

const mealsAPI = {
  getMealsDefault,
  getMealsByName,
  getMealsByFirstLetter,
  getMealDetailsById,
  getSingleRandomMealDetails,
  getMealsCategoriesList,
  getMealsAreasList,
  getMealsIngredientList,
  getMealsByMainIngredient,
  getMealsByCategory,
  getMealsByArea,
  getMealsIngredientThumbnail,
};

export default mealsAPI;
