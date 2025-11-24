const GoBold = () => {
  return (
    <section className="relative w-full" style={{ height: '950px', marginBottom: '100px' }}>
      {/* Background Image */}
      <img
        src="/gobold.png.jpg"
        alt="Go Bold"
        className="w-full h-full object-cover"
        style={{ height: '950px' }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-4 text-center">
          <h2 className="text-6xl font-bold text-white mb-8" style={{ fontFamily: 'Quicksand, sans-serif', whiteSpace: 'nowrap', letterSpacing: '0.03em' }}>
            Go Bold or Stay Stuck
          </h2>
          <p className="text-white mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '23px', whiteSpace: 'nowrap', letterSpacing: '0.03em' }}>
            You could keep paying overpriced utility bills and waiting for someone else to fix the planet.
          </p>
          <p className="text-white mb-10" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '23px', whiteSpace: 'nowrap', letterSpacing: '0.03em' }}>
            Or... you could go solar the Bold way and take control of your power, your wallet, and your future.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-6">
            <button
              className="px-10 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity duration-300 flex items-center gap-3"
              style={{ fontFamily: 'Archivo, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.2em' }}
            >
              <img src="/quote.png.png" alt="Get a Quote" className="w-6 h-6" />
              GET A QUOTE
            </button>
            <button
              className="px-10 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity duration-300 flex items-center gap-3"
              style={{ fontFamily: 'Archivo, sans-serif', backgroundColor: '#385887', letterSpacing: '0.2em' }}
            >
              <img src="/dealer.png.png" alt="Become a Sales Dealer" className="w-7 h-6" />
              BECOME A SALES DEALER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoBold;
