import Link from 'next/link';

export default function Header() {
    return (
        <header className=" shadow sticky top-0 z-100">
            <nav className=" w-full px-5 sm:px-10 lg:px-20 bg-[#bbb] dark:bg-[#222] ">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" translate="no" className=" font-bold text-3xl ">
                        <span className="text-orange-500 " >Over</span>Pedia
                    </Link>
                    <ul className="flex gap-8">
                        <li>
                            <Link translate="no" href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}