import mealsAPI from './mealsAPI';
import cocktailsAPI from './cocktailsAPI';

const services = {
  mealsAPI,
  cocktailsAPI,
};

export default services;

/* exemplo de uso:
  const { mealsAPI } = services;
  mealsAPI.getMealsByName('nome-da-refeição');

  Obs: não esquecer de importar antes.
*/
