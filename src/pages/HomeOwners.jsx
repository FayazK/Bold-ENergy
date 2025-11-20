import Testimonials from '../components/Testimonials';
import Xarrow from 'react-xarrows';

const HomeOwners = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full relative" style={{ height: '900px', marginBottom: '100px' }}>
        <img
          src="/homeowners.png"
          alt="Homeowners"
          className="w-full h-full object-cover"
          style={{ height: '900px' }}
        />
        {/* Black Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#000000',
            opacity: '0.5'
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center" style={{ paddingLeft: '200px', paddingRight: '200px' }}>
            <h1 className="font-bold text-white mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '60px' }}>
              See if solar is the<br />right fit for you.
            </h1>
            <p className="text-white mb-8" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '23px' }}>
              Join thousands switching to solar and save on your<br />energy bills while protecting the planet.
            </p>
            <button className="px-10 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity duration-300" style={{ fontFamily: 'Archivo, sans-serif', backgroundColor: '#A1B502' }}>
              GET A FREE QUOTE
            </button>
          </div>
        </div>

        {/* Three Stats Pills - Half on hero, half below */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="w-full flex justify-center" style={{ paddingLeft: '200px', paddingRight: '200px' }}>
            <div className="flex justify-center" style={{ gap: '30px' }}>
              <div className="bg-white rounded-full flex items-center" style={{ width: '417px', height: '148px', gap: '20px', paddingLeft: '24px', paddingRight: '24px' }}>
                <div className="flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center" style={{ width: '100px', height: '100px', padding: '12px' }}>
                  <img src="/Solar_Experience.png.png" alt="Solar Experience" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <div className="font-bold mb-1" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '60px', color: '#A1B502' }}>
                    25+
                  </div>
                  <div className="text-gray-700" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '14px' }}>
                    Years of Solar Experience
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-full flex items-center" style={{ width: '417px', height: '148px', gap: '20px', paddingLeft: '24px', paddingRight: '24px' }}>
                <div className="flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center" style={{ width: '100px', height: '100px', padding: '12px' }}>
                  <img src="/States.png.png" alt="States" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <div className="font-bold mb-1" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '60px', color: '#A1B502' }}>
                    25
                  </div>
                  <div className="text-gray-700" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '14px' }}>
                    States we cover
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-full flex items-center" style={{ width: '417px', height: '148px', gap: '20px', paddingLeft: '24px', paddingRight: '24px' }}>
                <div className="flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center" style={{ width: '100px', height: '100px', padding: '12px' }}>
                  <img src="/Installs.png.png" alt="Installs" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <div className="font-bold mb-1" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '60px', color: '#A1B502' }}>
                    20k+
                  </div>
                  <div className="text-gray-700" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '14px' }}>
                    Completed installs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Options Section */}
      <section className="bg-white" style={{ paddingTop: '100px', paddingBottom: '100px', paddingLeft: '200px', paddingRight: '200px', marginBottom: '100px' }}>
        <h2 className="text-center font-bold mb-12" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', color: '#222222' }}>
          Solar Options
        </h2>

        {/* Three Cards */}
        <div className="flex justify-center" style={{ gap: '0' }}>
          {/* Purchase Card */}
          <div className="flex flex-col items-start rounded-l-lg" style={{ backgroundColor: 'rgba(161, 181, 2, 0.05)', padding: '56px', width: '33.33%' }}>
            <div className="rounded-full bg-white flex items-center justify-center mb-6" style={{ width: '80px', height: '80px', border: '2px solid rgba(161, 181, 2, 0.30)' }}>
              <img src="/purchase.png" alt="Purchase" style={{ width: '48px', height: '48px' }} />
            </div>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#222222' }}>
              Purchase
            </h3>
            <p className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#222222', lineHeight: '1.6' }}>
              Flexible Financing, Maximum Freedom Think going solar is out of reach? Think...
            </p>
            <a href="#" className="flex items-center gap-2 font-bold" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#A1B502' }}>
              Read More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Finance Card */}
          <div className="flex flex-col items-start" style={{ backgroundColor: 'rgba(161, 181, 2, 0.10)', padding: '56px', width: '33.33%' }}>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#222222' }}>
              Finance
            </h3>
            <p className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#222222', lineHeight: '1.6' }}>
              Installing solar panels is a great way to reduce your energy costs and sup...
            </p>
            <a href="#" className="flex items-center gap-2 font-bold mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#A1B502' }}>
              Read More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className="rounded-full bg-white flex items-center justify-center" style={{ width: '80px', height: '80px', border: '2px solid rgba(161, 181, 2, 0.30)' }}>
              <img src="/finance.png" alt="Finance" style={{ width: '48px', height: '48px' }} />
            </div>
          </div>

          {/* TPO Card */}
          <div className="flex flex-col items-start rounded-r-lg" style={{ backgroundColor: 'rgba(161, 181, 2, 0.05)', padding: '56px', width: '33.33%' }}>
            <div className="rounded-full bg-white flex items-center justify-center mb-6" style={{ width: '80px', height: '80px', border: '2px solid rgba(161, 181, 2, 0.30)' }}>
              <img src="/tpo.png" alt="TPO" style={{ width: '48px', height: '48px' }} />
            </div>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px', color: '#222222' }}>
              TPO
            </h3>
            <p className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#222222', lineHeight: '1.6' }}>
              Installing solar panels is a great way to reduce your energy costs and sup...
            </p>
            <a href="#" className="flex items-center gap-2 font-bold" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#A1B502' }}>
              Read More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Bold Energy Section */}
      <section className="w-full relative" style={{ height: '1000px' }}>
        <img
          src="/whyboldenergybg.png"
          alt="Why Bold Energy"
          className="w-full h-full object-cover absolute inset-0"
          style={{ transform: 'scaleX(-1)', height: '1000px' }}
        />
        {/* Color Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#F1F4D9',
            opacity: '0.85'
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center" style={{ zIndex: 2, paddingTop: '100px' }}>
          <h2 className="font-bold mb-12" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', color: '#000000' }}>
            Why Bold Energy
          </h2>

          {/* Bold Energy Image - Center */}
          <div id="centerImage" className="absolute" style={{ left: '50%', top: 'calc(50% + 50px)', transform: 'translate(-50%, -50%)', width: '410px', height: '528px' }}>
            {/* SVG Dashed Border */}
            <svg style={{ position: 'absolute', width: '410px', height: '528px', top: 0, left: 0 }}>
              <rect
                x="0.5"
                y="0.5"
                width="409"
                height="527"
                rx="205"
                ry="205"
                fill="none"
                stroke="#385887"
                strokeWidth="1"
                strokeDasharray="5 10"
              />
            </svg>
            {/* Image Container */}
            <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '205px', overflow: 'hidden', padding: '10px' }}>
              <img
                src="/boldenergyimage.png"
                alt="Bold Energy Center"
                style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', borderRadius: '195px' }}
              />
            </div>
          </div>

          {/* Top Left - Why Bold Energy */}
          <div className="absolute" style={{ left: '270px', top: '270px', maxWidth: '240px' }}>
            <div className="flex items-start gap-3 mb-3">
              <div id="whyBoldIcon" className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#385887' }}>
                <img src="/volt.png" alt="Volt" style={{ width: '24px', height: '28px' }} />
              </div>
            </div>
            <h3 id="whyBoldHeading" className="font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: '#222222' }}>
              Why Bold Energy
            </h3>
            <p className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#666666', lineHeight: '1.5' }}>
              Ethical. Transparent. Relentless.<br />
              We don't just install solar. We<br />
              help you save money and the<br />
              environment.
            </p>
            <a href="#" className="flex items-center gap-2 font-bold" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '13px', color: '#385887' }}>
              Read More
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#385887" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Bottom Left - ROI Calculator */}
          <div className="absolute" style={{ left: '270px', top: '570px', maxWidth: '240px' }}>
            <div className="flex items-start gap-3 mb-3">
              <div id="roiIcon" className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#385887' }}>
                <img src="/roicalculator.png" alt="ROI Calculator" style={{ width: '24px', height: '28px' }} />
              </div>
            </div>
            <h3 id="roiHeading" className="font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: '#222222' }}>
              ROI calculator
            </h3>
            <p className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#666666', lineHeight: '1.5' }}>
              Crunch the Numbers. See the Light. Want to know what going solar really saves you? Our ROI calculator gives you the hard data.
            </p>
            <a href="#" className="flex items-center gap-2 font-bold" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '13px', color: '#385887' }}>
              Read More
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#385887" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right Side - Environmental Impact Calculator */}
          <div className="absolute" style={{ right: '180px', top: 'calc(50% + 50px)', transform: 'translateY(-50%)', maxWidth: '300px', zIndex: 3 }}>
            <div className="flex items-start gap-3 mb-3">
              <div id="envImpactIcon" className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#385887' }}>
                <img src="/calculator.png" alt="Calculator" style={{ width: '28px', height: '28px' }} />
              </div>
            </div>
            <h3 id="envImpactHeading" className="font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: '#222222' }}>
              Environmental Impact Calculator
            </h3>
            <p className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#666666', lineHeight: '1.5' }}>
              There are many variations of passages of Lorem Ipsum.
            </p>
            <a href="#" className="flex items-center gap-2 font-bold" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '13px', color: '#385887' }}>
              Read More
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#385887" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Bold BG Image - Right Side */}
          <div className="absolute" style={{ right: '0', top: 'calc(50% + 50px)', transform: 'translateY(-50%)', width: '379px', height: '932px' }}>
            <img
              src="/boldbg.png"
              alt="Bold Energy"
              style={{ width: '379px', height: '932px', display: 'block' }}
            />
          </div>

          {/* Connector Lines using react-xarrows */}
          <Xarrow
            start="whyBoldHeading"
            end="centerImage"
            startAnchor="right"
            endAnchor="left"
            color="#385887"
            strokeWidth={1}
            dashness={{ strokeLen: 5, nonStrokeLen: 5 }}
            showHead={false}
            path="grid"
            gridBreak="50%"
            gridRadius={0}
            zIndex={1}
          />
          <Xarrow
            start="roiHeading"
            end="centerImage"
            startAnchor="right"
            endAnchor="left"
            color="#385887"
            strokeWidth={1}
            dashness={{ strokeLen: 5, nonStrokeLen: 5 }}
            showHead={false}
            path="grid"
            gridBreak="50%"
            gridRadius={0}
            zIndex={1}
          />
          <Xarrow
            start="envImpactHeading"
            end="centerImage"
            startAnchor="left"
            endAnchor="right"
            color="#385887"
            strokeWidth={1}
            dashness={{ strokeLen: 5, nonStrokeLen: 5 }}
            showHead={false}
            path="grid"
            gridBreak="50%"
            gridRadius={0}
            zIndex={1}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default HomeOwners;
