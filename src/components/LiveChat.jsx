import { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';

const faqs = [
  { id: 1, question: "How Can I apply for a loan?", answer: "You can apply for a loan through our website or mobile app. Simply create an account, fill out the application form, and submit the required documents. Our team will review your application and get back to you within 24-48 hours." },
  { id: 2, question: "What documents do I need to apply?", answer: "You'll need to provide a government-issued ID, proof of income (pay stubs or tax returns), proof of residence (utility bill or lease agreement), and bank statements from the last 3 months. Additional documents may be required based on the loan type." },
  { id: 3, question: "How is the interest rate determined?", answer: "Interest rates are determined based on several factors including your credit score, income level, loan amount, repayment term, and current market conditions. Better credit scores typically qualify for lower interest rates." },
  { id: 4, question: "How long does approval take?", answer: "Most applications are reviewed within 10-15 minutes. Once approved, funds are typically deposited into your account within 5-10 minutes. Some applications may require additional verification, which could extend the timeline." },
  { id: 5, question: "Can I apply with bad credit?", answer: "Yes, we consider applicants with all credit types. While having bad credit may affect your interest rate and loan terms, we have options designed for borrowers looking to rebuild their credit. We also offer credit counseling services." },
  { id: 6, question: "What are the repayment options?", answer: "We offer flexible repayment options including automatic bank transfers, online payments through our portal, in-person payments at our branches, and mobile app payments. You can choose monthly, bi-weekly, or weekly payment schedules based on your preference." },
  { id: 7, question: "Can I make early payments?", answer: "Yes, you can make early payments at any time without penalty. Early payments can help you save on interest and pay off your loan faster. You can make partial or full early payments through our website, mobile app, or by contacting customer service." },
  { id: 8, question: "What happens if I miss a payment?", answer: "If you miss a payment, you'll receive a reminder notification. A late fee may be applied after the grace period. We recommend contacting us immediately if you're having difficulty making a payment - we may be able to offer temporary relief options or adjust your payment plan." },
  { id: 9, question: "Can I change my payment due date?", answer: "Yes, you can request to change your payment due date once per loan term. The new date must be within the same month as your original due date. You can make this request through our customer portal or by contacting our support team." },
  { id: 10, question: "How do gold loans work?", answer: "Gold loans use your gold jewelry or coins as collateral. We assess the value of your gold based on current market rates and purity. You can typically borrow up to 75% of the gold's value. Your gold is securely stored until the loan is repaid in full." },
  { id: 11, question: "Is my gold safe with you?", answer: "Absolutely. Your gold is stored in high-security vaults with 24/7 surveillance and insurance coverage. We follow strict protocols for handling and storing collateral. You can request to view security documentation and even schedule a visit to see our storage facilities." },
  { id: 12, question: "What happens if I can't repay my gold loan?", answer: "If you're unable to repay your gold loan, we'll work with you to find a solution before taking any action. If no arrangement can be made, we may sell your gold to recover the loan amount. Any surplus from the sale (after repaying the loan and fees) will be returned to you." },
  { id: 13, question: "How do I reset my password?", answer: "You can reset your password by clicking 'Forgot Password' on the login page. Enter your registered email address, and we'll send you a link to create a new password. For security reasons, this link expires after 24 hours." },
  { id: 14, question: "Can I have multiple accounts?", answer: "Each individual is allowed only one primary account. However, you can add authorized users to your account or create separate business accounts if you're applying for business loans. All accounts must be linked to unique identifying information." },
  { id: 15, question: "How do I update my personal information?", answer: "You can update most personal information through your account dashboard under 'Profile Settings'. For legal name changes or address changes, you may need to upload supporting documentation for verification purposes." },
  { id: 16, question: "What fees are associated with loans?", answer: "Our loans may include an origination fee (typically 1-5% of the loan amount), late payment fees, and returned payment fees. We don't charge prepayment penalties. All fees are clearly disclosed before you accept the loan agreement." },
  { id: 17, question: "Are there any hidden charges?", answer: "No, we believe in complete transparency. All fees and charges are clearly outlined in your loan agreement before you sign. We don't have any hidden fees or surprise charges. If you have questions about any fee, our customer service team is happy to explain." },
  { id: 18, question: "How is my data protected?", answer: "We use bank-level encryption (256-bit SSL) to protect your data. Our systems undergo regular security audits, and we comply with all relevant data protection regulations. We never sell your personal information to third parties." }
];

function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Function to find best matching FAQ
  const findFaqAnswer = (input) => {
    const normalized = input.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    faqs.forEach(faq => {
      const questionWords = faq.question.toLowerCase().split(" ");
      const matchedWords = questionWords.filter(word => normalized.includes(word));
      const score = matchedWords.length / questionWords.length;

      if (score > highestScore) {
        highestScore = score;
        bestMatch = faq;
      }
    });

    return highestScore > 0.3 ? bestMatch.answer : null;
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const userMessage = messageInput;
      setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
      setMessageInput('');
      setSuggestions([]);

      setTimeout(() => {
        const faqAnswer = findFaqAnswer(userMessage);
        if (faqAnswer) {
          setMessages(prev => [...prev, { sender: 'bot', text: faqAnswer }]);
        } else {
          setMessages(prev => [...prev, { sender: 'bot', text: "Thank you for your message. Our customer support team will respond shortly. You can also browse our FAQ section for quick answers." }]);
        }
      }, 800);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setMessageInput(value);

    if (value.trim()) {
      const filtered = faqs.filter(faq =>
        faq.question.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const openChat = () => {
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button - Only show when chat is closed */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={openChat}
            className="bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition-colors"
            aria-label="Open live chat"
          >
            <AiOutlineMessage className="h-6 w-6" />
          </button>
        </div>
      )}
      
      {/* Chat Window - Only show when chat is open */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50">
          <div className="bg-amber-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Live Chat Support</h3>
            <button
              onClick={closeChat}
              className="text-white hover:text-amber-200"
              aria-label="Close live chat"
            >
              <IoCloseSharp className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-4 overflow-y-auto max-h-64">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div key={index} className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <div
                    className={`inline-block px-3 py-2 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-8">
                <p>👋 Welcome to our Live Chat!</p>
                <p>Ask a question about loans, gold, or payments.</p>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-gray-200 relative">
            {/* Suggestion dropdown ABOVE input */}
            {suggestions.length > 0 && (
              <div className="absolute bottom-full mb-2 left-0 right-0 bg-amber-100 border rounded-md shadow-md z-20 max-h-40 overflow-y-auto opacity-80 backdrop-blur-sm transition-opacity">
                {suggestions.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => {
                      setMessageInput(s.question);
                      setSuggestions([]);
                    }}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    {s.question}
                  </div>
                ))}
              </div>
            )}

            {/* Input field */}
            <input
              type="text"
              placeholder="Type your question..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
              value={messageInput}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />

            {/* Send button */}
            <button
              onClick={handleSendMessage}
              className="bg-amber-600 text-white px-4 py-2 rounded-md mt-2 w-full hover:bg-amber-700 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LiveChat;