'use client'
import { useState } from 'react';

import Link from 'next/link';
import SearchBar from './searchBar/SearchBar';

export default function Header() {
    const image = "/overwatch_icon.png"
    const [results, setResults] = useState<any[]>([])
    return (
        <header className=" shadow sticky top-0 z-100">
            <nav className=" w-full px-5 sm:px-10 lg:px-20 bg-[#bbb] dark:bg-[#222] ">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" translate="no" className=" font-bold text-3xl flex justify-center items-center">
                        <img src={image} alt="Overwatch image" className="size-7" />ver<span className="text-orange-400" >Pedia</span>
                    </Link>
                    <ul className="flex gap-8">
                        <li>
                            <Link translate="no" href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="https://github.com/Mikael-Antony/wsFrontend-Fabrica26.2">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}