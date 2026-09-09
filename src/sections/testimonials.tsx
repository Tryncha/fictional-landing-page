'use client';

import TESTIMONIALS_PAGES from '@/data/testimonials';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const pageCount = TESTIMONIALS_PAGES.length;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPage((prevPage) => (prevPage !== pageCount - 1 ? prevPage + 1 : 0));
    }, 5000);

    return () => clearTimeout(timeout);
  }, [page, pageCount]);

  return (
    <section className="flex max-w-7xl flex-col gap-4 py-8 text-justify">
      <h2 className="text-2xl font-semibold">Check out some testimonials!</h2>

      <div className="overflow-hidden">
        <div
          className="flex gap-16 transition-transform duration-700 ease-in-out"
          style={{
            width: `${pageCount * 100}%`,
            transform: `translateX(-${page * (100 / pageCount)}%)`
          }}
        >
          {TESTIMONIALS_PAGES.map((tesPage, index) => (
            <div
              key={index}
              className="flex flex-col gap-8"
              style={{ width: `${100 / pageCount}%` }}
            >
              {tesPage.map((t) => (
                <div
                  key={t.author}
                  className="flex flex-col gap-4"
                >
                  <p className="italic">&quot;{t.quote}&quot;</p>
                  <span className="font-medium">— {t.author}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        {TESTIMONIALS_PAGES.map((_, index) => (
          <button
            key={index}
            className={`${page === index ? 'bg-cyan-700' : 'bg-cyan-300'} size-3 rounded-full hover:cursor-pointer`}
            onClick={() => setPage(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
