// This component is a Gold Loan Calculator for Unigold Finance, allowing users to calculate the maximum loan amount based on gold weight, purity, and selected loan scheme.
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const GoldLoanCalculator = () => {
  const { t, i18n } = useTranslation();
  const [goldWeight, setGoldWeight] = useState('');
  const [purity, setPurity] = useState('22');
  const [selectedScheme, setSelectedScheme] = useState('Unigold Super Stability Loan');
  const [result, setResult] = useState(null);

  const schemeData = {
    'Unigold Super Stability Loan': 6278,
    'Unigold Maximum Delight Loan': 6278,
    'Unigold Super Comfort Loan': 6278,
    'Unigold Comfort Plus Loan': 6278,
    'Unigold Super Easy Loan': 6278,
    'Unigold Easy Loan': 6026,
    'Unigold High Value Loan': 5859,
    'Unigold Smart Loan': 5441
  };

  const purityFactors = {
    '22': 1,       // 91.6% pure
    '20': 0.909,   // 83.3% pure (20/22)
    '18': 0.818    // 75.0% pure (18/22)
  };

  const calculateLoan = (e) => {
    e.preventDefault();
    if (!goldWeight || isNaN(goldWeight) || goldWeight <= 0) {
      alert(t('validation.enterValidWeight'));
      return;
    }

    const purityFactor = purityFactors[purity];
    const schemeRate = schemeData[selectedScheme];
    const maxLoanAmount = (goldWeight * purityFactor * schemeRate).toFixed(0);

    setResult({
      maxLoanAmount,
      scheme: selectedScheme,
      rate: schemeRate,
      purity: purity,
      weight: goldWeight
    });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      {/* <div className="flex justify-end mb-4 space-x-2">
        <button 
          onClick={() => changeLanguage('en')}
          className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}
        >
          English
        </button>
        <button 
          onClick={() => changeLanguage('hi')}
          className={`px-3 py-1 rounded ${i18n.language === 'hi' ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}
        >
          हिंदी
        </button>
        <button 
          onClick={() => changeLanguage('or')}
          className={`px-3 py-1 rounded ${i18n.language === 'or' ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}
        >
          ଓଡ଼ିଆ
        </button>
      </div> */}

      <h2 className="text-2xl font-bold text-center text-yellow-600 mb-8">
        {t('calculator.title')}
      </h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Calculator Form - Left Side */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-6">
          <form onSubmit={calculateLoan} className="space-y-4">
            <div className="form-group">
              <label htmlFor="goldWeight" className="block text-sm font-medium text-gray-700 mb-1">
                {t('calculator.weightLabel')}
              </label>
              <input
                type="number"
                id="goldWeight"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                value={goldWeight}
                onChange={(e) => setGoldWeight(e.target.value)}
                placeholder={t('calculator.weightPlaceholder')}
                step="0.01"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="purity" className="block text-sm font-medium text-gray-700 mb-1">
                {t('calculator.purityLabel')}
              </label>
              <select
                id="purity"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                value={purity}
                onChange={(e) => setPurity(e.target.value)}
              >
                <option value="22">{t('purityOptions.22K')}</option>
                <option value="20">{t('purityOptions.20K')}</option>
                <option value="18">{t('purityOptions.18K')}</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="scheme" className="block text-sm font-medium text-gray-700 mb-1">
                {t('calculator.schemeLabel')}
              </label>
              <select
                id="scheme"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                value={selectedScheme}
                onChange={(e) => setSelectedScheme(e.target.value)}
              >
                {Object.keys(schemeData).map((scheme) => (
                  <option key={scheme} value={scheme}>
                    {scheme} ({t('common.rupeeSymbol')}{schemeData[scheme]}/gram)
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              {t('calculator.calculateBtn')}
            </button>
          </form>
        </div>

        {/* Results Panel - Right Side */}
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-6 h-full">
            {result ? (
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-semibold text-yellow-600 mb-4">
                  {t('result.title')}
                </h3>
                
                <div className="space-y-3 flex-grow">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">{t('result.weightText')}</p>
                      <p className="font-medium">{result.weight} {t('common.grams')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{t('result.purityText')}</p>
                      <p className="font-medium">{result.purity}K ({purityFactors[result.purity]*100}% {t('common.pure')})</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">{t('result.schemeText')}</p>
                      <p className="font-medium">{result.scheme}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{t('result.rateText')}</p>
                      <p className="font-medium">{t('common.rupeeSymbol')}{result.rate}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">{t('result.loanAmount')}</p>
                    <p className="text-2xl font-bold text-green-600">{t('common.rupeeSymbol')}{result.maxLoanAmount}</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <div className="bg-yellow-50 p-3 rounded-md">
                    <p className="text-xs text-gray-600">
                      <span className="font-semibold">{t('common.note')}:</span> {t('disclaimer.note')}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {t('disclaimer.fees')}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">{t('emptyState.title')}</h3>
                  <p className="mt-1 text-sm text-gray-500">{t('emptyState.description')}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldLoanCalculator;