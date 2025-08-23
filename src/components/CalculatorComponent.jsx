// import React, { useState, useEffect } from "react";
// import { Calculator, Coins, TrendingUp, Clock, Percent, DollarSign, ArrowRight, Gem, Scale, List } from "lucide-react";

// const GoldLoanCalculator = () => {
//   const [ornaments, setOrnaments] = useState([{ id: 1, quantity: 1, weight: '', carat: '22' }]);
//   const [interestRate, setInterestRate] = useState("12");
//   const [loanTenure, setLoanTenure] = useState("12");
//   const [loanToValue, setLoanToValue] = useState("75");
//   const [monthlyEMI, setMonthlyEMI] = useState(0);
//   const [totalInterest, setTotalInterest] = useState(0);
//   const [totalPayment, setTotalPayment] = useState(0);
//   const [loanEligibility, setLoanEligibility] = useState(0);
//   const [goldValue, setGoldValue] = useState(0);

//   // Current gold price per gram (can be updated based on market)
//   const currentGoldPricePerGram = 9200; // INR per gram

//   // Carat purity factors
//   const caratFactors = {
//     '24': 1.0,
//     '22': 0.9167,
//     '21': 0.875,
//     '18': 0.75,
//     '14': 0.583,
//     '10': 0.4167
//   };

//   const caratOptions = [
//     { value: '24', label: '24 Carat (99.9% Pure)' },
//     { value: '22', label: '22 Carat (91.67% Pure)' },
//     { value: '21', label: '21 Carat (87.5% Pure)' },
//     { value: '18', label: '18 Carat (75% Pure)' },
//     { value: '14', label: '14 Carat (58.3% Pure)' },
//     { value: '10', label: '10 Carat (41.67% Pure)' }
//   ];

//   const addOrnament = () => {
//     const newId = Math.max(...ornaments.map(o => o.id)) + 1;
//     setOrnaments([...ornaments, { id: newId, quantity: 1, weight: '', carat: '22' }]);
//   };

//   const removeOrnament = (id) => {
//     if (ornaments.length > 1) {
//       setOrnaments(ornaments.filter(ornament => ornament.id !== id));
//     }
//   };

//   const updateOrnament = (id, field, value) => {
//     setOrnaments(ornaments.map(ornament => 
//       ornament.id === id ? { ...ornament, [field]: value } : ornament
//     ));
//   };

//   // Calculate EMI using the standard formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
//   const calculateEMI = (principal, rate, tenure) => {
//     const monthlyRate = rate / 100 / 12;
//     const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenure) / (Math.pow(1 + monthlyRate, tenure) - 1);
//     return emi;
//   };

//   const calculateGoldValue = () => {
//     let totalValue = 0;
    
//     ornaments.forEach(ornament => {
//       if (ornament.weight && ornament.quantity) {
//         const weight = parseFloat(ornament.weight);
//         const quantity = parseInt(ornament.quantity) || 1;
//         const caratFactor = caratFactors[ornament.carat] || 0;
        
//         // Calculate value for this ornament type
//         const ornamentValue = weight * quantity * currentGoldPricePerGram * caratFactor;
//         totalValue += ornamentValue;
//       }
//     });
    
//     return totalValue;
//   };

//   const handleCalculate = () => {
//     const value = calculateGoldValue();
//     setGoldValue(value);
    
//     // Calculate loan eligibility
//     const eligibility = (value * parseFloat(loanToValue)) / 100;
//     setLoanEligibility(eligibility);
    
//     // Calculate EMI and other values
//     const emi = calculateEMI(eligibility, parseFloat(interestRate), parseInt(loanTenure));
//     const total = emi * parseInt(loanTenure);
//     const interest = total - eligibility;
    
//     setMonthlyEMI(emi);
//     setTotalInterest(interest);
//     setTotalPayment(total);
//   };

//   const resetCalculator = () => {
//     setOrnaments([{ id: 1, quantity: 1, weight: '', carat: '22' }]);
//     setInterestRate("12");
//     setLoanTenure("12");
//     setLoanToValue("75");
//     setGoldValue(0);
//     setLoanEligibility(0);
//     setMonthlyEMI(0);
//     setTotalInterest(0);
//     setTotalPayment(0);
//   };

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 2,
//     }).format(amount);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
//       {/* Header */}
      

//       <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Calculator Form */}
//           <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-100">
//             <div className="flex items-center space-x-2 mb-6">
//               <Calculator className="h-4 w-4 text-amber-600" />
//               <h2 className="text-2xl font-bold text-gray-800">Calculate Your Gold Loan</h2>
//             </div>

//             <div className="space-y-2">
//               {/* Ornaments Section */}
//               <div className="space-y-2">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-lg font-semibold text-gray-800 flex items-center">
//                     <List className="h-5 w-5 mr-2 text-amber-600" />
//                     Gold Ornaments
//                   </h3>
//                   <button
//                     onClick={addOrnament}
//                     className="bg-amber-100 text-amber-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-amber-200 transition-colors duration-200"
//                   >
//                     + Add Ornament
//                   </button>
//                 </div>

//                 {ornaments.map((ornament, index) => (
//                   <div key={ornament.id} className="bg-gray-50 rounded-xl p-4 space-y-2 border border-gray-200">
//                     <div className="flex items-center justify-between">
//                       <h4 className="font-medium text-gray-700">Ornament {index + 1}</h4>
//                       {ornaments.length > 1 && (
//                         <button
//                           onClick={() => removeOrnament(ornament.id)}
//                           className="text-red-500 hover:text-red-700 text-sm font-medium"
//                         >
//                           Remove
//                         </button>
//                       )}
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                       <div className="space-y-1">
//                         <label className="text-sm font-medium text-gray-600">Quantity</label>
//                         <input
//                           type="number"
//                           min="1"
//                           value={ornament.quantity}
//                           onChange={(e) => updateOrnament(ornament.id, 'quantity', e.target.value)}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
//                         />
//                       </div>
                      
//                       <div className="space-y-1">
//                         <label className="text-sm font-medium text-gray-600">Weight (grams)</label>
//                         <div className="relative">
//                           <input
//                             type="number"
//                             step="0.01"
//                             value={ornament.weight}
//                             onChange={(e) => updateOrnament(ornament.id, 'weight', e.target.value)}
//                             placeholder="0.00"
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm pl-6"
//                           />
//                           <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">g</span>
//                         </div>
//                       </div>
                      
//                       <div className="space-y-1">
//                         <label className="text-sm font-medium text-gray-600">Carat</label>
//                         <select
//                           value={ornament.carat}
//                           onChange={(e) => updateOrnament(ornament.id, 'carat', e.target.value)}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
//                         >
//                           {caratOptions.map(option => (
//                             <option key={option.value} value={option.value}>
//                               {option.label}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Gold Market Information */}
//               <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
//                 <div className="flex items-center space-x-2 mb-2">
//                   <Gem className="h-4 w-4 text-amber-600" />
//                   <h4 className="font-medium text-amber-800">Current Gold Rate</h4>
//                 </div>
//                 <p className="text-sm text-amber-700">
//                   <strong>₹{currentGoldPricePerGram.toLocaleString()}</strong> per gram (24 Carat)
//                 </p>
//                 <p className="text-xs text-amber-600 mt-1">
//                   Prices are subject to market fluctuations
//                 </p>
//               </div>

//               {/* Loan to Value Ratio */}
//               <div className="space-y-2">
//                 <label className="flex items-center text-sm font-medium text-gray-700">
//                   <Percent className="h-4 w-4 mr-2 text-amber-600" />
//                   Loan to Value Ratio ({loanToValue}%)
//                 </label>
//                 <input
//                   type="range"
//                   min="50"
//                   max="90"
//                   step="5"
//                   value={loanToValue}
//                   onChange={(e) => setLoanToValue(e.target.value)}
//                   className="w-full h-2 bg-amber-100 rounded-lg appearance-none cursor-pointer slider"
//                 />
//                 <div className="flex justify-between text-xs text-gray-500">
//                   <span>50%</span>
//                   <span>75%</span>
//                   <span>90%</span>
//                 </div>
//               </div>

//               {/* Interest Rate */}
//               <div className="space-y-2">
//                 <label className="flex items-center text-sm font-medium text-gray-700">
//                   <Percent className="h-4 w-4 mr-2 text-amber-600" />
//                   Annual Interest Rate ({interestRate}%)
//                 </label>
//                 <input
//                   type="range"
//                   min="8"
//                   max="18"
//                   step="0.5"
//                   value={interestRate}
//                   onChange={(e) => setInterestRate(e.target.value)}
//                   className="w-full h-2 bg-amber-100 rounded-lg appearance-none cursor-pointer slider"
//                 />
//                 <div className="flex justify-between text-xs text-gray-500">
//                   <span>8%</span>
//                   <span>12%</span>
//                   <span>18%</span>
//                 </div>
//               </div>

//               {/* Loan Tenure */}
//               <div className="space-y-2">
//                 <label className="flex items-center text-sm font-medium text-gray-700">
//                   <Clock className="h-4 w-4 mr-2 text-amber-600" />
//                   Loan Tenure ({loanTenure} months)
//                 </label>
//                 <select
//                   value={loanTenure}
//                   onChange={(e) => setLoanTenure(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-lg"
//                 >
//                   <option value="1">1 months</option>
//                   <option value="3">3 months</option>
//                   <option value="6">6 months</option>
//                   <option value="9">9 months</option>
//                   <option value="12">12 months</option>
//                   <option value="18">18 months</option>
//                   <option value="24">24 months</option>
//                   <option value="36">36 months</option>
//                   <option value="48">48 months</option>
//                   <option value="60">60 months</option>
//                 </select>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex space-x-3 pt-4">
//                 <button
//                   onClick={resetCalculator}
//                   className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
//                 >
//                   Reset
//                 </button>
//                 <button
//                   onClick={handleCalculate}
//                   className="flex-1 bg-gradient-to-r from-amber-700 to-yellow-500 text-white py-3 px-6 rounded-xl font-medium hover:from-amber-600 hover:to-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//                 >
//                   Calculate
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Results Section */}
//           <div className="space-y-2">
//             {/* Gold Valuation Card */}
//             <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-100">
//               <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
//                 <Scale className="h-5 w-5 mr-2 text-amber-600" />
//                 Gold Valuation
//               </h3>
              
//               <div className="space-y-2">
//                 <div className="flex justify-between items-center py-3 border-b border-gray-100">
//                   <span className="text-gray-600">Total Ornaments</span>
//                   <span className="font-semibold text-lg text-gray-800">{ornaments.length}</span>
//                 </div>
                
//                 <div className="flex justify-between items-center py-3 border-b border-gray-100">
//                   <span className="text-gray-600">Total Weight</span>
//                   <span className="font-semibold text-lg text-gray-800">
//                     {ornaments.reduce((total, o) => {
//                       const weight = parseFloat(o.weight) || 0;
//                       const quantity = parseInt(o.quantity) || 1;
//                       return total + (weight * quantity);
//                     }, 0).toFixed(2)} g
//                   </span>
//                 </div>
                
//                 <div className="flex justify-between items-center py-3 border-b border-gray-100">
//                   <span className="text-gray-600">Gold Value</span>
//                   <span className="font-semibold text-lg text-green-600">{formatCurrency(goldValue)}</span>
//                 </div>
                
//                 <div className="flex justify-between items-center py-3">
//                   <span className="text-gray-600">Eligible Loan Amount</span>
//                   <span className="font-bold text-xl text-amber-600">{formatCurrency(loanEligibility)}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Loan Summary Card */}
//             <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-100">
//               <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
//                 <TrendingUp className="h-5 w-5 mr-2 text-amber-600" />
//                 Loan Summary
//               </h3>
              
//               <div className="space-y-2">
//                 <div className="flex justify-between items-center py-3 border-b border-gray-100">
//                   <span className="text-gray-600">Monthly EMI</span>
//                   <span className="font-semibold text-lg text-amber-600">{formatCurrency(monthlyEMI)}</span>
//                 </div>
                
//                 <div className="flex justify-between items-center py-3 border-b border-gray-100">
//                   <span className="text-gray-600">Total Interest</span>
//                   <span className="font-semibold text-lg text-red-600">{formatCurrency(totalInterest)}</span>
//                 </div>
                
//                 <div className="flex justify-between items-center py-3">
//                   <span className="text-gray-600">Total Payment</span>
//                   <span className="font-bold text-xl text-green-600">{formatCurrency(totalPayment)}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Benefits Card */}
//             <div className="bg-gradient-to-r from-amber-700 to-yellow-500 rounded-2xl shadow-2xl p-8 text-white">
//               <h3 className="text-xl font-bold mb-4">Why Choose Gold Loan?</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center space-x-3">
//                   <div className="bg-white bg-opacity-20 p-1 rounded-full">
//                     <ArrowRight className="h-4 w-4" />
//                   </div>
//                   <span>Quick approval within 24 hours</span>
//                 </li>
//                 <li className="flex items-center space-x-3">
//                   <div className="bg-white bg-opacity-20 p-1 rounded-full">
//                     <ArrowRight className="h-4 w-4" />
//                   </div>
//                   <span>Loan up to 90% of gold value</span>
//                 </li>
//                 <li className="flex items-center space-x-3">
//                   <div className="bg-white bg-opacity-20 p-1 rounded-full">
//                     <ArrowRight className="h-4 w-4" />
//                   </div>
//                   <span>Competitive interest rates starting from 8%</span>
//                 </li>
//                 <li className="flex items-center space-x-3">
//                   <div className="bg-white bg-opacity-20 p-1 rounded-full">
//                     <ArrowRight className="h-4 w-4" />
//                   </div>
//                   <span>No credit score requirement</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .slider::-webkit-slider-thumb {
//           appearance: none;
//           height: 20px;
//           width: 20px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #f59e0b, #d97706);
//           cursor: pointer;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//         }
        
//         .slider::-moz-range-thumb {
//           height: 20px;
//           width: 20px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #f59e0b, #d97706);
//           cursor: pointer;
//           border: none;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default GoldLoanCalculator;
import  { useState } from "react";
const GoldLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [goldWeight, setGoldWeight] = useState("");
  const [carat, setCarat] = useState("22");
  const [goldRequired, setGoldRequired] = useState(0);
  const [loanEligible, setLoanEligible] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  // Gold price per gram for different carats (approximate values)
  const goldPrices = {
    18: 5400,
    19: 5600,
    20: 5800,
    21: 6000,
    22: 6810
  };

  // Calculate based on input
  const calculate = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      if (loanAmount && !goldWeight) {
        // Calculate gold required for given loan amount
        const pricePerGram = goldPrices[parseInt(carat)];
        const goldNeeded = parseFloat(loanAmount) / pricePerGram;
        setGoldRequired(Math.ceil(goldNeeded * 100) / 100);
        setLoanEligible(0);
      } else if (goldWeight && !loanAmount) {
        // Calculate loan eligible for given gold weight
        const pricePerGram = goldPrices[parseInt(carat)];
        const loanAmountCalculated = parseFloat(goldWeight) * pricePerGram;
        setLoanEligible(loanAmountCalculated);
        setGoldRequired(0);
      }
      
      setIsCalculating(false);
    }, 800);
  };

  const resetCalculator = () => {
    setLoanAmount("");
    setGoldWeight("");
    setCarat("22");
    setGoldRequired(0);
    setLoanEligible(0);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const handleCaratChange = (value) => {
    setCarat(value);
    // Reset calculations when carat changes
    setGoldRequired(0);
    setLoanEligible(0);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-amber-50 via-orange-50 to-white-50">    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
       <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-12">
              {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
                 Gold Loan Calculator
              </span> */}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 text-5xl font-bold">
  Gold Loan Calculator
</span>
            </h1>
            <p className="text-gray-600 text-black max-w-2xl mx-auto">
              Calculate your eligibility for a gold loan by Unigold Finance.
            </p>
          </div>

        <div className="bg-white rounded-2xl shadow-2xl border-4 border-amber-200 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Loan Details</h2>
                <p className="text-gray-600 mb-4">Kindly enter the loan amount or gold weight you want to pledge.</p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Loan amount (₹)</label>
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      placeholder="Enter loan amount"
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-lg"
                    />
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>Min ₹1,500</span>
                      <span>Max ₹1 Cr</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <span className="text-gray-500">(or)</span>
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gold weight (gms)</label>
                    <input
                      type="number"
                      value={goldWeight}
                      onChange={(e) => setGoldWeight(e.target.value)}
                      placeholder="Enter gold weight"
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-lg"
                    />
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>Min 0.50 gms</span>
                      <span>Max 1000 gms</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Kindly choose the Carat value of your ornament</h3>
                <div className="flex flex-wrap gap-3">
                  {[18, 19, 20, 21, 22].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleCaratChange(value)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        carat === value.toString()
                          ? 'bg-amber-500 text-white shadow-md transform scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3 pt-6">
                <button
                  onClick={resetCalculator}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  Reset
                </button>
                <button
                  onClick={calculate}
                  disabled={isCalculating || (!loanAmount && !goldWeight)}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-3 px-6 rounded-xl font-medium hover:from-amber-600 hover:to-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCalculating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Calculating...
                    </div>
                  ) : (
                    'Calculate'
                  )}
                </button>
              </div>
            </div>

            {/* Results Section */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-full max-w-md bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white shadow-2xl border border-amber-500">
                <div className="flex items-center justify-center mb-6">
                  <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {loanAmount && !goldWeight ? "Gold required" : "Loan eligible"}
                  </span>
                </div>
                
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold mb-2">
                    {loanAmount && !goldWeight 
                      ? `${goldRequired} gms` 
                      : formatCurrency(loanEligible)
                    }
                  </div>
                  
                  <div className="text-gray-300 text-sm leading-relaxed">
                    {loanAmount && !goldWeight ? (
                      <>
                        You are required to pledge at least a net weight of <span className="font-semibold">{goldRequired}</span> grams of Gold for a loan amount of <br />
                        <span className="font-semibold">{formatCurrency(parseFloat(loanAmount))}</span>
                      </>
                    ) : (
                      <>
                        You can get a loan of <span className="font-semibold">{formatCurrency(loanEligible)}</span> for your gold of <span className="font-semibold">{goldWeight} gms</span> with {carat}K purity
                      </>
                    )}
                  </div>
                </div>
                
                <div className="text-center text-xs text-gray-400 mb-6">
                  *Loan amount calculated at ₹{goldPrices[parseInt(carat)]}/gm for {carat}K
                </div>
                
                <button
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-3 px-6 rounded-xl font-medium hover:from-amber-600 hover:to-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>The loan amount calculated is a rough estimate only. <br />
          Our trained executives will manually determine the actual value when they examine the gold and its purity physically at Branch.</p>
        </div>
      </div>
    </div>
  );
};

export default GoldLoanCalculator;