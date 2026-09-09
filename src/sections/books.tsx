import { getBooks } from '@/lib/open-library';
import Image from 'next/image';

const Books = async () => {
  const books = await getBooks({ subject: 'fantasy', limit: 12 });
  console.log(books);

  return (
    <section
      id="books-section"
      className="flex w-full flex-col gap-8 bg-gray-100 px-80 py-8 text-justify"
    >
      <h2 className="text-2xl font-semibold">Notable books</h2>
      <div className="grid grid-cols-6 gap-8">
        {books.map((book) => (
          <div key={book.key}>
            <Image
              src={book.coverUrl}
              alt={book.title}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Books;
