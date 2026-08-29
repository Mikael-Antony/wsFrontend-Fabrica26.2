import axios from 'axios';

export const overfastApi = axios.create({
  baseURL: 'https://overfast-api.tekrop.fr',
});