import { FaHome, FaUsers, FaSolarPanel, FaMapMarkedAlt, FaTools } from 'react-icons/fa';
import { useFormModal } from '../context/FormModalContext';

const Hero = () => {
  const { openHomeownerForm, openDealerForm } = useFormModal();

  const stats = [
    { icon: FaSolarPanel, value: '25+', label: 'Years of Solar Experience' },
    { icon: FaMapMarkedAlt, value: '30', label: 'States We Cover' },
    { icon: FaTools, value: '20k+', label: 'Completed Installs' },
  ];

  const values = ['Driven by Expertise', 'Guided by Integrity', 'Delivered with Urgency'];

  return (
    <section className="relative w-full min-h-[680px] sm:min-h-[760px] md:h-screen md:min-h-[700px]">
      {/* Hero Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/hero_25.png.png"
          alt="Home with solar panels"
          className="is-bg"
          loading="eager"
          style={{ transform: 'scale(1.05)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#385887]/40 via-transparent to-transparent" />
        <div className="absolute top-[20%] right-[5%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-[#A1B502]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[30%] left-[5%] w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] bg-[#385887]/12 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-40 sm:pt-44 md:pt-52 pb-[180px] sm:pb-[200px] md:pb-[220px]">
        <div className="container-bold text-center">
          {/* Heading */}
          <h1
            className="font-bold text-white tracking-tight mb-4 sm:mb-6 md:mb-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}
          >
            Power Up.
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, #A1B502 0%, #c8e003 50%, #A1B502 100%)',
                WebkitBackgroundClip: 'text',
              }}
            >
              Be Bold
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
            style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.01em' }}
          >
            Empowering homeowners and partners to lead the charge toward a sustainable, bold future
          </p>

          {/* Value props */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 md:gap-10 mb-8 sm:mb-12">
            {values.map((text) => (
              <div key={text} className="flex items-center justify-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#A1B502] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span
                  className="text-white/90 text-sm sm:text-base font-medium tracking-wide"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
            <button
              onClick={openHomeownerForm}
              className="bg-[#A1B502] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
              style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em' }}
            >
              <FaHome className="w-4 h-4" />
              $0 DOWN SOLAR
            </button>
            <button
              onClick={openDealerForm}
              className="bg-white text-[#A1B502] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
              style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em' }}
            >
              <FaUsers className="w-4 h-4 text-[#A1B502]" />
              BECOME A SALES DEALER
            </button>
          </div>
        </div>
      </div>

      {/* Three Stats Pills - Half on hero, half below (sm+) */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[40%] sm:translate-y-1/2 z-10">
        <div className="container-bold">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-[1200px] mx-auto">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-white rounded-full sm:rounded-full flex items-center gap-3 px-4 sm:px-4 lg:px-6 py-3 sm:py-3 lg:py-4 shadow-md min-w-0"
              >
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-gray-100 flex items-center justify-center p-2">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#A1B502]" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div
                    className="text-xl sm:text-2xl lg:text-[32px] font-bold leading-none"
                    style={{ fontFamily: 'DM Sans, sans-serif', color: '#A1B502' }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-gray-700 text-[10px] sm:text-[11px] lg:text-sm mt-1 truncate"
                    style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}
                  >
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
