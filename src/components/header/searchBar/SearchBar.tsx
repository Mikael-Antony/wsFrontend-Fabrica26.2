'use client'
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation'; 
import { HiOutlineSearch } from "react-icons/hi";

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const pathname = usePathname();
  const router = useRouter(); 

  // Limpa a barra de busca se sair da página de pesquisa
  useEffect(() => {
    if (pathname !== '/search') {
      setSearch('');
    }
  }, [pathname]);

  // Executa a busca ao enviar o formulário
  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(search.trim())}`);
  }

  return (
    <form className="flex justify-center items-center border border-orange-400 p-1 rounded-2xl w-[25%]" onSubmit={handleSearch}>
      <input 
        className="text-sm focus:outline-none px-2 w-full" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Buscar herói..." 
      />
      <button type="submit">
        <HiOutlineSearch className="bg-orange-400 p-1 rounded-2xl text-2xl font-bold text-white" />
      </button>
    </form>
  );
}
