import { FaInstagram } from 'react-icons/fa';

const FollowUs = () => {
  return (
    <section className="py-8 bg-white mb-12 lg:mb-[100px]">
      <div className="text-center px-4 sm:px-8 lg:px-16 xl:px-[200px]">
        <p style={{ fontFamily: 'Archivo, sans-serif', color: '#385887', fontSize: '20px', fontWeight: 'bold', marginBottom: '0', letterSpacing: '0.03em' }}>
          Follow Us
        </p>
        <h2 className="mb-8 lg:mb-12 text-3xl sm:text-4xl lg:text-[50px] lg:leading-tight" style={{ fontFamily: 'Quicksand, sans-serif', color: '#222222', fontWeight: 'bold', letterSpacing: '0.03em' }}>
          @empowerenergy.co
        </h2>

        {/* Five Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 xl:gap-10 mb-8 lg:mb-12">
          <div className="aspect-[4/5] w-full">
            <img
              src="/1.png.png"
              alt="Instagram post 1"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="aspect-[4/5] w-full">
            <img
              src="/2.png.png"
              alt="Instagram post 2"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="aspect-[4/5] w-full">
            <img
              src="/3.png.png"
              alt="Instagram post 3"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="aspect-[4/5] w-full">
            <img
              src="/4.png.png"
              alt="Instagram post 4"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="aspect-[4/5] w-full">
            <img
              src="/5.png.png"
              alt="Instagram post 5"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Instagram CTA Button */}
        <button
          className="px-8 py-4 rounded-xl text-white font-bold text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
          style={{ fontFamily: 'Archivo, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.05em' }}
        >
          <FaInstagram className="w-6 h-6" />
          FOLLOW ON INSTAGRAM
        </button>
      </div>
    </section>
  );
};

export default FollowUs;
