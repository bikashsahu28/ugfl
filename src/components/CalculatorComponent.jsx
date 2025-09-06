import  { useState } from "react";
import { Link } from "react-router-dom";
const CalculatorComponent = () => {
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

export default CalculatorComponent;