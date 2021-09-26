// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_GARAGE = 'FETCH_GARAGE';

const BASE_URL = 'https://wagon-chat.herokuapp.com';

export function fetchCars() {
  const cars = [
    { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
    { id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
    { id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
    { id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' }
  ];
  return {
    type: FETCH_CARS,
    payload: cars
  };
}

export function fetchGarage(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_GARAGE,
    payload: promise // Will be resolved by redux-promise
  };
}
