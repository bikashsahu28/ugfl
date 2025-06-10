import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LoanApplicationForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    goldType: '22K',
    goldWeight: '',
    loanAmount: '',
    tenure: '6',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.goldWeight) newErrors.goldWeight = 'Gold weight is required';
    if (!formData.loanAmount) newErrors.loanAmount = 'Loan amount is required';
    if (!formData.tenure) newErrors.tenure = 'Tenure is required';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 1500);
    }
  };

  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <div className="text-center py-8">
          <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h2 className="mt-4 text-2xl font-bold text-gray-800">Application Submitted Successfully!</h2>
          <p className="mt-2 text-gray-600">Our representative will contact you shortly.</p>
          <button 
            onClick={() => setSubmitSuccess(false)}
            className="mt-6 px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (

    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
  <div className="text-center mb-8">
    <h1 className="text-2xl font-bold text-gray-800">{t('LoanApplicationForm.title')}</h1>
    <p className="text-gray-600 mt-2">{t('LoanApplicationForm.description')}</p>
  </div>

  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          {t('LoanApplicationForm.fields.name')} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          placeholder={t('LoanApplicationForm.placeholders.name')}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          {t('LoanApplicationForm.fields.email')} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          placeholder={t('LoanApplicationForm.placeholders.email')}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          {t('LoanApplicationForm.fields.phone')} <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          placeholder={t('LoanApplicationForm.placeholders.phone')}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
      </div>

      {/* Gold Type */}
      <div>
        <label htmlFor="goldType" className="block text-sm font-medium text-gray-700 mb-1">
          {t('LoanApplicationForm.fields.goldType')} <span className="text-red-500">*</span>
        </label>
        <select
          id="goldType"
          name="goldType"
          value={formData.goldType}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
        >
          {Object.entries(t('LoanApplicationForm.options.goldTypes', { returnObjects: true })).map(([key, value]) => (
            <option key={key} value={key}>{value}</option>
          ))}
        </select>
      </div>

      {/* Gold Weight */}
      <div>
        <label htmlFor="goldWeight" className="block text-sm font-medium text-gray-700 mb-1">
          {t('LoanApplicationForm.fields.goldWeight')} <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="goldWeight"
          name="goldWeight"
          value={formData.goldWeight}
          onChange={handleChange}
          min="0"
          step="0.01"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${errors.goldWeight ? 'border-red-500' : 'border-gray-300'}`}
          placeholder={t('LoanApplicationForm.placeholders.goldWeight')}
        />
        {errors.goldWeight && <p className="mt-1 text-sm text-red-500">{errors.goldWeight}</p>}
      </div>

      {/* Loan Amount */}
      <div>
        <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
          {t('LoanApplicationForm.fields.loanAmount')} <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="loanAmount"
          name="loanAmount"
          value={formData.loanAmount}
          onChange={handleChange}
          min="0"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${errors.loanAmount ? 'border-red-500' : 'border-gray-300'}`}
          placeholder={t('LoanApplicationForm.placeholders.loanAmount')}
        />
        {errors.loanAmount && <p className="mt-1 text-sm text-red-500">{errors.loanAmount}</p>}
      </div>

      {/* Tenure */}
      <div>
        <label htmlFor="tenure" className="block text-sm font-medium text-gray-700 mb-1">
          {t('LoanApplicationForm.fields.tenure')} <span className="text-red-500">*</span>
        </label>
        <select
          id="tenure"
          name="tenure"
          value={formData.tenure}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${errors.tenure ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">{t('LoanApplicationForm.options.selectTenure')}</option>
          {[3, 6, 12, 24].map(month => (
            <option key={month} value={month}>
              {month} {t('LoanApplicationForm.options.months')}
            </option>
          ))}
        </select>
        {errors.tenure && <p className="mt-1 text-sm text-red-500">{errors.tenure}</p>}
      </div>
    </div>

    {/* Address */}
    <div>
      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
        {t('LoanApplicationForm.fields.address')} <span className="text-red-500">*</span>
      </label>
      <textarea
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        rows="3"
        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
        placeholder={t('LoanApplicationForm.placeholders.address')}
      ></textarea>
      {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
    </div>

    {/* Terms and Conditions */}
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id="agreeTerms"
          name="agreeTerms"
          type="checkbox"
          checked={formData.agreeTerms}
          onChange={handleChange}
          className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
        />
      </div>
      <div className="ml-3">
        <label htmlFor="agreeTerms" className="text-sm font-medium text-gray-700">
          {t('LoanApplicationForm.fields.agreeTerms')} <a href="#" className="text-yellow-600 hover:underline">{t('LoanApplicationForm.fields.agreeTerms')}</a> <span className="text-red-500">*</span>
        </label>
        {errors.agreeTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeTerms}</p>}
      </div>
    </div>

    {/* Submit Button */}
    <div className="pt-4">
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-yellow-600 text-white py-3 px-4 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t('LoanApplicationForm.processing')}
          </>
        ) : t('LoanApplicationForm.submit')}
      </button>
    </div>
  </form>
</div>
  );
};

export default LoanApplicationForm;
