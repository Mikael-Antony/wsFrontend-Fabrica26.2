import { overfastApi } from "@/services/overfastApi";

/*
  busca por todos os herois
*/
export async function getHeroes() {
  const response = await overfastApi.get('/heroes');
  return response.data;
}
