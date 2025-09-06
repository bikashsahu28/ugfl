import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FaqItem from '../components/FaqItem';
import LiveChat from '../components/LiveChat';
import { FaCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';
import { ImNeutral } from 'react-icons/im';
import { GoChevronRight } from 'react-icons/go';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { TbFileTypePdf } from 'react-icons/tb';

function Support() {
  const { t } = useTranslation();
    const navigate = useNavigate();
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
    { id: 'fees', name: 'Fees & Charges' },
    { id: 'documents', name: 'Documents' },
  ];

  //faq data
  const faqs = [
    {
      id: 1,
      question: "How do I apply for a loan?",
      answer: "You can apply for a loan through our website or mobile app. Simply create an account, fill out the application form, and submit the required documents. Our team will review your application and get back to you within 24-48 hours.",
      category: 'application'
    },
    {
      id: 2,
      question: "What documents do I need to apply?",
      answer: "You'll need to provide a government-issued ID, proof of income (pay stubs or tax returns), proof of residence (utility bill or lease agreement), and bank statements from the last 3 months. Additional documents may be required based on the loan type.",
      category: 'application'
    },
    {
      id: 3,
      question: "How is the interest rate determined?",
      answer: "Interest rates are determined based on several factors including your credit score, income level, loan amount, repayment term, and current market conditions. Better credit scores typically qualify for lower interest rates.",
      category: 'application'
    },
    {
      id: 4,
      question: "How long does approval take?",
      answer: "Most applications are reviewed within 24-48 hours. Once approved, funds are typically deposited into your account within 1-3 business days. Some applications may require additional verification, which could extend the timeline.",
      category: 'application'
    },
    {
      id: 5,
      question: "Can I apply with bad credit?",
      answer: "Yes, we consider applicants with all credit types. While having bad credit may affect your interest rate and loan terms, we have options designed for borrowers looking to rebuild their credit. We also offer credit counseling services.",
      category: 'application'
    },
    {
      id: 6,
      question: "What are the repayment options?",
      answer: "We offer flexible repayment options including automatic bank transfers, online payments through our portal, in-person payments at our branches, and mobile app payments. You can choose monthly, bi-weekly, or weekly payment schedules based on your preference.",
      category: 'repayment'
    },
    {
      id: 7,
      question: "Can I make early payments?",
      answer: "Yes, you can make early payments at any time without penalty. Early payments can help you save on interest and pay off your loan faster. You can make partial or full early payments through our website, mobile app, or by contacting customer service.",
      category: 'repayment'
    },
    {
      id: 8,
      question: "What happens if I miss a payment?",
      answer: "If you miss a payment, you'll receive a reminder notification. A late fee may be applied after the grace period. We recommend contacting us immediately if you're having difficulty making a payment - we may be able to offer temporary relief options or adjust your payment plan.",
      category: 'repayment'
    },
    {
      id: 9,
      question: "Can I change my payment due date?",
      answer: "Yes, you can request to change your payment due date once per loan term. The new date must be within the same month as your original due date. You can make this request through our customer portal or by contacting our support team.",
      category: 'repayment'
    },
    {
      id: 10,
      question: "How do gold loans work?",
      answer: "Gold loans use your gold jewelry or coins as collateral. We assess the value of your gold based on current market rates and purity. You can typically borrow up to 75% of the gold's value. Your gold is securely stored until the loan is repaid in full.",
      category: 'gold'
    },
    {
      id: 11,
      question: "Is my gold safe with you?",
      answer: "Absolutely. Your gold is stored in high-security vaults with 24/7 surveillance and insurance coverage. We follow strict protocols for handling and storing collateral. You can request to view security documentation and even schedule a visit to see our storage facilities.",
      category: 'gold'
    },
    {
      id: 12,
      question: "What happens if I can't repay my gold loan?",
      answer: "If you're unable to repay your gold loan, we'll work with you to find a solution before taking any action. If no arrangement can be made, we may sell your gold to recover the loan amount. Any surplus from the sale (after repaying the loan and fees) will be returned to you.",
      category: 'gold'
    },
    {
      id: 13,
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking 'Forgot Password' on the login page. Enter your registered email address, and we'll send you a link to create a new password. For security reasons, this link expires after 24 hours.",
      category: 'account'
    },
    {
      id: 14,
      question: "Can I have multiple accounts?",
      answer: "Each individual is allowed only one primary account. However, you can add authorized users to your account or create separate business accounts if you're applying for business loans. All accounts must be linked to unique identifying information.",
      category: 'account'
    },
    {
      id: 15,
      question: "How do I update my personal information?",
      answer: "You can update most personal information through your account dashboard under 'Profile Settings'. For legal name changes or address changes, you may need to upload supporting documentation for verification purposes.",
      category: 'account'
    },
    {
      id: 16,
      question: "What fees are associated with loans?",
      answer: "Our loans may include an origination fee (typically 1-5% of the loan amount), late payment fees, and returned payment fees. We don't charge prepayment penalties. All fees are clearly disclosed before you accept the loan agreement.",
      category: 'fees'
    },
    {
      id: 17,
      question: "Are there any hidden charges?",
      answer: "No, we believe in complete transparency. All fees and charges are clearly outlined in your loan agreement before you sign. We don't have any hidden fees or surprise charges. If you have questions about any fee, our customer service team is happy to explain.",
      category: 'fees'
    },
    {
      id: 18,
      question: "How is my data protected?",
      answer: "We use bank-level encryption (256-bit SSL) to protect your data. Our systems undergo regular security audits, and we comply with all relevant data protection regulations. We never sell your personal information to third parties.",
      category: 'security'
    },
    {
      id: 19,
      question: "What should I do if I suspect fraud?",
      answer: "If you suspect any fraudulent activity on your account, please contact our customer service immediately. We take fraud seriously and will investigate any suspicious activity. You can also report fraud to your local authorities.",
      category: 'security'
    },
    {
      id: 20,
      question: 'What documents do I need to apply?',
      answer: 'You need a valid government-issued ID, proof of address, and your gold items. Additional documents may be required based on loan amount.',
      category: 'documents'
    }
  ];
  // Support resources data
  const supportResources = [
    {
      title: 'Loan Calculator',
      description: 'Estimate your loan amount and repayment schedule',
      icon: '📊',
      link: '/calculators'
    },
    {
      title: 'Gold Price Tracker',
      description: 'Real-time gold prices and trends check now',
      icon: '💰',
      link: '/gold-prices'
    },
    {
      title: 'Branch Locator',
      description: 'Find our nearest branch with directions',
      icon: '📍',
      link: '/branch-locator'
    },
    {
      title: 'Document Upload',
      description: 'Securely submit required documents',
      icon: '📄',
      // link: '/upload'
      link: '#downloadable-guides',
                    isInternal: true
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
      details: 'care@unigoldfinance.com',
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
 const handleCardClick = (link) => {
    navigate(link);
  };
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

                    <div className="relative mb-6">
                   <input
                    type="text"
                    placeholder="Search our knowledge base..."
                    className="w-full px-6 py-4 rounded-full border-0 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                        <button className="absolute right-2 top-2 bg-amber-600 text-white p-2 rounded-full hover:bg-amber-700 transition-colors">
                           <IoSearchSharp className="h-6 w-6" />

                        </button>
                      </div>  
                
                    <div className="space-y-4">
                      {filteredFaqs.length > 0 ? (
                        filteredFaqs.map(faq => (
                          <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
                        ))
                      ) : (
                        <div className="text-center py-12">
                          <div className="text-center py-8 text-gray-500">
                           <ImNeutral className="mx-auto h-12 w-12 text-gray-400" />
                          <h3 className="mt-2 text-lg font-medium text-gray-900">No results found</h3>
                          <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                          </div>
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
                      <button  
                      onClick={() => {
                      setActiveTab("contact");
                     const section = document.getElementById("contact-section");
                     if (section) {
                     section.scrollIntoView({ behavior: "smooth" });
                     }
                      }}
                            className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
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
          <section id="contact-section" className="mb-16">
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
      <GoChevronRight className='h-4 w-4 ml-1' />

    </a>
  ) : method.title === 'Email Us' ? (
    <a 
      href={`mailto:${method.details}`} 
      className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center"
    >
      {method.action}
      <GoChevronRight className='h-4 w-4 ml-1' />
    </a>
  ) : method.title === 'Visit Branch' ? (
    <a 
      href="/branch-locator" 
      className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center"
    >
      {method.action}
      <GoChevronRight className='h-4 w-4 ml-1' />
    </a>
  ) : (
    <a 
      href="/gallery" 
      className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center"
    >
      {method.action}
      <GoChevronRight className='h-4 w-4 ml-1' />
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
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                        <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
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
                        <span>Monday - Saturday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      {/* <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div> */}
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
                        <GoChevronRight className='h-4 w-4 ml-1' />
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
              <div 
                key={index} 
                className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow group cursor-pointer"
                onClick={() => handleCardClick(resource.link)}
              >
                <div className="text-4xl mb-4 group-hover:text-amber-600 transition-colors">{resource.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-600 transition-colors">{resource.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{resource.description}</p>
                <div className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center">
                  Access Tool
                  <GoChevronRight className='h-4 w-4 ml-1' />
                </div>
              </div>
            ))}
      </div>
                
                {/* Video Tutorials */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-6">Video Tutorials</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                      <div className="text-center p-4">
                        <FaRegCirclePlay className='h-12 w-12 mx-auto text-gray-400' />
                        <p className="mt-2 text-gray-600">How to apply for a gold loan online</p>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                      <div className="text-center p-4">
                        <FaRegCirclePlay className='h-12 w-12 mx-auto text-gray-400' />
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
                        <TbFileTypePdf className='h-8 w-8 text-amber-500' />
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
                        <TbFileTypePdf className='h-8 w-8 text-amber-500' />
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
                        <TbFileTypePdf className='h-8 w-8 text-amber-500' />
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