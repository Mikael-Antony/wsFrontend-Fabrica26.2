import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-white p-10 pb-40">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Mikael Albuquerque. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;