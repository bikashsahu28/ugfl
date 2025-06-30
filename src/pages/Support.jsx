import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FaqItem from '../components/FaqItem';
import SupportCard from '../components/SupportCard';
import ContactMethod from '../components/ContactMethod';
import LiveChat from '../components/LiveChat';

function Support() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState('all');

  // Sample FAQ data
  const faqCategories = [
    { id: 'all', name: 'All Questions' },
    { id: 'application', name: 'Loan Application' },
    { id: 'repayment', name: 'Repayment' },
    { id: 'gold', name: 'Gold Valuation' },
    { id: 'account', name: 'Account Management' },
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
  ];

  // Sample contact methods
  const contactMethods = [
    {
      icon: 'phone',
      title: 'Phone Support',
      description: 'Call our 24/7 customer support line',
      details: '+1 (800) 123-4567',
      action: 'Call Now'
    },
    {
      icon: 'email',
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      details: 'support@goldloanprovider.com',
      action: 'Send Email'
    },
    {
      icon: 'branch',
      title: 'Branch Visit',
      description: 'Find a branch near you for in-person support',
      details: 'Over 200 locations nationwide',
      action: 'Find Branch'
    }
  ];

  // Sample loan calculators
  const loanCalculators = [
    {
      title: 'Loan Amount Calculator',
      description: 'Estimate how much you can borrow based on your gold value'
    },
    {
      title: 'EMI Calculator',
      description: 'Calculate your monthly installment payments'
    },
    {
      title: 'Interest Calculator',
      description: 'See how much interest you\'ll pay over the loan term'
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
      <div className="relative bg-gradient-to-r from-yellow-600 to-yellow-800 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: 
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUwIDI1YzEzLjggMCAyNSAxMS4yIDI1IDI1cy0xMS4yIDI1LTI1IDI1LTI1LTExLjItMjUtMjUgMTEuMi0yNSAyNS0yNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')" }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {t('gallery.title')}
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 font-medium max-w-3xl mx-auto leading-relaxed">
            {t('gallery.subtitle')}
          </p>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div> */}
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-amber-800">{t('support.title')}</h1>
        <p className="text-center text-gray-600 mb-8">{t('support.subtitle')}</p>
        
        

        {/* Contact Section - First Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Contact Our Support Team</h2>
          <p className="text-gray-600 mb-8">Our customer support is available 24/7 to assist you with any questions regarding your gold loan.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, index) => (
              <ContactMethod 
                key={index}
                icon={method.icon}
                title={method.title}
                description={method.description}
                details={method.details}
                action={method.action}
              />
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Subject</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
              </div>
              <button type="submit" className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Tools Section - Second Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Loan Tools & Calculators</h2>
          <p className="text-gray-600 mb-8">Use our calculators to plan your gold loan and understand the financial details.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {loanCalculators.map((tool, index) => (
              <SupportCard 
                key={index}
                title={tool.title}
                description={tool.description}
                buttonText="Open Calculator"
              />
            ))}
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Loan Application Status Check</h3>
            <p className="text-gray-600 mb-4">Check the status of your existing loan application.</p>
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Application Reference Number" 
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
              />
              <button className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors whitespace-nowrap">
                Check Status
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section - Third Section */}
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          
          {/* FAQ Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {faqCategories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm ${selectedFaqCategory === category.id ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800'}`}
                onClick={() => setSelectedFaqCategory(category.id)}
              >
                {category.name}
              </button>
            ))} 
            {/* Search Bar */}
        {/* <div className="max-w-2xl mx-auto mb-8"> */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-3 top-3 text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        {/* </div> */}
          </div>
        
          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map(faq => (
                <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
              ))
            ) : (
              <p className="text-center py-8 text-gray-500">No questions found matching your search.</p>
            )}
          </div>
        </section>
        
        {/* Live Chat Button (fixed position) */}
        <LiveChat />
      
      </div>
    </div>
  );
}

export default Support;