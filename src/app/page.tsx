import Header from '@/sections/header';
import { BookOpenText, Clock, Globe, LibraryBig } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center pt-14">
        {/* Hero */}
        <section className="relative flex h-screen flex-col justify-center gap-8 pr-240 pl-40">
          {/* Hero Image */}
          <div className="absolute inset-0 -z-10 bg-[url(/writter-hero-image.png)] mask-l-from-40% bg-cover" />

          <h2 className="text-6xl font-semibold">&quot;Every legend begins with an impossible choice.&quot;</h2>
          <p>
            Rowan Evercrest is the bestselling author behind the Nexusverse, an interconnected collection of epic
            fantasy novels filled with ancient magic, fallen kingdoms, and unforgettable heroes. Discover stories where
            every choice carries a price and every legend begins with an impossible decision.
          </p>

          <div className="flex gap-4">
            <button className="rounded-full bg-cyan-700 px-8 py-4 text-lg font-medium text-white hover:cursor-pointer">
              Discover the books
            </button>
            <button className="rounded-full bg-cyan-700 px-8 py-4 text-lg font-medium text-white hover:cursor-pointer">
              Buy the Latest Release →
            </button>
          </div>
        </section>

        {/* About */}
        <section className="flex flex-col gap-4 px-40 py-8 text-justify">
          <h2 className="text-2xl font-semibold">About</h2>
          <p>
            Rowan Evercrest is an award-winning epic fantasy author celebrated for creating vast interconnected worlds,
            meticulously crafted magic systems, and unforgettable character journeys. Since the release of his debut
            novel, <span className="font-semibold italic">The Chronicles of Aetheris</span>, he has become one of the
            most recognized voices in modern fantasy, captivating millions of readers with stories that blend
            grand-scale adventure, political intrigue, and deeply personal struggles. Best known as the creator of the{' '}
            <span className="font-semibold italic">Nexusverse</span>, Evercrest has built a literary universe where
            distant worlds, forgotten civilizations, and ancient powers are connected through a mysterious force known
            as the Nexus. His novels are particularly praised for their logical, rule-based approach to magic,
            exemplified by Aethercraft, a system in which practitioners can shape reality itself—but only at the cost of
            their own memories.
          </p>
          <p>
            With more than three million copies sold worldwide and translations in over twenty languages, Evercrest has
            earned a devoted global following. Readers are drawn not only to his expansive worldbuilding, but also to
            his exploration of themes such as sacrifice, responsibility, hope, and the difficult choices that define who
            we become. Through every novel, he invites audiences to discover new worlds while reflecting on the power of
            their own decisions.
          </p>
        </section>

        {/* Stats */}
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
      </main>
    </>
  );
};

export default HomePage;
