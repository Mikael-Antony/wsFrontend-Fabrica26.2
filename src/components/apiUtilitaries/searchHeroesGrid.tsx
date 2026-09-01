'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { getHeroes } from "@/services/getHeroes";
import Link from "next/link";

interface AllHero {
  key: string;
  name: string;
  role: string;
  subrole: string;
  portrait: string;
};

export default function SearchHeroesGrid() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState('');
  const [allHeroes, setAllHeroes] = useState<AllHero[]>([]);

  /* busca pelo termo recebido na busca */
  useEffect(() => {
    const q = searchParams.get('q') || '';
    setSearch(q);
  }, [searchParams]);

  useEffect(() => {
    getHeroes().then(setAllHeroes);
  }, []);

  /* ordem de busca: nome, classe e subclasse */
  const heroesFiltered: AllHero[] = allHeroes.filter((hero) =>
    hero.name.toLowerCase().includes(search.toLowerCase()) ||
    hero.role.toLowerCase().includes(search.toLowerCase()) ||
    hero.subrole.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2 md:p-4 w-fit">
        {heroesFiltered.map((hero) => (
          <Link key={hero.key} href={`/hero/${hero.key}`} className="zoom-80 sm:zoom-90 md:zoom-100 sm:hover:scale-120 opacity-75 hover:opacity-100 hover:scale-100 duration-300 flex flex-col items-center justify-center gap-2 p-4 bg-[#bbb] dark:bg-zinc-950 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-fit bg-[#111] border-2 overflow-hidden rounded-lg ">
              <img src={hero.portrait} alt={hero.name} className="w-50" />
            </div>
            <h2 translate="no" className="text-2xl lg:text-4xl w-full text-center truncate">{hero.name}</h2>
            <div className="flex justify-around w-full zoom-80 sm:zoom-90 lg:zoom-100">
              <div className="-skew-x-12 bg-orange-400/75 px-3 p-1 rounded-sm text-lg flex items-center">
                <p className="skew-x-12">{hero.role}</p>
              </div>
              <div className="-skew-x-12 bg-orange-400/50 px-3 p-1 zoom-90 rounded-sm flex items-center">
                <p className="skew-x-12">{hero.subrole}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
      {heroesFiltered.length === 0 && (
        <p className="text-center text-gray-500 my-8 w-full">Nenhum herói encontrado para "{search}".</p>
      )}
    </>
  )
}