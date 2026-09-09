import { BookOpenText, Clock, Globe, LibraryBig } from 'lucide-react';

const Stats = () => {
  return (
    <section className="grid w-full grid-cols-2 gap-8 bg-cyan-800 p-8 text-white xl:flex xl:justify-center xl:gap-48">
      <div className="flex flex-col items-center">
        <BookOpenText className="size-18 xl:size-24" />
        <span className="mt-2 text-2xl font-medium">3M+</span>
        <span className="text-2xl font-medium">Readers</span>
      </div>

      <div className="flex flex-col items-center">
        <LibraryBig className="size-18 xl:size-24" />
        <span className="mt-2 text-2xl font-medium">12</span>
        <span className="text-2xl font-medium">Books</span>
      </div>

      <div className="flex flex-col items-center">
        <Globe className="size-18 xl:size-24" />
        <span className="mt-2 text-2xl font-medium">22</span>
        <span className="text-2xl font-medium">Languages</span>
      </div>

      <div className="flex flex-col items-center">
        <Clock className="size-18 xl:size-24" />
        <span className="mt-2 text-2xl font-medium">15+</span>
        <span className="text-2xl font-medium">Years</span>
      </div>
    </section>
  );
};

export default Stats;
