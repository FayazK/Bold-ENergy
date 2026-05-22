import Hero from '../components/Hero';
import About from '../components/About';
import WhyBoldEnergy from '../components/WhyBoldEnergy';
import GoBold from '../components/GoBold';
import FollowUs from '../components/FollowUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* Spacer for the stats pills that overflow Hero's bottom */}
      <div className="h-[180px] sm:h-[80px] lg:h-[100px]" aria-hidden="true" />
      <About />
      <WhyBoldEnergy />
      <GoBold />
      <FollowUs />
      <Testimonials />

      {/* Contractor License Numbers */}
      <div className="w-full bg-[#385887] py-4">
        <div className="container-bold flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
          <p className="text-white text-xs sm:text-sm" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
            Licensed & Insured
          </p>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/50" />
          <p className="text-white/80 text-xs sm:text-sm" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
            CT HIC #0661633 | CT ELC.0209498-E1 | NJ HIC #13VH13073100
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
