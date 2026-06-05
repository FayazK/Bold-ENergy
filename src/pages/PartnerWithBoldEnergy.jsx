import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import { useFormModal } from '../context/FormModalContext';
import { FaHandshake, FaMoneyBillWave, FaHeadset, FaFileUpload, FaFileAlt, FaCogs, FaHardHat, FaSatelliteDish, FaPlay, FaTimes, FaArrowRight, FaArrowDown, FaBalanceScale, FaBolt, FaSun, FaHome, FaSnowflake, FaCheck } from 'react-icons/fa';

const processSteps = [
  { icon: <FaFileUpload className="w-6 h-6 text-[#A1B502]" />, num: '01', title: 'Submit Deal', desc: 'Upload contracts and docs through the dealer portal.' },
  { icon: <FaFileAlt className="w-6 h-6 text-[#A1B502]" />, num: '02', title: 'Proposal Created', desc: 'We generate a customer-ready savings & financing proposal.' },
  { icon: <FaCogs className="w-6 h-6 text-[#A1B502]" />, num: '03', title: 'Engineering & Permits', desc: 'Bold handles site survey, system design, and all paperwork.' },
  { icon: <FaHardHat className="w-6 h-6 text-[#A1B502]" />, num: '04', title: 'Installation', desc: 'Professional local crews complete installs in 1–2 days.' },
  { icon: <FaSatelliteDish className="w-6 h-6 text-[#A1B502]" />, num: '05', title: 'PTO & Monitoring', desc: 'System goes live with 24/7 performance tracking.' },
];

const PartnerWithBoldEnergy = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { openDealerForm } = useFormModal();
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full relative min-h-[640px] sm:min-h-[760px] lg:min-h-[860px] flex items-center overflow-hidden">
        {/* Dark background image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/partnerwithboldenergy.png.jpg?v=5"
            alt=""
            aria-hidden="true"
            className="is-bg"
            loading="eager"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          <div className="absolute top-[15%] right-[8%] w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] bg-[#A1B502]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[10%] left-[5%] w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] bg-[#385887]/15 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="relative z-10 container-bold pt-40 sm:pt-44 md:pt-52 lg:pt-60 pb-10 sm:pb-12 lg:pb-16 w-full">
          {/* Heading */}
          <h1
            className="font-extrabold uppercase leading-[0.98] mb-5 sm:mb-6 lg:mb-8"
            style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '-0.01em' }}
          >
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] text-white">
              Your Last Installer
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] text-[#A1B502] mt-1">
              Let You Down.
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] text-[#A1B502] mt-1">
              We Won't.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-base lg:text-lg text-white/85 max-w-[600px] leading-relaxed mb-6 sm:mb-8 lg:mb-10"
            style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.01em' }}
          >
            Debt-free. 100% privately funded. Operationally elite. Built from the ground up to make your sales org win.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
            <button
              onClick={openDealerForm}
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-white font-bold text-sm sm:text-base hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
              style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.03em' }}
            >
              Schedule a Call
              <FaArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                document.getElementById('key-benefits')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base text-white border-2 border-white/70 bg-transparent hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2.5"
              style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}
            >
              Learn More
              <FaArrowDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/20 mb-5 sm:mb-6 lg:mb-8" />

          {/* Four stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 max-w-[700px]">
            {[
              { value: '$0', label: 'Total Debt' },
              { value: '30', label: 'Active States' },
              { value: '4.7', label: 'Google Rating' },
              { value: 'A+', label: 'BBB Rating' },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold text-white leading-none mb-1.5 sm:mb-2"
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
      </section>

      {/* Why Bold Energy Section */}
      <section id="key-benefits" className="bg-white py-12 sm:py-16 lg:py-[100px]">
        <div className="container-bold">
          {/* Top pill */}
          <p
            className="text-[#A1B502] text-xs sm:text-sm font-bold uppercase mb-3"
            style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.18em' }}
          >
            Why Bold Energy
          </p>
          {/* Heading */}
          <h2
            className="font-extrabold uppercase leading-[1.05] mb-8 sm:mb-10 lg:mb-12"
            style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '-0.01em' }}
          >
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] text-[#1A2A4A]">
              Built for Speed, Transparency,
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] text-[#A1B502]">
              and Real Results.
            </span>
          </h2>

          {/* Five cards: 1 col mobile, 2 col tablet, 3 col small laptop, 5 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-4 lg:gap-5 mb-8 sm:mb-10 lg:mb-12">
            {[
              {
                idx: '01',
                bg: 'bg-[#EEF3DE]',
                titleColor: 'text-[#A1B502]',
                textColor: 'text-[#1A2A4A]/80',
                numberColor: 'text-[#A1B502]/25',
                icon: <FaMoneyBillWave className="w-8 h-8 text-[#A1B502]" />,
                title: 'Upfront Payment',
                body: 'You get paid at install. Prioritize your cash flow with an industry-leading pay structure — no waiting, no chasing.',
              },
              {
                idx: '02',
                bg: 'bg-[#F0F0F4]',
                titleColor: 'text-[#1A2A4A]',
                textColor: 'text-[#1A2A4A]/70',
                numberColor: 'text-[#1A2A4A]/15',
                icon: <FaBalanceScale className="w-8 h-8 text-[#1A2A4A]" />,
                title: 'Minimal Adders',
                body: 'Keep Margins High.',
              },
              {
                idx: '03',
                bg: 'bg-[#1A2A4A]',
                titleColor: 'text-white',
                textColor: 'text-white/80',
                numberColor: 'text-white/15',
                icon: <FaBolt className="w-8 h-8 text-[#A1B502]" />,
                title: 'Speed to Install',
                body: "1 to 2 month cycles vs. the industry's 4 to 6 months. Momentum kept high with the most competitive pricing.",
              },
              {
                idx: '04',
                bg: 'bg-[#EEF3DE]',
                titleColor: 'text-[#A1B502]',
                textColor: 'text-[#1A2A4A]/80',
                numberColor: 'text-[#A1B502]/25',
                icon: <FaCogs className="w-8 h-8 text-[#A1B502]" />,
                title: 'Smart Operations & CRM',
                body: null,
                list: ['Live Project Tracking', 'Commission Visibility', 'Stage-by-Stage Updates', 'Instant Alerts'],
                lead: <>We have <strong>EVERYTHING!</strong></>,
              },
              {
                idx: '05',
                bg: 'bg-[#1A2A4A]',
                titleColor: 'text-white',
                textColor: 'text-white/80',
                numberColor: 'text-white/15',
                icon: <FaHeadset className="w-8 h-8 text-[#A1B502]" />,
                title: 'Reliable Support',
                body: 'Never Stand Alone. Real Human Support, 6 Days a Week — call or text, both customer and rep lines live Monday through Saturday. No bots. No black holes. Just answers.',
              },
            ].map((card) => (
              <div
                key={card.idx}
                className={`relative ${card.bg} rounded-2xl p-5 sm:p-6 lg:p-7 overflow-hidden min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] xl:min-h-[400px] flex flex-col`}
              >
                {/* Big background number */}
                <div
                  className={`absolute top-4 right-5 text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-none ${card.numberColor}`}
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  {card.idx}
                </div>

                {/* Icon */}
                <div className="mb-5 sm:mb-6 lg:mb-8 relative z-10">
                  {card.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-base sm:text-lg lg:text-xl font-bold mb-2 lg:mb-3 ${card.titleColor} relative z-10`}
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  {card.title}
                </h3>

                {/* Lead line (if any) */}
                {card.lead && (
                  <p
                    className={`text-sm lg:text-[15px] mb-2 ${card.textColor} relative z-10`}
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {card.lead}
                  </p>
                )}

                {/* Body or list */}
                {card.body && (
                  <p
                    className={`text-sm lg:text-[15px] leading-relaxed ${card.textColor} relative z-10`}
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {card.body}
                  </p>
                )}
                {card.list && (
                  <ul className="flex flex-col gap-1.5 relative z-10">
                    {card.list.map((item) => (
                      <li
                        key={item}
                        className={`flex items-center gap-2 text-sm lg:text-[15px] ${card.textColor}`}
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A1B502] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Scroll to explore */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#1A2A4A]/30" />
            <span
              className="text-xs text-[#1A2A4A]/60 font-medium"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Scroll to explore
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={openDealerForm}
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-white font-bold text-sm sm:text-base hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
              style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.03em' }}
            >
              Become a Dealer Now
              <FaArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                document.getElementById('two-products')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base text-[#1A2A4A] bg-white border-2 border-[#1A2A4A]/20 hover:border-[#1A2A4A]/50 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2.5 text-center"
              style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}
            >
              <span>See How Bold Doubles Your Commissions</span>
              <FaArrowDown className="w-3.5 h-3.5 flex-shrink-0" />
            </button>
          </div>
        </div>
      </section>

      {/* Two Products One Partner Section */}
      <section id="two-products" className="bg-white py-12 sm:py-16 lg:py-[100px]">
        <div className="container-bold">
          <p
            className="text-[#A1B502] text-xs sm:text-sm font-bold uppercase mb-3"
            style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.18em' }}
          >
            Two Products. One Partner.
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-extrabold text-[#1A2A4A] mb-8 sm:mb-10 lg:mb-12 leading-[1.1]"
            style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '-0.01em' }}
          >
            Solar + Roofing = More Commission Per Deal
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-start">
            {/* Left: Product cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
              {/* Solar */}
              <div className="bg-[#F6F6F9] rounded-2xl p-5 lg:p-6">
                <div className="mb-4">
                  <FaSun className="w-7 h-7 text-[#F5A623]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A2A4A] mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>Solar</h3>
                <p className="text-sm text-[#1A2A4A]/75 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Full residential and commercial solar installations across 30 states with industry-best warranties.
                </p>
              </div>

              {/* Roofing */}
              <div className="bg-[#F6F6F9] rounded-2xl p-5 lg:p-6">
                <div className="mb-4">
                  <FaHome className="w-7 h-7 text-[#C0392B]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A2A4A] mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>Roofing</h3>
                <p className="text-sm text-[#1A2A4A]/75 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Full roof replacements and repairs — a natural upsell conversation for any solar appointment.
                </p>
              </div>

              {/* HVAC - Coming Soon */}
              <div className="bg-[#F6F6F9] rounded-2xl p-5 lg:p-6 border-2 border-dashed border-[#1A2A4A]/20">
                <div className="mb-4">
                  <FaSnowflake className="w-7 h-7 text-[#3D9DE0]" />
                </div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="text-lg font-bold text-[#1A2A4A]" style={{ fontFamily: 'Quicksand, sans-serif' }}>HVAC</h3>
                  <span
                    className="text-[10px] font-bold uppercase bg-[#1A2A4A]/10 text-[#1A2A4A] px-2 py-0.5 rounded"
                    style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.1em' }}
                  >
                    Coming Soon
                  </span>
                </div>
                <p className="text-sm text-[#1A2A4A]/75 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  A third revenue stream through the same trusted partner. More ways to earn, one conversation.
                </p>
              </div>
            </div>

            {/* Right: Description + callout + CTAs */}
            <div>
              <p
                className="text-base lg:text-[17px] text-[#1A2A4A]/80 leading-relaxed mb-5"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                About 1 in 3 solar installations on older homes needs a new roof first — and that's revenue you leave on the table if you're not capturing it. Your team earns commissions on both products through a single trusted partner.
              </p>

              <div className="bg-[#EEF1FB] rounded-xl p-4 sm:p-5 flex items-center gap-3 mb-6">
                <div className="w-7 h-7 rounded-md bg-[#1A2A4A] flex items-center justify-center flex-shrink-0">
                  <FaCheck className="w-3.5 h-3.5 text-white" />
                </div>
                <span
                  className="text-sm sm:text-[15px] font-semibold text-[#1A2A4A]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  One conversation. Two commissions. Zero complexity.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={openDealerForm}
                  className="px-6 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
                  style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.03em' }}
                >
                  Schedule a Call
                  <FaArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => navigate('/states-we-cover')}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-[#1A2A4A] bg-white border-2 border-[#1A2A4A]/20 hover:border-[#1A2A4A]/50 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2.5"
                  style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}
                >
                  Where is Bold?
                  <FaArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Video Section */}
      <section className="w-full relative py-12 sm:py-16 lg:py-[100px] overflow-hidden">
        <img
          src="/gobold.png.jpg"
          alt=""
          aria-hidden="true"
          className="is-bg absolute inset-0"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#385887]/90" />

        <div className="relative z-[2] container-bold">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[60px]">
            <div className="w-full lg:w-[55%]">
              <div
                className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-video bg-black/20"
                onClick={() => setShowVideo(true)}
              >
                <img
                  src="/possibilities.png.png"
                  alt="Leadership Welcome Video"
                  className="is-bg group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <FaPlay className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#385887] ml-1.5" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 rounded-lg px-3 py-1.5">
                  <span className="text-white text-xs font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>0:45</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[45%]">
              <p className="text-xs sm:text-sm font-bold mb-3" style={{ fontFamily: 'DM Sans, sans-serif', color: '#A1B502', letterSpacing: '0.15em' }}>
                FROM OUR LEADERSHIP
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight font-bold text-white mb-4 sm:mb-5" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.02em' }}>
                A Message From Our CEO
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed mb-5 sm:mb-6" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em' }}>
                Hear directly from our leadership about why Bold Energy is built different — and why dealers across 30 states trust us with their business.
              </p>
              <ul className="flex flex-col gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                {['Our vision for dealer partnerships', 'How we ensure your success', 'The Bold Energy difference'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#A1B502] flex-shrink-0" />
                    <span className="text-sm sm:text-base text-white/90" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowVideo(true)}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-white hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 text-sm sm:text-base border-2 border-white bg-transparent"
                style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em' }}
              >
                <FaPlay className="w-4 h-4" />
                WATCH THE VIDEO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dealer Process Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-[100px]">
        <div className="container-bold">
        <div className="text-center mb-10 sm:mb-12 lg:mb-[60px]">
          <p className="text-base sm:text-lg font-bold mb-2" style={{ fontFamily: 'DM Sans, sans-serif', color: '#385887', letterSpacing: '0.03em' }}>
            Simple & Streamlined
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] font-bold text-black mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            How It Works
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-[600px] mx-auto" style={{ fontFamily: 'DM Sans, sans-serif', lineHeight: '1.6', letterSpacing: '0.03em' }}>
            From deal submission to system activation — we handle the heavy lifting so you can focus on selling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {processSteps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="text-4xl sm:text-[48px] lg:text-[52px] font-bold leading-none mb-2 text-[#A1B502]/30" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                {step.num}
              </div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 bg-[#FDFFEF] border-2 border-[#A1B502]">
                {step.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black mb-2" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
                {step.desc}
              </p>
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-[75px] -right-3 text-[#A1B502]/40 text-2xl">
                  ›
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 sm:mt-12">
          <button
            onClick={openDealerForm}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg text-white hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
            style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#385887', letterSpacing: '0.05em' }}
          >
            <FaHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
            START YOUR APPLICATION
          </button>
        </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full py-12 sm:py-16 lg:py-[80px] bg-[#A1B502]">
        <div className="container-bold text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            Ready to Grow Your Solar Business?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-[600px] mx-auto mb-6 sm:mb-8" style={{ fontFamily: 'DM Sans, sans-serif', lineHeight: '1.6', letterSpacing: '0.03em' }}>
            Join our dealer network and get access to fast payments, top-tier hardware, and a team that has your back every step of the way.
          </p>
          <button
            onClick={openDealerForm}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#FFFFFF', color: '#A1B502', letterSpacing: '0.05em' }}
          >
            <FaHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
            PARTNER WITH BOLD
          </button>
        </div>
      </section>

      <Testimonials />

      {/* Video Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${showVideo ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        aria-hidden={!showVideo}
        role="dialog"
        aria-modal="true"
        aria-label="Leadership Welcome Video"
      >
        <div className="absolute inset-0 bg-black/80" onClick={() => setShowVideo(false)} />
        <div className={`relative w-full max-w-[900px] transition-transform duration-300 ${showVideo ? 'scale-100' : 'scale-95'}`}>
          <button
            onClick={() => setShowVideo(false)}
            className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
            aria-label="Close video"
          >
            <FaTimes className="w-5 h-5 text-white" />
          </button>
          <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
            {showVideo && (
              <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]">
                <div className="text-center">
                  <FaPlay className="w-16 h-16 text-white/30 mx-auto mb-4" />
                  <p className="text-white/50 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Leadership welcome video placeholder
                  </p>
                  <p className="text-white/30 text-xs mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Replace with video embed URL
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithBoldEnergy;
