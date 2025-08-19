import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FaqItem from '../components/FaqItem';
import LiveChat from '../components/LiveChat';
import { FaCircle } from 'react-icons/fa';

function Support() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('faq'); // For tabbed interface

  // Sample FAQ data
  const faqCategories = [
    { id: 'all', name: 'All Questions' },
    { id: 'application', name: 'Loan Application' },
    { id: 'repayment', name: 'Repayment' },
    { id: 'gold', name: 'Gold Valuation' },
    { id: 'account', name: 'Account Management' },
    { id: 'security', name: 'Security' },
    { id: 'documents', name: 'Documents' },
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I apply for a gold loan?',
      answer: 'You can apply for a gold loan through our website, mobile app, or by visiting any of our branches. You will need to bring your gold items for valuation and provide valid identification documents.',
      category: 'application'
    },
    {
      id: 2,
      question: 'What is the interest rate for gold loans?',
      answer: 'Our gold loan interest rates start at 12% per annum and vary based on the loan amount and tenure. Current rates are displayed on our website and app.',
      category: 'application'
    },
    {
      id: 3,
      question: 'How is the gold value calculated?',
      answer: 'Gold value is calculated based on the current market price, purity of your gold (measured in karats), and weight. Our certified appraisers will assess your gold items.',
      category: 'gold'
    },
    {
      id: 4,
      question: 'What happens if I miss a repayment?',
      answer: 'Late payments may incur penalties. If you anticipate difficulty in repayment, please contact our customer service immediately to discuss restructuring options.',
      category: 'repayment'
    },
    {
      id: 5,
      question: 'How can I check my loan balance?',
      answer: 'You can check your loan balance through our mobile app, online banking portal, or by contacting our customer service.',
      category: 'account'
    },
    {
      id: 6,
      question: 'What documents do I need to apply?',
      answer: 'You need a valid government-issued ID, proof of address, and your gold items. Additional documents may be required based on loan amount.',
      category: 'documents'
    },
    {
      id: 7,
      question: 'Is my gold safe with you?',
      answer: 'Yes, we store all gold items in secure, insured vaults with 24/7 monitoring and strict access controls.',
      category: 'security'
    },
  ];

  // Support resources
  const supportResources = [
    {
      title: 'Loan Calculator',
      description: 'Estimate your loan amount and repayment schedule',
      icon: '📊',
      link: '/calculator'
    },
    {
      title: 'Gold Price Tracker',
      description: 'Real-time gold prices and trends',
      icon: '💰',
      link: '/gold-prices'
    },
    {
      title: 'Branch Locator',
      description: 'Find our nearest branch with directions',
      icon: '📍',
      link: '/branches'
    },
    {
      title: 'Document Upload',
      description: 'Securely submit required documents',
      icon: '📄',
      link: '/upload'
    } 
  ];

  // Contact methods
  const contactMethods = [
    {
      title: 'Phone Support',
      description: '24/7 customer service hotline',
      details: '9777700511',
      icon: '📞',
      action: 'Call Now'
    },
    {
      title: 'Email Us',
      description: 'Response within 24 hours',
      details: 'support@goldloan.com',
      icon: '✉️',
      action: 'Send Email'
    },
    {
      title: 'Visit Branch',
      description: 'Find a location near you',
      details: '20+ branches nationwide',
      icon: '🏦',
      action: 'Locate Branch'
    },
    {
      title: 'Social Media',
      description: 'Connect with us online',
      details: '@GoldLoanOfficial',
      icon: '🌐',
      action: 'Follow Us'
    }
  ];

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedFaqCategory === 'all' || faq.category === selectedFaqCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen">
      {/* Hero Section */}
      {/* <div className="relative bg-gradient-to-r from-yellow-600 to-yellow-800 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ 
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUwIDI1YzEzLjggMCAyNSAxMS4yIDI1IDI1cy0xMS4yIDI1LTI1IDI1LTI1LTExLjItMjUtMjUgMTEuMi0yNSAyNS0yNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')" 
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {t('support.title')}
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 font-medium max-w-3xl mx-auto leading-relaxed">
            {t('support.subtitle')}
          </p>
        </div>
      </div> */}
      
<div className="relative bg-gradient-to-r from-yellow-600 to-yellow-800 py-20 text-center overflow-hidden">
      {/* Background pattern using icons */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full flex flex-wrap">
          {Array.from({ length: 150 }).map((_, i) => (
            <FaCircle
              key={i}
              className="text-white "
              style={{
                fontSize: "55px",
                margin: "22px",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          {t("support.title")}
        </h1>
        <p className="text-xl md:text-2xl text-yellow-100 font-medium max-w-3xl mx-auto leading-relaxed">
          {t("support.subtitle")}
        </p>
      </div>
    </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
  onClick={() => setActiveTab('faq')}
  className={`whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm ${activeTab === 'faq' ? 'border-amber-500 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
>
  FAQ Center
</button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm ${activeTab === 'contact' ? 'border-amber-500 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Contact Options
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm ${activeTab === 'resources' ? 'border-amber-500 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Help Resources
            </button>
          </nav>
        </div>

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <section className="mb-16">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Categories Sidebar */}
              <div className="md:w-1/4">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Categories</h3>
                <div className="space-y-2">
                  {faqCategories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedFaqCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg ${selectedFaqCategory === category.id 
                        ? 'bg-amber-100 text-amber-800 border-l-4 border-amber-500' 
                        : 'text-gray-600 hover:bg-amber-50'}`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* FAQ Content */}
              <div className="md:w-3/4">
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                    {/* <div className="relative mb-6">
                      <input
                        type="text"
                        placeholder="Search our knowledge base..."
                        className="w-full px-5 py-3 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button className="absolute right-3 top-3 text-gray-400 hover:text-amber-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                    </div> */}
                    <div className="relative mb-6">
  <input
    type="text"
    placeholder="Search our knowledge base..."
    className="w-full px-6 py-4 rounded-full border-0 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <button className="absolute right-2 top-2 bg-amber-600 text-white p-2 rounded-full hover:bg-amber-700 transition-colors">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </button>
</div>
                
                    <div className="space-y-4">
                      {filteredFaqs.length > 0 ? (
                        filteredFaqs.map(faq => (
                          <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
                        ))
                      ) : (
                        <div className="text-center py-12">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <h3 className="mt-4 text-lg font-medium text-gray-900">No results found</h3>
                          <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Still Need Help? */}
                <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-6 shadow-sm border border-amber-200">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3 mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-gray-800">Still need help?</h3>
                      <p className="text-gray-600 mt-2">Can't find the answer you're looking for? Our team is ready to assist you.</p>
                    </div>
                    <div className="md:w-1/3 flex justify-end">
                      <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                        Contact Support
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Our Support Team</h2>
                <p className="text-gray-600 mb-8">We're here to help you with any questions or concerns about your gold loan. Choose the most convenient way to reach us.</p>
                
                {/* Contact Methods Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
{contactMethods.map((method, index) => (
<div key={index} className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
  <div className="text-4xl mb-4">{method.icon}</div>
  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
  <p className="text-gray-500 text-sm mb-3">{method.description}</p>
  <p className="text-gray-700 mb-4">{method.details}</p>
  {method.title === 'Phone Support' ? (
    <a 
      href={`tel:${method.details}`} 
      className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center"
    >
      {method.action}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  ) : method.title === 'Email Us' ? (
    <a 
      href={`mailto:${method.details}`} 
      className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center"
    >
      {method.action}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  ) : method.title === 'Visit Branch' ? (
    <a 
      href="/branch-locator" 
      className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center"
    >
      {method.action}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  ) : (
    <a 
      href="/gallery" 
      className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center"
    >
      {method.action}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  )}
</div>
))}
</div>
                {/* Contact Form */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"></textarea>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="consent" className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded" />
                      <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                        I agree to the privacy policy and terms of service
                      </label>
                    </div>
                    <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Branch Locations */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Visit Our Branches</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <h3 className="text-lg font-semibold mb-4">Branch Hours</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-4">Holiday Schedule</h3>
                      <p className="text-gray-600">Our branches are closed on national holidays. Online services remain available 24/7.</p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                      <p className="text-gray-500">Map of branch locations would appear here</p>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button className="text-amber-600 hover:text-amber-700 font-medium flex items-center">
                        View all branches
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Helpful Resources</h2>
                <p className="text-gray-600 mb-8">Explore our tools and guides to manage your gold loan more effectively.</p>
                
                {/* Resources Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {supportResources.map((resource, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow group">
                      <div className="text-4xl mb-4 group-hover:text-amber-600 transition-colors">{resource.icon}</div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-600 transition-colors">{resource.title}</h3>
                      <p className="text-gray-500 text-sm mb-4">{resource.description}</p>
                      <button className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center">
                        Access Tool
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                
                {/* Video Tutorials */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-6">Video Tutorials</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                      <div className="text-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="mt-2 text-gray-600">How to apply for a gold loan online</p>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                      <div className="text-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="mt-2 text-gray-600">Understanding gold valuation process</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Downloadable Guides */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Downloadable Guides</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <div className="ml-4">
                          <h4 className="font-medium">Gold Loan Handbook</h4>
                          <p className="text-sm text-gray-500">PDF • 2.4 MB</p>
                        </div>
                      </div>
                      <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                        Download
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <div className="ml-4">
                          <h4 className="font-medium">Repayment Options Guide</h4>
                          <p className="text-sm text-gray-500">PDF • 1.8 MB</p>
                        </div>
                      </div>
                      <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                        Download
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <div className="ml-4">
                          <h4 className="font-medium">Gold Purity Standards</h4>
                          <p className="text-sm text-gray-500">PDF • 1.2 MB</p>
                        </div>
                      </div>
                      <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Live Chat Button */}
      <LiveChat />
    </div>
  );
}

export default Support;