import { useState } from 'react';
import CoverageMap from '../components/CoverageMap';
import Testimonials from '../components/Testimonials';
import { useFormModal } from '../context/FormModalContext';
import { FaHandshake, FaMoneyBillWave, FaEye, FaCalendarCheck, FaHeadset, FaFileUpload, FaFileAlt, FaCogs, FaHardHat, FaSatelliteDish, FaPlay, FaTimes } from 'react-icons/fa';

const keyBenefits = [
  {
    icon: <FaMoneyBillWave className="w-8 h-8 text-white" />,
    title: 'Fast Payments',
    points: [
      'Commissions paid within days of install',
      'No waiting 60–90 days for funding',
      'Transparent payout tracking in your portal',
    ],
    color: '#385887',
  },
  {
    icon: <FaEye className="w-8 h-8 text-white" />,
    title: 'Full Transparency',
    points: [
      'No hidden fees or surprise deductions',
      'You and your customer see the same numbers',
      'Real-time deal status updates',
    ],
    color: '#A1B502',
  },
  {
    icon: <FaCalendarCheck className="w-8 h-8 text-white" />,
    title: 'Clear Timelines',
    points: [
      'Permits pulled before install is scheduled',
      'Most installs completed in 1–2 days',
      'PTO tracked and communicated proactively',
    ],
    color: '#385887',
  },
  {
    icon: <FaHeadset className="w-8 h-8 text-white" />,
    title: 'Partner Support',
    points: [
      'Dedicated account manager for every dealer',
      'Sales training & proposal tools included',
      'Marketing assets and co-branded materials',
    ],
    color: '#A1B502',
  },
];

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

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full relative h-[500px] sm:h-[600px] lg:h-[700px]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/partnerwithboldenergy.png.jpg?v=5"
            alt="Partner With Bold Energy"
            className="w-full h-full object-cover"
            loading="eager"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#385887]/40 via-transparent to-transparent" />
          <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-[#A1B502]/8 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[30%] left-[5%] w-[400px] h-[400px] bg-[#385887]/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-[2] px-4">
          <div className="text-center flex flex-col items-center">
            <h1 className="font-bold text-white text-center text-3xl sm:text-5xl lg:text-7xl mb-6" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
              Partner With
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #A1B502 0%, #c8e003 50%, #A1B502 100%)',
                  WebkitBackgroundClip: 'text',
                }}
              >
                Bold Energy
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-[700px] mb-8 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
              Fast payments. Full transparency. Zero BS. Join the dealer network that puts your success first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openDealerForm}
                className="px-8 py-4 rounded-xl font-bold text-lg text-white hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
                style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.05em' }}
              >
                <FaHandshake className="w-5 h-5" />
                BECOME A PARTNER
              </button>
              <button
                onClick={() => setShowVideo(true)}
                className="px-8 py-4 rounded-xl font-bold text-lg text-white hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 border-2 border-white"
                style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em', backgroundColor: 'transparent' }}
              >
                <FaPlay className="w-4 h-4" />
                WATCH VIDEO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-white py-16 lg:py-[100px] px-4 sm:px-8 lg:px-16 xl:px-[200px]">
        <div className="text-center mb-12 lg:mb-[60px]">
          <p className="text-lg font-bold mb-2" style={{ fontFamily: 'DM Sans, sans-serif', color: '#A1B502', letterSpacing: '0.03em' }}>
            Why Dealers Choose Bold
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-black mb-4" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            Built for Your Success
          </h2>
          <p className="text-base lg:text-lg text-gray-700 max-w-[650px] mx-auto" style={{ fontFamily: 'DM Sans, sans-serif', lineHeight: '1.6', letterSpacing: '0.03em' }}>
            Everything you need to close more deals, earn faster, and grow your solar business with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {keyBenefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-[#FAFBF2] rounded-2xl p-7 lg:p-8 flex flex-col hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#A1B502]/20"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: benefit.color }}
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-4" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
                {benefit.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {benefit.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: benefit.color }} />
                    <span className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={openDealerForm}
            className="px-8 py-4 rounded-xl font-bold text-lg text-white hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
            style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.05em' }}
          >
            <FaHandshake className="w-5 h-5" />
            BECOME A PARTNER
          </button>
        </div>
      </section>

      {/* Leadership Video Section */}
      <section className="w-full relative py-16 lg:py-[100px] overflow-hidden">
        <img
          src="/gobold.png.jpg"
          alt="Leadership background"
          className="w-full h-full object-cover absolute inset-0"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ backgroundColor: '#385887', opacity: 0.9 }} />

        <div className="relative z-[2] px-4 sm:px-8 lg:px-16 xl:px-[200px]">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[80px]">
            <div className="w-full lg:w-[55%]">
              <div
                className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-video bg-black/20"
                onClick={() => setShowVideo(true)}
              >
                <img
                  src="/possibilities.png.png"
                  alt="Leadership Welcome Video"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <FaPlay className="w-8 h-8 sm:w-10 sm:h-10 text-[#385887] ml-1.5" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 rounded-lg px-3 py-1.5">
                  <span className="text-white text-xs font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>0:45</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[45%]">
              <p className="text-sm sm:text-base font-bold mb-3" style={{ fontFamily: 'DM Sans, sans-serif', color: '#A1B502', letterSpacing: '0.05em' }}>
                FROM OUR LEADERSHIP
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[42px] lg:leading-tight font-bold text-white mb-5" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
                A Message From Our CEO
              </h2>
              <p className="text-base lg:text-lg text-white/80 leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
                Hear directly from our leadership about why Bold Energy is built different — and why dealers across 25+ states trust us with their business.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {['Our vision for dealer partnerships', 'How we ensure your success', 'The Bold Energy difference'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#A1B502] flex-shrink-0" />
                    <span className="text-sm lg:text-base text-white/90" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowVideo(true)}
                className="px-6 py-3 rounded-xl font-bold text-white hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base border-2 border-white"
                style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em', backgroundColor: 'transparent' }}
              >
                <FaPlay className="w-4 h-4" />
                WATCH THE VIDEO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dealer Process Section */}
      <section className="bg-white py-16 lg:py-[100px] px-4 sm:px-8 lg:px-16 xl:px-[200px]">
        <div className="text-center mb-12 lg:mb-[60px]">
          <p className="text-lg font-bold mb-2" style={{ fontFamily: 'DM Sans, sans-serif', color: '#385887', letterSpacing: '0.03em' }}>
            Simple & Streamlined
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-black mb-4" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            How It Works
          </h2>
          <p className="text-base lg:text-lg text-gray-700 max-w-[600px] mx-auto" style={{ fontFamily: 'DM Sans, sans-serif', lineHeight: '1.6', letterSpacing: '0.03em' }}>
            From deal submission to system activation — we handle the heavy lifting so you can focus on selling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {processSteps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="text-[48px] lg:text-[56px] font-bold leading-none mb-2" style={{ fontFamily: 'Quicksand, sans-serif', color: '#A1B502', opacity: 0.3 }}>
                {step.num}
              </div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FDFFEF', border: '2px solid #A1B502' }}>
                {step.icon}
              </div>
              <h3 className="text-base lg:text-lg font-bold text-black mb-2" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
                {step.desc}
              </p>
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-[75px] -right-3 text-[#A1B502]/40 text-2xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  ›
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={openDealerForm}
            className="px-8 py-4 rounded-xl font-bold text-lg text-white hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
            style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#385887', letterSpacing: '0.05em' }}
          >
            <FaHandshake className="w-5 h-5" />
            START YOUR APPLICATION
          </button>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full py-16 lg:py-[80px] px-4 sm:px-8 lg:px-16 xl:px-[200px]" style={{ backgroundColor: '#A1B502' }}>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-white mb-4" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            Ready to Grow Your Solar Business?
          </h2>
          <p className="text-base lg:text-lg text-white/90 max-w-[600px] mx-auto mb-8" style={{ fontFamily: 'DM Sans, sans-serif', lineHeight: '1.6', letterSpacing: '0.03em' }}>
            Join our dealer network and get access to fast payments, top-tier hardware, and a team that has your back every step of the way.
          </p>
          <button
            onClick={openDealerForm}
            className="px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#FFFFFF', color: '#A1B502', letterSpacing: '0.05em' }}
          >
            <FaHandshake className="w-5 h-5" />
            PARTNER WITH BOLD
          </button>
        </div>
      </section>

      <CoverageMap />
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
