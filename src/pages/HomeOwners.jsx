import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import { useFormModal } from '../context/FormModalContext';
import { sendForm } from '../lib/sendForm';
import { FaHandHoldingUsd, FaDollarSign, FaShoppingCart, FaFileAlt, FaStar, FaBolt, FaPhoneAlt, FaLock, FaArrowRight, FaMapMarkedAlt } from 'react-icons/fa';

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

const Field = ({ label, children }) => (
  <label className="block">
    <span
      className="block text-[11px] font-bold text-gray-700 mb-1.5"
      style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.12em' }}
    >
      {label}
    </span>
    {children}
  </label>
);

const HomeOwners = () => {
  const { openHomeownerForm } = useFormModal();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '', phone: '', email: '', address: '',
    utilityBill: '', ownRent: '', contactMethod: '',
  });
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSendError('');
    try {
      await sendForm('homeowner_hero', form);
      setSubmitted(true);
      setForm({ fullName: '', phone: '', email: '', address: '', utilityBill: '', ownRent: '', contactMethod: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setSendError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full relative min-h-[700px] sm:min-h-[850px] lg:min-h-[950px] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/hero.jpeg"
            alt="Homeowners"
            className="w-full h-full object-cover"
            loading="eager"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>

        {/* Two-column content (top padding clears the absolute header) */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 pt-36 sm:pt-40 lg:pt-56 pb-12 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 items-center">
            {/* Left: Headline + CTAs */}
            <div className="text-white">
              {/* Heading */}
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] font-bold leading-[1.1] mb-6"
                style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.01em' }}
              >
                Your Utility Company Is <span className="text-[#A1B502]">Overcharging You.</span> It's Time to Go <span className="text-[#A1B502]">Bold.</span>
              </h1>

              {/* Subtitle */}
              <p
                className="text-base sm:text-lg text-white/85 mb-6 max-w-xl leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.01em' }}
              >
                Thousands of homeowners have already locked in lower energy costs with Bold Energy. Find out exactly how much you can save.
              </p>

              {/* Rating */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-[#A1B502]" />
                  ))}
                </div>
                <span className="text-[#A1B502] font-bold text-sm sm:text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  4.9/5 Stars
                </span>
                <span className="text-white/70 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  from 500+ Verified Homeowners
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <button
                  onClick={openHomeownerForm}
                  className="px-6 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
                  style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.03em' }}
                >
                  <FaBolt className="w-4 h-4" />
                  Get My Free Savings Estimate
                </button>
                <a
                  href="tel:+1"
                  className="px-6 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base border-2 border-white/70 hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2.5"
                  style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}
                >
                  <FaPhoneAlt className="w-4 h-4" />
                  Call Now and Talk to an Expert
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-white/85 text-xs sm:text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#A1B502]">★★★★★</span> 500+ Reviews
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#A1B502]">✓</span> No Hidden Fees
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#A1B502]">✓</span> Free Consultation
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#A1B502]">✓</span> Fast Timelines
                </span>
              </div>
            </div>

            {/* Right: Lead Form */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl">
              <h2
                className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#1a1a1a] mb-1"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                See How Much You'll Save
              </h2>
              <p
                className="text-sm text-gray-600 mb-5 sm:mb-6"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Join 500+ homeowners already saving with Bold Energy.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <Field label="FULL NAME">
                    <input
                      type="text" name="fullName" value={form.fullName} onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#A1B502] focus:bg-white transition"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    />
                  </Field>
                  <Field label="PHONE NUMBER">
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#A1B502] focus:bg-white transition"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    />
                  </Field>
                </div>

                <Field label="EMAIL ADDRESS">
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#A1B502] focus:bg-white transition"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </Field>

                <Field label="PROPERTY ADDRESS">
                  <input
                    type="text" name="address" value={form.address} onChange={handleChange}
                    placeholder="123 Main St, City, State"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#A1B502] focus:bg-white transition"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <Field label="MONTHLY UTILITY BILL">
                    <select
                      name="utilityBill" value={form.utilityBill} onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#A1B502] focus:bg-white transition"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      <option value="">Select range</option>
                      <option value="<100">Under $100</option>
                      <option value="100-200">$100 – $200</option>
                      <option value="200-300">$200 – $300</option>
                      <option value="300+">$300+</option>
                    </select>
                  </Field>
                  <Field label="OWN OR RENT?">
                    <select
                      name="ownRent" value={form.ownRent} onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#A1B502] focus:bg-white transition"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      <option value="">Select one</option>
                      <option value="own">Own</option>
                      <option value="rent">Rent</option>
                    </select>
                  </Field>
                </div>

                <Field label="PREFERRED CONTACT METHOD">
                  <select
                    name="contactMethod" value={form.contactMethod} onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#A1B502] focus:bg-white transition"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    <option value="">Select preference</option>
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                    <option value="text">Text</option>
                  </select>
                </Field>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full mt-2 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.03em' }}
                >
                  {sending ? 'Sending…' : 'Calculate My Savings Now'}
                  {!sending && <FaArrowRight className="w-4 h-4" />}
                </button>

                {submitted && (
                  <p className="text-center text-sm text-[#A1B502] font-semibold mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    ✓ Thanks! We'll be in touch within 24 hours.
                  </p>
                )}
                {sendError && (
                  <p className="text-center text-sm text-red-600 mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {sendError}
                  </p>
                )}

                <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1.5 mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <FaLock className="w-3 h-3" />
                  No spam. No pressure. 100% free estimate.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Options Section */}
      <section className="bg-white py-16 lg:py-[100px] px-4 sm:px-8 lg:px-16 xl:px-[200px]">
        <div className="text-center mb-12 lg:mb-[60px]">
          <p className="text-lg font-bold mb-2" style={{ fontFamily: 'DM Sans, sans-serif', color: '#A1B502', letterSpacing: '0.03em' }}>
            Your Solar Options
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-black mb-4" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            Choose the Right Plan for You
          </h2>
          <p className="text-base lg:text-lg text-gray-700 max-w-[700px] mx-auto" style={{ fontFamily: 'DM Sans, sans-serif', lineHeight: '1.6', letterSpacing: '0.03em' }}>
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
              <p className="text-sm font-bold mb-4" style={{ fontFamily: 'DM Sans, sans-serif', color: '#A1B502', letterSpacing: '0.03em' }}>
                {option.subtitle}
              </p>
              <div className="w-12 h-[3px] rounded-full mb-5" style={{ backgroundColor: option.color }} />
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
                {option.description}
              </p>
              <button
                onClick={openHomeownerForm}
                className="mt-auto px-6 py-3 rounded-xl font-bold text-white hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-sm"
                style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: option.color, letterSpacing: '0.05em' }}
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
          <p className="text-lg font-bold mb-2" style={{ fontFamily: 'DM Sans, sans-serif', color: '#385887', letterSpacing: '0.03em' }}>
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-black mb-4" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            Why Bold Energy
          </h2>
          <p className="text-base lg:text-lg text-gray-700 max-w-[700px] mx-auto" style={{ fontFamily: 'DM Sans, sans-serif', lineHeight: '1.6', letterSpacing: '0.03em' }}>
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
                <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
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
          <p className="text-base lg:text-lg text-white/80 max-w-[600px] mx-auto mb-8" style={{ fontFamily: 'DM Sans, sans-serif', lineHeight: '1.6', letterSpacing: '0.03em' }}>
            Get a personalized solar estimate for your home. Our team will walk you through every option and help you find the perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openHomeownerForm}
              className="px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', color: '#FFFFFF', letterSpacing: '0.05em' }}
            >
              <FaFileAlt className="w-5 h-5" />
              GET A FREE QUOTE
            </button>
            <button
              onClick={() => navigate('/states-we-cover')}
              className="px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 border-2 border-white text-white"
              style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em', backgroundColor: 'transparent' }}
            >
              <FaMapMarkedAlt className="w-5 h-5" />
              VIEW COVERAGE MAP
            </button>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default HomeOwners;
