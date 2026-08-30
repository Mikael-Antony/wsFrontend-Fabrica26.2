import { getHeroes } from "@/services/getHeroes";
import Link from "next/link";

interface Hero {
    key: string;
    name: string;
    role: string;
    subrole: string;
    portrait: string;
};


export default async function HeroesGrid() {
  const heroes: Hero[] = await getHeroes();

  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2 md:p-4 w-fit">
        {heroes.map((hero) => (
          <Link key={hero.key} href={`/hero/${hero.key}`} className="zoom-90 sm:zoom-100 opacity-75 hover:opacity-100 duration-300 flex flex-col items-center justify-center gap-2 p-2 md:p-4 bg-[#bbb] dark:bg-gray-950 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-fit bg-[#111] border-2 overflow-hidden rounded-lg ">
              <img src={hero.portrait} alt={hero.name} className="w-50"/>
            </div>
            <h2 translate="no" className="text-2xl lg:text-4xl w-full text-center truncate">{hero.name}</h2>
            <p>Role: {hero.role}</p>
            <p>SubRole: {hero.subrole}</p>
          </Link>
        ))}
      </section>
    </>
  )
}