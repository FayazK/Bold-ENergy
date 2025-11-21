import { useState } from 'react';
import Testimonials from '../components/Testimonials';

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
          src="/partnerwithboldenergy.png.jpg"
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
          <h1 className="font-bold text-white text-center" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '75px' }}>
            Partner With Bold Energy
          </h1>
        </div>
      </section>

      {/* Powering Possibilities Section */}
      <section style={{ padding: '100px 200px', backgroundColor: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>
          {/* Left Content */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: 'Gotham Rounded, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#000000', marginBottom: '30px' }}>
              Powering Possibilities, Together
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#000000', lineHeight: '1.8', marginBottom: '20px' }}>
              At Bold Energy, we don't just talk about impact — we build it. By teaming up with like-minded dealers, financiers, contractors, and referral partners, we amplify clean-energy adoption, accelerate project timelines, and raise the bar for ethics and transparency across the solar industry.
            </p>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#000000', lineHeight: '1.8', marginBottom: '30px' }}>
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
              gap: '12px'
            }}>
              <img src="/dealer.png.png" alt="Dealer" style={{ width: '18px', height: '18px' }} />
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
            <h2 style={{ fontFamily: 'Gotham Rounded, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#000000', lineHeight: '1.2', marginBottom: '20px' }}>
              Why Partner With Bold Energy?
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '20px', color: '#A1B502', fontWeight: 'bold' }}>
              Your Goal → Our Solution
            </p>
          </div>

          {/* 2 Cards - positioned with margin-left auto */}
          <div style={{ display: 'flex', gap: '30px', marginLeft: 'auto' }}>
            {/* Card 1 - Close More Deals */}
            <div style={{ width: '430px', height: '285px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', width: '100%' }}>
                <img src="/whypartner.png.png" alt="Close More Deals" style={{ width: '48px', height: '48px' }} />
                <h3 style={{ fontFamily: 'Gotham Rounded, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>
                  Close More Deals
                </h3>
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', textAlign: 'left', width: '100%' }}>
                We provide ready-to-use proposal templates with customer-facing savings models, financing options, and ROI calculators that shorten the sales cycle and build confidence
              </p>
            </div>

            {/* Card 2 - Boost Revenue */}
            <div style={{ width: '430px', height: '285px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', width: '100%' }}>
                <img src="/whypartner.png.png" alt="Boost Revenue" style={{ width: '48px', height: '48px' }} />
                <h3 style={{ fontFamily: 'Gotham Rounded, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>
                  Boost Revenue
                </h3>
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', textAlign: 'left', width: '100%' }}>
                Our transparent pricing, full-permit installs, and industry-leading reviews mean happier customers and more referrals in your pipeline.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - 3 Cards Centered */}
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
            {/* Card 3 - Streamline Operations */}
            <div style={{ width: '430px', height: '285px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', width: '100%' }}>
                <img src="/whypartner.png.png" alt="Streamline Operations" style={{ width: '48px', height: '48px' }} />
                <h3 style={{ fontFamily: 'Gotham Rounded, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>
                  Streamline Operations
                </h3>
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', textAlign: 'left', width: '100%' }}>
                Our dealer portal gives you real-time tracking, digital document uploads, and direct access to our ops team. Spend more time selling, less time chasing updates
              </p>
            </div>

            {/* Card 4 - Stand on Values */}
            <div style={{ width: '430px', height: '285px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', width: '100%' }}>
                <img src="/whypartner.png.png" alt="Stand on Values" style={{ width: '48px', height: '48px' }} />
                <h3 style={{ fontFamily: 'Gotham Rounded, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>
                  Stand on Values
                </h3>
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', textAlign: 'left', width: '100%' }}>
                Ethical pricing and transparent processes ensure your reputation grows with every deal
              </p>
            </div>

            {/* Card 5 - Deliver Faster Installs */}
            <div style={{ width: '430px', height: '285px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', width: '100%' }}>
                <img src="/whypartner.png.png" alt="Deliver Faster Installs" style={{ width: '48px', height: '48px' }} />
                <h3 style={{ fontFamily: 'Gotham Rounded, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>
                  Deliver Faster Installs
                </h3>
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', textAlign: 'left', width: '100%' }}>
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
            gap: '12px'
          }}>
            <img src="/dealer.png.png" alt="Dealer" style={{ width: '24px', height: '18px' }} />
            BECOME A PARTNER
          </button>
        </div>
      </section>

      {/* Dealer-Specific Sales Support Section */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', paddingLeft: '200px', paddingRight: '200px', backgroundColor: '#FFFFFF', height: '950px' }}>
        {/* Heading */}
        <h2 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#000000', textAlign: 'center', marginBottom: '60px' }}>
          Dealer-Specific Sales Support
        </h2>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '80px' }}>
          {/* Left Image */}
          <img
            src="/support.png.jpg"
            alt="Sales Support"
            style={{ width: '575px', height: '670px', borderRadius: '30px', objectFit: 'cover' }}
          />

          {/* Right Content - Accordion Items */}
          <div style={{ flex: 1, height: '670px', overflow: 'hidden' }}>
            {/* Item 1 - Financing That Works */}
            <div style={{ borderBottom: '1px solid #E5E5E5', padding: '30px 0' }} onClick={() => toggleAccordion('financing')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', fontWeight: 'bold', color: openAccordion === 'financing' ? '#A1B502' : '#000000' }}>
                  Financing That Works
                </h3>
                <img src="/chevron.svg.svg" alt="chevron" style={{ width: '40px', height: '25px', marginRight: '10px', transform: openAccordion === 'financing' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
              </div>
              {openAccordion === 'financing' && (
                <ul style={{ marginTop: '20px', paddingLeft: '20px', fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '2' }}>
                  <li>Multiple loan and lease options</li>
                  <li>$0-down financing available</li>
                  <li>Quick credit approvals</li>
                  <li>Competitive interest rates</li>
                </ul>
              )}
            </div>

            {/* Item 2 - Proposal Tools */}
            <div style={{ borderBottom: '1px solid #E5E5E5', padding: '30px 0' }} onClick={() => toggleAccordion('proposal')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', fontWeight: 'bold', color: openAccordion === 'proposal' ? '#A1B502' : '#000000' }}>
                  Proposal Tools
                </h3>
                <img src="/chevron.svg.svg" alt="chevron" style={{ width: '40px', height: '25px', marginRight: '10px', transform: openAccordion === 'proposal' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
              </div>
              {openAccordion === 'proposal' && (
                <ul style={{ marginTop: '20px', paddingLeft: '20px', fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '2' }}>
                  <li>Customer energy bill comparisons</li>
                  <li>Predictable fixed payments vs. rising utility costs</li>
                  <li>Net metering benefits explained in plain English</li>
                  <li>Long-term financial and environmental savings charts</li>
                </ul>
              )}
            </div>

            {/* Item 3 - Sales Training */}
            <div style={{ borderBottom: '1px solid #E5E5E5', padding: '30px 0' }} onClick={() => toggleAccordion('training')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', fontWeight: 'bold', color: openAccordion === 'training' ? '#A1B502' : '#000000' }}>
                  Sales Training
                </h3>
                <img src="/chevron.svg.svg" alt="chevron" style={{ width: '40px', height: '25px', marginRight: '10px', transform: openAccordion === 'training' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
              </div>
              {openAccordion === 'training' && (
                <ul style={{ marginTop: '20px', paddingLeft: '20px', fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '2' }}>
                  <li>Product knowledge sessions</li>
                  <li>Objection handling techniques</li>
                  <li>Sales process optimization</li>
                  <li>Ongoing coaching and support</li>
                </ul>
              )}
            </div>

            {/* Item 4 - Marketing Assets */}
            <div style={{ borderBottom: '1px solid #E5E5E5', padding: '30px 0' }} onClick={() => toggleAccordion('marketing')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', fontWeight: 'bold', color: openAccordion === 'marketing' ? '#A1B502' : '#000000' }}>
                  Marketing Assets
                </h3>
                <img src="/chevron.svg.svg" alt="chevron" style={{ width: '40px', height: '25px', marginRight: '10px', transform: openAccordion === 'marketing' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
              </div>
              {openAccordion === 'marketing' && (
                <ul style={{ marginTop: '20px', paddingLeft: '20px', fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '2' }}>
                  <li>Branded collateral and brochures</li>
                  <li>Digital marketing materials</li>
                  <li>Social media content</li>
                  <li>Co-branded campaigns</li>
                </ul>
              )}
            </div>

            {/* Item 5 - Dedicated Support */}
            <div style={{ padding: '30px 0' }} onClick={() => toggleAccordion('support')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', fontWeight: 'bold', color: openAccordion === 'support' ? '#A1B502' : '#000000' }}>
                  Dedicated Support
                </h3>
                <img src="/chevron.svg.svg" alt="chevron" style={{ width: '40px', height: '25px', marginRight: '10px', transform: openAccordion === 'support' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
              </div>
              {openAccordion === 'support' && (
                <ul style={{ marginTop: '20px', paddingLeft: '20px', fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '2' }}>
                  <li>Dedicated account manager</li>
                  <li>Priority customer service</li>
                  <li>Technical support team</li>
                  <li>Installation coordination</li>
                </ul>
              )}
            </div>
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

        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#000000',
            opacity: '0.5'
          }}
        />

        {/* Content */}
        <div className="absolute inset-0" style={{ zIndex: 2, paddingTop: '100px', paddingLeft: '200px', paddingRight: '200px' }}>
          <h2 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center', marginBottom: '40px' }}>
            Our Commitments to Dealers
          </h2>

          {/* 4 Cards */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
            {/* Card 1 */}
            <div style={{ position: 'relative', marginTop: '60px' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#FFFFFF', position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#EBEEF3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/permitspulled.png.png" alt="Permits Pulled" style={{ width: '50px', height: '50px' }} />
                </div>
              </div>
              <div style={{ width: '315px', height: '245px', backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '30px', paddingTop: '80px', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '22px', fontWeight: 'bold', color: '#000000', marginBottom: '15px' }}>Permits Pulled</h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6' }}>We secure approvals before any work begins.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ position: 'relative', marginTop: '60px' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#FFFFFF', position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#EBEEF3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/toptier.png.png" alt="Top Tier" style={{ width: '50px', height: '50px' }} />
                </div>
              </div>
              <div style={{ width: '315px', height: '245px', backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '30px', paddingTop: '80px', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '22px', fontWeight: 'bold', color: '#000000', marginBottom: '15px' }}>Top-Tier Hardware</h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6' }}>Tier-1 triple-black panels + SolarEdge Home Hub inverters (25-year warranty).</p>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ position: 'relative', marginTop: '60px' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#FFFFFF', position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#EBEEF3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/transparent.png.png" alt="Transparent" style={{ width: '50px', height: '50px' }} />
                </div>
              </div>
              <div style={{ width: '315px', height: '245px', backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '30px', paddingTop: '80px', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '22px', fontWeight: 'bold', color: '#000000', marginBottom: '15px' }}>Transparent Pricing</h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6' }}>No hidden fees — you and your customer see the same honest numbers.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div style={{ position: 'relative', marginTop: '60px' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#FFFFFF', position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#EBEEF3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/fast.png.png" alt="Fast" style={{ width: '50px', height: '50px' }} />
                </div>
              </div>
              <div style={{ width: '315px', height: '245px', backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '30px', paddingTop: '80px', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '22px', fontWeight: 'bold', color: '#000000', marginBottom: '15px' }}>Fast Installs</h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6' }}>Most installs completed in 1-2 days with cleared permits.</p>
              </div>
            </div>
          </div>

          {/* Second Row - 2 Cards */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
            {/* Card 5 */}
            <div style={{ position: 'relative', marginTop: '60px' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#FFFFFF', position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#EBEEF3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/monitoring.png.png" alt="Monitoring" style={{ width: '50px', height: '50px' }} />
                </div>
              </div>
              <div style={{ width: '315px', height: '245px', backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '30px', paddingTop: '80px', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '22px', fontWeight: 'bold', color: '#000000', marginBottom: '15px' }}>Always-On Monitoring</h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6' }}>Our support team tracks system performance 24/7.</p>
              </div>
            </div>

            {/* Card 6 */}
            <div style={{ position: 'relative', marginTop: '60px' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#FFFFFF', position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#EBEEF3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/transparent.png.png" alt="Cash Flow" style={{ width: '50px', height: '50px' }} />
                </div>
              </div>
              <div style={{ width: '315px', height: '245px', backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '30px', paddingTop: '80px', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '22px', fontWeight: 'bold', color: '#000000', marginBottom: '15px' }}>Cash Flow-Friendly</h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6' }}>Faster approvals and quicker installs = faster commissions for you.</p>
              </div>
            </div>
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
              gap: '12px'
            }}>
              <img src="/dealer.png.png" alt="Dealer" style={{ width: '24px', height: '18px' }} />
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
            <h2 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#000000', marginBottom: '50px' }}>
              How the Dealer<br />Process Works
            </h2>

            {/* Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {/* Step 1 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-35px', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Archivo, sans-serif', fontSize: '80px', fontWeight: 'bold', color: '#000000', opacity: '0.05', zIndex: 0 }}>1</div>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#FDFFEF', border: '2px solid #A1B502', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, flexShrink: 0 }}>
                  <img src="/submit.svg.svg" alt="Submit Deal" style={{ width: '30px', height: '30px' }} />
                </div>
                <div style={{ borderLeft: '2px dotted #A1B502', position: 'absolute', left: '34px', top: '75px', height: '40px' }} />
                <div>
                  <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '18px', fontWeight: 'bold', color: '#A1B502', marginBottom: '5px' }}>Submit Deal</h3>
                  <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#000000' }}>Upload contracts and docs in the portal</p>
                </div>
              </div>

              {/* Step 2 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-35px', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Archivo, sans-serif', fontSize: '80px', fontWeight: 'bold', color: '#000000', opacity: '0.05', zIndex: 0 }}>2</div>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#FDFFEF', border: '2px solid #A1B502', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, flexShrink: 0 }}>
                  <img src="/proposal.svg.svg" alt="Proposal Creation" style={{ width: '30px', height: '30px' }} />
                </div>
                <div style={{ borderLeft: '2px dotted #A1B502', position: 'absolute', left: '34px', top: '75px', height: '40px' }} />
                <div>
                  <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '18px', fontWeight: 'bold', color: '#A1B502', marginBottom: '5px' }}>Proposal Creation</h3>
                  <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#000000' }}>We generate a customer-ready savings and financing proposal.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-35px', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Archivo, sans-serif', fontSize: '80px', fontWeight: 'bold', color: '#000000', opacity: '0.05', zIndex: 0 }}>3</div>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#FDFFEF', border: '2px solid #A1B502', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, flexShrink: 0 }}>
                  <img src="/engineering.svg.svg" alt="Engineering & Permitting" style={{ width: '30px', height: '30px' }} />
                </div>
                <div style={{ borderLeft: '2px dotted #A1B502', position: 'absolute', left: '34px', top: '75px', height: '40px' }} />
                <div>
                  <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '18px', fontWeight: 'bold', color: '#A1B502', marginBottom: '5px' }}>Engineering & Permitting</h3>
                  <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#000000' }}>Bold handles site survey, system design, and all utility paperwork.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-35px', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Archivo, sans-serif', fontSize: '80px', fontWeight: 'bold', color: '#000000', opacity: '0.05', zIndex: 0 }}>4</div>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#FDFFEF', border: '2px solid #A1B502', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, flexShrink: 0 }}>
                  <img src="/installation.svg.svg" alt="Installation" style={{ width: '30px', height: '30px' }} />
                </div>
                <div style={{ borderLeft: '2px dotted #A1B502', position: 'absolute', left: '34px', top: '75px', height: '40px' }} />
                <div>
                  <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '18px', fontWeight: 'bold', color: '#A1B502', marginBottom: '5px' }}>Installation</h3>
                  <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#000000' }}>Professional local crews complete installs in 1-2 days.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-35px', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Archivo, sans-serif', fontSize: '80px', fontWeight: 'bold', color: '#000000', opacity: '0.05', zIndex: 0 }}>5</div>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#FDFFEF', border: '2px solid #A1B502', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, flexShrink: 0 }}>
                  <img src="/pto.png.svg" alt="PTO & Monitoring" style={{ width: '30px', height: '30px' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '18px', fontWeight: 'bold', color: '#A1B502', marginBottom: '5px' }}>PTO & Monitoring</h3>
                  <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#000000' }}>Utilities grant "Permission to Operate," and systems go live with 24/7 tracking.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/support.png.jpg"
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
