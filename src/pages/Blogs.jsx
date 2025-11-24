const Blogs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full relative">
        <img
          src="/blogs.png"
          alt="Blog"
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
            Blog
          </h1>
        </div>
      </section>

      {/* Blogs Section */}
      <section style={{ paddingLeft: '200px', paddingRight: '200px', paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="flex justify-center" style={{ gap: '40px' }}>
          {/* Blog 1 */}
          <div style={{ width: '422px', height: '653px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            {/* Date */}
            <p className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', letterSpacing: '0.03em' }}>
              April 16, 2024
            </p>

            {/* Image Container */}
            <div className="mb-4" style={{ width: '380px', height: '330px', backgroundColor: '#E5E5E5', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <img src="/blog1.jpg" alt="Blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Category Badge */}
              <div style={{ position: 'absolute', top: '15px', left: '15px', height: '46px', backgroundColor: '#FFFFFF', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#A1B502' }}>
                  SOLAR
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '25px', fontWeight: 'bold', color: '#222222', lineHeight: '1.3', letterSpacing: '0.03em' }}>
              How the Solar Eclipse Will Impact Your Solar Panels
            </h3>

            {/* Description */}
            <p className="mb-8" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', lineHeight: '1.5', letterSpacing: '0.03em' }}>
              The next total solar eclipse is slated to darken the skies of North America...
            </p>

            {/* Keep Reading Link */}
            <a href="#" className="flex items-center gap-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#A1B502', fontWeight: 'bold', textDecoration: 'none' }}>
              Keep Reading
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Blog 2 */}
          <div style={{ width: '422px', height: '653px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            {/* Date */}
            <p className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', letterSpacing: '0.03em' }}>
              March 22, 2024
            </p>

            {/* Image Container */}
            <div className="mb-4" style={{ width: '380px', height: '330px', backgroundColor: '#E5E5E5', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <img src="/blog2.jpg" alt="Blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Category Badge */}
              <div style={{ position: 'absolute', top: '15px', left: '15px', height: '46px', backgroundColor: '#FFFFFF', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#A1B502' }}>
                  UNCATEGORIZED
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '25px', fontWeight: 'bold', color: '#222222', lineHeight: '1.3', letterSpacing: '0.03em' }}>
              Five Popular Solar Panel Myths Debunked
            </h3>

            {/* Description */}
            <p className="mb-8" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', lineHeight: '1.5', letterSpacing: '0.03em' }}>
              As our fossil fuel sources run out, solar panels are the most popular...
            </p>

            {/* Keep Reading Link */}
            <a href="#" className="flex items-center gap-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#A1B502', fontWeight: 'bold', textDecoration: 'none' }}>
              Keep Reading
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Blog 3 */}
          <div style={{ width: '422px', height: '653px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            {/* Date */}
            <p className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', letterSpacing: '0.03em' }}>
              May 8, 2024
            </p>

            {/* Image Container */}
            <div className="mb-4" style={{ width: '380px', height: '330px', backgroundColor: '#E5E5E5', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <img src="/blog3.jpg" alt="Blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Category Badge */}
              <div style={{ position: 'absolute', top: '15px', left: '15px', height: '46px', backgroundColor: '#FFFFFF', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#A1B502' }}>
                  SOLAR PROCESS
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '25px', fontWeight: 'bold', color: '#222222', lineHeight: '1.3', letterSpacing: '0.03em' }}>
              Everything You Need to Know about Solar Batteries
            </h3>

            {/* Description */}
            <p className="mb-8" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', lineHeight: '1.5', letterSpacing: '0.03em' }}>
              Green energy allows pollution-free means to generate electricity...
            </p>

            {/* Keep Reading Link */}
            <a href="#" className="flex items-center gap-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#A1B502', fontWeight: 'bold', textDecoration: 'none' }}>
              Keep Reading
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Second Row of Blogs */}
        <div className="flex justify-center" style={{ gap: '40px', marginTop: '60px' }}>
          {/* Blog 4 */}
          <div style={{ width: '422px', height: '653px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            {/* Date */}
            <p className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', letterSpacing: '0.03em' }}>
              April 16, 2024
            </p>

            {/* Image Container */}
            <div className="mb-4" style={{ width: '380px', height: '330px', backgroundColor: '#E5E5E5', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <img src="/blog1.jpg" alt="Blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Category Badge */}
              <div style={{ position: 'absolute', top: '15px', left: '15px', height: '46px', backgroundColor: '#FFFFFF', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#A1B502' }}>
                  SOLAR
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '25px', fontWeight: 'bold', color: '#222222', lineHeight: '1.3', letterSpacing: '0.03em' }}>
              How the Solar Eclipse Will Impact Your Solar Panels
            </h3>

            {/* Description */}
            <p className="mb-8" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', lineHeight: '1.5', letterSpacing: '0.03em' }}>
              The next total solar eclipse is slated to darken the skies of North America...
            </p>

            {/* Keep Reading Link */}
            <a href="#" className="flex items-center gap-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#A1B502', fontWeight: 'bold', textDecoration: 'none' }}>
              Keep Reading
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Blog 5 */}
          <div style={{ width: '422px', height: '653px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            {/* Date */}
            <p className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', letterSpacing: '0.03em' }}>
              March 22, 2024
            </p>

            {/* Image Container */}
            <div className="mb-4" style={{ width: '380px', height: '330px', backgroundColor: '#E5E5E5', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <img src="/blog2.jpg" alt="Blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Category Badge */}
              <div style={{ position: 'absolute', top: '15px', left: '15px', height: '46px', backgroundColor: '#FFFFFF', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#A1B502' }}>
                  UNCATEGORIZED
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '25px', fontWeight: 'bold', color: '#222222', lineHeight: '1.3', letterSpacing: '0.03em' }}>
              Five Popular Solar Panel Myths Debunked
            </h3>

            {/* Description */}
            <p className="mb-8" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', lineHeight: '1.5', letterSpacing: '0.03em' }}>
              As our fossil fuel sources run out, solar panels are the most popular...
            </p>

            {/* Keep Reading Link */}
            <a href="#" className="flex items-center gap-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#A1B502', fontWeight: 'bold', textDecoration: 'none' }}>
              Keep Reading
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Blog 6 */}
          <div style={{ width: '422px', height: '653px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            {/* Date */}
            <p className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', letterSpacing: '0.03em' }}>
              May 8, 2024
            </p>

            {/* Image Container */}
            <div className="mb-4" style={{ width: '380px', height: '330px', backgroundColor: '#E5E5E5', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <img src="/blog3.jpg" alt="Blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Category Badge */}
              <div style={{ position: 'absolute', top: '15px', left: '15px', height: '46px', backgroundColor: '#FFFFFF', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#A1B502' }}>
                  SOLAR PROCESS
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '25px', fontWeight: 'bold', color: '#222222', lineHeight: '1.3', letterSpacing: '0.03em' }}>
              Everything You Need to Know about Solar Batteries
            </h3>

            {/* Description */}
            <p className="mb-8" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', lineHeight: '1.5', letterSpacing: '0.03em' }}>
              Green energy allows pollution-free means to generate electricity...
            </p>

            {/* Keep Reading Link */}
            <a href="#" className="flex items-center gap-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#A1B502', fontWeight: 'bold', textDecoration: 'none' }}>
              Keep Reading
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Third Row of Blogs */}
        <div className="flex justify-center" style={{ gap: '40px', marginTop: '60px' }}>
          {/* Blog 7 */}
          <div style={{ width: '422px', height: '653px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            {/* Date */}
            <p className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', letterSpacing: '0.03em' }}>
              April 16, 2024
            </p>

            {/* Image Container */}
            <div className="mb-4" style={{ width: '380px', height: '330px', backgroundColor: '#E5E5E5', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <img src="/blog1.jpg" alt="Blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Category Badge */}
              <div style={{ position: 'absolute', top: '15px', left: '15px', height: '46px', backgroundColor: '#FFFFFF', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#A1B502' }}>
                  SOLAR
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '25px', fontWeight: 'bold', color: '#222222', lineHeight: '1.3', letterSpacing: '0.03em' }}>
              How the Solar Eclipse Will Impact Your Solar Panels
            </h3>

            {/* Description */}
            <p className="mb-8" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', lineHeight: '1.5', letterSpacing: '0.03em' }}>
              The next total solar eclipse is slated to darken the skies of North America...
            </p>

            {/* Keep Reading Link */}
            <a href="#" className="flex items-center gap-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#A1B502', fontWeight: 'bold', textDecoration: 'none' }}>
              Keep Reading
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Blog 8 */}
          <div style={{ width: '422px', height: '653px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            {/* Date */}
            <p className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', letterSpacing: '0.03em' }}>
              March 22, 2024
            </p>

            {/* Image Container */}
            <div className="mb-4" style={{ width: '380px', height: '330px', backgroundColor: '#E5E5E5', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <img src="/blog2.jpg" alt="Blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Category Badge */}
              <div style={{ position: 'absolute', top: '15px', left: '15px', height: '46px', backgroundColor: '#FFFFFF', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#A1B502' }}>
                  UNCATEGORIZED
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '25px', fontWeight: 'bold', color: '#222222', lineHeight: '1.3', letterSpacing: '0.03em' }}>
              Five Popular Solar Panel Myths Debunked
            </h3>

            {/* Description */}
            <p className="mb-8" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', lineHeight: '1.5', letterSpacing: '0.03em' }}>
              As our fossil fuel sources run out, solar panels are the most popular...
            </p>

            {/* Keep Reading Link */}
            <a href="#" className="flex items-center gap-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#A1B502', fontWeight: 'bold', textDecoration: 'none' }}>
              Keep Reading
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Blog 9 */}
          <div style={{ width: '422px', height: '653px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            {/* Date */}
            <p className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', letterSpacing: '0.03em' }}>
              May 8, 2024
            </p>

            {/* Image Container */}
            <div className="mb-4" style={{ width: '380px', height: '330px', backgroundColor: '#E5E5E5', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <img src="/blog3.jpg" alt="Blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Category Badge */}
              <div style={{ position: 'absolute', top: '15px', left: '15px', height: '46px', backgroundColor: '#FFFFFF', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#A1B502' }}>
                  SOLAR PROCESS
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '25px', fontWeight: 'bold', color: '#222222', lineHeight: '1.3', letterSpacing: '0.03em' }}>
              Everything You Need to Know about Solar Batteries
            </h3>

            {/* Description */}
            <p className="mb-8" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', lineHeight: '1.5', letterSpacing: '0.03em' }}>
              Green energy allows pollution-free means to generate electricity...
            </p>

            {/* Keep Reading Link */}
            <a href="#" className="flex items-center gap-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#A1B502', fontWeight: 'bold', textDecoration: 'none' }}>
              Keep Reading
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Fourth Row of Blogs */}
        <div className="flex justify-center" style={{ gap: '40px', marginTop: '60px' }}>
          {/* Blog 10 */}
          <div style={{ width: '422px', height: '653px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            {/* Date */}
            <p className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', letterSpacing: '0.03em' }}>
              April 16, 2024
            </p>

            {/* Image Container */}
            <div className="mb-4" style={{ width: '380px', height: '330px', backgroundColor: '#E5E5E5', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <img src="/blog1.jpg" alt="Blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Category Badge */}
              <div style={{ position: 'absolute', top: '15px', left: '15px', height: '46px', backgroundColor: '#FFFFFF', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#A1B502' }}>
                  SOLAR
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '25px', fontWeight: 'bold', color: '#222222', lineHeight: '1.3', letterSpacing: '0.03em' }}>
              How the Solar Eclipse Will Impact Your Solar Panels
            </h3>

            {/* Description */}
            <p className="mb-8" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', lineHeight: '1.5', letterSpacing: '0.03em' }}>
              The next total solar eclipse is slated to darken the skies of North America...
            </p>

            {/* Keep Reading Link */}
            <a href="#" className="flex items-center gap-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#A1B502', fontWeight: 'bold', textDecoration: 'none' }}>
              Keep Reading
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Blog 11 */}
          <div style={{ width: '422px', height: '653px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            {/* Date */}
            <p className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', letterSpacing: '0.03em' }}>
              March 22, 2024
            </p>

            {/* Image Container */}
            <div className="mb-4" style={{ width: '380px', height: '330px', backgroundColor: '#E5E5E5', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <img src="/blog2.jpg" alt="Blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Category Badge */}
              <div style={{ position: 'absolute', top: '15px', left: '15px', height: '46px', backgroundColor: '#FFFFFF', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#A1B502' }}>
                  UNCATEGORIZED
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '25px', fontWeight: 'bold', color: '#222222', lineHeight: '1.3', letterSpacing: '0.03em' }}>
              Five Popular Solar Panel Myths Debunked
            </h3>

            {/* Description */}
            <p className="mb-8" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', lineHeight: '1.5', letterSpacing: '0.03em' }}>
              As our fossil fuel sources run out, solar panels are the most popular...
            </p>

            {/* Keep Reading Link */}
            <a href="#" className="flex items-center gap-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#A1B502', fontWeight: 'bold', textDecoration: 'none' }}>
              Keep Reading
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Blog 12 */}
          <div style={{ width: '422px', height: '653px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            {/* Date */}
            <p className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', letterSpacing: '0.03em' }}>
              May 8, 2024
            </p>

            {/* Image Container */}
            <div className="mb-4" style={{ width: '380px', height: '330px', backgroundColor: '#E5E5E5', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <img src="/blog3.jpg" alt="Blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Category Badge */}
              <div style={{ position: 'absolute', top: '15px', left: '15px', height: '46px', backgroundColor: '#FFFFFF', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', whiteSpace: 'nowrap' }}>
                <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#A1B502' }}>
                  SOLAR PROCESS
                </span>
              </div>
            </div>

            {/* Heading */}
            <h3 className="mb-6" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '25px', fontWeight: 'bold', color: '#222222', lineHeight: '1.3', letterSpacing: '0.03em' }}>
              Everything You Need to Know about Solar Batteries
            </h3>

            {/* Description */}
            <p className="mb-8" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#666666', lineHeight: '1.5', letterSpacing: '0.03em' }}>
              Green energy allows pollution-free means to generate electricity...
            </p>

            {/* Keep Reading Link */}
            <a href="#" className="flex items-center gap-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#A1B502', fontWeight: 'bold', textDecoration: 'none' }}>
              Keep Reading
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#A1B502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
