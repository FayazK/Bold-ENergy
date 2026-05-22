import { FaInstagram } from 'react-icons/fa';

const FollowUs = () => {
  const posts = ['/1.png.png', '/2.png.png', '/3.png.png', '/4.png.png', '/5.png.png'];

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-white mb-12 lg:mb-[80px]">
      <div className="container-bold text-center">
        <p
          className="text-base sm:text-lg lg:text-xl font-bold mb-1.5"
          style={{ fontFamily: 'DM Sans, sans-serif', color: '#385887', letterSpacing: '0.03em' }}
        >
          Follow Us
        </p>
        <h2
          className="mb-8 lg:mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] leading-tight font-bold break-words"
          style={{ fontFamily: 'Quicksand, sans-serif', color: '#222222', letterSpacing: '0.03em' }}
        >
          @empowerenergy.co
        </h2>

        {/* Five Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 mb-8 lg:mb-12">
          {posts.map((src, i) => (
            <div
              key={src}
              className={`aspect-[4/5] w-full overflow-hidden rounded-lg ${
                i === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <img src={src} alt={`Instagram post ${i + 1}`} className="is-bg" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Instagram CTA Button */}
        <button
          className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-bold text-sm sm:text-base lg:text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 mx-auto"
          style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.05em' }}
        >
          <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
          FOLLOW ON INSTAGRAM
        </button>
      </div>
    </section>
  );
};

export default FollowUs;
