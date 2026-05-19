import { FaFileAlt, FaHandshake } from 'react-icons/fa';
import { useFormModal } from '../context/FormModalContext';

const GoBold = () => {
  const { openHomeownerForm, openDealerForm } = useFormModal();
  return (
    <section className="relative w-full h-auto py-20 lg:py-0 lg:h-[950px] min-h-[500px] md:min-h-[700px] lg:min-h-[950px] mb-10 md:mb-16 lg:mb-[100px]">
      {/* Background Image */}
      <img
        src="/gobold.png.jpg"
        alt="Go Bold"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-8" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            Go Bold or Stay Stuck
          </h2>
          <p className="text-base sm:text-lg lg:text-[23px] text-white mb-4" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
            You could keep paying overpriced utility bills and waiting for someone else to fix the planet.
          </p>
          <p className="text-base sm:text-lg lg:text-[23px] text-white mb-10" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
            Or... you could go solar the Bold way and take control of your power, your wallet, and your future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={openHomeownerForm}
              className="px-8 py-4 rounded-xl text-white font-bold text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.05em' }}
            >
              <FaFileAlt className="w-5 h-5" />
              GET A QUOTE
            </button>
            <button
              onClick={openDealerForm}
              className="px-8 py-4 rounded-xl text-white font-bold text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#385887', letterSpacing: '0.05em' }}
            >
              <FaHandshake className="w-6 h-6" />
              BECOME A SALES DEALER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoBold;
