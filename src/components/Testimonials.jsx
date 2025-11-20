import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <section className="relative" style={{ backgroundColor: '#EBEEF3', padding: '100px' }}>
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
      <div className="relative" style={{ paddingLeft: '200px', paddingRight: '200px', zIndex: 1 }}>
        <div className="flex items-start justify-between">
          {/* Left Side Content */}
          <div className="relative">
            <p className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '20px', color: '#222222' }}>
              Testimonials
            </p>
            <h2 className="mb-4" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#222222' }}>
              Customer Reviews
            </h2>
            <div style={{ width: '570px', height: '652px' }}>
              <img
                src="/CustomerReviewSectionImage1.png.jpg"
                alt="Customer Review"
                className="w-full h-full object-cover rounded-lg"
                style={{ width: '570px', height: '652px', transform: 'scaleX(-1)' }}
              />
            </div>

            {/* Review Cards Carousel */}
            <div className="absolute" style={{ top: '200px', left: '385px', width: 'calc(100vw - 385px - 200px)', overflow: 'visible', paddingTop: '30px' }}>
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 410}px)`,
                  gap: '40px'
                }}
              >
                {reviews.map((review, index) => (
                  review.isVideo ? (
                    // Video Player Card
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
                      {/* Inner Video Container */}
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
                        {/* Dark Overlay */}
                        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="w-20 h-20 rounded-full bg-white flex items-center justify-center hover:opacity-90 transition-opacity">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '4px' }}>
                              <path d="M8 5v14l11-7L8 5z" fill="#222222"/>
                            </svg>
                          </button>
                        </div>

                        {/* Text Content at Bottom */}
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
                    // Regular Review Card
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
                      {/* Inner Card Container */}
                      <div
                        className="bg-white rounded-lg flex flex-col items-center relative"
                        style={{
                          width: '350px',
                          height: '430px',
                          padding: '50px 24px 30px 24px'
                        }}
                      >
                        {/* Colons Image */}
                        {review.showColons && (
                          <div className="absolute" style={{ top: '-36px', left: '50%', transform: 'translateX(-50%)' }}>
                            <img src="/Colons.png.png" alt="Quote" style={{ width: '72px', height: 'auto' }} />
                          </div>
                        )}

                        {/* Stars */}
                        <div className="mb-4 flex justify-start">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} style={{ color: '#FF8E28', fontSize: '32px' }}>★</span>
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="mb-6 text-center" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#222222', lineHeight: '1.6' }}>
                          "{review.review}"
                        </p>

                        {/* Green Divider Line */}
                        <div className="mb-4" style={{ width: '40px', height: '2px', backgroundColor: '#A1B502' }}></div>

                        {/* Text Content at Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
                          {/* Name */}
                          <p className="mb-2 font-bold" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '16px', color: '#222222' }}>
                            {review.name}
                          </p>

                          {/* Subtitle */}
                          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#A1B502' }}>
                            {review.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>

              {/* Dot Navigation */}
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
          <div style={{ width: '590px', paddingTop: '50px', paddingBottom: '100px' }}>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.6' }}>
              Because we believe energy should do more than power homes — it<br />
              should empower lives. With ethical practices, bold execution, and<br />
              transparent communication, we're redefining what it means to go<br />
              solar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
