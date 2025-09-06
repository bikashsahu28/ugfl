import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import GoldLoanCalculator from '../components/GoldLoanCalculator';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Calculator() {
  const [goldWeight, setGoldWeight] = useState('');
  const [goldPurity, setGoldPurity] = useState('24');
  const [loanDuration, setLoanDuration] = useState('12');
  const { t } = useTranslation();
  
  const currentGoldRate = 6245.50;
  const ltvRatio = 0.75;

  const calculateLoan = () => {
    const purityFactor = parseInt(goldPurity) / 24;
    const goldValue = parseFloat(goldWeight) * currentGoldRate * purityFactor;
    return goldValue * ltvRatio;
  };

  const calculateEMI = (loanAmount) => {
    const r = 0.12 / 12;
    const n = parseInt(loanDuration);
    const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return emi;
  };

  const loanAmount = goldWeight ? calculateLoan() : 0;
  const monthlyEMI = loanAmount ? calculateEMI(loanAmount) : 0;

  const chartData = {
    labels: Array.from({ length: parseInt(loanDuration) || 12 }, (_, i) => `Month ${i + 1}`),
    datasets: [{
      label: t('calculator.emiSchedule'),
      data: Array.from({ length: parseInt(loanDuration) || 12 }, () => monthlyEMI.toFixed(2)),
      borderColor: 'rgb(255, 0, 0)',
      tension: 0.1
    }]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <GoldLoanCalculator />
      <Calculator />
      <h1 className="text-3xl font-bold text-center mb-8">{t('calculator.title')}</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">{t('calculator.weight')}</label>
            <input
              type="number"
              value={goldWeight}
              onChange={(e) => setGoldWeight(e.target.value)}
              className="calculator-input"
              placeholder={t('calculator.weight')}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">{t('calculator.purity')}</label>
            <select
              value={goldPurity}
              onChange={(e) => setGoldPurity(e.target.value)}
              className="calculator-input"
            >
              <option value="24">24K</option>
              <option value="22">22K</option>
              <option value="18">18K</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">{t('calculator.duration')}</label>
            <select
              value={loanDuration}
              onChange={(e) => setLoanDuration(e.target.value)}
              className="calculator-input"
            >
              <option value="12">12 months</option>
              <option value="24">24 months</option>
              <option value="36">36 months</option>
            </select>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{t('calculator.loanDetails')}</h3>
            <p className="mb-2">{t('calculator.maxLoan', { amount: loanAmount.toFixed(2) })}</p>
            <p>{t('calculator.emi', { amount: monthlyEMI.toFixed(2) })}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">{t('calculator.emiSchedule')}</h3>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;