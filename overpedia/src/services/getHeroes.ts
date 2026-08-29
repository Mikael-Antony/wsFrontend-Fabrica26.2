import { overfastApi } from "@/services/overfastApi";

export async function getHeroes() {
  const response = await overfastApi.get('/heroes');
  return response.data;
}
