import { overfastApi } from "./overfastApi";

export async function getHero(key: string) {
  const response = await overfastApi.get(`/heroes/${key}`);
  return response.data;
}