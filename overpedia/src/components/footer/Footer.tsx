import React from 'react';



export default function Footer() {
    return (
        <footer className="text-white p-10 pb-40 mt-20 bg-black">
            <p>&copy; {new Date().getFullYear()} Mikael Albuquerque. All rights reserved.</p>
            <p>This project was created with the support of the Software Factory 2026.2 workshop.</p>
        </footer>
    );
};