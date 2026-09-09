'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY < 800);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'} fixed top-0 z-10 flex w-full items-center justify-between bg-cyan-700 px-4 py-2 shadow-2xl transition-opacity duration-300`}
    >
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
        />
        <h2 className="text-3xl font-bold text-white">Rowan Evercrest</h2>
      </div>
      <div>
        <button className="rounded-full bg-cyan-100 px-4 py-2 font-medium hover:cursor-pointer">Buy Now!</button>
      </div>
      <div className="flex gap-2">
        <button className="hover:cursor-pointer">C/O</button>
        <button className="hover:cursor-pointer">FAQ</button>
      </div>
    </header>
  );
};

export default Header;
