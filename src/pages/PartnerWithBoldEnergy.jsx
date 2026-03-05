import { useState } from 'react';
import Testimonials from '../components/Testimonials';
import { FaHandshake, FaCheckCircle, FaClipboardCheck, FaStar, FaDollarSign, FaRocket, FaDesktop, FaChevronDown, FaFileUpload, FaFileAlt, FaCogs, FaHardHat, FaSatelliteDish } from 'react-icons/fa';

const PartnerWithBoldEnergy = () => {
  const [openAccordion, setOpenAccordion] = useState('proposal');

  const toggleAccordion = (item) => {
    setOpenAccordion(openAccordion === item ? null : item);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full relative" style={{ height: '550px' }}>
        <img
          src="/partnerwithboldenergy.png.jpg?v=5"
          alt="Partner With Bold Energy"
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '550px' }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#000000',
            opacity: '0.5'
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
          <h1 className="font-bold text-white text-center" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '75px', letterSpacing: '0.03em' }}>
            Partner With Bold Energy
          </h1>
        </div>
      </section>

      {/* Powering Possibilities Section */}
      <section style={{ padding: '100px 200px', backgroundColor: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>
          {/* Left Content */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#000000', marginBottom: '30px', letterSpacing: '0.03em' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Powering Possibilities,</span><br/>Together
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#000000', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              At Bold Energy, we don't just talk about impact — we build it. By teaming up with like-minded dealers, financiers, contractors, and referral partners, we amplify clean-energy adoption, accelerate project timelines, and raise the bar for ethics and transparency across the solar industry.
            </p>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#000000', lineHeight: '1.8', marginBottom: '30px', letterSpacing: '0.03em' }}>
              If you share our commitment to fair pricing, rock-solid installs, and zero-BS service, let's put our values to work side by side.
            </p>
            <button style={{
              backgroundColor: '#A1B502',
              color: '#FFFFFF',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '50px',
              fontFamily: 'Archivo, sans-serif',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              letterSpacing: '0.2em'
            }}>
              <FaHandshake className="w-5 h-5" />
              BECOME A PARTNER
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/possibilities.png.png"
              alt="Possibilities"
              style={{ width: '863px', height: '664px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section style={{ height: '920px', padding: '100px 200px', backgroundColor: '#FAFBF2', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
        {/* First Row - Heading + 2 Cards */}
        <div style={{ display: 'flex', alignItems: 'center', width: '1350px' }}>
          {/* Left Heading */}
          <div style={{ flex: '0 0 400px' }}>
            <h2 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#000000', lineHeight: '1.2', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Why Partner With Bold Energy?
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '20px', color: '#A1B502', fontWeight: 'bold', letterSpacing: '0.03em' }}>
              Your Goal → Our Solution
            </p>
          </div>

          {/* 2 Cards */}
          <div style={{ display: 'flex', gap: '30px', marginLeft: 'auto' }}>
            <div style={{ width: '430px', height: '285px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', width: '100%' }}>
                <div className="w-12 h-12 rounded-full bg-[#A1B502]/10 flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-[#A1B502]" />
                </div>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#000000', letterSpacing: '0.03em' }}>
                  Close More Deals
                </h3>
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', textAlign: 'left', width: '100%', letterSpacing: '0.03em' }}>
                We provide ready-to-use proposal templates with customer-facing savings models, financing options, and ROI calculators that shorten the sales cycle and build confidence
              </p>
            </div>

            <div style={{ width: '430px', height: '285px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', width: '100%' }}>
                <div className="w-12 h-12 rounded-full bg-[#A1B502]/10 flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-[#A1B502]" />
                </div>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#000000', letterSpacing: '0.03em' }}>
                  Boost Revenue
                </h3>
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', textAlign: 'left', width: '100%', letterSpacing: '0.03em' }}>
                Our transparent pricing, full-permit installs, and industry-leading reviews mean happier customers and more referrals in your pipeline.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - 3 Cards Centered */}
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
            <div style={{ width: '430px', height: '285px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', width: '100%' }}>
                <div className="w-12 h-12 rounded-full bg-[#A1B502]/10 flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-[#A1B502]" />
                </div>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#000000', letterSpacing: '0.03em' }}>
                  Streamline Operations
                </h3>
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', textAlign: 'left', width: '100%', letterSpacing: '0.03em' }}>
                Our dealer portal gives you real-time tracking, digital document uploads, and direct access to our ops team. Spend more time selling, less time chasing updates
              </p>
            </div>

            <div style={{ width: '430px', height: '285px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', width: '100%' }}>
                <div className="w-12 h-12 rounded-full bg-[#A1B502]/10 flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-[#A1B502]" />
                </div>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#000000', letterSpacing: '0.03em' }}>
                  Stand on Values
                </h3>
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', textAlign: 'left', width: '100%', letterSpacing: '0.03em' }}>
                Ethical pricing and transparent processes ensure your reputation grows with every deal
              </p>
            </div>

            <div style={{ width: '430px', height: '285px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', width: '100%' }}>
                <div className="w-12 h-12 rounded-full bg-[#A1B502]/10 flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-[#A1B502]" />
                </div>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#000000', letterSpacing: '0.03em' }}>
                  Deliver Faster Installs
                </h3>
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', textAlign: 'left', width: '100%', letterSpacing: '0.03em' }}>
                Permits secured upfront + local professional crews = installs in as little as 1-2 days once approvals clear.
              </p>
            </div>
          </div>

        {/* Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <button style={{
            backgroundColor: '#A1B502',
            color: '#FFFFFF',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '50px',
            fontFamily: 'Archivo, sans-serif',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            letterSpacing: '0.2em'
          }}>
            <FaHandshake className="w-5 h-5" />
            BECOME A PARTNER
          </button>
        </div>
      </section>

      {/* Dealer-Specific Sales Support Section */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', paddingLeft: '200px', paddingRight: '200px', backgroundColor: '#FFFFFF', height: '950px' }}>
        <h2 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#000000', textAlign: 'center', marginBottom: '60px', letterSpacing: '0.03em' }}>
          Dealer-Specific Sales Support
        </h2>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '80px' }}>
          {/* Left Image */}
          <img
            src="/support.png.jpg?v=3"
            alt="Sales Support"
            style={{ width: '575px', height: '670px', borderRadius: '30px', objectFit: 'cover' }}
          />

          {/* Right Content - Accordion Items */}
          <div style={{ flex: 1, height: '670px', overflow: 'hidden' }}>
            {[
              { key: 'financing', title: 'Financing That Works', items: ['Multiple loan and lease options', '$0-down financing available', 'Quick credit approvals', 'Competitive interest rates'] },
              { key: 'proposal', title: 'Proposal Tools', items: ['Customer energy bill comparisons', 'Predictable fixed payments vs. rising utility costs', 'Net metering benefits explained in plain English', 'Long-term financial and environmental savings charts'] },
              { key: 'training', title: 'Sales Training', items: ['Product knowledge sessions', 'Objection handling techniques', 'Sales process optimization', 'Ongoing coaching and support'] },
              { key: 'marketing', title: 'Marketing Assets', items: ['Branded collateral and brochures', 'Digital marketing materials', 'Social media content', 'Co-branded campaigns'] },
              { key: 'support', title: 'Dedicated Support', items: ['Dedicated account manager', 'Priority customer service', 'Technical support team', 'Installation coordination'] },
            ].map((accordion, idx) => (
              <div key={accordion.key} style={{ borderBottom: idx < 4 ? '1px solid #E5E5E5' : 'none', padding: '30px 0' }} onClick={() => toggleAccordion(accordion.key)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', fontWeight: 'bold', color: openAccordion === accordion.key ? '#A1B502' : '#000000' }}>
                    {accordion.title}
                  </h3>
                  <FaChevronDown
                    className="w-5 h-5 text-[#222222] transition-transform duration-300"
                    style={{ marginRight: '10px', transform: openAccordion === accordion.key ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </div>
                {openAccordion === accordion.key && (
                  <ul style={{ marginTop: '20px', paddingLeft: '20px', fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '2', letterSpacing: '0.03em' }}>
                    {accordion.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments to Dealers Section */}
      <section className="w-full relative" style={{ height: '1040px', marginTop: '50px' }}>
        <img
          src="/gobold.png.jpg"
          alt="Our Commitments to Dealers"
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '1040px' }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: '#000000', opacity: '0.5' }} />

        <div className="absolute inset-0" style={{ zIndex: 2, paddingTop: '100px', paddingLeft: '200px', paddingRight: '200px' }}>
          <h2 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center', marginBottom: '40px', letterSpacing: '0.03em' }}>
            Our Commitments to Dealers
          </h2>

          {/* 4 Cards */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
            {[
              { icon: <FaClipboardCheck className="w-7 h-7 text-[#A1B502]" />, title: 'Permits Pulled', desc: 'We secure approvals before any work begins.' },
              { icon: <FaStar className="w-7 h-7 text-[#A1B502]" />, title: 'Top-Tier Hardware', desc: 'Tier-1 triple-black panels + SolarEdge Home Hub inverters (25-year warranty).' },
              { icon: <FaDollarSign className="w-7 h-7 text-[#A1B502]" />, title: 'Transparent Pricing', desc: 'No hidden fees — you and your customer see the same honest numbers.' },
              { icon: <FaRocket className="w-7 h-7 text-[#A1B502]" />, title: 'Fast Installs', desc: 'Most installs completed in 1-2 days with cleared permits.' },
            ].map((card, i) => (
              <div key={i} style={{ position: 'relative', marginTop: '60px' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#FFFFFF', position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#EBEEF3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {card.icon}
                  </div>
                </div>
                <div style={{ width: '315px', height: '245px', backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '30px', paddingTop: '80px', textAlign: 'center' }}>
                  <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '22px', fontWeight: 'bold', color: '#000000', marginBottom: '15px', letterSpacing: '0.03em' }}>{card.title}</h3>
                  <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', letterSpacing: '0.03em' }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 Cards */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
            {[
              { icon: <FaDesktop className="w-7 h-7 text-[#A1B502]" />, title: 'Always-On Monitoring', desc: 'Our support team tracks system performance 24/7.' },
              { icon: <FaDollarSign className="w-7 h-7 text-[#A1B502]" />, title: 'Cash Flow-Friendly', desc: 'Faster approvals and quicker installs = faster commissions for you.' },
            ].map((card, i) => (
              <div key={i} style={{ position: 'relative', marginTop: '60px' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#FFFFFF', position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#EBEEF3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {card.icon}
                  </div>
                </div>
                <div style={{ width: '315px', height: '245px', backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '30px', paddingTop: '80px', textAlign: 'center' }}>
                  <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '22px', fontWeight: 'bold', color: '#000000', marginBottom: '15px', letterSpacing: '0.03em' }}>{card.title}</h3>
                  <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', letterSpacing: '0.03em' }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
            <button style={{
              backgroundColor: '#A1B502',
              color: '#FFFFFF',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '50px',
              fontFamily: 'Archivo, sans-serif',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              letterSpacing: '0.2em'
            }}>
              <FaHandshake className="w-5 h-5" />
              BECOME A PARTNER
            </button>
          </div>
        </div>
      </section>

      {/* How the Dealer Process Works Section */}
      <section style={{ padding: '100px 200px', backgroundColor: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '80px' }}>
          {/* Left Content */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#000000', marginBottom: '50px', letterSpacing: '0.03em' }}>
              How the Dealer<br />Process Works
            </h2>

            {/* Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {[
                { num: '1', icon: <FaFileUpload className="w-6 h-6 text-[#A1B502]" />, title: 'Submit Deal', desc: 'Upload contracts and docs in the portal' },
                { num: '2', icon: <FaFileAlt className="w-6 h-6 text-[#A1B502]" />, title: 'Proposal Creation', desc: 'We generate a customer-ready savings and financing proposal.' },
                { num: '3', icon: <FaCogs className="w-6 h-6 text-[#A1B502]" />, title: 'Engineering & Permitting', desc: 'Bold handles site survey, system design, and all utility paperwork.' },
                { num: '4', icon: <FaHardHat className="w-6 h-6 text-[#A1B502]" />, title: 'Installation', desc: 'Professional local crews complete installs in 1-2 days.' },
                { num: '5', icon: <FaSatelliteDish className="w-6 h-6 text-[#A1B502]" />, title: 'PTO & Monitoring', desc: 'Utilities grant "Permission to Operate," and systems go live with 24/7 tracking.' },
              ].map((step, i, arr) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-35px', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Archivo, sans-serif', fontSize: '80px', fontWeight: 'bold', color: '#000000', opacity: '0.05', zIndex: 0 }}>{step.num}</div>
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#FDFFEF', border: '2px solid #A1B502', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, flexShrink: 0 }}>
                    {step.icon}
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ borderLeft: '2px dotted #A1B502', position: 'absolute', left: '34px', top: '75px', height: '40px' }} />
                  )}
                  <div>
                    <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '18px', fontWeight: 'bold', color: '#A1B502', marginBottom: '5px', letterSpacing: '0.03em' }}>{step.title}</h3>
                    <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#000000', letterSpacing: '0.03em' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/dealer-process.jpg?v=4"
              alt="Dealer Process"
              style={{ width: '660px', height: '760px', borderRadius: '30px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default PartnerWithBoldEnergy;
