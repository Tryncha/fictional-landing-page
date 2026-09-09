'use client';

import { BooksIcon } from '@/components/icons';
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
      className={`${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'} fixed top-0 z-10 flex w-full items-center justify-center bg-cyan-700 px-4 py-2 shadow-2xl transition-opacity duration-300 xl:justify-between`}
    >
      <div className="flex items-center justify-center gap-4 xl:gap-2">
        <BooksIcon size={32} />
        <h2 className="text-4xl font-bold text-white xl:text-3xl">Rowan Evercrest</h2>
      </div>

      {/* Hyperlinks */}
      <div className="hidden items-center gap-8 xl:flex">
        <a
          href="#about-section"
          className="font-semibold text-white hover:cursor-pointer"
        >
          About
        </a>
        <a
          href="#books-section"
          className="font-semibold text-white hover:cursor-pointer"
        >
          Books
        </a>
        <a
          href="#subscription-section"
          className="font-semibold text-white hover:cursor-pointer"
        >
          Contact
        </a>
        <span className="font-semibold text-white hover:cursor-pointer">Reviews</span>
        <span className="font-semibold text-white hover:cursor-pointer">Pricing</span>
        <span className="font-semibold text-white hover:cursor-pointer">Author</span>
        <button className="rounded-full bg-cyan-50 px-4 py-2 font-medium transition-transform hover:scale-105 hover:cursor-pointer">
          Buy Now!
        </button>
      </div>

      {/* <button className="hover:cursor-pointer">
        <CircleQuestionMark color="#fff" />
      </button> */}
    </header>
  );
};

export default Header;
