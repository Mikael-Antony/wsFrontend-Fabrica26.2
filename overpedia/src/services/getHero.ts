import { overfastApi } from "./overfastApi";

/*
  busca dados individuais para pagina do heroi
*/
export async function getHero(key: string) {
  const response = await overfastApi.get(`/heroes/${key}`, {
    fetchOptions: {
      cache: 'no-store',
    },
  });
  return response.data;
}