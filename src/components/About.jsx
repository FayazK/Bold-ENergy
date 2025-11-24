const About = () => {
  return (
    <section id="about" className="bg-white" style={{ paddingTop: '100px', marginBottom: '100px' }}>
      <div style={{ paddingLeft: '200px', paddingRight: '200px' }}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-2xl font-semibold" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502', letterSpacing: '0.03em', marginBottom: '10px' }}>
            About us
          </p>
          <h2 className="font-bold text-gray-900" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em', fontSize: '50px', marginBottom: '10px' }}>
            Solar That Actually Makes Sense
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-2" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
            Let's be real — the energy game is rigged. Prices keep going up.
          </p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
            Utility companies keep cashing in. You deserve better.
          </p>
        </div>

        {/* Three Image Sections */}
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-left" style={{ width: '427px' }}>
            <div className="mb-4" style={{ width: '427px', height: '323px' }}>
              <img
                src="/image1.png.png"
                alt="Fast, Clean Installs"
                className="w-full h-full object-cover rounded-lg"
                style={{ width: '427px', height: '323px' }}
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
              Fast, Clean Installs
            </h3>
            <p className="text-base text-gray-700" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
              Yes, we always pull permits.
            </p>
          </div>

          <div className="text-left" style={{ width: '427px' }}>
            <div className="mb-4" style={{ width: '427px', height: '323px' }}>
              <img
                src="/image2.png.png"
                alt="Honest Answers"
                className="w-full h-full object-cover rounded-lg"
                style={{ width: '427px', height: '323px' }}
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
              Honest Answers
            </h3>
            <p className="text-base text-gray-700" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
              Our team is available for you
            </p>
          </div>

          <div className="text-left" style={{ width: '427px' }}>
            <div className="mb-4" style={{ width: '427px', height: '323px' }}>
              <img
                src="/image3.png.png"
                alt="Unmatched Service"
                className="w-full h-full object-cover rounded-lg"
                style={{ width: '427px', height: '323px' }}
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
              Unmatched Service
            </h3>
            <p className="text-base text-gray-700" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
              Before, during, and after install.
            </p>
          </div>
        </div>

        {/* Two CTA Buttons */}
        <div className="flex justify-center gap-6 mt-16">
          <button
            className="px-10 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity duration-300 flex items-center gap-3"
            style={{ fontFamily: 'Archivo, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.2em' }}
          >
            <img src="/house.png.png" alt="Home Owners" className="w-7 h-6" />
            HOME OWNERS
          </button>
          <button
            className="px-10 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity duration-300 flex items-center gap-3"
            style={{ fontFamily: 'Archivo, sans-serif', backgroundColor: '#385887', letterSpacing: '0.2em' }}
          >
            <img src="/dealers.png.png" alt="Sales Dealers" className="w-6 h-6" />
            SALES DEALERS
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
