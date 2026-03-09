import { FaHome, FaUsers, FaSolarPanel, FaMapMarkedAlt, FaTools } from 'react-icons/fa';
import { useFormModal } from '../context/FormModalContext';

const Hero = () => {
  const { openHomeownerForm, openDealerForm } = useFormModal();
  return (
    <section className="relative w-full h-screen min-h-[700px] 2xl:h-[120vh]">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/hero_25.png.png"
          alt="Home with solar panels"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-[60px] pb-[120px] sm:pb-[160px] lg:pb-[200px]">
        <div className="text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight mb-4 sm:mb-8" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            Power Up. Be Bold
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-10 px-2" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
            At Bold Energy, we empower homeowners and strategic partners to lead the charge toward a sustainable future
          </p>

          {/* Three bullet points */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-8 md:gap-10 mt-4 sm:mt-8">
            <div className="flex items-center justify-center gap-2">
              <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center">
                <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-sm sm:text-base lg:text-lg font-medium" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.04em' }}>
                Driven by Expertise
              </span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center">
                <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-sm sm:text-base lg:text-lg font-medium" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.04em' }}>
                Guided by Integrity
              </span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center">
                <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-sm sm:text-base lg:text-lg font-medium" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.04em' }}>
                Delivered with urgency
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-5 mt-8 sm:mt-12">
            <button onClick={openHomeownerForm} className="bg-bold-green text-white px-8 py-4 rounded-xl font-bold text-sm hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.05em' }}>
              <FaHome className="w-4 h-4" />
              $0 DOWN SOLAR
            </button>
            <button onClick={openDealerForm} className="bg-white text-bold-green px-8 py-4 rounded-xl font-bold text-sm hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.05em' }}>
              <FaUsers className="w-4 h-4 text-[#A1B502]" />
              BECOME A SALES DEALER
            </button>
          </div>
        </div>
      </div>

      {/* Three Stats Pills - Half on hero, half below */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-10">
        <div className="w-full flex justify-center px-4 sm:px-8 xl:px-20">
          <div className="flex flex-col xl:flex-row flex-wrap justify-center items-center gap-4 xl:gap-6 2xl:gap-10 will-change-transform">
            <div className="bg-white rounded-full flex items-center gap-3 w-full max-w-[360px] xl:max-w-none xl:w-[350px] 2xl:w-[400px] h-[90px] xl:h-[110px] 2xl:h-[130px] px-4 sm:px-6 xl:px-6 2xl:px-8 shadow-md">
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 rounded-full bg-gray-100 flex items-center justify-center p-2">
                <FaSolarPanel className="w-7 h-7 sm:w-8 sm:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 text-[#A1B502]" />
              </div>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-0.5" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502' }}>
                  25+
                </div>
                <div className="text-gray-700 text-xs xl:text-sm 2xl:text-base whitespace-nowrap" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
                  Years of Solar Experience
                </div>
              </div>
            </div>

            <div className="bg-white rounded-full flex items-center gap-3 w-full max-w-[360px] xl:max-w-none xl:w-[350px] 2xl:w-[400px] h-[90px] xl:h-[110px] 2xl:h-[130px] px-4 sm:px-6 xl:px-6 2xl:px-8 shadow-md">
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 rounded-full bg-gray-100 flex items-center justify-center p-2">
                <FaMapMarkedAlt className="w-7 h-7 sm:w-8 sm:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 text-[#A1B502]" />
              </div>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-0.5" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502' }}>
                  25
                </div>
                <div className="text-gray-700 text-xs xl:text-sm 2xl:text-base whitespace-nowrap" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
                  States we cover
                </div>
              </div>
            </div>

            <div className="bg-white rounded-full flex items-center gap-3 w-full max-w-[360px] xl:max-w-none xl:w-[350px] 2xl:w-[400px] h-[90px] xl:h-[110px] 2xl:h-[130px] px-4 sm:px-6 xl:px-6 2xl:px-8 shadow-md">
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 rounded-full bg-gray-100 flex items-center justify-center p-2">
                <FaTools className="w-7 h-7 sm:w-8 sm:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 text-[#A1B502]" />
              </div>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-0.5" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502' }}>
                  20k+
                </div>
                <div className="text-gray-700 text-xs xl:text-sm 2xl:text-base whitespace-nowrap" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
                  Completed installs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
