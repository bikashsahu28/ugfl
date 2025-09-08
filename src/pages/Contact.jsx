import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FaCircle } from 'react-icons/fa';

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
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const findBranches = () => {
    // API call to fetch branches based on state and district
    // Mock data for demonstration
    const mockBranches = [
      { 
        name: 'Main Branch', 
        address: '123 Financial St, City Center', 
        timings: '9AM-6PM', 
        phone: '1800-123-456',
        manager: 'Mr. Rajesh Kumar',
        services: ['Gold Loan', 'Jewelry Appraisal', 'Instant Disbursal']
      },
      { 
        name: 'Westside Branch', 
        address: '456 Commerce Rd, West District', 
        timings: '10AM-7PM', 
        phone: '1800-123-457',
        manager: 'Ms. Priya Sharma',
        services: ['Gold Loan', 'Loan Against Jewelry']
      }
    ];
    setBranches(mockBranches);
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen">
      {/* Gold Shimmer Header */}
      <div className="relative bg-gradient-to-r from-yellow-600 to-yellow-800 py-20 text-center overflow-hidden">
  {/* Background pattern using icons */}
  <div className="absolute inset-0 opacity-10">
    <div className="w-full h-full flex flex-wrap">
      {Array.from({ length: 150 }).map((_, i) => (
        <FaCircle
          key={i}
          className="text-white"
          style={{
            fontSize: "50px",
            margin: "20px",
          }}
        />
      ))}
    </div>
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
      {t("contact.heroTitle")}
    </h1>
    <p className="text-xl md:text-2xl text-yellow-100 font-medium max-w-3xl mx-auto leading-relaxed">
      {t("contact.heroSubtitle")}
    </p>

    {/* Highlight badge */}
    <div className="mt-8 flex justify-center">
      <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium flex items-center space-x-2 shadow-lg">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span>24/7 Gold Loan Support</span>
      </div>
    </div>
  </div>
</div>


      <div className="max-w-7xl mx-auto px-4 py-12 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-yellow-600 p-4">
              <h2 className="text-2xl font-bold text-white">{t('contact.formTitle')}</h2>
            </div>
            <div className="p-6">
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-600">Your message has been sent successfully. Our gold loan specialist will contact you shortly.</p>
                </div>
              ) : (
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="notRobot"
                        required
                        className="w-5 h-5 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                      />
                      <label htmlFor="notRobot" className="ml-2 block text-sm text-gray-700">
                        {t('contact.notRobot')}
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-4 px-6 rounded-lg font-bold hover:from-yellow-700 hover:to-yellow-800 transition duration-300 shadow-md hover:shadow-lg"
                  >
                    {t('contact.submit')}
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Call Support Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-blue-600 p-4">
                <h2 className="text-2xl font-bold text-white">{t('contact.callSupport')}</h2>
                                <h4 className="text-2xl font-bold text-white">{t('contact.callmob')}</h4>

              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Gold Loan Helpline</p>
                    <p className="text-2xl font-bold text-gray-800">1800-123-4567</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">{t('contact.workingHours')}: <span className="font-medium">9:00 AM - 7:00 PM (Mon-Sat)</span></p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    <p className="text-gray-600">{t('contact.languageSupport')}: <span className="font-medium">English, हिंदी, ଓଡିଆ, తెలుగు, മലയാളം</span></p>
                  </div>
                </div>

                <div className="mt-6">
                  <a 
                    href="https://wa.me/911234567890" 
                    className="inline-flex items-center justify-center w-full bg-green-100 hover:bg-green-200 text-green-800 py-3 px-4 rounded-lg font-medium transition duration-300"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335 .157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {t('contact.chatOnWhatsApp')}
                  </a>
                </div>
              </div>
            </div>

            {/* Email Support Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-purple-600 p-4">
                <h2 className="text-2xl font-bold text-white">{t('contact.emailSupport')}</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{t('contact.generalInquiries')}</h3>
                      <a href="mailto:info@goldloancompany.com" className="text-blue-600 hover:underline">info@goldloancompany.com</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{t('contact.loanRepayment')}</h3>
                      <a href="mailto:repayment@goldloancompany.com" className="text-blue-600 hover:underline">repayment@goldloancompany.com</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{t('contact.complaints')}</h3>
                      <a href="mailto:complaints@goldloancompany.com" className="text-blue-600 hover:underline">complaints@goldloancompany.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Locator */}
        <section className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-amber-600 p-4">
            <h2 className="text-2xl font-bold text-white">{t('contact.branchLocator')}</h2>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.state')}
                  </label>
                  <select
                    id="state"
                    name="state"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    <option value="">{t('contact.selectState')}</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.district')}
                  </label>
                  <select
                    id="district"
                    name="district"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
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
                        <option value="Bhubaneswar">Bhubaneswar</option>
                      </>
                    )}
                    {selectedState === 'Delhi' && (
                      <>
                        <option value="New Delhi">New Delhi</option>
                        <option value="South Delhi">South Delhi</option>
                        <option value="East Delhi">East Delhi</option>
                      </>
                    )}
                    {selectedState === 'Maharashtra' && (
                      <>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Nagpur">Nagpur</option>
                      </>
                    )}
                    {selectedState === 'Karnataka' && (
                      <>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Mysore">Mysore</option>
                      </>
                    )}
                    {selectedState === 'Tamil Nadu' && (
                      <>
                        <option value="Chennai">Chennai</option>
                        <option value="Coimbatore">Coimbatore</option>
                      </>
                    )}
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={findBranches}
                    disabled={!selectedState || !selectedDistrict}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300 disabled:bg-gray-400"
                  >
                    {t('contact.findBranches')}
                  </button>
                </div>
              </div>
            </div>

            {branches.length > 0 ? (
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{t('contact.availableBranches')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {branches.map((branch, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-lg text-gray-800 mb-1">{branch.name}</h4>
                          <p className="text-gray-600 mb-2">{branch.address}</p>
                          <div className="flex items-center text-sm text-gray-500 mb-1">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {t('contact.timings')}: {branch.timings}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {branch.phone}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Branch Manager: {branch.manager}
                          </div>
                        </div>
                        <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                          Gold Loan
                        </div>
                      </div>
                      <div className="mt-3">
                        <h5 className="text-sm font-medium text-gray-700 mb-1">Services Offered:</h5>
                        <div className="flex flex-wrap gap-2">
                          {branch.services.map((service, i) => (
                            <span key={i} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-sm font-medium transition duration-300">
                        Get Directions
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Select your state and district</h3>
                <p className="text-gray-500">Find our nearest gold loan branches with complete details</p>
              </div>
            )}

            <div className="mt-6">
              <a 
                href="/branch-list.pdf" 
                className="inline-flex items-center text-blue-600 hover:underline"
                download
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('contact.downloadBranchList')}
              </a>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-blue-600 p-4">
            <h2 className="text-2xl font-bold text-white">{t('contact.faqTitle')}</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{t('contact.faq1.question')}</h3>
                <p className="text-gray-600">{t('contact.faq1.answer')}</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{t('contact.faq2.question')}</h3>
                <p className="text-gray-600">{t('contact.faq2.answer')}</p>
              </div>
              <div className="pb-2">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{t('contact.faq3.question')}</h3>
                <p className="text-gray-600">{t('contact.faq3.answer')}</p>
              </div>
            </div>
            <a 
              href="/faq" 
              className="mt-6 inline-flex items-center bg-blue-50 text-blue-600 hover:bg-blue-100 py-2 px-4 rounded-lg font-medium transition duration-300"
            >
              {t('contact.viewAllFAQs')}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Callback Scheduler */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-2">{t('contact.scheduleCallback')}</h2>
            <p className="text-blue-100 mb-6">Our gold loan expert will call you at your preferred time</p>
            
            <div className="bg-white rounded-lg p-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="callbackDate" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.preferredDate')}*
                  </label>
                  <input
                    type="date"
                    id="callbackDate"
                    name="callbackDate"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-bold hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-md"
              >
                {t('contact.scheduleNow')}
              </button>
            </div>
          </div>
        </section>

        {/* Social Media & Corporate Office */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Social Media */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gray-800 p-4">
              <h2 className="text-2xl font-bold text-white">{t('contact.connectWithUs')}</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">Follow us on social media for gold loan tips, updates and special offers</p>
              
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition duration-300">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </a>
                <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition duration-300">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>
                <a href="#" className="bg-blue-400 hover:bg-blue-500 text-white py-3 px-4 rounded-lg flex items-center justify-center transition duration-300">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Twitter
                </a>
                <a href="#" className="bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition duration-300">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </section>

          {/* Corporate Office */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gray-800 p-4">
              <h2 className="text-2xl font-bold text-white">{t('contact.corporateOffice')}</h2>
            </div>
            <div className="p-6">
              <div className="flex items-start mb-6">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Gold Loan Company Pvt. Ltd.</h3>
                  <address className="not-italic text-gray-600">
                    <p>123 Financial District</p>
                    <p>Bhubaneswar, Odisha 751024</p>
                    <p>India</p>
                  </address>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">{t('contact.officeHours')}</h4>
                    <p className="text-gray-700">9:00 AM - 6:00 PM (Mon-Sat)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Corporate Inquiries</h4>
                    <p className="text-gray-700">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Corporate Email</h4>
                    <p className="text-gray-700">corporate@goldloancompany.com</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="/branch-list.pdf" 
                className="mt-6 inline-flex items-center justify-center w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium transition duration-300"
                download
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('contact.downloadBranchList')}
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;