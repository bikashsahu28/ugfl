import { useTranslation } from 'react-i18next';

function Support() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Support</h1>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">How can we help you?</h2>
        <p className="text-gray-600 mb-8">Our support team is available 24/7 to assist you with any queries.</p>
      </div>
    </div>
  );
}

export default Support;