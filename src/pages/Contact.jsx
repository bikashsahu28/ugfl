
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Contact() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    pincode: '',
    inquiryType: '',
    message: ''
  });
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [branches, setBranches] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log(formData);
  };

  const findBranches = () => {
    // API call to fetch branches based on state and district
    // Mock data for demonstration
    const mockBranches = [
      { name: 'Main Branch', address: '123 Financial St, City Center', timings: '9AM-6PM', phone: '1800-123-456' },
      { name: 'Westside Branch', address: '456 Commerce Rd, West District', timings: '10AM-7PM', phone: '1800-123-457' }
    ];
    setBranches(mockBranches);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Header */}
      <section className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('contact.heroTitle')}</h1>
        <p className="text-xl text-gray-600">{t('contact.heroSubtitle')}</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">{t('contact.formTitle')}</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.name')}*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.phone')}*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.email')}*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.city')}*
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.inquiryType')}*
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.inquiryType}
                onChange={handleChange}
              >
                <option value="">{t('contact.selectOption')}</option>
                <option value="Gold Loan">{t('contact.goldLoan')}</option>
                <option value="EMI">{t('contact.emi')}</option>
                <option value="Repayment">{t('contact.repayment')}</option>
                <option value="Branch Info">{t('contact.branchInfo')}</option>
                <option value="Others">{t('contact.others')}</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-4">
              {/* Simple CAPTCHA - in production use a service like reCAPTCHA */}
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="notRobot"
                  required
                  className="mr-2"
                />
                <label htmlFor="notRobot" className="text-sm text-gray-700">
                  {t('contact.notRobot')}
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              {t('contact.submit')}
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section className="space-y-8">
          {/* Call Support */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{t('contact.callSupport')}</h2>
            <div className="flex items-center mb-2">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xl font-medium">1800-123-4567</span>
            </div>
            <p className="text-gray-600 mb-2">{t('contact.workingHours')}: 9:00 AM - 7:00 PM (Mon-Sat)</p>
            <p className="text-gray-600">{t('contact.languageSupport')}: English, हिंदी, ଓଡିଆ</p>

            <div className="mt-4">
              <a href="https://wa.me/911234567890" className="inline-flex items-center text-green-600 hover:text-green-800">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('contact.chatOnWhatsApp')}
              </a>
            </div>
          </div>

          {/* Email Support */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{t('contact.emailSupport')}</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">{t('contact.generalInquiries')}: <a href="mailto:info@goldloancompany.com" className="text-blue-600 hover:underline">info@goldloancompany.com</a></span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">{t('contact.loanRepayment')}: <a href="mailto:repayment@goldloancompany.com" className="text-blue-600 hover:underline">repayment@goldloancompany.com</a></span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">{t('contact.complaints')}: <a href="mailto:complaints@goldloancompany.com" className="text-blue-600 hover:underline">complaints@goldloancompany.com</a></span>
              </li>
            </ul>
          </div>

          {/* Branch Locator */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{t('contact.branchLocator')}</h2>
            <div className="mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.state')}
                  </label>
                  <select
                    id="state"
                    name="state"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    <option value="">{t('contact.selectState')}</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Maharashtra">Maharashtra</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.district')}
                  </label>
                  <select
                    id="district"
                    name="district"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    disabled={!selectedState}
                  >
                    <option value="">{t('contact.selectDistrict')}</option>
                    {selectedState === 'Odisha' && (
                      <>
                        <option value="Khordha">Khordha</option>
                        <option value="Puri">Puri</option>
                        <option value="Cuttack">Cuttack</option>
                      </>
                    )}
                    {selectedState === 'Delhi' && (
                      <>
                        <option value="New Delhi">New Delhi</option>
                        <option value="South Delhi">South Delhi</option>
                      </>
                    )}
                    {selectedState === 'Maharashtra' && (
                      <>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                      </>
                    )}
                  </select>
                </div>
              </div>
              <button
                onClick={findBranches}
                disabled={!selectedState || !selectedDistrict}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
              >
                {t('contact.findBranches')}
              </button>
            </div>

            {branches.length > 0 && (
              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">{t('contact.availableBranches')}:</h3>
                <ul className="space-y-3">
                  {branches.map((branch, index) => (
                    <li key={index} className="border-b pb-2">
                      <h4 className="font-medium">{branch.name}</h4>
                      <p className="text-sm text-gray-600">{branch.address}</p>
                      <p className="text-sm text-gray-600">{t('contact.timings')}: {branch.timings}</p>
                      <p className="text-sm text-gray-600">{t('contact.phone')}: {branch.phone}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4 h-48 bg-gray-100 rounded-md flex items-center justify-center">
              {/* In a real app, this would be a Google Maps embed */}
              <p className="text-gray-500">{t('contact.mapPlaceholder')}</p>
            </div>
          </div>
        </section>
      </div>

      {/* FAQs Preview */}
      <section className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{t('contact.faqTitle')}</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-lg">{t('contact.faq1.question')}</h3>
            <p className="text-gray-600">{t('contact.faq1.answer')}</p>
          </div>
          <div>
            <h3 className="font-medium text-lg">{t('contact.faq2.question')}</h3>
            <p className="text-gray-600">{t('contact.faq2.answer')}</p>
          </div>
          <div>
            <h3 className="font-medium text-lg">{t('contact.faq3.question')}</h3>
            <p className="text-gray-600">{t('contact.faq3.answer')}</p>
          </div>
        </div>
        <a href="/faq" className="mt-4 inline-block text-blue-600 hover:underline">
          {t('contact.viewAllFAQs')} →
        </a>
      </section>

      {/* Social Media & Corporate Office */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Social Media */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{t('contact.connectWithUs')}</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </section>

        {/* Corporate Office */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{t('contact.corporateOffice')}</h2>
          <address className="not-italic">
            <p className="text-gray-700 mb-2">Gold Loan Company Pvt. Ltd.</p>
            <p className="text-gray-700 mb-2">123 Financial District</p>
            <p className="text-gray-700 mb-2">Bhubaneswar, Odisha 751024</p>
            <p className="text-gray-700 mb-4">India</p>
            
            <p className="text-gray-700 mb-2">
              <span className="font-medium">{t('contact.officeHours')}:</span> 9:00 AM - 6:00 PM (Mon-Sat)
            </p>
            
            <a 
              href="/branch-list.pdf" 
              className="inline-flex items-center text-blue-600 hover:underline mt-4"
              download
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t('contact.downloadBranchList')}
            </a>
          </address>
        </section>
      </div>

      {/* Callback Scheduler */}
      <section className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">{t('contact.scheduleCallback')}</h2>
        <div className="max-w-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="callbackName" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.name')}*
              </label>
              <input
                type="text"
                id="callbackName"
                name="callbackName"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="callbackPhone" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.phone')}*
              </label>
              <input
                type="tel"
                id="callbackPhone"
                name="callbackPhone"
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="callbackDate" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.preferredDate')}*
              </label>
              <input
                type="date"
                id="callbackDate"
                name="callbackDate"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="callbackTime" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.preferredTime')}*
              </label>
              <select
                id="callbackTime"
                name="callbackTime"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">{t('contact.selectTime')}</option>
                <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
                <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
                <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                <option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>
              </select>
            </div>
          </div>
          
          <button
            type="button"
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          >
            {t('contact.scheduleNow')}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Contact;