import { useTranslation } from 'react-i18next';

function Leadership() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Leadership</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Gallery content will be added here */}
      </div>
    </div>
  );
}

export default Leadership;