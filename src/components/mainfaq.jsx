// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { FaSearch } from 'react-icons/fa';
// import { HiChevronDown } from 'react-icons/hi';
// import { ImNeutral } from 'react-icons/im';

// const FaqItem = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-sm">
//       <button
//         className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-amber-100 transition-colors"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-expanded={isOpen}
//       >
//         <h3 className="text-lg font-medium text-gray-900 pr-4">{question}</h3>
//         <HiChevronDown className={`w-5 h-5 text-amber-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
//       </button>
//       {isOpen && (
//         <div className="px-6 pb-4 pt-2 bg-gray-50">
//           <p className="text-gray-600">{answer}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const FAQSections = () => {
//   const { t } = useTranslation();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedFaqCategory, setSelectedFaqCategory] = useState('all');

//   // Sample FAQ data
//   const faqCategories = [
//     { id: 'all', name: t('faq.categories.all') },
//     { id: 'application', name: t('faq.categories.application') },
//     { id: 'repayment', name: t('faq.categories.repayment') },
//     { id: 'gold', name: t('faq.categories.gold') },
//     { id: 'account', name: t('faq.categories.account') },
//   ];

//   const faqs = [
//     {
//       id: 1,
//       question: t('faq.questions.q1'),
//       answer: t('faq.answers.a1'),
//       category: 'application'
//     },
//     {
//       id: 2,
//       question: t('faq.questions.q2'),
//       answer: t('faq.answers.a2'),
//       category: 'application'
//     },
//     {
//       id: 3,
//       question: t('faq.questions.q3'),
//       answer: t('faq.answers.a3'),
//       category: 'gold'
//     },
//     {
//       id: 4,
//       question: t('faq.questions.q4'),
//       answer: t('faq.answers.a4'),
//       category: 'repayment'
//     },
//     {
//       id: 5,
//       question: t('faq.questions.q5'),
//       answer: t('faq.answers.a5'),
//       category: 'account'
//     },
//   ];

//   // Filter FAQs based on search and category
//   const filteredFaqs = faqs.filter(faq => {
//     const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory = selectedFaqCategory === 'all' || faq.category === selectedFaqCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <section className="mb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
//   <div className="text-center mb-8">
//                <h1 className="text-4xl font-bold text-center text-gray-800 mt-3 mb-3">
//         <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
//           {t('faq.title')}
//         </span>
//       </h1>
//     <p className="text-gray-600 max-w-2xl mx-auto">
//       {t('faq.subtitle')}
//     </p>
//   </div>

//   <div className="mb-6">
//     {/* FAQ Categories and Search Bar */}
//     <div className="flex flex-wrap gap-2 mb-4">
//       {faqCategories.map(category => (
//         <button
//           key={category.id}
//           className={`px-4 py-2 rounded-full text-sm font-medium ${
//             selectedFaqCategory === category.id
//               ? 'bg-amber-600 text-white'
//               : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
//           }`}
//           onClick={() => setSelectedFaqCategory(category.id)}
//         >
//           {category.name}
//         </button>
//       ))}
//     </div>

//     {/* Search Bar */}
//     <div className="relative">
//       <input
//         type="text"
//         placeholder={t('faq.searchPlaceholder')}
//         className="w-full px-4 py-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button className="absolute right-3 top-3 text-amber-600">
//         <FaSearch className="h-6 w-6" />
//       </button>
//     </div>
//   </div>

//   {/* FAQ List */}
//   <div className="space-y-4">
//     {filteredFaqs.length > 0 ? (
//       filteredFaqs.map(faq => (
//         <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
//       ))
//     ) : (
//       <div className="text-center py-8 text-gray-500">
//         <ImNeutral className="mx-auto h-12 w-12 text-gray-400" />
//         <h3 className="mt-2 text-lg font-medium text-gray-900">{t('faq.noResults.title')}</h3>
//         <p className="mt-1 text-gray-500">{t('faq.noResults.description')}</p>
//       </div>
//     )}
//   </div>
// </section>
//   );
// };

// export default FAQSections;

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';
import { ImNeutral } from 'react-icons/im';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-sm">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-amber-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900 pr-4">{question}</h3>
        <HiChevronDown className={`w-5 h-5 text-amber-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 pt-2 bg-gray-50">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', mobile: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 ">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Still have questions?</h2>
    <p className="text-gray-600 mb-6">Send us your query and we'll get back to you as soon as possible.</p>
    
    {isSubmitted ? (
      <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
        <p className="font-medium">Thank you for your message!</p>
        <p>We'll get back to you soon.</p>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Your full name"
          />
        </div>
         <div>
  <label
    htmlFor="mobile"
    className="block text-sm font-medium text-gray-700 mb-1"
  >
    Mobile Number *
  </label>
  <input
    type="tel"
    id="mobile"
    name="mobile"
    value={formData.mobile}
    onChange={handleChange}
    required
    pattern="[0-9]{10}"
    maxLength="10"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
    placeholder="Enter 10-digit mobile number"
  />
</div>

        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="What is your question about?"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Please describe your question in detail..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    )}
  </div>
  );
};

const FAQSections = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState('all');
  const [itemsToShow, setItemsToShow] = useState(6);

  // Sample FAQ data
  const faqCategories = [
    { id: 'all', name: 'All Categories' },
    { id: 'application', name: 'Application Process' },
    { id: 'repayment', name: 'Repayment' },
    { id: 'gold', name: 'Gold Loans' },
    { id: 'account', name: 'Account Management' },
    { id: 'fees', name: 'Fees & Charges' },
    { id: 'security', name: 'Security & Privacy' }
  ];

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
    }
  ];

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedFaqCategory === 'all' || faq.category === selectedFaqCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedFaqs = filteredFaqs.slice(0, itemsToShow);

  const handleLoadMore = () => {
    setItemsToShow(prev => Math.min(prev + 6, filteredFaqs.length));
  };

  const handleViewLess = () => {
    setItemsToShow(6);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mt-3 mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to the most common questions about our services
            </p>
          </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FAQ Section */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            {/* FAQ Categories and Search Bar */}
            <div className="flex flex-wrap gap-2 mb-4">
              {faqCategories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedFaqCategory === category.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                  }`}
                  onClick={() => setSelectedFaqCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-4 py-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-3 top-3 text-amber-600">
                <FaSearch className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              <>
                {displayedFaqs.map(faq => (
                  <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
                ))}
                <div className="text-center mt-6 flex justify-center gap-4">
                  {itemsToShow > 6 && (
                    <button
                      onClick={handleViewLess}
                      className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
                    >
                      View Less
                    </button>
                  )}
                  {itemsToShow < filteredFaqs.length && (
                    <button
                      onClick={handleLoadMore}
                      className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
                    >
                      Load More Questions
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <ImNeutral className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">No results found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
              </div>
            )}
          </div>
        </div>

        {/* Query Form Section */}
        <div className="lg:col-span-1">
          <QueryForm />
        </div>
      </div>
    </div>
  );
};

export default FAQSections;