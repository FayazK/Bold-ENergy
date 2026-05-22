import { useState, useEffect, useCallback } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Fred N.',
    review:
      "I'm very satisfied with Empower. The crew is knowledgeable, friendly and professional. They kept in touch with me during the whole process. I already recommended Empower Energy Solutions to friends and family members and one has already signed up.",
  },
  {
    id: 2,
    name: 'Ted G.',
    review:
      "Ryan has been fantastic through the whole process. Helpful, knowledgeable and attentive to our needs. Always patient, never pushy and just an all around nice guy. If you're considering going Solar I highly recommend speaking with Ryan.",
  },
  {
    id: 3,
    name: 'Scott L.',
    review:
      "When Ryan knocked on our door, we felt comfortable listening to him as he explained the benefits of solar. His take-it-or-leave sales approach made us very comfortable deciding to move forward. An enjoyable experience.",
  },
  {
    id: 4,
    name: 'Nicolette T.',
    review:
      "Dalton is wonderful! Very genuine and knowledgeable. He did an excellent job explaining the solar program, details, and benefits — and wasn't pushy. Easy to work with and an excellent communicator. Our dog Charlie is a big fan too!",
  },
  {
    id: 5,
    name: 'Maxine S.',
    review:
      "We talked with a couple of different firms about solar, but Ryan was the only one who presented all the incentives and was up-front about the financing. He answered all of our questions and stayed in touch with us through the whole process.",
  },
  {
    id: 6,
    name: 'Rick S.',
    review:
      "Brenden was a pleasure to work with. Knowledgeable, professional, friendly & respectful. He made sure all of my questions were answered. I felt I could make an informed decision without feeling under pressure. I will recommend him to others.",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardWidth, setCardWidth] = useState(380);
  const [cardGap, setCardGap] = useState(24);

  const updateSizes = useCallback(() => {
    const w = window.innerWidth;
    if (w < 768) { setVisibleCount(1); setCardWidth(Math.min(w - 96, 340)); setCardGap(16); }
    else if (w < 1024) { setVisibleCount(2); setCardWidth(330); setCardGap(20); }
    else { setVisibleCount(3); setCardWidth(380); setCardGap(24); }
  }, []);

  useEffect(() => {
    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, [updateSizes]);

  const maxSlide = Math.max(0, reviews.length - visibleCount);
  useEffect(() => { if (currentSlide > maxSlide) setCurrentSlide(maxSlide); }, [maxSlide, currentSlide]);

  const prev = () => setCurrentSlide((s) => Math.max(0, s - 1));
  const next = () => setCurrentSlide((s) => Math.min(maxSlide, s + 1));

  return (
    <section className="py-14 lg:py-20 bg-[#F7F8FA] border-y border-[#1a1a1a]/[0.06]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header: heading on the left, rating chip on the right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 lg:mb-10">
          <div>
            <p
              className="text-[#A1B502] text-xs font-bold uppercase mb-2"
              style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.2em' }}
            >
              Customer Stories
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#1a1a1a] leading-[1.15]"
              style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '-0.01em' }}
            >
              Trusted by homeowners
              <br className="hidden sm:block" /> across the country.
            </h2>
          </div>

          {/* Rating chip */}
          <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 self-start md:self-end border border-[#1a1a1a]/[0.06]">
            <div className="flex flex-col">
              <span
                className="text-xl sm:text-2xl font-extrabold text-[#1a1a1a] leading-none"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                4.65<span className="text-[#1a1a1a]/50 text-base font-bold">/5</span>
              </span>
              <span
                className="text-[10px] font-bold uppercase text-[#1a1a1a]/60 mt-1"
                style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.15em' }}
              >
                500+ reviews
              </span>
            </div>
            <div className="h-7 w-px bg-[#1a1a1a]/15" />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 text-[#FF8E28]" />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                gap: `${cardGap}px`,
                transform: `translateX(-${currentSlide * (cardWidth + cardGap)}px)`,
              }}
            >
              {reviews.map((r) => (
                <article
                  key={r.id}
                  className="flex-shrink-0 group relative bg-white rounded-2xl border border-[#1a1a1a]/[0.08] hover:border-[#A1B502]/40 transition-colors duration-300 p-6 lg:p-7 flex flex-col"
                  style={{ width: `${cardWidth}px`, minHeight: '260px' }}
                >
                  {/* Decorative big quote mark in corner */}
                  <FaQuoteLeft
                    className="absolute top-5 right-5 w-7 h-7 text-[#A1B502]/15 group-hover:text-[#A1B502]/30 transition-colors duration-300"
                    aria-hidden="true"
                  />

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-3.5 h-3.5 text-[#FF8E28]" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p
                    className="text-[14px] lg:text-[15px] text-[#1a1a1a]/80 leading-relaxed mb-5 flex-grow"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    "{r.review}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#A1B502] to-[#7d8c00] flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p
                        className="text-sm font-bold text-[#1a1a1a] leading-tight"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {r.name}
                      </p>
                      <p
                        className="text-[11px] font-medium text-[#1a1a1a]/50 leading-tight"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Verified Homeowner
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Controls + counter */}
          <div className="flex items-center justify-between mt-6">
            <div
              className="text-sm font-medium text-[#1a1a1a]/60"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <span className="text-[#1a1a1a] font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
              <span className="mx-1.5">/</span>
              {String(maxSlide + 1).padStart(2, '0')}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={currentSlide === 0}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-[#1a1a1a]/15 flex items-center justify-center hover:bg-[#A1B502] hover:border-[#A1B502] hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#1a1a1a] disabled:hover:border-[#1a1a1a]/15"
              >
                <FaChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={next}
                disabled={currentSlide >= maxSlide}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-[#1a1a1a]/15 flex items-center justify-center hover:bg-[#A1B502] hover:border-[#A1B502] hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#1a1a1a] disabled:hover:border-[#1a1a1a]/15"
              >
                <FaChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
