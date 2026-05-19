import Hero from '../components/Hero';
import About from '../components/About';
import WhyBoldEnergy from '../components/WhyBoldEnergy';
import GoBold from '../components/GoBold';
import CoverageMap from '../components/CoverageMap';
import FollowUs from '../components/FollowUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <div style={{ height: '60px' }}></div>
      <About />
      <WhyBoldEnergy />
      <GoBold />
      <CoverageMap />
      <FollowUs />
      <Testimonials />

      {/* Contractor License Numbers */}
      <div className="w-full bg-[#385887] py-4 px-4 sm:px-8 lg:px-16 xl:px-[200px]">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
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
