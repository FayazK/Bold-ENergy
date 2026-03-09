import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const reviews = [
    {
      id: 1,
      name: 'JOHN DOE',
      subtitle: 'Lorem Ipsum Dolor',
      review: 'Everything about my experience with Empower has been positive! They took care of EVERYTHING and the savings on my monthly electricity bill will be huge!. With the economy being so shaky right now, it\'s a relief to know I\'m locked',
      rating: 5,
      showColons: true,
      isVideo: false
    },
    {
      id: 2,
      name: 'JOHN DOE',
      subtitle: 'Lorem Ipsum Dolor',
      videoThumbnail: '/john.jpg',
      isVideo: true
    },
    {
      id: 3,
      name: 'JOHN DOE',
      subtitle: 'Lorem Ipsum Dolor',
      review: 'Everything about my experience with Empower has been positive! They took care of EVERYTHING and the savings on my monthly electricity bill will be huge!. With the economy being so shaky right now, it\'s a relief to know I\'m locked',
      rating: 2,
      showColons: true,
      isVideo: false
    },
  ];

  const handleDotClick = (index, e) => {
    e.stopPropagation();
    setCurrentSlide(index);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-[100px]" style={{ backgroundColor: '#EBEEF3' }}>
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/reviewsectionbg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.05',
          zIndex: 0
        }}
      />
      <div className="relative px-4 sm:px-8 lg:px-16 xl:px-[200px]" style={{ zIndex: 1 }}>
        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          <p className="text-base sm:text-lg font-bold mb-2" style={{ fontFamily: 'Archivo, sans-serif', color: '#385887', letterSpacing: '0.03em' }}>
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'Quicksand, sans-serif', color: '#222222', letterSpacing: '0.03em' }}>
            Customer Reviews
          </h2>
          <p className="text-base mb-8" style={{ fontFamily: 'Archivo, sans-serif', color: '#222222', lineHeight: '1.6', letterSpacing: '0.03em' }}>
            Because we believe energy should do more than power homes — it
            should empower lives. With ethical practices, bold execution, and
            transparent communication, we're redefining what it means to go
            solar.
          </p>

          {/* Mobile Review Cards - Vertical Stack */}
          <div className="flex flex-col gap-8 items-center">
            {reviews.map((review) => (
              review.isVideo ? (
                <div
                  key={review.id}
                  className="w-full max-w-[400px] aspect-[3/4] rounded-lg overflow-hidden relative"
                  style={{ backgroundImage: `url(${review.videoThumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '3px' }}>
                        <path d="M8 5v14l11-7L8 5z" fill="#222222"/>
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 text-center pb-6">
                    <p className="mb-1 font-bold text-sm text-white" style={{ fontFamily: 'Quicksand, sans-serif' }}>{review.name}</p>
                    <p className="text-xs text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>{review.subtitle}</p>
                  </div>
                </div>
              ) : (
                <div
                  key={review.id}
                  className="w-full max-w-[400px] bg-white rounded-lg p-6 sm:p-8 pt-12 sm:pt-14 relative"
                  style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                >
                  {review.showColons && (
                    <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '-30px' }}>
                      <div className="w-[60px] h-[60px] rounded-full bg-[#A1B502] flex items-center justify-center">
                        <FaQuoteLeft className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}
                  <div className="mb-3 flex justify-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} style={{ color: '#FF8E28', fontSize: '24px' }}>★</span>
                    ))}
                  </div>
                  <p className="mb-4 text-center text-sm sm:text-base" style={{ fontFamily: 'Archivo, sans-serif', color: '#222222', lineHeight: '1.6' }}>
                    "{review.review}"
                  </p>
                  <div className="mx-auto mb-4" style={{ width: '30px', height: '2px', backgroundColor: '#A1B502' }} />
                  <p className="mb-1 font-bold text-sm text-center" style={{ fontFamily: 'Quicksand, sans-serif', color: '#222222' }}>{review.name}</p>
                  <p className="text-xs text-center" style={{ fontFamily: 'Poppins, sans-serif', color: '#A1B502' }}>{review.subtitle}</p>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row items-start justify-between gap-8">
          {/* Left Side Content */}
          <div className="relative w-auto">
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '20px', color: '#385887', letterSpacing: '0.03em', fontWeight: 'bold', marginBottom: '10px' }}>
              Testimonials
            </p>
            <h2 className="mb-4 text-[50px]" style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 'bold', color: '#222222', letterSpacing: '0.03em' }}>
              Customer Reviews
            </h2>
            <div className="w-full max-w-[570px] h-[652px]">
              <img
                src="/CustomerReviewSectionImage1.png.jpg"
                alt="Customer Review"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>

            {/* Review Cards Carousel - Desktop */}
            <div className="absolute" style={{ top: '200px', left: '385px', width: 'calc(100vw - 385px - 200px)', overflow: 'visible', paddingTop: '30px' }}>
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 410}px)`,
                  gap: '40px'
                }}
              >
                {reviews.map((review) => (
                  review.isVideo ? (
                    <div
                      key={review.id}
                      className="rounded-lg flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: '370px',
                        height: '450px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#FFFFFF'
                      }}
                    >
                      <div
                        className="relative overflow-hidden"
                        style={{
                          width: '350px',
                          height: '430px',
                          backgroundImage: `url(${review.videoThumbnail})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          borderRadius: '8px'
                        }}
                      >
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '4px' }}>
                              <path d="M8 5v14l11-7L8 5z" fill="#222222"/>
                            </svg>
                          </button>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
                          <p className="mb-2 font-bold" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', color: '#FFFFFF' }}>
                            {review.name}
                          </p>
                          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#FFFFFF' }}>
                            {review.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      key={review.id}
                      className="rounded-lg flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: '370px',
                        height: '450px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#FFFFFF'
                      }}
                    >
                      <div
                        className="bg-white rounded-lg flex flex-col items-center relative"
                        style={{
                          width: '350px',
                          height: '430px',
                          padding: '50px 24px 30px 24px'
                        }}
                      >
                        {review.showColons && (
                          <div className="absolute" style={{ top: '-36px', left: '50%', transform: 'translateX(-50%)' }}>
                            <div className="w-[72px] h-[72px] rounded-full bg-[#A1B502] flex items-center justify-center">
                              <FaQuoteLeft className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        )}
                        <div className="mb-4 flex justify-start">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} style={{ color: '#FF8E28', fontSize: '32px' }}>★</span>
                          ))}
                        </div>
                        <p className="mb-6 text-center" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#222222', lineHeight: '1.6' }}>
                          "{review.review}"
                        </p>
                        <div className="mb-4" style={{ width: '40px', height: '2px', backgroundColor: '#A1B502' }}></div>
                        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
                          <p className="mb-2 font-bold" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', color: '#222222' }}>
                            {review.name}
                          </p>
                          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#A1B502' }}>
                            {review.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>

              {/* Dot Navigation - Desktop */}
              <div className="flex gap-3 justify-center mt-6" style={{ marginLeft: '-500px' }}>
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => handleDotClick(index, e)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: currentSlide === index ? '12px' : '10px',
                      height: currentSlide === index ? '12px' : '10px',
                      backgroundColor: currentSlide === index ? '#A1B502' : '#CCCCCC',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-[590px] pt-[50px] pb-[100px]">
            <p className="text-lg" style={{ fontFamily: 'Archivo, sans-serif', color: '#222222', lineHeight: '1.6', letterSpacing: '0.03em' }}>
              Because we believe energy should do more than power homes — it
              should empower lives. With ethical practices, bold execution, and
              transparent communication, we're redefining what it means to go
              solar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
