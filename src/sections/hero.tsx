const Hero = () => {
  return (
    <section className="relative flex h-screen flex-col justify-center gap-8 pr-240 pl-40">
      {/* Hero Image */}
      <div className="absolute inset-0 -z-10 bg-[url(/writter-hero-image.png)] mask-l-from-40% bg-cover" />

      <h2 className="text-6xl font-semibold">&quot;Every legend begins with an impossible choice.&quot;</h2>
      <p>
        Rowan Evercrest is the bestselling author behind the Nexusverse, an interconnected collection of epic fantasy
        novels filled with ancient magic, fallen kingdoms, and unforgettable heroes. Discover stories where every choice
        carries a price and every legend begins with an impossible decision.
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
  );
};

export default Hero;
