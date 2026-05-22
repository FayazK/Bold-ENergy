import { useState, useEffect } from 'react';
import { FaFileAlt, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useFormModal } from '../context/FormModalContext';
import { sendForm } from '../lib/sendForm';

const states = [
  'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Florida', 'Georgia', 'Illinois', 'Indiana', 'Massachusetts',
  'Michigan', 'Minnesota', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'Ohio', 'South Carolina',
  'Tennessee', 'Utah', 'Vermont', 'Virginia', 'Wisconsin',
];

const installOptions = ['Solar System', 'Solar + Battery', 'Battery Only', 'EV Charger'];
const billOptions = ['Under $100', '$100 - $150', '$150 - $250', '$250 - $400', '$400+'];

const HomeownerFormModal = () => {
  const { homeownerOpen, closeHomeownerForm } = useFormModal();

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: '',
    installType: '',
    monthlyBill: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && homeownerOpen) closeHomeownerForm();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [homeownerOpen, closeHomeownerForm]);

  // Lock body scroll when open
  useEffect(() => {
    if (homeownerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [homeownerOpen]);

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[\d\s()+\-]{7,}$/.test(form.phone.trim())) newErrors.phone = 'Enter a valid phone number';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) newErrors.email = 'Enter a valid email';
    if (!form.state) newErrors.state = 'Select a state';
    if (!form.installType) newErrors.installType = 'Select an option';
    if (!form.monthlyBill) newErrors.monthlyBill = 'Select a range';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length !== 0) return;
    setSending(true);
    setSendError('');
    try {
      await sendForm('homeowner_modal', form);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ fullName: '', phone: '', email: '', state: '', installType: '', monthlyBill: '' });
        closeHomeownerForm();
      }, 2500);
    } catch (err) {
      setSendError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputClass = (field) =>
    `w-full py-2.5 lg:py-3 px-3 sm:px-4 rounded-lg bg-white text-sm lg:text-base outline-none transition-all duration-200 ${errors[field] ? 'ring-2 ring-red-400' : 'focus:ring-2 focus:ring-[#A1B502]'}`;

  const selectClass = (field) =>
    `w-full flex items-center justify-between py-2.5 lg:py-3 px-3 sm:px-4 rounded-lg bg-white cursor-pointer transition-all duration-200 text-sm lg:text-base ${errors[field] ? 'ring-2 ring-red-400' : 'hover:shadow-sm'}`;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 transition-all duration-300 ${homeownerOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      aria-hidden={!homeownerOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Homeowner Quote Request"
    >
      <div className="absolute inset-0 bg-black/60" onClick={closeHomeownerForm} />

      <div className={`relative w-full max-w-[700px] max-h-[92vh] overflow-y-auto rounded-xl shadow-2xl transition-transform duration-300 ${homeownerOpen ? 'scale-100' : 'scale-95'}`} style={{ backgroundColor: '#385887' }}>
        <button
          onClick={closeHomeownerForm}
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
            <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>Thank You!</h3>
            <p className="text-white/80" style={{ fontFamily: 'DM Sans, sans-serif' }}>We'll be in touch within 24 hours with your free solar estimate.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="p-5 sm:p-7 lg:p-10 pr-12 sm:pr-7 lg:pr-10">
            <p className="mb-2 text-sm sm:text-base" style={{ fontFamily: 'DM Sans, sans-serif', color: '#A1B502', letterSpacing: '0.03em' }}>
              Homeowner? Let's get you started.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-5 sm:mb-7">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}>
                Request A Quote
              </h3>
              <div className="hidden sm:block flex-1 max-w-[150px] h-[3px]" style={{ backgroundColor: '#A1B502' }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8">
              {/* Full Name */}
              <div>
                <label className="block mb-1.5 sm:mb-2 text-sm text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Full Name <span className="text-red-300">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className={inputClass('fullName')}
                  style={{ fontFamily: 'DM Sans, sans-serif', color: '#222222' }}
                />
                {errors.fullName && <p className="text-red-300 text-xs mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>{errors.fullName}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-1.5 sm:mb-2 text-sm text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Phone Number <span className="text-red-300">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={inputClass('phone')}
                  style={{ fontFamily: 'DM Sans, sans-serif', color: '#222222' }}
                />
                {errors.phone && <p className="text-red-300 text-xs mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1.5 sm:mb-2 text-sm text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Email Address <span className="text-red-300">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={inputClass('email')}
                  style={{ fontFamily: 'DM Sans, sans-serif', color: '#222222' }}
                />
                {errors.email && <p className="text-red-300 text-xs mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>{errors.email}</p>}
              </div>

              {/* State */}
              <div>
                <label className="block mb-1.5 sm:mb-2 text-sm text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  State <span className="text-red-300">*</span>
                </label>
                <div className="relative">
                  <select
                    value={form.state}
                    onChange={(e) => handleChange('state', e.target.value)}
                    className={selectClass('state')}
                    style={{ fontFamily: 'DM Sans, sans-serif', color: form.state ? '#222222' : '#999', appearance: 'none' }}
                  >
                    <option value="" disabled>Select your state</option>
                    {states.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#222222] pointer-events-none" />
                </div>
                {errors.state && <p className="text-red-300 text-xs mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>{errors.state}</p>}
              </div>

              {/* Install Type */}
              <div>
                <label className="block mb-1.5 sm:mb-2 text-sm text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  What to Install? <span className="text-red-300">*</span>
                </label>
                <div className="relative">
                  <select
                    value={form.installType}
                    onChange={(e) => handleChange('installType', e.target.value)}
                    className={selectClass('installType')}
                    style={{ fontFamily: 'DM Sans, sans-serif', color: form.installType ? '#222222' : '#999', appearance: 'none' }}
                  >
                    <option value="" disabled>Select option</option>
                    {installOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#222222] pointer-events-none" />
                </div>
                {errors.installType && <p className="text-red-300 text-xs mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>{errors.installType}</p>}
              </div>

              {/* Monthly Bill */}
              <div>
                <label className="block mb-1.5 sm:mb-2 text-sm text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Monthly Electric Bill? <span className="text-red-300">*</span>
                </label>
                <div className="relative">
                  <select
                    value={form.monthlyBill}
                    onChange={(e) => handleChange('monthlyBill', e.target.value)}
                    className={selectClass('monthlyBill')}
                    style={{ fontFamily: 'DM Sans, sans-serif', color: form.monthlyBill ? '#222222' : '#999', appearance: 'none' }}
                  >
                    <option value="" disabled>Select range</option>
                    {billOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#222222] pointer-events-none" />
                </div>
                {errors.monthlyBill && <p className="text-red-300 text-xs mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>{errors.monthlyBill}</p>}
              </div>
            </div>

            {sendError && (
              <p className="text-red-300 text-sm mb-4 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {sendError}
              </p>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={sending}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-bold hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.05em' }}
              >
                <FaFileAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                {sending ? 'SENDING…' : 'SUBMIT REQUEST'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default HomeownerFormModal;
