import { BookResponse } from '@/types';

export async function getBooks({ subject, limit }: { subject: string; limit: number }) {
  try {
    const res = await fetch(`https://openlibrary.org/search.json?subject=${subject}&limit=${limit}`);

    if (!res.ok) {
      throw new Error('Failed to fetch books...');
    }

    const data = await res.json();
    const booksData: BookResponse[] = data.docs;

    return booksData.map((book) => ({
      key: book.key,
      title: book.title,
      language: book.language,
      edition_count: book.edition_count,
      first_publish_year: book.first_publish_year,
      coverUrl: `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
