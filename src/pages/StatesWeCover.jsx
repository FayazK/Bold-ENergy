import { useState } from 'react';

const StatesWeCover = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stateCards = [
    {
      id: 1,
      image: '/support.png.jpg',
      heading: 'Southwest Region',
      states: ['Arizona', 'Arkansas', 'California', 'Colorado', 'Nevada', 'New Mexico', 'Utah']
    },
    {
      id: 2,
      image: '/support.png.jpg',
      heading: 'Northeast Region',
      states: ['Connecticut', 'Maine', 'Massachusetts', 'New Hampshire', 'New Jersey', 'New York', 'Vermont']
    },
    {
      id: 3,
      image: '/support.png.jpg',
      heading: 'Southeast Region',
      states: ['Florida', 'Georgia', 'North Carolina', 'South Carolina', 'Tennessee', 'Virginia']
    },
    {
      id: 4,
      image: '/support.png.jpg',
      heading: 'Midwest Region',
      states: ['Illinois', 'Indiana', 'Michigan', 'Minnesota', 'Ohio', 'Wisconsin']
    },
    {
      id: 5,
      image: '/support.png.jpg',
      heading: 'Mountain Region',
      states: ['Idaho', 'Montana', 'Wyoming', 'Oregon', 'Washington']
    },
    {
      id: 6,
      image: '/support.png.jpg',
      heading: 'Pacific Region',
      states: ['California', 'Hawaii', 'Oregon', 'Washington', 'Alaska']
    },
    {
      id: 7,
      image: '/support.png.jpg',
      heading: 'Gulf Coast Region',
      states: ['Texas', 'Louisiana', 'Mississippi', 'Alabama', 'Florida']
    },
    {
      id: 8,
      image: '/support.png.jpg',
      heading: 'Great Plains Region',
      states: ['Kansas', 'Nebraska', 'North Dakota', 'South Dakota', 'Oklahoma']
    },
    {
      id: 9,
      image: '/support.png.jpg',
      heading: 'Mid-Atlantic Region',
      states: ['Delaware', 'Maryland', 'Pennsylvania', 'Virginia', 'West Virginia']
    },
    {
      id: 10,
      image: '/support.png.jpg',
      heading: 'New England Region',
      states: ['Rhode Island', 'Connecticut', 'Massachusetts', 'Vermont', 'New Hampshire', 'Maine']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (stateCards.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (stateCards.length - 2)) % (stateCards.length - 2));
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full relative" style={{ height: '550px' }}>
        <img
          src="/partnerwithboldenergy.png.jpg"
          alt="States We Cover"
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
          <h1 className="font-bold text-white text-center" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '75px', marginTop: '10px', letterSpacing: '0.03em' }}>
            States We Cover
          </h1>
        </div>
      </section>

      {/* Expanding Solar Section */}
      <section style={{ padding: '100px 200px', backgroundColor: '#FFFFFF' }}>
        {/* Heading and Description Row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '80px', marginBottom: '60px', marginLeft: '50px' }}>
          {/* Left - Heading */}
          <div style={{ flex: '0 0 550px' }}>
            <h2 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#000000', lineHeight: '1.2', letterSpacing: '0.03em' }}>
              Expanding Solar, One<br />State at a Time
            </h2>
          </div>

          {/* Right - Description */}
          <div style={{ flex: 1, maxWidth: '700px' }}>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '20px', color: '#000000', lineHeight: '1.8', letterSpacing: '0.03em' }}>
              Bold Energy is headquartered in Connecticut, but our mission is nationwide. We currently serve homeowners and partners across 15+ states — and growing every quarter. With Tier-1 panels, transparent pricing, and flexible financing options, we make it easy for families from New England to the Rockies to take control of their energy future.
            </p>
          </div>
        </div>

        {/* Image */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="/bold1.png.png"
            alt="Bold Section"
            style={{ width: '1350px', height: '524px', objectFit: 'contain' }}
          />
        </div>
      </section>

      {/* Where We Operate Now Section */}
      <section style={{ width: '100%', height: '1180px', backgroundColor: '#F5F5F5', paddingTop: '100px', paddingBottom: '100px', overflow: 'hidden' }}>
        <h2 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#000000', textAlign: 'center', marginBottom: '60px', letterSpacing: '0.03em' }}>
          Where We Operate Now
        </h2>

        {/* Carousel */}
        <div style={{ position: 'relative' }}>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#A1B502',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#A1B502',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Cards Container */}
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                gap: '30px',
                transition: 'transform 0.3s ease',
                transform: `translateX(-${currentSlide * 460}px)`
              }}
            >
              {stateCards.map((card) => (
                <div
                  key={card.id}
                  style={{
                    width: '430px',
                    height: '812px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    flexShrink: 0
                  }}
                >
                  {/* Card Image */}
                  <img
                    src={card.image}
                    alt={card.heading}
                    style={{ width: '430px', height: '323px', objectFit: 'cover' }}
                  />

                  {/* Card Content */}
                  <div style={{ padding: '30px' }}>
                    <h3 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '25px', fontWeight: 'bold', color: '#000000', marginBottom: '20px', letterSpacing: '0.03em' }}>
                      {card.heading}
                    </h3>

                    {/* States List */}
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                      {card.states.map((state, index) => (
                        <li
                          key={index}
                          style={{
                            fontFamily: 'Archivo, sans-serif',
                            fontSize: '18px',
                            color: '#000000',
                            lineHeight: '2.2'
                          }}
                        >
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

        {/* Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
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
            <img src="/dealer.png.png" alt="Dealer" style={{ width: '24px', height: '18px' }} />
            BECOME A PARTNER
          </button>
        </div>
      </section>

      {/* What Customers Get Section */}
      <section style={{ width: '100%', paddingTop: '100px', paddingBottom: '100px', paddingLeft: '200px', paddingRight: '0', backgroundColor: '#FFFFFF' }}>
        <h2 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#000000', textAlign: 'center', marginBottom: '60px', paddingRight: '200px', letterSpacing: '0.03em' }}>
          What Customers Get in Every State
        </h2>

        {/* Content Row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          {/* Left - Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {/* Card 1 - Home Value Boost */}
            <div style={{ width: '660px', height: '132px', border: '1px solid rgba(161, 181, 2, 0.3)', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '20px', gap: '20px' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(161, 181, 2, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src="/boost.png.png" alt="Home Value" style={{ width: '35px', height: '35px' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', fontWeight: 'bold', color: '#000000', marginBottom: '8px', letterSpacing: '0.03em' }}>Home Value Boost:</h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '14px', color: '#000000', lineHeight: '1.5', letterSpacing: '0.03em' }}>Solar adds ~4-7% to resale value according to Zillow.</p>
              </div>
            </div>

            {/* Card 2 - Flexible Financing */}
            <div style={{ width: '660px', height: '132px', border: '1px solid rgba(161, 181, 2, 0.3)', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '20px', gap: '20px' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(161, 181, 2, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src="/flexible.png.png" alt="Financing" style={{ width: '35px', height: '35px' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', fontWeight: 'bold', color: '#000000', marginBottom: '8px', letterSpacing: '0.03em' }}>Flexible Financing:</h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '14px', color: '#000000', lineHeight: '1.5', letterSpacing: '0.03em' }}>Loan, lease, and cash purchase options available with major solar lenders. Example: 25-year solar loan at ~5.99% APR with 30% federal tax credit applied</p>
              </div>
            </div>

            {/* Card 3 - Net Metering Benefits */}
            <div style={{ width: '660px', height: '132px', border: '1px solid rgba(161, 181, 2, 0.3)', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '20px', gap: '20px' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(161, 181, 2, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src="/benifits.png.png" alt="Net Metering" style={{ width: '35px', height: '35px' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', fontWeight: 'bold', color: '#000000', marginBottom: '8px', letterSpacing: '0.03em' }}>Net Metering Benefits:</h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '14px', color: '#000000', lineHeight: '1.5', letterSpacing: '0.03em' }}>In most regions, customers can "bank" excess daytime energy for nighttime use — reducing reliance on utilities</p>
              </div>
            </div>

            {/* Card 4 - Top-Tier Hardware Everywhere */}
            <div style={{ width: '660px', height: '132px', border: '1px solid rgba(161, 181, 2, 0.3)', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '20px', gap: '20px' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(161, 181, 2, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src="/timeline.png.png" alt="Hardware" style={{ width: '35px', height: '35px' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', fontWeight: 'bold', color: '#000000', marginBottom: '8px', letterSpacing: '0.03em' }}>Top-Tier Hardware Everywhere:</h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '14px', color: '#000000', lineHeight: '1.5', letterSpacing: '0.03em' }}>Tier-1 solar panels + SolarEdge inverters backed by 25-year warranties.</p>
              </div>
            </div>

            {/* Card 5 - Fast Install Timelines */}
            <div style={{ width: '660px', height: '132px', border: '1px solid rgba(161, 181, 2, 0.3)', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '20px', gap: '20px' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(161, 181, 2, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src="/timeline.png.png" alt="Fast Install" style={{ width: '35px', height: '35px' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', fontWeight: 'bold', color: '#000000', marginBottom: '8px', letterSpacing: '0.03em' }}>Fast Install Timelines:</h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '14px', color: '#000000', lineHeight: '1.5', letterSpacing: '0.03em' }}>Once permits clear, installs are usually complete in 1-2 days, no matter the market.</p>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div style={{ flexShrink: 0, marginRight: '0px' }}>
            <img
              src="/everystate.png.png"
              alt="Every State"
              style={{ width: '764px', height: '650px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section style={{ width: '100%', height: '1049px', backgroundColor: '#F5F5F5', padding: '100px 200px', position: 'relative' }}>
        <h2 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#000000', textAlign: 'center', marginBottom: '60px', letterSpacing: '0.03em' }}>
          Coverage Map
        </h2>

        {/* Map Image */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '1158px', height: '748px' }}>
            <img
              src="/map.png.png"
              alt="Coverage Map"
              style={{ width: '1158px', height: '748px', objectFit: 'contain' }}
            />

            {/* Green Area Icons (Covered) - Solar Panel Icons */}
            {/* Colorado */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '230px', left: '280px' }} />
            {/* Kansas */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '260px', left: '370px' }} />
            {/* Oklahoma */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '320px', left: '370px' }} />
            {/* Texas */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '400px', left: '350px' }} />
            {/* New Mexico */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '330px', left: '260px' }} />
            {/* Missouri */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '270px', left: '460px' }} />
            {/* Arkansas */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '340px', left: '450px' }} />
            {/* Louisiana */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '420px', left: '460px' }} />
            {/* Kentucky */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '280px', left: '560px' }} />
            {/* Tennessee */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '310px', left: '540px' }} />
            {/* North Carolina */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '310px', left: '650px' }} />
            {/* South Carolina */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '350px', left: '630px' }} />
            {/* Georgia */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '380px', left: '600px' }} />
            {/* Florida */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '460px', left: '630px' }} />
            {/* Virginia */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '275px', left: '670px' }} />
            {/* Maryland/Delaware */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '245px', left: '700px' }} />
            {/* New Jersey */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '215px', left: '730px' }} />
            {/* Connecticut/Mass */}
            <img src="/covered.png.png" alt="Covered" style={{ position: 'absolute', width: '25px', height: '25px', top: '165px', left: '760px' }} />

            {/* Blue Area Icons (Coming Soon) */}
            {/* California */}
            <img src="/comingsoon.png.png" alt="Coming Soon" style={{ position: 'absolute', width: '25px', height: '25px', top: '270px', left: '130px' }} />
            {/* Minnesota */}
            <img src="/comingsoon.png.png" alt="Coming Soon" style={{ position: 'absolute', width: '25px', height: '25px', top: '130px', left: '430px' }} />
            {/* Wisconsin */}
            <img src="/comingsoon.png.png" alt="Coming Soon" style={{ position: 'absolute', width: '25px', height: '25px', top: '150px', left: '490px' }} />
            {/* Michigan */}
            <img src="/comingsoon.png.png" alt="Coming Soon" style={{ position: 'absolute', width: '25px', height: '25px', top: '160px', left: '560px' }} />
            {/* Illinois */}
            <img src="/comingsoon.png.png" alt="Coming Soon" style={{ position: 'absolute', width: '25px', height: '25px', top: '230px', left: '500px' }} />
            {/* Indiana */}
            <img src="/comingsoon.png.png" alt="Coming Soon" style={{ position: 'absolute', width: '25px', height: '25px', top: '240px', left: '550px' }} />
            {/* Ohio */}
            <img src="/comingsoon.png.png" alt="Coming Soon" style={{ position: 'absolute', width: '25px', height: '25px', top: '230px', left: '600px' }} />
            {/* Pennsylvania */}
            <img src="/comingsoon.png.png" alt="Coming Soon" style={{ position: 'absolute', width: '25px', height: '25px', top: '200px', left: '670px' }} />
            {/* New York */}
            <img src="/comingsoon.png.png" alt="Coming Soon" style={{ position: 'absolute', width: '25px', height: '25px', top: '155px', left: '710px' }} />
          </div>
        </div>

        {/* Bottom Right Rectangle */}
        <div style={{
          position: 'absolute',
          bottom: '100px',
          right: '200px',
          width: '230px',
          height: '112px',
          backgroundColor: '#FFFFFF',
          borderRadius: '10px',
          boxShadow: '0px 4px 21px 0px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '10px'
        }}>
          {/* Covered Area */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '5px', backgroundColor: '#A3B407', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/coveredarea.png.png" alt="Covered" style={{ width: '20px', height: '20px' }} />
            </div>
            <span style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', fontWeight: 'bold', color: '#000000', letterSpacing: '0.03em' }}>Covered Area</span>
          </div>

          {/* Coming Soon */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '5px', backgroundColor: '#3B5B84', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/comingsoon.png.png" alt="Coming Soon" style={{ width: '20px', height: '20px' }} />
            </div>
            <span style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', fontWeight: 'bold', color: '#000000', letterSpacing: '0.03em' }}>Coming Soon</span>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section style={{ width: '100%', height: '816px', position: 'relative' }}>
        <img
          src="/gobold.png.jpg"
          alt="Coming Soon Background"
          style={{ width: '100%', height: '816px', objectFit: 'cover' }}
        />

        {/* Dark Overlay */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: '#000000',
            opacity: '0.5'
          }}
        />

        {/* Content Overlay */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '100px'
        }}>
          <h2 style={{
            fontFamily: 'Quicksand, sans-serif',
            fontSize: '50px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginBottom: '30px'
          }}>
            Coming Soon
          </h2>

          <p style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: '23px',
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: '1.8',
            letterSpacing: '0.03em'
          }}>
            We're adding new states rapidly. If you don't see your state listed, reach out — Bold Energy<br />
            expansion markets are opening every quarter.
          </p>

          {/* Cards */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '60px' }}>
            {/* Card 1 */}
            <div style={{ position: 'relative', marginTop: '60px' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#FFFFFF', position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#EBEEF3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/permitspulled.png.png" alt="Permits Pulled" style={{ width: '50px', height: '50px' }} />
                </div>
              </div>
              <div style={{ width: '430px', height: '314px', backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '30px', paddingTop: '80px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '22px', fontWeight: 'bold', color: '#000000', letterSpacing: '0.03em' }}>Dealers</h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', letterSpacing: '0.03em' }}>Apply now to secure exclusive<br />partnerships in new territorie</p>
                <button style={{
                  backgroundColor: '#A1B502',
                  color: '#FFFFFF',
                  padding: '12px 25px',
                  border: 'none',
                  borderRadius: '50px',
                  fontFamily: 'Archivo, sans-serif',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  letterSpacing: '0.2em'
                }}>
                  <img src="/dealer.png.png" alt="Dealer" style={{ width: '20px', height: '20px' }} />
                  APPLY NOW
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ position: 'relative', marginTop: '60px' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#FFFFFF', position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#EBEEF3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/permitspulled.png.png" alt="Homeowners" style={{ width: '50px', height: '50px' }} />
                </div>
              </div>
              <div style={{ width: '430px', height: '314px', backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '30px', paddingTop: '80px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '22px', fontWeight: 'bold', color: '#000000', letterSpacing: '0.03em' }}>Homeowners</h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000000', lineHeight: '1.6', letterSpacing: '0.03em' }}>Check your zip code to see if<br />we serve your area yet</p>
                <button style={{
                  backgroundColor: '#A1B502',
                  color: '#FFFFFF',
                  padding: '12px 25px',
                  border: 'none',
                  borderRadius: '50px',
                  fontFamily: 'Archivo, sans-serif',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  letterSpacing: '0.2em'
                }}>
                  <img src="/dealer.png.png" alt="Dealer" style={{ width: '20px', height: '20px' }} />
                  APPLY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatesWeCover;
