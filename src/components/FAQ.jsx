import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is the minimum amount of gold required for a loan?",
      answer: "We accept gold items starting from 2 grams of 18K purity or higher."
    },
    {
      question: "What are the interest rates for gold loans?",
      answer: "Our interest rates start from 7.5% per annum, varying based on loan amount and duration."
    },
    {
      question: "How long does the loan approval process take?",
      answer: "Most loans are approved within 30 minutes after gold verification."
    },
    {
      question: "What documents are required for a gold loan?",
      answer: "You need a valid ID proof, address proof, and recent passport-size photograph."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {faqItems.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50"
          >
            <span className="font-medium text-left">{item.question}</span>
            <motion.span
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaChevronDown />
            </motion.span>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-gray-50 rounded-b-lg">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default FAQ;