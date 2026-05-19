import { useState, useEffect, useCallback } from 'react';
import { FaHandshake, FaClipboardCheck, FaHome, FaChartLine, FaCreditCard, FaExchangeAlt, FaMicrochip, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const StatesWeCover = () => {
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
      <section className="w-full relative h-[300px] sm:h-[400px] lg:h-[550px]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/states-cover-hero.jpg.png"
            alt="States We Cover"
            className="w-full h-full object-cover object-center"
            loading="eager"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#385887]/40 via-transparent to-transparent" />
          <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-[#A1B502]/8 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[30%] left-[5%] w-[400px] h-[400px] bg-[#385887]/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-[2]">
          <h1 className="font-bold text-white text-center text-3xl sm:text-4xl lg:text-5xl xl:text-[75px]" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            States We Cover
          </h1>
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
                  className="bg-white rounded-[20px] overflow-hidden flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
                  style={{ width: `${cardWidth}px` }}
                >
                  <img src={card.image} alt={card.heading} className="w-full h-[200px] sm:h-[260px] lg:h-[323px] object-cover" loading="lazy" />
                  <div className="p-4 sm:p-6 lg:p-[30px] text-center">
                    <h3 className="text-lg sm:text-xl lg:text-[25px] font-bold text-black mb-4 lg:mb-5" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
                      {card.heading}
                    </h3>
                    <ul className="list-disc pl-5 text-left inline-block">
                      {card.states.map((state, index) => (
                        <li key={index} className="text-sm sm:text-base lg:text-[18px] text-black leading-[2.2]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
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
      <section className="w-full bg-[#F5F5F5] px-4 sm:px-8 lg:px-16 xl:px-[200px] py-12 sm:py-16 lg:py-[100px] relative">
        <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-black text-center mb-8 sm:mb-10 lg:mb-[60px]" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
          Coverage Map
        </h2>
        <div className="flex justify-center">
          <div className="relative w-full max-w-[1158px]">
            <img src="/map.png.png" alt="Coverage Map" className="w-full max-w-[1158px] h-auto object-contain" loading="lazy" />
          </div>
        </div>
        <div className="mt-6 lg:mt-0 lg:absolute lg:bottom-[100px] lg:right-[200px] w-full lg:w-[230px] bg-white rounded-[10px] shadow-[0px_4px_21px_0px_rgba(0,0,0,0.1)] p-4 sm:p-5 flex flex-row lg:flex-col justify-center gap-3 sm:gap-4 mx-auto lg:mx-0 max-w-[400px] lg:max-w-none">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[5px] bg-[#A3B407] flex-shrink-0"></div>
            <span className="text-sm sm:text-[16px] font-bold text-black" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>Covered Area</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[5px] bg-[#3B5B84] flex-shrink-0"></div>
            <span className="text-sm sm:text-[16px] font-bold text-black" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>Coming Soon</span>
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
