const PrivacyPolicy = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full relative" style={{ height: '400px', marginBottom: '100px' }}>
        <img
          src="/privacy-hero.jpg"
          alt="Privacy Policy"
          className="w-full h-full object-cover"
          style={{ height: '400px' }}
        />
        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#000000',
            opacity: '0.6'
          }}
        />
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center" style={{ paddingLeft: '200px', paddingRight: '200px' }}>
            <h1 className="font-bold text-white mb-4" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '60px', letterSpacing: '0.03em' }}>
              Privacy Policy
            </h1>
            <p className="text-white" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '20px', letterSpacing: '0.03em' }}>
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="bg-white" style={{ paddingLeft: '200px', paddingRight: '200px', paddingBottom: '100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Introduction */}
          <div className="mb-12">
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              Bold Energy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              1. Information We Collect
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              We may collect personal information that you voluntarily provide to us when you request a quote, register for our services, subscribe to our newsletter, or fill out a contact form.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              2. How We Use Your Information
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              We use the information we collect to provide, operate, and maintain our services, process your requests, and communicate with you.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              3. Contact Us
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', marginBottom: '20px', letterSpacing: '0.03em' }}>
              If you have any questions about this Privacy Policy, please contact us at info@bold.energy.
            </p>
          </div>

          {/* Consent Section */}
          <div style={{ backgroundColor: '#F1F4D9', padding: '40px', borderRadius: '10px' }}>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '36px', color: '#222222', letterSpacing: '0.03em' }}>
              Your Consent
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#222222', lineHeight: '1.8', letterSpacing: '0.03em' }}>
              By using our website and services, you consent to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
