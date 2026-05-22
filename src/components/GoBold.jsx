import { FaFileAlt, FaHandshake } from 'react-icons/fa';
import { useFormModal } from '../context/FormModalContext';

const GoBold = () => {
  const { openHomeownerForm, openDealerForm } = useFormModal();
  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] mb-10 md:mb-16 lg:mb-[100px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/gobold.png.jpg"
        alt=""
        aria-hidden="true"
        className="is-bg absolute inset-0"
        loading="lazy"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text Content */}
      <div className="relative z-[1] flex items-center justify-center min-h-[inherit] py-16 sm:py-20 lg:py-24">
        <div className="container-bold text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight"
            style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}
          >
            Go Bold or Stay Stuck
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] text-white mb-3 sm:mb-4 max-w-3xl mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em' }}
          >
            You could keep paying overpriced utility bills and waiting for someone else to fix the planet.
          </p>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] text-white mb-8 sm:mb-10 max-w-3xl mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em' }}
          >
            Or... you could go solar the Bold way and take control of your power, your wallet, and your future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5">
            <button
              onClick={openHomeownerForm}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-bold text-sm sm:text-base lg:text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
              style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.05em' }}
            >
              <FaFileAlt className="w-4 h-4 sm:w-5 sm:h-5" />
              GET A QUOTE
            </button>
            <button
              onClick={openDealerForm}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-bold text-sm sm:text-base lg:text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
              style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#385887', letterSpacing: '0.05em' }}
            >
              <FaHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
              BECOME A SALES DEALER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoBold;
