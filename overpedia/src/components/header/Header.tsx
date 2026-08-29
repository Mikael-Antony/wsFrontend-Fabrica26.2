import Link from 'next/link';

export default function Header() {
    return (
        <header className=" shadow">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" translate="no" className=" font-bold text-3xl text-gray-800 dark:text-gray-200">
                        <span className="text-orange-500 " >Over</span>Pedia
                    </Link>
                    <ul className="flex gap-8 text-gray-700 dark:text-gray-300">
                        <li>
                            <Link href="/">Home</Link>
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