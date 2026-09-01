
import Link from 'next/link';
import SearchBar from './searchBar/SearchBar';

export default function Header() {
    const image = "/overwatch_icon.png"
    return (
        <header className=" shadow sticky top-0 z-100">
            <nav className=" w-full px-5 sm:px-10 lg:px-20 backdrop-blur-xl">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" translate="no" className=" font-bold text-3xl flex justify-center items-center text-white">
                        <img src={image} alt="Overwatch image" className="size-7" />ver<span className="text-orange-400" >Pedia</span>
                    </Link>
                    <SearchBar />
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