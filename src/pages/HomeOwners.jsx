import { useNavigate } from 'react-router-dom';
import CoverageMap from '../components/CoverageMap';
import Testimonials from '../components/Testimonials';
import { useFormModal } from '../context/FormModalContext';
import { FaSolarPanel, FaMapMarkedAlt, FaTools, FaHandHoldingUsd, FaDollarSign, FaShoppingCart, FaFileAlt } from 'react-icons/fa';

const solarOptions = [
  {
    icon: <FaHandHoldingUsd className="w-10 h-10 text-white" />,
    title: 'TPO',
    subtitle: 'Third-Party Ownership',
    description: 'Go solar with $0 upfront. A third-party owns and maintains the system on your roof — you simply buy the clean energy it produces at a lower rate than your utility. No maintenance hassles, no large investment, just immediate savings on your electric bill.',
    color: '#385887',
  },
  {
    icon: <FaDollarSign className="w-10 h-10 text-white" />,
    title: 'Finance',
    subtitle: 'Solar Loan',
    description: 'Own your solar system from day one with affordable monthly payments. Solar loans let you lock in low energy costs, build home equity, and take full advantage of the 30% federal tax credit — all while paying less than your current electric bill.',
    color: '#A1B502',
  },
  {
    icon: <FaShoppingCart className="w-10 h-10 text-white" />,
    title: 'Purchase',
    subtitle: 'Cash Buy',
    description: 'Maximize your return on investment by purchasing your solar system outright. No interest, no monthly payments — just decades of free electricity, the highest long-term savings, and full ownership of a system backed by a 25-year warranty.',
    color: '#385887',
  },
];

const HomeOwners = () => {
  const { openHomeownerForm } = useFormModal();
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full relative h-screen min-h-[600px] lg:min-h-[900px] mb-24 sm:mb-28 lg:mb-[100px]">
        <img
          src="/hero.jpeg"
          alt="Homeowners"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />

        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center flex flex-col items-center justify-center px-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight mb-6" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
              See if solar is the<br />Right Fit for You.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
              Join thousands switching to solar and save on your
              energy bills while protecting the planet.
            </p>
            <button
              onClick={openHomeownerForm}
              className="px-8 py-4 rounded-xl text-white font-bold text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              style={{ fontFamily: 'Archivo, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.05em' }}
            >
              <FaFileAlt className="w-5 h-5" />
              GET A FREE QUOTE
            </button>
          </div>
        </div>

        {/* Three Stats Pills */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="w-full flex justify-center px-4 sm:px-8 lg:px-16 xl:px-[200px]">
            <div className="flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-[30px]">
              <div className="bg-white rounded-full flex items-center w-[280px] sm:w-[340px] xl:w-[417px] h-[100px] sm:h-[120px] xl:h-[148px] gap-3 xl:gap-5 px-4 xl:px-6 shadow-lg">
                <div className="flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 xl:w-[100px] xl:h-[100px] p-2 xl:p-3">
                  <FaSolarPanel className="w-8 h-8 xl:w-12 xl:h-12 text-[#A1B502]" />
                </div>
                <div className="text-left">
                  <div className="font-bold mb-1 text-3xl sm:text-4xl xl:text-[60px] leading-tight" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502' }}>
                    25+
                  </div>
                  <div className="text-gray-700 text-xs xl:text-sm" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
                    Years of Solar Experience
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-full flex items-center w-[280px] sm:w-[340px] xl:w-[417px] h-[100px] sm:h-[120px] xl:h-[148px] gap-3 xl:gap-5 px-4 xl:px-6 shadow-lg">
                <div className="flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 xl:w-[100px] xl:h-[100px] p-2 xl:p-3">
                  <FaMapMarkedAlt className="w-8 h-8 xl:w-12 xl:h-12 text-[#A1B502]" />
                </div>
                <div className="text-left">
                  <div className="font-bold mb-1 text-3xl sm:text-4xl xl:text-[60px] leading-tight" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502' }}>
                    25
                  </div>
                  <div className="text-gray-700 text-xs xl:text-sm" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
                    States we cover
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-full flex items-center w-[280px] sm:w-[340px] xl:w-[417px] h-[100px] sm:h-[120px] xl:h-[148px] gap-3 xl:gap-5 px-4 xl:px-6 shadow-lg">
                <div className="flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 xl:w-[100px] xl:h-[100px] p-2 xl:p-3">
                  <FaTools className="w-8 h-8 xl:w-12 xl:h-12 text-[#A1B502]" />
                </div>
                <div className="text-left">
                  <div className="font-bold mb-1 text-3xl sm:text-4xl xl:text-[60px] leading-tight" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502' }}>
                    20k+
                  </div>
                  <div className="text-gray-700 text-xs xl:text-sm" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
                    Completed installs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Options Section */}
      <section className="bg-white py-16 lg:py-[100px] px-4 sm:px-8 lg:px-16 xl:px-[200px]">
        <div className="text-center mb-12 lg:mb-[60px]">
          <p className="text-lg font-bold mb-2" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502', letterSpacing: '0.03em' }}>
            Your Solar Options
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-black mb-4" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            Choose the Right Plan for You
          </h2>
          <p className="text-base lg:text-lg text-gray-700 max-w-[700px] mx-auto" style={{ fontFamily: 'Archivo, sans-serif', lineHeight: '1.6', letterSpacing: '0.03em' }}>
            Whether you want zero upfront costs, affordable monthly payments, or maximum long-term savings — we have a solar solution that fits your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solarOptions.map((option, i) => (
            <div
              key={i}
              className="group relative bg-[#FAFBF2] rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#A1B502]/20"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: option.color }}
              >
                {option.icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-1" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
                {option.title}
              </h3>
              <p className="text-sm font-bold mb-4" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502', letterSpacing: '0.03em' }}>
                {option.subtitle}
              </p>
              <div className="w-12 h-[3px] rounded-full mb-5" style={{ backgroundColor: option.color }} />
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
                {option.description}
              </p>
              <button
                onClick={openHomeownerForm}
                className="mt-auto px-6 py-3 rounded-xl font-bold text-white hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-sm"
                style={{ fontFamily: 'Archivo, sans-serif', backgroundColor: option.color, letterSpacing: '0.05em' }}
              >
                <FaFileAlt className="w-4 h-4" />
                GET A QUOTE
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Bold Energy Section */}
      <section className="w-full bg-[#F5F7E8] py-16 lg:py-[100px] px-4 sm:px-8 lg:px-16 xl:px-[200px]">
        <div className="text-center mb-12 lg:mb-[60px]">
          <p className="text-lg font-bold mb-2" style={{ fontFamily: 'Archivo, sans-serif', color: '#385887', letterSpacing: '0.03em' }}>
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-black mb-4" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            Why Bold Energy
          </h2>
          <p className="text-base lg:text-lg text-gray-700 max-w-[700px] mx-auto" style={{ fontFamily: 'Archivo, sans-serif', lineHeight: '1.6', letterSpacing: '0.03em' }}>
            Ethical. Transparent. Relentless. We don't just install solar — we help you save money and protect the environment.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[60px]">
          <div className="w-full lg:w-[40%] flex justify-center">
            <div className="relative" style={{ width: '320px', height: '420px' }}>
              <svg style={{ position: 'absolute', width: '320px', height: '420px', top: 0, left: 0 }}>
                <rect
                  x="0.5" y="0.5" width="319" height="419"
                  rx="160" ry="160"
                  fill="none" stroke="#385887" strokeWidth="1" strokeDasharray="5 10"
                />
              </svg>
              <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '160px', overflow: 'hidden', padding: '10px' }}>
                <img
                  src="/boldenergyimage.png?v=8"
                  alt="Bold Energy"
                  style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', borderRadius: '150px' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: '⚡', title: 'Ethical & Transparent', desc: 'No hidden fees or bait-and-switch. Honest numbers from day one so you can make confident decisions.' },
              { icon: '🛡️', title: 'Tier-1 Hardware', desc: 'Triple-black panels + SolarEdge inverters backed by 25-year warranties for lasting performance.' },
              { icon: '📊', title: 'Proven ROI', desc: 'Solar adds 4–7% to home resale value and locks in lower energy costs for decades.' },
              { icon: '🌿', title: 'Environmental Impact', desc: 'Every system offsets tons of CO₂ annually — the equivalent of planting hundreds of trees each year.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full py-16 lg:py-[80px] px-4 sm:px-8 lg:px-16 xl:px-[200px]" style={{ backgroundColor: '#385887' }}>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-white mb-4" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            Ready to Go Solar?
          </h2>
          <p className="text-base lg:text-lg text-white/80 max-w-[600px] mx-auto mb-8" style={{ fontFamily: 'Archivo, sans-serif', lineHeight: '1.6', letterSpacing: '0.03em' }}>
            Get a personalized solar estimate for your home. Our team will walk you through every option and help you find the perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openHomeownerForm}
              className="px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              style={{ fontFamily: 'Archivo, sans-serif', backgroundColor: '#A1B502', color: '#FFFFFF', letterSpacing: '0.05em' }}
            >
              <FaFileAlt className="w-5 h-5" />
              GET A FREE QUOTE
            </button>
            <button
              onClick={() => navigate('/states-we-cover')}
              className="px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 border-2 border-white text-white"
              style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.05em', backgroundColor: 'transparent' }}
            >
              <FaMapMarkedAlt className="w-5 h-5" />
              VIEW COVERAGE MAP
            </button>
          </div>
        </div>
      </section>

      <CoverageMap />
      <Testimonials />
    </div>
  );
};

export default HomeOwners;
