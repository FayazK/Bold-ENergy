import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHandshake, FaClipboardCheck, FaHome, FaChartLine, FaCreditCard, FaExchangeAlt, FaMicrochip, FaClock, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaArrowDown, FaArrowRight } from 'react-icons/fa';

const COVERED_COLOR = '#A1B502';
const COMING_SOON_COLOR = '#3D9DE0';

const coveredStates = [
  'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Missouri', 'New Hampshire', 'New Jersey',
  'New York', 'North Carolina', 'Ohio', 'Oklahoma', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'Texas', 'Vermont', 'Virginia',
  'Washington', 'West Virginia',
];

const comingSoonStates = ['Georgia'];

const StatesWeCover = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardWidth, setCardWidth] = useState(430);
  const [cardGap, setCardGap] = useState(30);

  const stateCards = [
    { id: 1, image: '/southwest-roof.jpg', heading: 'Southwest Region', states: ['Arizona', 'Arkansas', 'California', 'Colorado', 'Nevada', 'New Mexico', 'Utah'] },
    { id: 2, image: '/northeast-roof.jpg', heading: 'Northeast Region', states: ['Connecticut', 'Maine', 'Massachusetts', 'New Hampshire', 'New Jersey', 'New York', 'Vermont'] },
    { id: 3, image: '/southeast-roof.jpg', heading: 'Southeast Region', states: ['Florida', 'Georgia', 'North Carolina', 'South Carolina', 'Tennessee', 'Virginia'] },
    { id: 4, image: '/midwest-roof.jpg', heading: 'Midwest Region', states: ['Illinois', 'Indiana', 'Michigan', 'Minnesota', 'Ohio', 'Wisconsin'] },
    { id: 5, image: '/mountain-roof.jpg', heading: 'Mountain Region', states: ['Idaho', 'Montana', 'Wyoming', 'Oregon', 'Washington'] },
    { id: 6, image: '/pacific-roof.jpg', heading: 'Pacific Region', states: ['California', 'Hawaii', 'Oregon', 'Washington', 'Alaska'] },
    { id: 7, image: '/gulf-coast-roof.jpg', heading: 'Gulf Coast Region', states: ['Texas', 'Louisiana', 'Mississippi', 'Alabama', 'Florida'] },
    { id: 8, image: '/great-plains-roof.jpg', heading: 'Great Plains Region', states: ['Kansas', 'Nebraska', 'North Dakota', 'South Dakota', 'Oklahoma'] },
    { id: 9, image: '/mid-atlantic-roof.jpg', heading: 'Mid-Atlantic Region', states: ['Delaware', 'Maryland', 'Pennsylvania', 'Virginia', 'West Virginia'] },
    { id: 10, image: '/new-england-roof.jpg', heading: 'New England Region', states: ['Rhode Island', 'Connecticut', 'Massachusetts', 'Vermont', 'New Hampshire', 'Maine'] },
  ];

  const updateCardSize = useCallback(() => {
    const w = window.innerWidth;
    if (w < 640) {
      setCardWidth(280);
      setCardGap(16);
    } else if (w < 1024) {
      setCardWidth(340);
      setCardGap(20);
    } else {
      setCardWidth(430);
      setCardGap(30);
    }
  }, []);

  useEffect(() => {
    updateCardSize();
    window.addEventListener('resize', updateCardSize);
    return () => window.removeEventListener('resize', updateCardSize);
  }, [updateCardSize]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (stateCards.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (stateCards.length - 2)) % (stateCards.length - 2));
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="w-full relative overflow-hidden min-h-[700px] sm:min-h-[850px] lg:min-h-[950px] flex items-center"
        style={{
          background:
            'radial-gradient(ellipse at top right, #1f3360 0%, #0f1a33 45%, #060b1a 100%)',
        }}
      >
        {/* Subtle photo texture (very faint, for atmosphere) */}
        <img
          src="/states-cover-hero.jpg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.08] mix-blend-screen pointer-events-none"
          loading="eager"
        />
        {/* Gradient veil to add depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
        {/* Brand glow orbs */}
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-[#A1B502]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[3%] w-[450px] h-[450px] bg-[#385887]/25 rounded-full blur-[140px] pointer-events-none" />

        {/* Two-column content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 pt-36 sm:pt-40 lg:pt-56 pb-12 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
            {/* Left: Heading + copy + CTAs + stats */}
            <div className="text-white">
              <p
                className="text-[#A1B502] text-xs sm:text-sm font-bold uppercase mb-4"
                style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.18em' }}
              >
                32 States. One Mission.
              </p>

              <h1
                className="font-bold leading-[1.05] mb-5 lg:mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-[64px]"
                style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.01em' }}
              >
                States We <span className="text-[#A1B502]">Cover.</span>
              </h1>

              <p
                className="text-base sm:text-lg text-white/85 max-w-[520px] leading-relaxed mb-8"
                style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.01em' }}
              >
                From New England to the Pacific, Bold Energy powers homeowners and partners across 32 states — and new markets open every quarter. Find out if we're already in your area.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
                <button
                  onClick={() => {
                    document.getElementById('coverage-map')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
                  style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.03em' }}
                >
                  Check Your State
                  <FaArrowDown className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => navigate('/partner-with-bold-energy')}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white border-2 border-white/70 bg-transparent hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2.5"
                  style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}
                >
                  Become a Dealer
                  <FaArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Stats divider */}
              <div className="h-px w-full bg-white/20 mb-6" />

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-[480px]">
                {[
                  { value: '32', label: 'Active States' },
                  { value: '20k+', label: 'Installs' },
                  { value: '25+', label: 'Years' },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white leading-none mb-1.5"
                      style={{ fontFamily: 'Quicksand, sans-serif' }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-[10px] sm:text-[11px] font-bold uppercase text-white/70"
                      style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.15em' }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Coverage map (prominent) */}
            <div className="flex items-center justify-center lg:justify-end">
              <img
                src="/coverage-map-clean.svg"
                alt="USA Coverage Map"
                className="w-full max-w-[420px] sm:max-w-[560px] lg:max-w-[640px] xl:max-w-[720px] h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expanding Solar Section */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-[200px] py-12 sm:py-16 lg:py-[100px] bg-white">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[80px] mb-10 lg:mb-[60px] lg:ml-[50px]">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-black leading-tight" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
              Expanding Solar, One<br className="hidden lg:block" /> State at a Time
            </h2>
          </div>
          <div className="w-full lg:flex-1 lg:max-w-[700px] lg:ml-[60px]">
            <p className="text-base sm:text-lg lg:text-[20px] text-black leading-relaxed lg:leading-[1.8]" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
              Bold Energy is headquartered in Connecticut, but our mission is nationwide. We currently serve homeowners and partners across 15+ states — and growing every quarter. With Tier-1 panels, transparent pricing, and flexible financing options, we make it easy for families from New England to the Rockies to take control of their energy future.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/bold1.png.png" alt="Bold Section" className="w-full max-w-[1350px] h-auto object-contain" loading="lazy" />
        </div>
      </section>

      {/* Where We Operate Now Section */}
      <section className="w-full bg-[#F5F5F5] py-12 sm:py-16 lg:py-[100px] overflow-hidden">
        <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-black text-center mb-8 sm:mb-10 lg:mb-[60px]" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
          Where We Operate Now
        </h2>

        <div className="relative px-4 sm:px-8">
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-full bg-[#A1B502] border-none cursor-pointer flex items-center justify-center z-10"
          >
            <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-full bg-[#A1B502] border-none cursor-pointer flex items-center justify-center z-10"
          >
            <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          <div className="overflow-hidden mx-8 sm:mx-12">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ gap: `${cardGap}px`, transform: `translateX(-${currentSlide * (cardWidth + cardGap)}px)` }}
            >
              {stateCards.map((card) => (
                <div
                  key={card.id}
                  className="group bg-white rounded-2xl overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ width: `${cardWidth}px` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-[180px] sm:h-[220px] lg:h-[240px]">
                    <img
                      src={card.image}
                      alt={card.heading}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 lg:p-7">
                    {/* Title + count */}
                    <div className="flex items-baseline justify-between mb-4">
                      <h3
                        className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#1a1a1a]"
                        style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.01em' }}
                      >
                        {card.heading}
                      </h3>
                      <span
                        className="text-xs sm:text-sm font-semibold text-[#A1B502] flex-shrink-0 ml-3"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {card.states.length} states
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-gray-100 mb-4" />

                    {/* States — clean 2-column list */}
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {card.states.map((state, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm sm:text-[15px] text-gray-700"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A1B502] flex-shrink-0" />
                          {state}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 sm:mt-10 lg:mt-[50px]">
          <button className="bg-[#A1B502] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:brightness-110 hover:shadow-lg transition-all duration-300" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em' }}>
            <FaHandshake className="w-5 h-5" />
            BECOME A PARTNER
          </button>
        </div>
      </section>

      {/* What Customers Get Section */}
      <section className="w-full py-12 sm:py-16 lg:py-[100px] px-4 sm:px-8 lg:px-16 xl:pl-[200px] xl:pr-0 bg-white">
        <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-black text-center mb-8 sm:mb-10 lg:mb-[60px] xl:pr-[200px]" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
          What Customers Get in Every State
        </h2>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-auto">
            {[
              { icon: <FaChartLine className="w-5 h-5 text-[#A1B502]" />, title: 'Home Value Boost:', desc: 'Solar adds ~4-7% to resale value according to Zillow.' },
              { icon: <FaCreditCard className="w-5 h-5 text-[#A1B502]" />, title: 'Flexible Financing:', desc: 'Loan, lease, and cash purchase options available with major solar lenders. Example: 25-year solar loan at ~5.99% APR with 30% federal tax credit applied' },
              { icon: <FaExchangeAlt className="w-5 h-5 text-[#A1B502]" />, title: 'Net Metering Benefits:', desc: 'In most regions, customers can "bank" excess daytime energy for nighttime use — reducing reliance on utilities' },
              { icon: <FaMicrochip className="w-5 h-5 text-[#A1B502]" />, title: 'Top-Tier Hardware Everywhere:', desc: 'Tier-1 solar panels + SolarEdge inverters backed by 25-year warranties.' },
              { icon: <FaClock className="w-5 h-5 text-[#A1B502]" />, title: 'Fast Install Timelines:', desc: 'Once permits clear, installs are usually complete in 1-2 days, no matter the market.' },
            ].map((card, i) => (
              <div key={i} className="w-full max-w-[660px] min-h-[100px] sm:min-h-[120px] lg:min-h-[132px] border border-[rgba(161,181,2,0.3)] rounded-[10px] flex items-center p-4 sm:p-5 gap-4 sm:gap-5 bg-white hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] rounded-full bg-[rgba(161,181,2,0.1)] flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-[15px] lg:text-[16px] font-bold text-black mb-1 sm:mb-2" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>{card.title}</h3>
                  <p className="text-xs sm:text-[13px] lg:text-[14px] text-black leading-snug lg:leading-[1.5]" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <img src="/everystate.png.png" alt="Every State" className="w-full max-w-[764px] h-auto object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section id="coverage-map" className="w-full bg-[#F5F5F5] px-4 sm:px-8 lg:px-16 xl:px-[200px] py-12 sm:py-16 lg:py-[100px] scroll-mt-24">
        <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-black text-center mb-8 sm:mb-10 lg:mb-[60px]" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
          Coverage Map
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start max-w-[1400px] mx-auto">
          {/* Coverage Map (SVG) */}
          <div className="w-full">
            <img
              src="/coverage-map.svg"
              alt="Bold Energy Coverage Map"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* State Lists */}
          <div className="grid grid-cols-1 sm:grid-cols-[1.6fr_1fr] gap-6 sm:gap-8">
            {/* Covered States */}
            <div>
              <h3
                className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-4 sm:mb-6"
                style={{ fontFamily: 'Quicksand, sans-serif', color: COVERED_COLOR }}
              >
                Covered States
              </h3>
              <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                {coveredStates.map((name) => (
                  <li
                    key={name}
                    className="flex items-center gap-2.5 text-sm sm:text-[15px] text-gray-800"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    <FaMapMarkerAlt className="w-4 h-4 flex-shrink-0" style={{ color: COVERED_COLOR }} />
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coming Soon */}
            <div>
              <h3
                className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-4 sm:mb-6"
                style={{ fontFamily: 'Quicksand, sans-serif', color: COMING_SOON_COLOR }}
              >
                Coming Soon
              </h3>
              <ul className="flex flex-col gap-2.5">
                {comingSoonStates.map((name) => (
                  <li
                    key={name}
                    className="flex items-center gap-2.5 text-sm sm:text-[15px] text-gray-800"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    <FaMapMarkerAlt className="w-4 h-4 flex-shrink-0" style={{ color: COMING_SOON_COLOR }} />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="w-full relative min-h-[600px] sm:min-h-[700px] lg:min-h-[816px]">
        <img src="/gobold.png.jpg" alt="Coming Soon Background" className="w-full h-full absolute inset-0 object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-[2] flex flex-col items-center px-4 sm:px-8 py-12 sm:py-16 lg:pt-[100px] lg:pb-[100px]">
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-white mb-6 sm:mb-8 lg:mb-[30px]" style={{ fontFamily: 'Quicksand, sans-serif' }}>Coming Soon</h2>
          <p className="text-base sm:text-lg lg:text-[23px] text-white text-center leading-relaxed lg:leading-[1.8] max-w-[800px]" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
            We're adding new states rapidly. If you don't see your state listed, reach out — Bold Energy
            expansion markets are opening every quarter.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-6 lg:gap-[30px] mt-10 sm:mt-12 lg:mt-[60px] w-full">
            {[
              { icon: <FaClipboardCheck className="w-7 h-7 text-[#A1B502]" />, title: 'Dealers', desc: 'Apply now to secure exclusive\npartnerships in new territorie' },
              { icon: <FaHome className="w-7 h-7 text-[#A1B502]" />, title: 'Homeowners', desc: 'Check your zip code to see if\nwe serve your area yet' },
            ].map((card, i) => (
              <div key={i} className="relative mt-[60px] flex justify-center">
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full bg-white absolute -top-[50px] sm:-top-[60px] left-1/2 -translate-x-1/2 flex items-center justify-center z-[3]">
                  <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full bg-[#EBEEF3] flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>
                <div className="w-full max-w-[430px] sm:w-[350px] lg:w-[430px] bg-white rounded-xl p-6 sm:p-[30px] pt-16 sm:pt-[80px] text-center flex flex-col justify-between items-center min-h-[260px] sm:min-h-[290px] lg:min-h-[314px]">
                  <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-black" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>{card.title}</h3>
                  <p className="text-sm sm:text-[15px] lg:text-[16px] text-black leading-relaxed lg:leading-[1.6] whitespace-pre-line" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>{card.desc}</p>
                  <button className="bg-[#A1B502] text-white px-6 py-3 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-3 hover:brightness-110 hover:shadow-lg transition-all duration-300" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em' }}>
                    <FaHandshake className="w-5 h-5" />
                    APPLY NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatesWeCover;
