import { FaBolt, FaShieldAlt, FaClock, FaDollarSign, FaHeadset, FaChartLine } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaBolt className="w-7 h-7 text-white" />,
    title: 'Ethical & Transparent',
    desc: 'No hidden fees, no bait-and-switch. You and your family see honest numbers from day one.',
  },
  {
    icon: <FaShieldAlt className="w-7 h-7 text-white" />,
    title: 'Tier-1 Hardware',
    desc: 'Triple-black panels + SolarEdge inverters backed by 25-year warranties for lasting performance.',
  },
  {
    icon: <FaClock className="w-7 h-7 text-white" />,
    title: 'Fast Installs',
    desc: 'Permits pulled upfront. Most installs completed in 1-2 days once approvals clear.',
  },
  {
    icon: <FaDollarSign className="w-7 h-7 text-white" />,
    title: '$0 Down Options',
    desc: 'Flexible financing with loan, lease, and $0-down options to fit every budget.',
  },
  {
    icon: <FaHeadset className="w-7 h-7 text-white" />,
    title: '24/7 Monitoring',
    desc: 'Our support team tracks your system performance around the clock so you never miss a watt.',
  },
  {
    icon: <FaChartLine className="w-7 h-7 text-white" />,
    title: 'Proven ROI',
    desc: 'Solar adds 4-7% to home resale value and locks in lower energy costs for decades.',
  },
];

const WhyBoldEnergy = () => {
  return (
    <section className="w-full py-16 lg:py-[100px] px-4 sm:px-8 lg:px-16 xl:px-[200px] bg-white">
      <div className="text-center mb-12 lg:mb-[60px]">
        <p className="text-lg font-bold mb-2" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502', letterSpacing: '0.03em' }}>
          Why Choose Us
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-black mb-4" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
          Why Bold Energy
        </h2>
        <p className="text-base lg:text-lg text-gray-700 max-w-[700px] mx-auto" style={{ fontFamily: 'Archivo, sans-serif', lineHeight: '1.6', letterSpacing: '0.03em' }}>
          We don't just install solar — we empower you to take control of your energy, your savings, and your future.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className="bg-[#FAFBF2] rounded-xl p-6 lg:p-8 flex flex-col items-start hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-[#385887] flex items-center justify-center mb-5">
              {reason.icon}
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-black mb-3" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
              {reason.title}
            </h3>
            <p className="text-sm lg:text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
              {reason.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyBoldEnergy;
