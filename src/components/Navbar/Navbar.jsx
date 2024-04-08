import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const scrollHeader = () => {
        if (window.scrollY >= 1) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', scrollHeader);
        };
    }, []);

    return (
        <div className={navbar ? 'fixed w-screen bg-red-300 z-10' : 'bg-red-50'}>
            <div className='navbar flex w-full p-5 text-black'>
                <ul className='flex justify-between w-full'>
                    <Link href={"/"}>Navbar</Link>
                    <Link href={"aboutus"}>Navbar</Link>
                    <Link href={"/"}>Navbar</Link>
                    <Link href={"/"}>Navbar</Link>
                    <Link href={"/"}>Navbar</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
