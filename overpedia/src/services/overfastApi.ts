import axios from 'axios';

/*
  instancia personalizada pala contato com api
*/
export const overfastApi = axios.create({
  baseURL: 'https://overfast-api.tekrop.fr',
});