import { overfastApi } from "@/services/overfastApi";

/*
  busca e conta quantos herois foram encontrados na requisicao api
*/
export async function fetchHeroesCount() {
  const response = await overfastApi.get('/heroes');
  return response.data.length;
}

export default function HeroesCount() {

  return <p className="text-sm text-gray-800 dark:text-gray-300">We have <span className="font-bold text-orange-500">{fetchHeroesCount()} heroes</span> available.</p>;
}