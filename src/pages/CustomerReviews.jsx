const CustomerReviews = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full relative">
        <img
          src="/reviewssection.png"
          alt="Customer Reviews"
          style={{ width: '100%', height: '550px', objectFit: 'cover' }}
        />

        {/* Black Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#000000',
            opacity: '0.5',
            width: '100%',
            height: '550px'
          }}
        />

        {/* Heading */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
          <h1 className="font-bold text-white" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '75px', letterSpacing: '0.03em' }}>
            Customer Reviews
          </h1>
        </div>
      </section>

      {/* Reviews Section */}
      <section style={{
        paddingLeft: '200px',
        paddingRight: '200px',
        paddingTop: '200px',
        paddingBottom: '200px',
        backgroundColor: '#EBEEF3',
        position: 'relative'
      }}>
        {/* Background Image with Opacity */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/reviewsectionbg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 3300px',
          opacity: '0.05',
          pointerEvents: 'none',
          zIndex: 0
        }}></div>

        <div className="flex items-center" style={{ gap: '60px', position: 'relative', zIndex: 1 }}>
          {/* Video Player - Left Side */}
          <div style={{ width: '520px', height: '640px', backgroundColor: '#000000', position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
            {/* Video Thumbnail */}
            <img src="/john.jpg" alt="Video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '4px' }}>
                  <path d="M8 5v14l11-7L8 5z" fill="#222222"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Review Content - Right Side */}
          <div className="text-center" style={{ maxWidth: '620px', marginLeft: '200px' }}>
            {/* Colons Image */}
            <div className="flex justify-center mb-6">
              <img src="/Colons.png.png" alt="Quote" style={{ width: '72px', height: '64px' }} />
            </div>

            {/* Review Text */}
            <p className="mb-6 text-center" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', color: '#222222', lineHeight: '1.6', letterSpacing: '0.03em' }}>
              "Everything about my experience with Empower has been positive! They took care of EVERYTHING and the savings on my monthly electricity bill will be huge!. With the economy being so shaky right now, it's a relief to know I'm locked in to a very reasonable monthly fee for electricity. I don't see why everyone doesn't look into it!"
            </p>

            {/* Stars */}
            <div className="mb-4 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FF8E28', fontSize: '24px' }}>★</span>
              ))}
            </div>

            {/* Name */}
            <p className="mb-2 font-bold text-center" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', color: '#222222', letterSpacing: '0.03em' }}>
              JOHN DOE
            </p>

            {/* Subtitle */}
            <p className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#A1B502', letterSpacing: '0.03em' }}>
              Lorem Ipsum dolor.
            </p>
          </div>
        </div>

        {/* Second Review - Review Left, Customer Image Right */}
        <div className="flex items-center" style={{ gap: '60px', marginTop: '80px', position: 'relative', zIndex: 1 }}>
          {/* Review Content - Left Side */}
          <div className="text-center" style={{ maxWidth: '620px', marginRight: '200px' }}>
            {/* Colons Image */}
            <div className="flex justify-center mb-6">
              <img src="/Colons.png.png" alt="Quote" style={{ width: '72px', height: '64px' }} />
            </div>

            {/* Review Text */}
            <p className="mb-6 text-center" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', color: '#222222', lineHeight: '1.6', letterSpacing: '0.03em' }}>
              "Everything about my experience with Empower has been positive! They took care of EVERYTHING and the savings on my monthly electricity bill will be huge!. With the economy being so shaky right now, it's a relief to know I'm locked in to a very reasonable monthly fee for electricity. I don't see why everyone doesn't look into it!"
            </p>

            {/* Stars */}
            <div className="mb-4 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FF8E28', fontSize: '24px' }}>★</span>
              ))}
            </div>

            {/* Name */}
            <p className="mb-2 font-bold text-center" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', color: '#222222', letterSpacing: '0.03em' }}>
              JOHN DOE
            </p>

            {/* Subtitle */}
            <p className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#A1B502', letterSpacing: '0.03em' }}>
              Lorem Ipsum dolor.
            </p>
          </div>

          {/* Customer Image - Right Side */}
          <div style={{ width: '520px', height: '640px', overflow: 'hidden', borderRadius: '8px' }}>
            <img src="/img2.png" alt="Customer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Third Review - Video Left, Review Right (same as first) */}
        <div className="flex items-center" style={{ gap: '60px', marginTop: '80px', position: 'relative', zIndex: 1 }}>
          {/* Video Player - Left Side */}
          <div style={{ width: '520px', height: '640px', backgroundColor: '#000000', position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
            {/* Video Thumbnail */}
            <img src="/john.jpg" alt="Video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '4px' }}>
                  <path d="M8 5v14l11-7L8 5z" fill="#222222"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Review Content - Right Side */}
          <div className="text-center" style={{ maxWidth: '620px', marginLeft: '200px' }}>
            {/* Colons Image */}
            <div className="flex justify-center mb-6">
              <img src="/Colons.png.png" alt="Quote" style={{ width: '72px', height: '64px' }} />
            </div>

            {/* Review Text */}
            <p className="mb-6 text-center" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', color: '#222222', lineHeight: '1.6', letterSpacing: '0.03em' }}>
              "Everything about my experience with Empower has been positive! They took care of EVERYTHING and the savings on my monthly electricity bill will be huge!. With the economy being so shaky right now, it's a relief to know I'm locked in to a very reasonable monthly fee for electricity. I don't see why everyone doesn't look into it!"
            </p>

            {/* Stars */}
            <div className="mb-4 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FF8E28', fontSize: '24px' }}>★</span>
              ))}
            </div>

            {/* Name */}
            <p className="mb-2 font-bold text-center" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', color: '#222222', letterSpacing: '0.03em' }}>
              JOHN DOE
            </p>

            {/* Subtitle */}
            <p className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#A1B502', letterSpacing: '0.03em' }}>
              Lorem Ipsum dolor.
            </p>
          </div>
        </div>

        {/* Fourth Review - Review Left, Customer Image Right (same as second) */}
        <div className="flex items-center" style={{ gap: '60px', marginTop: '80px', position: 'relative', zIndex: 1 }}>
          {/* Review Content - Left Side */}
          <div className="text-center" style={{ maxWidth: '620px', marginRight: '200px' }}>
            {/* Colons Image */}
            <div className="flex justify-center mb-6">
              <img src="/Colons.png.png" alt="Quote" style={{ width: '72px', height: '64px' }} />
            </div>

            {/* Review Text */}
            <p className="mb-6 text-center" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', color: '#222222', lineHeight: '1.6', letterSpacing: '0.03em' }}>
              "Everything about my experience with Empower has been positive! They took care of EVERYTHING and the savings on my monthly electricity bill will be huge!. With the economy being so shaky right now, it's a relief to know I'm locked in to a very reasonable monthly fee for electricity. I don't see why everyone doesn't look into it!"
            </p>

            {/* Stars */}
            <div className="mb-4 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FF8E28', fontSize: '24px' }}>★</span>
              ))}
            </div>

            {/* Name */}
            <p className="mb-2 font-bold text-center" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', color: '#222222', letterSpacing: '0.03em' }}>
              JOHN DOE
            </p>

            {/* Subtitle */}
            <p className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#A1B502', letterSpacing: '0.03em' }}>
              Lorem Ipsum dolor.
            </p>
          </div>

          {/* Customer Image - Right Side */}
          <div style={{ width: '520px', height: '640px', overflow: 'hidden', borderRadius: '8px' }}>
            <img src="/img4.png" alt="Customer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReviews;
