'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Link from "next/link";
import { HiOutlineSearch } from "react-icons/hi";

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const pathname = usePathname();

  /* limpa a barra de busca */ 
  useEffect(() => {
    if (pathname !== '/search') {
      setSearch('');
    }
  }, [pathname]);
  /* envia par o SearchHeroGrid o termo de busca */
  return (
    <Link href={`/search?q=${encodeURIComponent(search)}`} className=" border border-orange-400 p-1 rounded-2xl w-[25%]">
      <form className="flex justify-center items-center" onSubmit={(e) => e.preventDefault()}>
        <input
          className="text-sm focus:outline-none  px-2 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar herói..."
        />
        <button type="submit">
          <HiOutlineSearch className="bg-orange-400 p-1 rounded-2xl  text-2xl font-bold" />
        </button>
      </form>
    </Link>
  )
}