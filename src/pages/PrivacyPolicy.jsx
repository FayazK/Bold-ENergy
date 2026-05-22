const PrivacyPolicy = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full relative h-[280px] sm:h-[340px] lg:h-[400px] mb-12 sm:mb-16 lg:mb-[100px] overflow-hidden">
        <img
          src="/privacy-hero.jpg"
          alt=""
          aria-hidden="true"
          className="is-bg absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 z-[2] flex items-center justify-center">
          <div className="container-bold text-center pt-20 sm:pt-24">
            <h1
              className="font-bold text-white mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight"
              style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}
            >
              Privacy Policy
            </h1>
            <p
              className="text-white text-sm sm:text-base lg:text-lg"
              style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}
            >
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-[100px]">
        <div className="container-bold" style={{ maxWidth: '900px' }}>
          {/* Introduction */}
          <div className="mb-10 sm:mb-12">
            <p
              className="text-base sm:text-lg text-[#222] leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em' }}
            >
              Bold Energy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          {[
            {
              title: '1. Information We Collect',
              body: 'We may collect personal information that you voluntarily provide to us when you request a quote, register for our services, subscribe to our newsletter, or fill out a contact form.',
            },
            {
              title: '2. How We Use Your Information',
              body: 'We use the information we collect to provide, operate, and maintain our services, process your requests, and communicate with you.',
            },
            {
              title: '3. Contact Us',
              body: 'If you have any questions about this Privacy Policy, please contact us at info@bold.energy.',
            },
          ].map((s) => (
            <div key={s.title} className="mb-10 sm:mb-12">
              <h2
                className="font-bold mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#222] leading-tight"
                style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}
              >
                {s.title}
              </h2>
              <p
                className="text-base sm:text-lg text-[#222] leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em' }}
              >
                {s.body}
              </p>
            </div>
          ))}

          {/* Consent Section */}
          <div className="bg-[#F1F4D9] rounded-[10px] p-6 sm:p-8 lg:p-10">
            <h2
              className="font-bold mb-3 sm:mb-4 lg:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#222] leading-tight"
              style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}
            >
              Your Consent
            </h2>
            <p
              className="text-base sm:text-lg text-[#222] leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em' }}
            >
              By using our website and services, you consent to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
