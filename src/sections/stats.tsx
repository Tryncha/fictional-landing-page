import { BookOpenText, Clock, Globe, LibraryBig } from 'lucide-react';

const Stats = () => {
  return (
    <section className="flex w-full justify-center gap-36 bg-cyan-800 py-8 text-white">
      <div className="flex flex-col items-center">
        <BookOpenText size={96} />
        <span className="mt-2 text-2xl font-medium">3M+</span>
        <span className="text-2xl font-medium">Readers</span>
      </div>

      <div className="flex flex-col items-center">
        <LibraryBig size={96} />
        <span className="mt-2 text-2xl font-medium">12</span>
        <span className="text-2xl font-medium">Books</span>
      </div>

      <div className="flex flex-col items-center">
        <Globe size={96} />
        <span className="mt-2 text-2xl font-medium">22</span>
        <span className="text-2xl font-medium">Languages</span>
      </div>

      <div className="flex flex-col items-center">
        <Clock size={96} />
        <span className="mt-2 text-2xl font-medium">15+</span>
        <span className="text-2xl font-medium">Years</span>
      </div>
    </section>
  );
};

export default Stats;
