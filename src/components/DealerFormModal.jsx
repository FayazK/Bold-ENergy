import { useState, useEffect } from 'react';
import { FaHandshake, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useFormModal } from '../context/FormModalContext';

const states = [
  'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Florida', 'Georgia', 'Illinois', 'Indiana', 'Massachusetts',
  'Michigan', 'Minnesota', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'Ohio', 'South Carolina',
  'Tennessee', 'Utah', 'Vermont', 'Virginia', 'Wisconsin',
];

const volumeOptions = ['1-5 deals/month', '6-15 deals/month', '16-30 deals/month', '30+ deals/month'];

const DealerFormModal = () => {
  const { dealerOpen, closeDealerForm } = useFormModal();

  const [form, setForm] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    state: '',
    volume: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && dealerOpen) closeDealerForm();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [dealerOpen, closeDealerForm]);

  useEffect(() => {
    if (dealerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [dealerOpen]);

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!form.company.trim()) newErrors.company = 'Company name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[\d\s()+\-]{7,}$/.test(form.phone.trim())) newErrors.phone = 'Enter a valid phone number';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) newErrors.email = 'Enter a valid email';
    if (!form.state) newErrors.state = 'Select a state';
    if (!form.volume) newErrors.volume = 'Select a range';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ fullName: '', company: '', phone: '', email: '', state: '', volume: '' });
        closeDealerForm();
      }, 2000);
    }
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputClass = (field) =>
    `w-full py-2 sm:py-2.5 lg:py-3 px-3 sm:px-4 lg:px-5 rounded-lg bg-white text-xs sm:text-sm lg:text-base outline-none transition-all duration-200 ${errors[field] ? 'ring-2 ring-red-400' : 'focus:ring-2 focus:ring-[#A1B502]'}`;

  const selectClass = (field) =>
    `w-full flex items-center justify-between py-2 sm:py-2.5 lg:py-3 px-3 sm:px-4 lg:px-5 rounded-lg bg-white cursor-pointer transition-all duration-200 ${errors[field] ? 'ring-2 ring-red-400' : 'hover:shadow-sm'}`;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${dealerOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      aria-hidden={!dealerOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Dealer Partner Application"
    >
      <div className="absolute inset-0 bg-black/60" onClick={closeDealerForm} />

      <div className={`relative w-full max-w-[700px] max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl transition-transform duration-300 ${dealerOpen ? 'scale-100' : 'scale-95'}`} style={{ backgroundColor: '#385887' }}>
        <button
          onClick={closeDealerForm}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200 z-10"
          aria-label="Close form"
        >
          <FaTimes className="w-5 h-5 text-white" />
        </button>

        {submitted ? (
          <div className="p-10 sm:p-16 text-center">
            <div className="w-16 h-16 rounded-full bg-[#A1B502] flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>Application Received!</h3>
            <p className="text-white/80" style={{ fontFamily: 'Archivo, sans-serif' }}>Our partnerships team will reach out within 1–2 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 lg:p-10">
            <p className="mb-2 text-sm sm:text-base lg:text-lg" style={{ fontFamily: 'Archivo, sans-serif', color: '#A1B502', letterSpacing: '0.03em' }}>
              Ready to partner up?
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
                Dealer Application
              </h3>
              <div className="hidden sm:block w-16 lg:w-24 xl:w-[150px] h-[3px]" style={{ backgroundColor: '#A1B502' }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8">
              {/* Full Name */}
              <div>
                <label className="block mb-1.5 sm:mb-2 text-xs sm:text-sm lg:text-base text-white" style={{ fontFamily: 'Archivo, sans-serif' }}>
                  Full Name <span className="text-red-300">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className={inputClass('fullName')}
                  style={{ fontFamily: 'Archivo, sans-serif', color: '#222222' }}
                />
                {errors.fullName && <p className="text-red-300 text-xs mt-1" style={{ fontFamily: 'Archivo, sans-serif' }}>{errors.fullName}</p>}
              </div>

              {/* Company */}
              <div>
                <label className="block mb-1.5 sm:mb-2 text-xs sm:text-sm lg:text-base text-white" style={{ fontFamily: 'Archivo, sans-serif' }}>
                  Company Name <span className="text-red-300">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Solar Company"
                  value={form.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className={inputClass('company')}
                  style={{ fontFamily: 'Archivo, sans-serif', color: '#222222' }}
                />
                {errors.company && <p className="text-red-300 text-xs mt-1" style={{ fontFamily: 'Archivo, sans-serif' }}>{errors.company}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-1.5 sm:mb-2 text-xs sm:text-sm lg:text-base text-white" style={{ fontFamily: 'Archivo, sans-serif' }}>
                  Phone Number <span className="text-red-300">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={inputClass('phone')}
                  style={{ fontFamily: 'Archivo, sans-serif', color: '#222222' }}
                />
                {errors.phone && <p className="text-red-300 text-xs mt-1" style={{ fontFamily: 'Archivo, sans-serif' }}>{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1.5 sm:mb-2 text-xs sm:text-sm lg:text-base text-white" style={{ fontFamily: 'Archivo, sans-serif' }}>
                  Email Address <span className="text-red-300">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={inputClass('email')}
                  style={{ fontFamily: 'Archivo, sans-serif', color: '#222222' }}
                />
                {errors.email && <p className="text-red-300 text-xs mt-1" style={{ fontFamily: 'Archivo, sans-serif' }}>{errors.email}</p>}
              </div>

              {/* State */}
              <div>
                <label className="block mb-1.5 sm:mb-2 text-xs sm:text-sm lg:text-base text-white" style={{ fontFamily: 'Archivo, sans-serif' }}>
                  State(s) You Operate In <span className="text-red-300">*</span>
                </label>
                <div className="relative">
                  <select
                    value={form.state}
                    onChange={(e) => handleChange('state', e.target.value)}
                    className={selectClass('state')}
                    style={{ fontFamily: 'Archivo, sans-serif', color: form.state ? '#222222' : '#999', appearance: 'none' }}
                  >
                    <option value="" disabled>Select state(s)</option>
                    {states.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#222222] pointer-events-none" />
                </div>
                {errors.state && <p className="text-red-300 text-xs mt-1" style={{ fontFamily: 'Archivo, sans-serif' }}>{errors.state}</p>}
              </div>

              {/* Monthly Deal Volume */}
              <div>
                <label className="block mb-1.5 sm:mb-2 text-xs sm:text-sm lg:text-base text-white" style={{ fontFamily: 'Archivo, sans-serif' }}>
                  Monthly Deal Volume <span className="text-red-300">*</span>
                </label>
                <div className="relative">
                  <select
                    value={form.volume}
                    onChange={(e) => handleChange('volume', e.target.value)}
                    className={selectClass('volume')}
                    style={{ fontFamily: 'Archivo, sans-serif', color: form.volume ? '#222222' : '#999', appearance: 'none' }}
                  >
                    <option value="" disabled>Select range</option>
                    {volumeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#222222] pointer-events-none" />
                </div>
                {errors.volume && <p className="text-red-300 text-xs mt-1" style={{ fontFamily: 'Archivo, sans-serif' }}>{errors.volume}</p>}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-bold hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base"
                style={{ fontFamily: 'Archivo, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.05em' }}
              >
                <FaHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                SUBMIT APPLICATION
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default DealerFormModal;
