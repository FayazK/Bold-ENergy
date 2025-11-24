const Hero = () => {
  return (
    <section className="relative w-full" style={{ height: '120vh' }}>
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/hero_25.png.png"
          alt="Home with solar panels"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content centered */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ marginTop: '-150px' }}>
        <div className="text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            Power Up. Be Bold
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
            At Bold Energy, we empower homeowners and strategic partners to lead the charge toward a sustainable future
          </p>

          {/* Three bullet points */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8">
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-lg font-medium" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.04em' }}>
                Driven by Expertise
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-lg font-medium" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.04em' }}>
                Guided by Integrity
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-lg font-medium" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.04em' }}>
                Delivered with urgency
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="bg-bold-green text-white px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity duration-300 flex items-center gap-3" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.2em' }}>
              <img src="/house.png.png" alt="Home" className="w-7 h-6" />
              $0 DOWN SOLAR
            </button>
            <button className="bg-white text-bold-green px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-3" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.2em' }}>
              <img src="/dealers.png.png" alt="Dealers" className="w-6 h-6" style={{ filter: 'brightness(0) saturate(100%) invert(58%) sepia(72%) saturate(426%) hue-rotate(31deg) brightness(96%) contrast(88%)' }} />
              BECOME A SALES DEALER
            </button>
          </div>
        </div>
      </div>

      {/* Three Stats Pills - Half on hero, half below */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
        <div className="w-full flex justify-center" style={{ paddingLeft: '200px', paddingRight: '200px' }}>
          <div className="flex flex-wrap justify-center" style={{ gap: '100px' }}>
            <div className="bg-white rounded-full flex items-center gap-4" style={{ width: '417px', height: '148px', paddingLeft: '32px', paddingRight: '32px' }}>
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center p-3">
                <img src="/Solar_Experience.png.png" alt="Solar Experience" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <div className="text-6xl font-bold mb-1" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502' }}>
                  25+
                </div>
                <div className="text-gray-700 whitespace-nowrap" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', letterSpacing: '0.03em' }}>
                  Years of Solar Experience
                </div>
              </div>
            </div>

            <div className="bg-white rounded-full flex items-center gap-4" style={{ width: '417px', height: '148px', paddingLeft: '32px', paddingRight: '32px' }}>
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center p-3">
                <img src="/States.png.png" alt="States" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <div className="text-6xl font-bold mb-1" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502' }}>
                  25
                </div>
                <div className="text-gray-700 whitespace-nowrap" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', letterSpacing: '0.03em' }}>
                  States we cover
                </div>
              </div>
            </div>

            <div className="bg-white rounded-full flex items-center gap-4" style={{ width: '417px', height: '148px', paddingLeft: '32px', paddingRight: '32px' }}>
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center p-3">
                <img src="/Installs.png.png" alt="Installs" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <div className="text-6xl font-bold mb-1" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502' }}>
                  20k+
                </div>
                <div className="text-gray-700 whitespace-nowrap" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', letterSpacing: '0.03em' }}>
                  Completed installs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
