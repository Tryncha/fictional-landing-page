import { getBooks } from '@/lib/open-library';
import Image from 'next/image';

const Books = async () => {
  const books = await getBooks({ subject: 'fantasy', limit: 12 });

  if (!books.length) return;

  return (
    <section
      id="books-section"
      className="flex w-full flex-col gap-8 bg-gray-100 p-8 text-justify xl:px-40"
    >
      <h2 className="text-center text-2xl font-semibold xl:text-left">Notable books</h2>
      <div className="flex flex-wrap items-center justify-center gap-8 xl:grid xl:grid-cols-6">
        {books.map((book) => (
          <Image
            key={book.key}
            src={book.coverUrl}
            alt={book.title}
            width={280}
            height={280}
            className="w-32 transition-transform hover:scale-105 xl:w-full"
          />
        ))}
      </div>
    </section>
  );
};

export default Books;
