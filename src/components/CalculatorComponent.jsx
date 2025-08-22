import React, { useState, useEffect } from "react";
import { Calculator, Coins, TrendingUp, Clock, Percent, DollarSign, ArrowRight, Gem, Scale, List } from "lucide-react";

const GoldLoanCalculator = () => {
  const [ornaments, setOrnaments] = useState([{ id: 1, quantity: 1, weight: '', carat: '22' }]);
  const [interestRate, setInterestRate] = useState("12");
  const [loanTenure, setLoanTenure] = useState("12");
  const [loanToValue, setLoanToValue] = useState("75");
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [loanEligibility, setLoanEligibility] = useState(0);
  const [goldValue, setGoldValue] = useState(0);

  // Current gold price per gram (can be updated based on market)
  const currentGoldPricePerGram = 9200; // INR per gram

  // Carat purity factors
  const caratFactors = {
    '24': 1.0,
    '22': 0.9167,
    '21': 0.875,
    '18': 0.75,
    '14': 0.583,
    '10': 0.4167
  };

  const caratOptions = [
    { value: '24', label: '24 Carat (99.9% Pure)' },
    { value: '22', label: '22 Carat (91.67% Pure)' },
    { value: '21', label: '21 Carat (87.5% Pure)' },
    { value: '18', label: '18 Carat (75% Pure)' },
    { value: '14', label: '14 Carat (58.3% Pure)' },
    { value: '10', label: '10 Carat (41.67% Pure)' }
  ];

  const addOrnament = () => {
    const newId = Math.max(...ornaments.map(o => o.id)) + 1;
    setOrnaments([...ornaments, { id: newId, quantity: 1, weight: '', carat: '22' }]);
  };

  const removeOrnament = (id) => {
    if (ornaments.length > 1) {
      setOrnaments(ornaments.filter(ornament => ornament.id !== id));
    }
  };

  const updateOrnament = (id, field, value) => {
    setOrnaments(ornaments.map(ornament => 
      ornament.id === id ? { ...ornament, [field]: value } : ornament
    ));
  };

  // Calculate EMI using the standard formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
  const calculateEMI = (principal, rate, tenure) => {
    const monthlyRate = rate / 100 / 12;
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenure) / (Math.pow(1 + monthlyRate, tenure) - 1);
    return emi;
  };

  const calculateGoldValue = () => {
    let totalValue = 0;
    
    ornaments.forEach(ornament => {
      if (ornament.weight && ornament.quantity) {
        const weight = parseFloat(ornament.weight);
        const quantity = parseInt(ornament.quantity) || 1;
        const caratFactor = caratFactors[ornament.carat] || 0;
        
        // Calculate value for this ornament type
        const ornamentValue = weight * quantity * currentGoldPricePerGram * caratFactor;
        totalValue += ornamentValue;
      }
    });
    
    return totalValue;
  };

  const handleCalculate = () => {
    const value = calculateGoldValue();
    setGoldValue(value);
    
    // Calculate loan eligibility
    const eligibility = (value * parseFloat(loanToValue)) / 100;
    setLoanEligibility(eligibility);
    
    // Calculate EMI and other values
    const emi = calculateEMI(eligibility, parseFloat(interestRate), parseInt(loanTenure));
    const total = emi * parseInt(loanTenure);
    const interest = total - eligibility;
    
    setMonthlyEMI(emi);
    setTotalInterest(interest);
    setTotalPayment(total);
  };

  const resetCalculator = () => {
    setOrnaments([{ id: 1, quantity: 1, weight: '', carat: '22' }]);
    setInterestRate("12");
    setLoanTenure("12");
    setLoanToValue("75");
    setGoldValue(0);
    setLoanEligibility(0);
    setMonthlyEMI(0);
    setTotalInterest(0);
    setTotalPayment(0);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      

      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-100">
            <div className="flex items-center space-x-2 mb-6">
              <Calculator className="h-6 w-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-800">Calculate Your Gold Loan</h2>
            </div>

            <div className="space-y-6">
              {/* Ornaments Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                    <List className="h-5 w-5 mr-2 text-amber-600" />
                    Gold Ornaments
                  </h3>
                  <button
                    onClick={addOrnament}
                    className="bg-amber-100 text-amber-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-amber-200 transition-colors duration-200"
                  >
                    + Add Ornament
                  </button>
                </div>

                {ornaments.map((ornament, index) => (
                  <div key={ornament.id} className="bg-gray-50 rounded-xl p-4 space-y-3 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-700">Ornament {index + 1}</h4>
                      {ornaments.length > 1 && (
                        <button
                          onClick={() => removeOrnament(ornament.id)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-600">Quantity</label>
                        <input
                          type="number"
                          min="1"
                          value={ornament.quantity}
                          onChange={(e) => updateOrnament(ornament.id, 'quantity', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-600">Weight (grams)</label>
                        <div className="relative">
                          <input
                            type="number"
                            step="0.01"
                            value={ornament.weight}
                            onChange={(e) => updateOrnament(ornament.id, 'weight', e.target.value)}
                            placeholder="0.00"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm pl-6"
                          />
                          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">g</span>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-600">Carat</label>
                        <select
                          value={ornament.carat}
                          onChange={(e) => updateOrnament(ornament.id, 'carat', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                        >
                          {caratOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gold Market Information */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Gem className="h-4 w-4 text-amber-600" />
                  <h4 className="font-medium text-amber-800">Current Gold Rate</h4>
                </div>
                <p className="text-sm text-amber-700">
                  <strong>₹{currentGoldPricePerGram.toLocaleString()}</strong> per gram (24 Carat)
                </p>
                <p className="text-xs text-amber-600 mt-1">
                  Prices are subject to market fluctuations
                </p>
              </div>

              {/* Loan to Value Ratio */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Percent className="h-4 w-4 mr-2 text-amber-600" />
                  Loan to Value Ratio ({loanToValue}%)
                </label>
                <input
                  type="range"
                  min="50"
                  max="90"
                  step="5"
                  value={loanToValue}
                  onChange={(e) => setLoanToValue(e.target.value)}
                  className="w-full h-2 bg-amber-100 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>50%</span>
                  <span>75%</span>
                  <span>90%</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Percent className="h-4 w-4 mr-2 text-amber-600" />
                  Annual Interest Rate ({interestRate}%)
                </label>
                <input
                  type="range"
                  min="8"
                  max="18"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full h-2 bg-amber-100 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>8%</span>
                  <span>12%</span>
                  <span>18%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Clock className="h-4 w-4 mr-2 text-amber-600" />
                  Loan Tenure ({loanTenure} months)
                </label>
                <select
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-lg"
                >
                  <option value="1">1 months</option>
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="9">9 months</option>
                  <option value="12">12 months</option>
                  <option value="18">18 months</option>
                  <option value="24">24 months</option>
                  <option value="36">36 months</option>
                  <option value="48">48 months</option>
                  <option value="60">60 months</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={resetCalculator}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  Reset
                </button>
                <button
                  onClick={handleCalculate}
                  className="flex-1 bg-gradient-to-r from-amber-700 to-yellow-500 text-white py-3 px-6 rounded-xl font-medium hover:from-amber-600 hover:to-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Gold Valuation Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Scale className="h-5 w-5 mr-2 text-amber-600" />
                Gold Valuation
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Total Ornaments</span>
                  <span className="font-semibold text-lg text-gray-800">{ornaments.length}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Total Weight</span>
                  <span className="font-semibold text-lg text-gray-800">
                    {ornaments.reduce((total, o) => {
                      const weight = parseFloat(o.weight) || 0;
                      const quantity = parseInt(o.quantity) || 1;
                      return total + (weight * quantity);
                    }, 0).toFixed(2)} g
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Gold Value</span>
                  <span className="font-semibold text-lg text-green-600">{formatCurrency(goldValue)}</span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Eligible Loan Amount</span>
                  <span className="font-bold text-xl text-amber-600">{formatCurrency(loanEligibility)}</span>
                </div>
              </div>
            </div>

            {/* Loan Summary Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-amber-600" />
                Loan Summary
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Monthly EMI</span>
                  <span className="font-semibold text-lg text-amber-600">{formatCurrency(monthlyEMI)}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="font-semibold text-lg text-red-600">{formatCurrency(totalInterest)}</span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Total Payment</span>
                  <span className="font-bold text-xl text-green-600">{formatCurrency(totalPayment)}</span>
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-gradient-to-r from-amber-700 to-yellow-500 rounded-2xl shadow-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Why Choose Gold Loan?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="bg-white bg-opacity-20 p-1 rounded-full">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <span>Quick approval within 24 hours</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-white bg-opacity-20 p-1 rounded-full">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <span>Loan up to 90% of gold value</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-white bg-opacity-20 p-1 rounded-full">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <span>Competitive interest rates starting from 8%</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-white bg-opacity-20 p-1 rounded-full">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <span>No credit score requirement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default GoldLoanCalculator;