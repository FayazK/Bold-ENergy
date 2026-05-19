import { FaQuoteLeft } from 'react-icons/fa';

const CustomerReviews = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full relative h-[300px] sm:h-[400px] lg:h-[550px]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/reviewsection.jpg"
            alt="Customer Reviews"
            className="w-full h-full object-cover object-center"
            loading="eager"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#385887]/40 via-transparent to-transparent" />
          <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-[#A1B502]/8 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[30%] left-[5%] w-[400px] h-[400px] bg-[#385887]/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-[2]">
          <h1 className="font-bold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[75px]" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            Customer Reviews
          </h1>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-[200px] py-12 sm:py-16 lg:py-[100px] xl:py-[200px] relative" style={{ backgroundColor: '#EBEEF3' }}>
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

        {/* First Review - Video Left, Review Right */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[60px] relative z-[1]">
          {/* Video Player - Left Side */}
          <div className="w-full max-w-[520px] h-[300px] sm:h-[400px] lg:h-[640px] bg-black relative overflow-hidden rounded-lg">
            {/* Video Thumbnail */}
            <img src="/john.jpg" alt="Video" className="w-full h-full object-cover object-center" loading="lazy" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '4px' }}>
                  <path d="M8 5v14l11-7L8 5z" fill="#222222"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Review Content - Right Side */}
          <div className="text-center max-w-[620px] w-full mx-auto">
            {/* Colons Image */}
            <div className="flex justify-center mb-6">
              <div className="w-[72px] h-[64px] rounded-full bg-[#A1B502] flex items-center justify-center">
                <FaQuoteLeft className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Review Text */}
            <p className="mb-6 text-center text-base sm:text-lg lg:text-xl xl:text-2xl" style={{ fontFamily: 'DM Sans, sans-serif', color: '#222222', lineHeight: '1.6', letterSpacing: '0.03em' }}>
              "Everything about my experience with Empower has been positive! They took care of EVERYTHING and the savings on my monthly electricity bill will be huge!. With the economy being so shaky right now, it's a relief to know I'm locked in to a very reasonable monthly fee for electricity. I don't see why everyone doesn't look into it!"
            </p>

            {/* Stars */}
            <div className="mb-4 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FF8E28', fontSize: '24px' }}>&#9733;</span>
              ))}
            </div>

            {/* Name */}
            <p className="mb-2 font-bold text-center" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', color: '#222222', letterSpacing: '0.03em' }}>
              JOHN DOE
            </p>

            {/* Subtitle */}
            <p className="text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#A1B502', letterSpacing: '0.03em' }}>
              Lorem Ipsum dolor.
            </p>
          </div>
        </div>

        {/* Second Review - Review Left, Customer Image Right */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-[60px] mt-16 lg:mt-24 relative z-[1]">
          {/* Review Content - Left Side */}
          <div className="text-center max-w-[620px] w-full mx-auto">
            {/* Colons Image */}
            <div className="flex justify-center mb-6">
              <div className="w-[72px] h-[64px] rounded-full bg-[#A1B502] flex items-center justify-center">
                <FaQuoteLeft className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Review Text */}
            <p className="mb-6 text-center text-base sm:text-lg lg:text-xl xl:text-2xl" style={{ fontFamily: 'DM Sans, sans-serif', color: '#222222', lineHeight: '1.6', letterSpacing: '0.03em' }}>
              "Everything about my experience with Empower has been positive! They took care of EVERYTHING and the savings on my monthly electricity bill will be huge!. With the economy being so shaky right now, it's a relief to know I'm locked in to a very reasonable monthly fee for electricity. I don't see why everyone doesn't look into it!"
            </p>

            {/* Stars */}
            <div className="mb-4 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FF8E28', fontSize: '24px' }}>&#9733;</span>
              ))}
            </div>

            {/* Name */}
            <p className="mb-2 font-bold text-center" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', color: '#222222', letterSpacing: '0.03em' }}>
              JOHN DOE
            </p>

            {/* Subtitle */}
            <p className="text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#A1B502', letterSpacing: '0.03em' }}>
              Lorem Ipsum dolor.
            </p>
          </div>

          {/* Customer Image - Right Side */}
          <div className="w-full max-w-[520px] h-[300px] sm:h-[400px] lg:h-[640px] overflow-hidden rounded-lg">
            <img src="/img2.png" alt="Customer" className="w-full h-full object-cover object-center" loading="lazy" />
          </div>
        </div>

        {/* Third Review - Video Left, Review Right (same as first) */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[60px] mt-16 lg:mt-24 relative z-[1]">
          {/* Video Player - Left Side */}
          <div className="w-full max-w-[520px] h-[300px] sm:h-[400px] lg:h-[640px] bg-black relative overflow-hidden rounded-lg">
            {/* Video Thumbnail */}
            <img src="/john.jpg" alt="Video" className="w-full h-full object-cover object-center" loading="lazy" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '4px' }}>
                  <path d="M8 5v14l11-7L8 5z" fill="#222222"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Review Content - Right Side */}
          <div className="text-center max-w-[620px] w-full mx-auto">
            {/* Colons Image */}
            <div className="flex justify-center mb-6">
              <div className="w-[72px] h-[64px] rounded-full bg-[#A1B502] flex items-center justify-center">
                <FaQuoteLeft className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Review Text */}
            <p className="mb-6 text-center text-base sm:text-lg lg:text-xl xl:text-2xl" style={{ fontFamily: 'DM Sans, sans-serif', color: '#222222', lineHeight: '1.6', letterSpacing: '0.03em' }}>
              "Everything about my experience with Empower has been positive! They took care of EVERYTHING and the savings on my monthly electricity bill will be huge!. With the economy being so shaky right now, it's a relief to know I'm locked in to a very reasonable monthly fee for electricity. I don't see why everyone doesn't look into it!"
            </p>

            {/* Stars */}
            <div className="mb-4 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FF8E28', fontSize: '24px' }}>&#9733;</span>
              ))}
            </div>

            {/* Name */}
            <p className="mb-2 font-bold text-center" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', color: '#222222', letterSpacing: '0.03em' }}>
              JOHN DOE
            </p>

            {/* Subtitle */}
            <p className="text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#A1B502', letterSpacing: '0.03em' }}>
              Lorem Ipsum dolor.
            </p>
          </div>
        </div>

        {/* Fourth Review - Review Left, Customer Image Right (same as second) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-[60px] mt-16 lg:mt-24 relative z-[1]">
          {/* Review Content - Left Side */}
          <div className="text-center max-w-[620px] w-full mx-auto">
            {/* Colons Image */}
            <div className="flex justify-center mb-6">
              <div className="w-[72px] h-[64px] rounded-full bg-[#A1B502] flex items-center justify-center">
                <FaQuoteLeft className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Review Text */}
            <p className="mb-6 text-center text-base sm:text-lg lg:text-xl xl:text-2xl" style={{ fontFamily: 'DM Sans, sans-serif', color: '#222222', lineHeight: '1.6', letterSpacing: '0.03em' }}>
              "Everything about my experience with Empower has been positive! They took care of EVERYTHING and the savings on my monthly electricity bill will be huge!. With the economy being so shaky right now, it's a relief to know I'm locked in to a very reasonable monthly fee for electricity. I don't see why everyone doesn't look into it!"
            </p>

            {/* Stars */}
            <div className="mb-4 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FF8E28', fontSize: '24px' }}>&#9733;</span>
              ))}
            </div>

            {/* Name */}
            <p className="mb-2 font-bold text-center" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', color: '#222222', letterSpacing: '0.03em' }}>
              JOHN DOE
            </p>

            {/* Subtitle */}
            <p className="text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#A1B502', letterSpacing: '0.03em' }}>
              Lorem Ipsum dolor.
            </p>
          </div>

          {/* Customer Image - Right Side */}
          <div className="w-full max-w-[520px] h-[300px] sm:h-[400px] lg:h-[640px] overflow-hidden rounded-lg">
            <img src="/img4.png" alt="Customer" className="w-full h-full object-cover object-center" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReviews;
