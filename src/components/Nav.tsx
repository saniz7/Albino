'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ComponentProps, useEffect, useState } from 'react';

export  function Nav({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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
        <nav className={navbar ? 'fixed w-screen bg-red-300 z-10' : 'bg-primary text-primary-foreground flex justify-center px-4'}>
            {children}
        </nav>
    );
}

export function Navlink(props: Omit<ComponentProps<typeof Link>, "classname">) {
    const pathname = usePathname();
    return (
        <Link {...props} className={cn("p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground", pathname === props.href && "bg-background text-foreground")} />
    );
}


