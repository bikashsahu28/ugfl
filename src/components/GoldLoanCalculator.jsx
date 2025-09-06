import { useState, useEffect } from 'react';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { LuCircleDollarSign } from 'react-icons/lu';
import { TbBulb } from 'react-icons/tb';
import { useInView } from 'react-intersection-observer';

const GoldLoanCalculator = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [goldWeight, setGoldWeight] = useState(10);
  const [purity, setPurity] = useState(22);
  const [goldPrice, setGoldPrice] = useState(null);
  const [loanAmount, setLoanAmount] = useState(0);

  // Fetch gold price (simulated)
  useEffect(() => {
    // In a real app, you would fetch this from an API
    const fetchGoldPrice = async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      // Mock gold price - replace with actual API call
      setGoldPrice(5000); // ₹5000 per gram
    };

    if (inView) {
      fetchGoldPrice();
    }
  }, [inView]);
useEffect(() => {
    setGoldPrice(6319.50);
    
    const interval = setInterval(() => {
      const randomChange = (Math.random() - 0.5) * 10;
      setGoldPrice(prev => +(prev + randomChange).toFixed(2));
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  // Calculate loan amount whenever inputs change
  useEffect(() => {
    if (goldPrice) {
      const pureGold = goldWeight * (purity / 24);
      const marketValue = pureGold * goldPrice;
      const calculatedLoanAmount = marketValue * 0.75; // 75% LTV
      setLoanAmount(calculatedLoanAmount);
    }
  }, [goldWeight, purity, goldPrice]);

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column: Calculator Form */}
          <div className="flex-1 flex flex-col">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-amber-700">Gold Loan Calculator</h2>
              <p className="text-lg text-gray-600">Calculate your loan amount based on current gold rates</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex-1">
              {/* Gold Weight Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-lg font-medium text-gray-800">Gold Weight (grams)</label>
                  <span className="text-xl font-bold text-primary bg-primary/10 px-4 py-1 rounded-full">
                    {goldWeight}g
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="100" 
                  value={goldWeight} 
                  onChange={(e) => setGoldWeight(e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>1g</span>
                  <span>50g</span>
                  <span>100g</span>
                </div>
              </div>
              
              {/* Purity Selection */}
              <div className="mb-8">
                <label className="block text-lg font-medium text-gray-800 mb-4">Gold Purity</label>
                <div className="grid grid-cols-4 gap-3">
                  {[18, 20, 22, 24].map(karat => (
                    <button
                      key={karat}
                      className={`py-3 rounded-xl font-medium transition-all ${
                        purity === karat 
                          ? 'bg-primary text-white shadow-md' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                      onClick={() => setPurity(karat)}
                    >
                      {karat}K
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Gold Rate Display */}
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mt-auto">
                <div className="flex justify-between items-center">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Current Gold Rate</label>
                    <div className="text-xs text-gray-500">Live market price</div>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    ₹{goldPrice ? goldPrice.toLocaleString('en-IN') : 'Loading...'}
                    <span className="text-sm text-gray-500 ml-1">/g</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Results and Formula */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Estimated Loan Amount Box */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <LuCircleDollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Estimated Loan Amount</h3>
              </div>
              
              <div className="flex items-end justify-between mb-6">
                <div className="text-5xl font-bold text-primary">
                  ₹{loanAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                </div>
                <div className="text-sm text-gray-600 text-right bg-gray-50 px-3 py-1 rounded-lg">
                  <div>Up to 75% of gold value</div>
                  <div className="font-medium">(LTV Ratio)</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <IoCheckmarkDoneSharp className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Interest rates starting at 0.79% per month</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <IoCheckmarkDoneSharp className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">No hidden charges or processing fees</span>
                </div>
              </div>
            </div>

            {/* Calculation Formula Box */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <TbBulb className="w-6 h-6 text-primary"  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Calculation Formula</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-5 rounded-xl">
                  <div className="text-gray-700 space-y-3">
                    <div className="flex gap-3">
                      <div className="bg-primary/10 text-primary font-medium w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                      <p>Pure Gold Content = Weight × (Purity/24)</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-primary/10 text-primary font-medium w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                      <p>Market Value = Pure Gold × Current Rate</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-primary/10 text-primary font-medium w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                      <p>Loan Amount = Market Value × 75% (LTV)</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <p className="font-medium text-gray-800">
                    Your calculation: {goldWeight}g × ({purity}K/24) × ₹{goldPrice} × 0.75 = <span className="text-primary">₹{loanAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldLoanCalculator;