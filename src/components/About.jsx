import { FaHome, FaUsers } from 'react-icons/fa';
import { useFormModal } from '../context/FormModalContext';

const About = () => {
  const { openHomeownerForm, openDealerForm } = useFormModal();
  return (
    <section id="about" className="bg-white pt-12 sm:pt-16 lg:pt-[100px] mb-12 sm:mb-16 lg:mb-[100px]">
      <div className="px-4 sm:px-8 lg:px-16 xl:px-[200px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-2xl font-bold" style={{ fontFamily: 'DM Sans, sans-serif', color: '#A1B502', marginBottom: '10px' }}>
            About us
          </p>
          <h2 className="font-bold text-gray-900 text-3xl sm:text-4xl lg:text-[50px] lg:leading-tight" style={{ fontFamily: 'Quicksand, sans-serif', marginBottom: '10px' }}>
            Solar That Actually Makes Sense
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Let's be real — the energy game is rigged. Prices keep going up.
          </p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Utility companies keep cashing in. You deserve better.
          </p>
        </div>

        {/* Three Image Sections */}
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center w-full sm:w-[340px] lg:w-[380px] xl:w-[427px] hover:shadow-lg transition-shadow duration-300">
            <div className="mb-5 w-full h-[250px] sm:h-[280px] lg:h-[300px] xl:h-[323px] overflow-hidden">
              <img
                src="/fast-install.jpg?v=2"
                alt="Fast, Clean Installs"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
              Fast, Clean Installs
            </h3>
            <p className="text-base text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Yes, we always pull permits.
            </p>
          </div>

          <div className="text-center w-full sm:w-[340px] lg:w-[380px] xl:w-[427px] hover:shadow-lg transition-shadow duration-300">
            <div className="mb-5 w-full h-[250px] sm:h-[280px] lg:h-[300px] xl:h-[323px] overflow-hidden">
              <img
                src="/honest-answers.jpg?v=2"
                alt="Honest Answers"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
              Honest Answers
            </h3>
            <p className="text-base text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Our team is available for you
            </p>
          </div>

          <div className="text-center w-full sm:w-[340px] lg:w-[380px] xl:w-[427px] hover:shadow-lg transition-shadow duration-300">
            <div className="mb-5 w-full h-[250px] sm:h-[280px] lg:h-[300px] xl:h-[323px] overflow-hidden">
              <img
                src="/unmatched-service.jpg?v=2"
                alt="Unmatched Service"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
              Unmatched Service
            </h3>
            <p className="text-base text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Before, during, and after install.
            </p>
          </div>
        </div>

        {/* Two CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-10 sm:mt-16">
          <button
            onClick={openHomeownerForm}
            className="px-8 py-4 rounded-xl text-white font-bold text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
            style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.05em' }}
          >
            <FaHome className="w-6 h-6" />
            HOME OWNERS
          </button>
          <button
            onClick={openDealerForm}
            className="px-8 py-4 rounded-xl text-white font-bold text-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
            style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#385887', letterSpacing: '0.05em' }}
          >
            <FaUsers className="w-6 h-6" />
            SALES DEALERS
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
