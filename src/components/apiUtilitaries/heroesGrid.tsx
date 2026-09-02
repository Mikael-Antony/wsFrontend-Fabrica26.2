'use client';
import { use, useEffect, useState } from "react";
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
  const [ filterOrder, setFilterOrder ] = useState("a, b");
  const [ filterRole, setFilterRole ] = useState("");
  const [ filterSubrole, setFilterSubrole ] = useState("");

  const heroes: Hero[] = await getHeroes();
    
  heroes.sort((a, b) => {
    if (filterOrder === "a, b") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <>
      <section className="flex flex-wrap gap-5 p-4 px-5 bg-gray-100 dark:bg-zinc-800 rounded-full justify-center items-center">
        <label htmlFor="filterRole" className="flex gap-2 items-center font-bold text-gray-700 dark:text-gray-300">
          Role:
          <select name="filterRole" id="filterRole" onChange={(e) => setFilterRole(e.target.value)} className="bg-[#bbb] dark:bg-zinc-950 text-black dark:text-white p-2 rounded-lg">
              <option value="">All</option>
              <option value="tank">Tank</option>
              <option value="damage">Damage</option>
              <option value="support">Support</option>
          </select>
        </label>

        <label htmlFor="filterSubrole" className="flex gap-2 items-center font-bold text-gray-700 dark:text-gray-300">
          SubRole:
          <select name="filterSubrole" id="filterSubrole" onChange={(e) => setFilterSubrole(e.target.value)} className="bg-[#bbb] dark:bg-zinc-950 text-black dark:text-white p-2 rounded-lg">
              <option value="">All</option>
              <option value="tactician">tactician</option>
              <option value="flanker">Flanker</option>
              <option value="sharpshooter">Sharpshooter</option>
              <option value="specialist">Specialist</option>
              <option value="survivor">Survivor</option>
              <option value="stalwart">Stalwart</option>
              <option value="initiator">Initiator</option>
              <option value="recon">Recon</option>
              <option value="medic">Medic</option>
              <option value="bruiser">Bruiser</option>
              <option value="recon">Recon</option>
          </select>
        </label>
        
        <label htmlFor="order" className="flex gap-2 items-center font-bold text-gray-700 dark:text-gray-300">
          Order:
          <select name="order" id="order" onChange={(e) => setFilterOrder(e.target.value)} className="bg-[#bbb] dark:bg-zinc-950 text-black dark:text-white p-2 rounded-lg">
            <option value="a, b" selected>A-z</option>
            <option value="z, a">Z-a</option>
          </select>
        </label>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2 md:p-4 w-fit">
        {heroes.map((hero) => (
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
    </>
  )
}