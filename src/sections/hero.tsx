import { ShoppingCart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative flex w-full flex-col justify-center gap-8 py-8 xl:h-screen xl:py-0">
      {/* Hero Image */}
      <div className="absolute inset-0 -z-10 bg-[url(/writter-hero-image.png)] bg-cover bg-right opacity-20 xl:block xl:mask-l-from-40% xl:bg-center xl:opacity-100" />

      {/* Lighter version using next/image component */}
      {/* <Image
        src="/writter-hero-image.webp"
        alt="Rowan Evercrest, epic fantasy author, sitting at his writing desk with his Nexusverse novels"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-right opacity-20 xl:mask-l-from-40% xl:object-center xl:opacity-100"
      /> */}

      <div className="mx-8 flex flex-col gap-8 xl:ml-40 xl:max-w-sm 2xl:max-w-3xl">
        <h2 className="text-4xl font-semibold 2xl:text-6xl">
          &quot;Every legend begins with an impossible choice.&quot;
        </h2>
        <p className="text-justify font-medium">
          Rowan Evercrest is the bestselling author behind the Nexusverse, an interconnected collection of epic fantasy
          novels filled with ancient magic, fallen kingdoms, and unforgettable heroes. Discover stories where every
          choice carries a price and every legend begins with an impossible decision.
        </p>

        <div className="flex gap-4">
          <button className="rounded-full bg-cyan-700 px-4 py-2 text-base font-medium text-white transition-transform hover:scale-105 hover:cursor-pointer 2xl:px-8 2xl:py-4 2xl:text-lg">
            Discover the books
          </button>
          <button className="flex items-center gap-2 rounded-full bg-cyan-700 px-4 py-2 text-base font-medium text-white transition-transform hover:scale-105 hover:cursor-pointer 2xl:px-8 2xl:py-4 2xl:text-lg">
            <span> Buy the Latest Release </span>
            <ShoppingCart
              size={20}
              className="hidden xl:block"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
