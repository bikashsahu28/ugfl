import { useState } from 'react';

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-4 py-3 text-left bg-amber-50 hover:bg-amber-100 transition-colors flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-amber-900">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-amber-600 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-white">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default FaqItem;