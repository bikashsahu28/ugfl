import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import axios from 'axios';

const LoanApplicationForm = () => {
  const { t } = useTranslation();
  const initialFormState = {
    name: '',
    phone: '',
    address: '',
    goldType: '22K',
    goldWeight: '',
    agreeTerms: false 
  };

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('LoanApplicationForm.errors.name');
    if (!formData.phone.trim()) newErrors.phone = t('LoanApplicationForm.errors.phone');
    if (!formData.address.trim()) newErrors.address = t('LoanApplicationForm.errors.address');
    if (!formData.goldWeight) newErrors.goldWeight = t('LoanApplicationForm.errors.goldWeight');
    if (!formData.agreeTerms) newErrors.agreeTerms = t('LoanApplicationForm.errors.agreeTerms');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     setIsSubmitting(true);
      
  //     try {
  //       // Simulate API call
  //       await new Promise(resolve => setTimeout(resolve, 1500));
        
  //       if (!isMounted) return;
        
  //       console.log('Form submitted:', formData);
  //       setSubmitSuccess(true);
  //       setErrors({});
  //       setFormData(initialFormState);
        
  //       await Swal.fire({
  //         title: t('LoanApplicationForm.success.title'),
  //         text: t('LoanApplicationForm.success.message'),
  //         icon: "success",
  //         showClass: {
  //           popup: 'animate__animated animate__fadeInDown animate__faster'
  //         },
  //         hideClass: {
  //           popup: 'animate__animated animate__fadeOutUp animate__faster'
  //         },
  //         background: '#fff',
  //         backdrop: `
  //           rgba(245, 158, 11, 0.4)
  //           url("/images/nyan-cat.gif")
  //           left top
  //           no-repeat
  //         `,
  //         confirmButtonColor: "#f59e0b",
  //         confirmButtonText: t('LoanApplicationForm.success.button'),
  //         customClass: {
  //           container: 'shadow-xl rounded-xl'
  //         }
  //       });
  //     } finally {
  //       if (isMounted) {
  //         setIsSubmitting(false);
  //       }
  //     }
  //   }
  // };



// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (validateForm()) {
//     setIsSubmitting(true);
    
//     try {
//       const response = await fetch('http://localhost:3000/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to submit application');
//       }

//       const result = await response.json();
//       console.log('Form submitted successfully:', result.data);
      
//       setSubmitSuccess(true);
//       setErrors({});
//       setFormData(initialFormState);
      
//       await Swal.fire({
//         title: t('LoanApplicationForm.success.title'),
//         text: t('LoanApplicationForm.success.message'),
//         icon: "success",
//         // ... rest of your Swal config
//       });
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       await Swal.fire({
//         title: 'Error',
//         text: error.message || 'Failed to submit application',
//         icon: "error",
//         confirmButtonColor: "#f59e0b",
//       });
//     } finally {
//       if (isMounted) {
//         setIsSubmitting(false);
//       }
//     }
//   }
// };

   const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        if (!isMounted) return;
        await axios.post('http://localhost:3000/api/postloan', formData);
        console.log('Form submitted:', formData);
        setSubmitSuccess(true);
        setErrors({});
        setFormData(initialFormState);
        
        await Swal.fire({
          title: t('LoanApplicationForm.success.title'),
          text: t('LoanApplicationForm.success.message'),
          icon: "success",
          showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp animate__faster'
          },
          background: '#fff',
          backdrop: `
            rgba(245, 158, 11, 0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `,
          confirmButtonColor: "#f59e0b",
          confirmButtonText: t('LoanApplicationForm.success.button'),
          customClass: {
            container: 'shadow-xl rounded-xl'
          },
          
        }
      );

      } finally {
        if (isMounted) {
          setIsSubmitting(false);
        }
      }
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 sm:p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">{t('LoanApplicationForm.title')}</h1>
                <p className="mt-2 opacity-90">{t('LoanApplicationForm.description')}</p>
              </div>
              <div className="hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Form content */}
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('LoanApplicationForm.fields.name')} <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 ${
                        errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-amber-400'
                      }`}
                      placeholder={t('LoanApplicationForm.placeholders.name')}
                    />
                    {!errors.name && formData.name && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                {/* Phone */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('LoanApplicationForm.fields.phone')} <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 ${
                        errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-amber-400'
                      }`}
                      placeholder={t('LoanApplicationForm.placeholders.phone')}
                    />
                    {!errors.phone && formData.phone && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors.phone && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.phone}
                    </motion.p>
                  )}
                </motion.div>

                {/* Gold Type */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="goldType" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('LoanApplicationForm.fields.goldType')} <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="goldType"
                      name="goldType"
                      value={formData.goldType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 hover:border-amber-400 transition-all duration-200 appearance-none bg-white"
                    >
                      {Object.entries(t('LoanApplicationForm.options.goldTypes', { returnObjects: true })).map(([key, value]) => (
                        <option key={key} value={key}>{value}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Gold Weight */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="goldWeight" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('LoanApplicationForm.fields.goldWeight')} <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="goldWeight"
                      name="goldWeight"
                      value={formData.goldWeight}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 ${
                        errors.goldWeight ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-amber-400'
                      }`}
                      placeholder={t('LoanApplicationForm.placeholders.goldWeight')}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span className="text-gray-500">g</span>
                    </div>
                  </div>
                  {errors.goldWeight && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.goldWeight}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              {/* Address */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('LoanApplicationForm.fields.address')} <span className="text-amber-600">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 ${
                    errors.address ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-amber-400'
                  }`}
                  placeholder={t('LoanApplicationForm.placeholders.address')}
                ></textarea>
                {errors.address && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.address}
                  </motion.p>
                )}
              </motion.div>

              {/* Terms and Conditions */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start"
              >
                <div className="flex items-center h-5">
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded transition-all duration-200"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="agreeTerms" className="text-sm font-medium text-gray-700">
                  
                    {t('LoanApplicationForm.fields.agreeTerms')} <a href="#" className="text-yellow-600 hover:underline">{t('LoanApplicationForm.fields.agreeTerms')}</a> <span className="text-red-500"></span>

                   
                    <span className="text-amber-600">*</span>
                  </label>
                  {errors.agreeTerms && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.agreeTerms}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-2"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-amber-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-md hover:shadow-lg'
                  } flex items-center justify-center`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('LoanApplicationForm.processing')}
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {t('LoanApplicationForm.submit')}
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                {t('LoanApplicationForm.footer.secured')}
              </p>
              <div className="flex space-x-4">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z" clipRule="evenodd" />
                </svg>
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoanApplicationForm;