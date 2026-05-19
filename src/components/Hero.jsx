import { FaHome, FaUsers, FaSolarPanel, FaMapMarkedAlt, FaTools } from 'react-icons/fa';
import { useFormModal } from '../context/FormModalContext';

const Hero = () => {
  const { openHomeownerForm, openDealerForm } = useFormModal();

  const stats = [
    { icon: FaSolarPanel, value: '25+', label: 'Years of Solar Experience' },
    { icon: FaMapMarkedAlt, value: '25', label: 'States We Cover' },
    { icon: FaTools, value: '20k+', label: 'Completed Installs' },
  ];

  const values = ['Driven by Expertise', 'Guided by Integrity', 'Delivered with Urgency'];

  return (
    <section className="relative w-full h-screen min-h-[700px] 2xl:h-[120vh]">
      {/* Hero Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/hero_25.png.png"
          alt="Home with solar panels"
          className="w-full h-full object-cover"
          loading="eager"
          style={{ transform: 'scale(1.05)' }}
        />
        {/* Multi-layer gradient for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#385887]/40 via-transparent to-transparent" />
        {/* Decorative glow orbs */}
        <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-[#A1B502]/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[30%] left-[5%] w-[400px] h-[400px] bg-[#385887]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-[60px] pb-[140px] sm:pb-[180px] lg:pb-[220px]">
        <div className="text-center px-4 sm:px-6 max-w-5xl mx-auto">
          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight mb-4 sm:mb-8"
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
            className="text-base sm:text-lg md:text-xl lg:text-[22px] text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.01em' }}
          >
            Empowering homeowners and partners to lead the charge toward a sustainable, bold future
          </p>

          {/* Value props */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-10 mb-10 sm:mb-14">
            {values.map((text) => (
              <div key={text} className="flex items-center justify-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#A1B502] flex items-center justify-center">
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
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-5">
            <button
              onClick={openHomeownerForm}
              className="bg-bold-green text-white px-8 py-4 rounded-xl font-bold text-sm hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em' }}
            >
              <FaHome className="w-4 h-4" />
              $0 DOWN SOLAR
            </button>
            <button
              onClick={openDealerForm}
              className="bg-white text-bold-green px-8 py-4 rounded-xl font-bold text-sm hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em' }}
            >
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
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-white rounded-full flex items-center gap-3 w-full max-w-[360px] xl:max-w-none xl:w-[350px] 2xl:w-[400px] h-[90px] xl:h-[110px] 2xl:h-[130px] px-4 sm:px-6 xl:px-6 2xl:px-8 shadow-md"
              >
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 rounded-full bg-gray-100 flex items-center justify-center p-2">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 text-[#A1B502]" />
                </div>
                <div className="text-left">
                  <div
                    className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-0.5"
                    style={{ fontFamily: 'DM Sans, sans-serif', color: '#A1B502' }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-gray-700 text-xs xl:text-sm 2xl:text-base whitespace-nowrap"
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
