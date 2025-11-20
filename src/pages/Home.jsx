import Hero from '../components/Hero';
import About from '../components/About';
import GoBold from '../components/GoBold';
import FollowUs from '../components/FollowUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <div style={{ height: '60px' }}></div>
      <About />
      <GoBold />
      <FollowUs />
      <Testimonials />
    </div>
  );
};

export default Home;
