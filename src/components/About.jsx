import { FaHome, FaUsers } from 'react-icons/fa';
import { useFormModal } from '../context/FormModalContext';

const About = () => {
  const { openHomeownerForm, openDealerForm } = useFormModal();
  return (
    <section id="about" className="bg-white pt-12 sm:pt-16 lg:pt-[100px] mb-12 sm:mb-16 lg:mb-[100px]">
      <div className="container-bold">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold mb-2.5" style={{ fontFamily: 'DM Sans, sans-serif', color: '#A1B502' }}>
            About us
          </p>
          <h2 className="font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] leading-tight mb-2.5" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Solar That Actually Makes Sense
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Let's be real — the energy game is rigged. Prices keep going up.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Utility companies keep cashing in. You deserve better.
          </p>
        </div>

        {/* Three Image Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { img: '/fast-install.jpg?v=2', title: 'Fast, Clean Installs', desc: 'Yes, we always pull permits.' },
            { img: '/honest-answers.jpg?v=2', title: 'Honest Answers', desc: 'Our team is available for you' },
            { img: '/unmatched-service.jpg?v=2', title: 'Unmatched Service', desc: 'Before, during, and after install.' },
          ].map((card, i, arr) => (
            <div
              key={card.title}
              className={`text-center hover:shadow-lg transition-shadow duration-300 ${
                arr.length === 3 && i === 2 ? 'sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0' : ''
              }`}
            >
              <div className="mb-5 w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] overflow-hidden rounded-lg">
                <img src={card.img} alt={card.title} className="is-bg" loading="lazy" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Two CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 mt-10 sm:mt-14 lg:mt-16">
          <button
            onClick={openHomeownerForm}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-bold text-sm sm:text-base lg:text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
            style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.05em' }}
          >
            <FaHome className="w-5 h-5 sm:w-6 sm:h-6" />
            HOME OWNERS
          </button>
          <button
            onClick={openDealerForm}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-bold text-sm sm:text-base lg:text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
            style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#385887', letterSpacing: '0.05em' }}
          >
            <FaUsers className="w-5 h-5 sm:w-6 sm:h-6" />
            SALES DEALERS
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
