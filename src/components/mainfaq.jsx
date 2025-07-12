import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
        <svg
          className={`w-5 h-5 text-amber-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 pt-2 bg-gray-50">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSections = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState('all');

  // Sample FAQ data
  const faqCategories = [
    { id: 'all', name: t('faq.categories.all') },
    { id: 'application', name: t('faq.categories.application') },
    { id: 'repayment', name: t('faq.categories.repayment') },
    { id: 'gold', name: t('faq.categories.gold') },
    { id: 'account', name: t('faq.categories.account') },
  ];

  const faqs = [
    {
      id: 1,
      question: t('faq.questions.q1'),
      answer: t('faq.answers.a1'),
      category: 'application'
    },
    {
      id: 2,
      question: t('faq.questions.q2'),
      answer: t('faq.answers.a2'),
      category: 'application'
    },
    {
      id: 3,
      question: t('faq.questions.q3'),
      answer: t('faq.answers.a3'),
      category: 'gold'
    },
    {
      id: 4,
      question: t('faq.questions.q4'),
      answer: t('faq.answers.a4'),
      category: 'repayment'
    },
    {
      id: 5,
      question: t('faq.questions.q5'),
      answer: t('faq.answers.a5'),
      category: 'account'
    },
  ];

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedFaqCategory === 'all' || faq.category === selectedFaqCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="mb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
  <div className="text-center mb-8">
              <h2 className="text-3xl font-bold  text-center text-amber-700 mb-2">{t('faq.title')}</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      {t('faq.subtitle')}
    </p>
  </div>

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
        placeholder={t('faq.searchPlaceholder')}
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
  </div>

  {/* FAQ List */}
  <div className="space-y-4">
    {filteredFaqs.length > 0 ? (
      filteredFaqs.map(faq => (
        <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))
    ) : (
      <div className="text-center py-8 text-gray-500">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-2 text-lg font-medium text-gray-900">{t('faq.noResults.title')}</h3>
        <p className="mt-1 text-gray-500">{t('faq.noResults.description')}</p>
      </div>
    )}
  </div>
</section>
  );
};

export default FAQSections;