// import { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import ContactMethod from '../components/ContactMethod';
// import SupportCard from '../components/SupportCard';
// import FaqItem from '../components/FaqItem';
// //import { FaqItem, SupportCard, ContactMethod } from './components'; // Assuming these components exist

// function Support() {
//   const { t } = useTranslation();
//   const [activeTab, setActiveTab] = useState('faq');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [chatMessages, setChatMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState('');
//   const [selectedFaqCategory, setSelectedFaqCategory] = useState('all');

//   // Sample FAQ data
//   const faqCategories = [
//     { id: 'all', name: 'All Questions' },
//     { id: 'application', name: 'Loan Application' },
//     { id: 'repayment', name: 'Repayment' },
//     { id: 'gold', name: 'Gold Valuation' },
//     { id: 'account', name: 'Account Management' },
//   ];

//   const faqs = [
//     {
//       id: 1,
//       question: 'How do I apply for a gold loan?',
//       answer: 'You can apply for a gold loan through our website, mobile app, or by visiting any of our branches. You will need to bring your gold items for valuation and provide valid identification documents.',
//       category: 'application'
//     },
//     {
//       id: 2,
//       question: 'What is the interest rate for gold loans?',
//       answer: 'Our gold loan interest rates start at 12% per annum and vary based on the loan amount and tenure. Current rates are displayed on our website and app.',
//       category: 'application'
//     },
//     {
//       id: 3,
//       question: 'How is the gold value calculated?',
//       answer: 'Gold value is calculated based on the current market price, purity of your gold (measured in karats), and weight. Our certified appraisers will assess your gold items.',
//       category: 'gold'
//     },
//     {
//       id: 4,
//       question: 'What happens if I miss a repayment?',
//       answer: 'Late payments may incur penalties. If you anticipate difficulty in repayment, please contact our customer service immediately to discuss restructuring options.',
//       category: 'repayment'
//     },
//     {
//       id: 5,
//       question: 'How can I check my loan balance?',
//       answer: 'You can check your loan balance through our mobile app, online banking portal, or by contacting our customer service.',
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

//   // Sample contact methods
//   const contactMethods = [
//     {
//       icon: 'phone',
//       title: 'Phone Support',
//       description: 'Call our 24/7 customer support line',
//       details: '+1 (800) 123-4567',
//       action: 'Call Now'
//     },
//     {
//       icon: 'email',
//       title: 'Email Support',
//       description: 'Send us an email and we\'ll respond within 24 hours',
//       details: 'support@goldloanprovider.com',
//       action: 'Send Email'
//     },
//     {
//       icon: 'branch',
//       title: 'Branch Visit',
//       description: 'Find a branch near you for in-person support',
//       details: 'Over 20 locations in Odisha ',
//       action: 'Find Branch'
//     }
//   ];

//   // Sample loan calculators
//   const loanCalculators = [
//     {
//       title: 'Loan Amount Calculator',
//       description: 'Estimate how much you can borrow based on your gold value'
//     },
//     {
//       title: 'EMI Calculator',
//       description: 'Calculate your monthly installment payments'
//     },
//     {
//       title: 'Interest Calculator',
//       description: 'See how much interest you\'ll pay over the loan term'
//     }
//   ];

//   const handleSendMessage = () => {
//     if (messageInput.trim()) {
//       // Add user message
//       setChatMessages([...chatMessages, { sender: 'user', text: messageInput }]);
//       setMessageInput('');
      
//       // Simulate bot response after delay
//       setTimeout(() => {
//         setChatMessages(prev => [...prev, { 
//           sender: 'bot', 
//           text: 'Thank you for your message. Our customer support team will respond shortly. In the meantime, you might find answers in our FAQ section.' 
//         }]);
//       }, 1000);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-center mb-2 text-amber-800">{t('support.title')}</h1>
//         <p className="text-center text-gray-600 mb-8">{t('support.subtitle')}</p>
        
//         {/* Search Bar */}
//         <div className="max-w-2xl mx-auto mb-8">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search support articles..."
//               className="w-full px-4 py-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button className="absolute right-3 top-3 text-amber-600">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//           </div>
//         </div>
        
//         {/* Support Tabs */}
//         <div className="flex border-b border-gray-200 mb-8">
//           <button
//             className={`px-6 py-3 font-medium ${activeTab === 'faq' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-500'}`}
//             onClick={() => setActiveTab('faq')}
//           >
//             FAQ
//           </button>
//           <button
//             className={`px-6 py-3 font-medium ${activeTab === 'contact' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-500'}`}
//             onClick={() => setActiveTab('contact')}
//           >
//             Contact Us
//           </button>
//           <button
//             className={`px-6 py-3 font-medium ${activeTab === 'tools' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-500'}`}
//             onClick={() => setActiveTab('tools')}
//           >
//             Tools & Calculators
//           </button>
          
//         </div>
        
//         {/* FAQ Section */}
//         {activeTab === 'faq' && (
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            
//             {/* FAQ Categories */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {faqCategories.map(category => (
//                 <button
//                   key={category.id}
//                   className={`px-4 py-2 rounded-full text-sm ${selectedFaqCategory === category.id ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800'}`}
//                   onClick={() => setSelectedFaqCategory(category.id)}
//                 >
//                   {category.name}
//                 </button>
//               ))}
//             </div>
            
//             {/* FAQ List */}
//             <div className="space-y-4">
//               {filteredFaqs.length > 0 ? (
//                 filteredFaqs.map(faq => (
//                   <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
//                 ))
//               ) : (
//                 <p className="text-center py-8 text-gray-500">No questions found matching your search.</p>
//               )}
//             </div>
//           </div>
//         )}
        
//         {/* Contact Section */}
//         {activeTab === 'contact' && (
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-6">Contact Our Support Team</h2>
//             <p className="text-gray-600 mb-8">Our customer support is available 24/7 to assist you with any questions regarding your gold loan.</p>
            
//             <div className="grid md:grid-cols-3 gap-6 mb-8">
//               {contactMethods.map((method, index) => (
//                 <ContactMethod 
//                   key={index}
//                   icon={method.icon}
//                   title={method.title}
//                   description={method.description}
//                   details={method.details}
//                   action={method.action}
//                 />
//               ))}
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
//               <form className="space-y-4">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-gray-700 mb-1">Name</label>
//                     <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-1">Email</label>
//                     <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-1">Subject</label>
//                   <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-1">Message</label>
//                   <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
//                 </div>
//                 <button type="submit" className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors">
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
        
//         {/* Tools Section */}
//         {activeTab === 'tools' && (
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold mb-6">Loan Tools & Calculators</h2>
//             <p className="text-gray-600 mb-8">Use our calculators to plan your gold loan and understand the financial details.</p>
            
//             <div className="grid md:grid-cols-3 gap-6">
//               {loanCalculators.map((tool, index) => (
//                 <SupportCard 
//                   key={index}
//                   title={tool.title}
//                   description={tool.description}
//                   buttonText="Open Calculator"
//                 />
//               ))}
//             </div>
            
//             <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-4">Loan Application Status Check</h3>
//               <p className="text-gray-600 mb-4">Check the status of your existing loan application.</p>
//               <div className="flex flex-col md:flex-row gap-4">
//                 <input 
//                   type="text" 
//                   placeholder="Application Reference Number" 
//                   className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
//                 />
//                 <button className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors whitespace-nowrap">
//                   Check Status
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
        
//         {/* Live Chat Button (fixed position) */}
//         <div className="fixed bottom-6 right-6">
//           <button 
//             onClick={() => setIsChatOpen(!isChatOpen)}
//             className="bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition-colors"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//             </svg>
//           </button>
//         </div>
        
//         {/* Live Chat Window */}
//         {isChatOpen && (
//           <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col">
//             <div className="bg-amber-600 text-white p-3 rounded-t-lg flex justify-between items-center">
//               <h3 className="font-semibold">Live Chat Support</h3>
//               <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-amber-200">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             </div>
            
//             <div className="flex-grow p-4 overflow-y-auto max-h-60">
//               {chatMessages.length > 0 ? (
//                 chatMessages.map((msg, index) => (
//                   <div key={index} className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
//                     <div className={`inline-block px-3 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-amber-100 text-amber-900' : 'bg-gray-100 text-gray-800'}`}>
//                       {msg.text}
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center text-gray-500 py-8">
//                   <p>Welcome to our live chat!</p>
//                   <p>How can we help you today?</p>
//                 </div>
//               )}
//             </div>
            
//             <div className="p-3 border-t border-gray-200">
//               <div className="flex">
//                 <input
//                   type="text"
//                   placeholder="Type your message..."
//                   className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-amber-500"
//                   value={messageInput}
//                   onChange={(e) => setMessageInput(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                 />
//                 <button
//                   onClick={handleSendMessage}
//                   className="bg-amber-600 text-white px-3 py-2 rounded-r-md hover:bg-amber-700 transition-colors"
//                 >
//                   Send
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Support;

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FaqItem from '../components/FaqItem';
import SupportCard from '../components/SupportCard';
import ContactMethod from '../components/ContactMethod';
import LiveChat from '../components/LiveChat';

function Support() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
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

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Add user message
      setChatMessages([...chatMessages, { sender: 'user', text: messageInput }]);
      setMessageInput('');
      
      // Simulate bot response after delay
      setTimeout(() => {
        setChatMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'Thank you for your message. Our customer support team will respond shortly. In the meantime, you might find answers in our FAQ section.' 
        }]);
      }, 1000);
    }
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen">
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