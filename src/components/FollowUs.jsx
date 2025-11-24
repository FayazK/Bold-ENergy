const FollowUs = () => {
  return (
    <section className="py-8 bg-white" style={{ marginBottom: '100px' }}>
      <div className="text-center" style={{ paddingLeft: '200px', paddingRight: '200px' }}>
        <p style={{ fontFamily: 'Archivo, sans-serif', color: '#385887', fontSize: '20px', fontWeight: 'bold', marginBottom: '0', letterSpacing: '0.03em' }}>
          Follow Us
        </p>
        <h2 className="mb-12" style={{ fontFamily: 'Quicksand, sans-serif', color: '#222222', fontSize: '50px', fontWeight: 'bold', letterSpacing: '0.03em' }}>
          @empowerenergy.co
        </h2>

        {/* Five Images */}
        <div className="flex justify-center mb-12" style={{ gap: '40px' }}>
          <div style={{ width: '303px', height: '378px' }}>
            <img
              src="/1.png.png"
              alt="Instagram post 1"
              className="w-full h-full object-cover rounded-lg"
              style={{ width: '303px', height: '378px' }}
            />
          </div>
          <div style={{ width: '303px', height: '378px' }}>
            <img
              src="/2.png.png"
              alt="Instagram post 2"
              className="w-full h-full object-cover rounded-lg"
              style={{ width: '303px', height: '378px' }}
            />
          </div>
          <div style={{ width: '303px', height: '378px' }}>
            <img
              src="/3.png.png"
              alt="Instagram post 3"
              className="w-full h-full object-cover rounded-lg"
              style={{ width: '303px', height: '378px' }}
            />
          </div>
          <div style={{ width: '303px', height: '378px' }}>
            <img
              src="/4.png.png"
              alt="Instagram post 4"
              className="w-full h-full object-cover rounded-lg"
              style={{ width: '303px', height: '378px' }}
            />
          </div>
          <div style={{ width: '303px', height: '378px' }}>
            <img
              src="/5.png.png"
              alt="Instagram post 5"
              className="w-full h-full object-cover rounded-lg"
              style={{ width: '303px', height: '378px' }}
            />
          </div>
        </div>

        {/* Instagram CTA Button */}
        <button
          className="px-10 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity duration-300 flex items-center gap-3 mx-auto"
          style={{ fontFamily: 'Archivo, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.2em' }}
        >
          <img src="/insta.png.png" alt="Instagram" className="w-6 h-6" />
          FOLLOW ON INSTAGRAM
        </button>
      </div>
    </section>
  );
};

export default FollowUs;
