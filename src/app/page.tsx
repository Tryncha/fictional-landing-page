import Header from '@/sections/header';
import Hero from '@/sections/hero';
import About from '@/sections/about';
import Stats from '@/sections/stats';
import Testimonials from '@/sections/testimonials';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center pt-14">
        <Hero />
        <About />
        <Stats />
        <Testimonials />
      </main>
    </>
  );
};

export default HomePage;
