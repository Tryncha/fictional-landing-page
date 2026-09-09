import Header from '@/sections/header';
import Hero from '@/sections/hero';
import About from '@/sections/about';
import Stats from '@/sections/stats';
import Testimonials from '@/sections/testimonials';
import Subscription from '@/sections/subscription';
import Books from '@/sections/books';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center pt-14">
        <Hero />
        <About />
        <Stats />
        <Testimonials />
        <Books />
        <Subscription />
      </main>
    </>
  );
};

export default HomePage;
