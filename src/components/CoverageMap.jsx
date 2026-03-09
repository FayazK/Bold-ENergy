import { useNavigate } from 'react-router-dom';
import { FaMapMarkedAlt } from 'react-icons/fa';

const CoverageMap = () => {
  const navigate = useNavigate();

  const coveredStates = [
    'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Florida', 'Georgia', 'Illinois', 'Indiana', 'Massachusetts',
    'Michigan', 'Minnesota', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'Ohio', 'South Carolina',
    'Tennessee', 'Utah', 'Vermont', 'Virginia', 'Wisconsin'
  ];

  return (
    <section className="w-full bg-[#F5F5F5] py-16 lg:py-[100px] px-4 sm:px-8 lg:px-16 xl:px-[200px]">
      <div className="text-center mb-10 lg:mb-[60px]">
        <p className="text-lg font-bold mb-2" style={{ fontFamily: 'Archivo, sans-serif', color: '#385887', letterSpacing: '0.03em' }}>
          Where We Operate
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-black mb-4" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
          Coverage Map
        </h2>
        <p className="text-base lg:text-lg text-gray-700 max-w-[700px] mx-auto" style={{ fontFamily: 'Archivo, sans-serif', lineHeight: '1.6', letterSpacing: '0.03em' }}>
          Bold Energy currently serves homeowners and partners across 25+ states — and growing every quarter.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[60px]">
        {/* Map Image */}
        <div className="w-full lg:w-[60%] flex justify-center">
          <div className="relative w-full max-w-[700px]">
            <img
              src="/map.png.png"
              alt="Bold Energy Coverage Map"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
            {/* Legend */}
            <div className="flex flex-row gap-6 mt-6 justify-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[5px] bg-[#A3B407] flex-shrink-0" />
                <span className="text-sm font-bold text-black" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>Covered Area</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[5px] bg-[#3B5B84] flex-shrink-0" />
                <span className="text-sm font-bold text-black" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>Coming Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* States List */}
        <div className="w-full lg:w-[40%]">
          <h3 className="text-xl lg:text-2xl font-bold text-black mb-6" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
            States We Currently Serve
          </h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8">
            {coveredStates.map((state) => (
              <div key={state} className="flex items-center gap-2 py-1">
                <div className="w-2 h-2 rounded-full bg-[#A1B502] flex-shrink-0" />
                <span className="text-sm lg:text-base text-black" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.03em' }}>
                  {state}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate('/states-we-cover')}
            className="bg-[#A1B502] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:brightness-110 hover:shadow-lg transition-all duration-300"
            style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '0.05em' }}
          >
            <FaMapMarkedAlt className="w-5 h-5" />
            VIEW ALL STATES
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
