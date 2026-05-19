import { FaChevronRight } from 'react-icons/fa';

const blogsData = [
  {
    id: 1,
    date: 'April 16, 2024',
    image: '/blog1.jpg',
    category: 'SOLAR',
    heading: 'How the Solar Eclipse Will Impact Your Solar Panels',
    description: 'The next total solar eclipse is slated to darken the skies of North America...',
  },
  {
    id: 2,
    date: 'March 22, 2024',
    image: '/blog2.jpg',
    category: 'UNCATEGORIZED',
    heading: 'Five Popular Solar Panel Myths Debunked',
    description: 'As our fossil fuel sources run out, solar panels are the most popular...',
  },
  {
    id: 3,
    date: 'May 8, 2024',
    image: '/blog3.jpg',
    category: 'SOLAR PROCESS',
    heading: 'Everything You Need to Know about Solar Batteries',
    description: 'Green energy allows pollution-free means to generate electricity...',
  },
  {
    id: 4,
    date: 'April 16, 2024',
    image: '/blog1.jpg',
    category: 'SOLAR',
    heading: 'How the Solar Eclipse Will Impact Your Solar Panels',
    description: 'The next total solar eclipse is slated to darken the skies of North America...',
  },
  {
    id: 5,
    date: 'March 22, 2024',
    image: '/blog2.jpg',
    category: 'UNCATEGORIZED',
    heading: 'Five Popular Solar Panel Myths Debunked',
    description: 'As our fossil fuel sources run out, solar panels are the most popular...',
  },
  {
    id: 6,
    date: 'May 8, 2024',
    image: '/blog3.jpg',
    category: 'SOLAR PROCESS',
    heading: 'Everything You Need to Know about Solar Batteries',
    description: 'Green energy allows pollution-free means to generate electricity...',
  },
  {
    id: 7,
    date: 'April 16, 2024',
    image: '/blog1.jpg',
    category: 'SOLAR',
    heading: 'How the Solar Eclipse Will Impact Your Solar Panels',
    description: 'The next total solar eclipse is slated to darken the skies of North America...',
  },
  {
    id: 8,
    date: 'March 22, 2024',
    image: '/blog2.jpg',
    category: 'UNCATEGORIZED',
    heading: 'Five Popular Solar Panel Myths Debunked',
    description: 'As our fossil fuel sources run out, solar panels are the most popular...',
  },
  {
    id: 9,
    date: 'May 8, 2024',
    image: '/blog3.jpg',
    category: 'SOLAR PROCESS',
    heading: 'Everything You Need to Know about Solar Batteries',
    description: 'Green energy allows pollution-free means to generate electricity...',
  },
  {
    id: 10,
    date: 'April 16, 2024',
    image: '/blog1.jpg',
    category: 'SOLAR',
    heading: 'How the Solar Eclipse Will Impact Your Solar Panels',
    description: 'The next total solar eclipse is slated to darken the skies of North America...',
  },
  {
    id: 11,
    date: 'March 22, 2024',
    image: '/blog2.jpg',
    category: 'UNCATEGORIZED',
    heading: 'Five Popular Solar Panel Myths Debunked',
    description: 'As our fossil fuel sources run out, solar panels are the most popular...',
  },
  {
    id: 12,
    date: 'May 8, 2024',
    image: '/blog3.jpg',
    category: 'SOLAR PROCESS',
    heading: 'Everything You Need to Know about Solar Batteries',
    description: 'Green energy allows pollution-free means to generate electricity...',
  },
];

const Blogs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full relative h-[300px] sm:h-[400px] lg:h-[550px]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/blogs.png"
            alt="Blog"
            loading="eager"
            className="w-full h-full object-cover"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#385887]/40 via-transparent to-transparent" />
          <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-[#A1B502]/8 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[30%] left-[5%] w-[400px] h-[400px] bg-[#385887]/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-[2]">
          <h1
            className="font-bold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[75px]"
            style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}
          >
            Blog
          </h1>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-[200px] py-12 sm:py-16 lg:py-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="group w-full bg-white rounded-[10px] p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
            >
              {/* Date */}
              <p
                className="mb-4 text-center"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#666666', letterSpacing: '0.03em' }}
              >
                {blog.date}
              </p>

              {/* Image Container */}
              <div className="mb-4 w-full h-[200px] sm:h-[250px] lg:h-[330px] bg-[#E5E5E5] rounded-lg overflow-hidden relative">
                <img
                  src={blog.image}
                  alt="Blog"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-[15px] left-[15px] h-[46px] bg-white rounded-[5px] flex items-center justify-center px-5 whitespace-nowrap shadow-sm">
                  <span
                    className="font-bold"
                    style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#A1B502' }}
                  >
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Heading */}
              <h3
                className="mb-6 text-center"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '25px', fontWeight: 'bold', color: '#222222', lineHeight: '1.3', letterSpacing: '0.03em' }}
              >
                {blog.heading}
              </h3>

              {/* Description */}
              <p
                className="mb-8 text-center"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#666666', lineHeight: '1.5', letterSpacing: '0.03em' }}
              >
                {blog.description}
              </p>

              {/* Keep Reading Link */}
              <a
                href="#"
                className="flex items-center justify-center gap-2 hover:text-[#8a9c02] transition-colors duration-200"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#A1B502', fontWeight: 'bold', textDecoration: 'none' }}
              >
                Keep Reading
                <FaChevronRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
