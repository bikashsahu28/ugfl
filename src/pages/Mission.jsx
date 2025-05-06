import { useTranslation } from 'react-i18next';

function Mission() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Mission</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Mission and Values */}
          <section className="mb-12">
         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{t('mission.title')}</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
           {['value1', 'value2', 'value3'].map((value) => (
             <div key={value} className="bg-white p-6 rounded-lg shadow-sm text-center">
               <h3 className="text-lg font-semibold text-gray-800">{t(`mission.${value}.title`)}</h3>
               <p className="text-gray-600">{t(`mission.${value}.description`)}</p>
             </div>
           ))}
         </div>
       </section>
      </div>
    </div>
  );
}

export default Mission;