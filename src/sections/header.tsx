'use client';

import { BooksIcon } from '@/components/icons';
import { CircleQuestionMark } from 'lucide-react';
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
      <div className="flex gap-2">
        <BooksIcon size={36} />
        <h2 className="text-3xl font-bold text-white">Rowan Evercrest</h2>
      </div>

      {/* Hyperlinks */}
      <div className="flex items-center gap-8">
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
        <button className="rounded-full bg-cyan-50 px-4 py-2 font-medium hover:cursor-pointer">Buy Now!</button>
      </div>

      <button className="hover:cursor-pointer">
        <CircleQuestionMark color="#fff" />
      </button>
    </header>
  );
};

export default Header;
