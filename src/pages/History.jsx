// import { useTranslation } from 'react-i18next';

// function History() {
//   const { t } = useTranslation();

//   return (

//     <div className="bg-gradient-to-b from-amber-50 to-white">

//       {/* Hero Section */}
//  <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 py-12 text-center relative overflow-hidden mb-12">
//   <div className="absolute inset-0 opacity-20">
//     <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUwIDI1YzEzLjggMCAyNSAxMS4yIDI1IDI1cy0xMS4yIDI1LTI1IDI1LTI1LTExLjItMjUtMjUgMTEuMi0yNSAyNS0yNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')" }}></div>
//   </div>
//   <div className="max-w-7xl mx-auto px-4 relative z-10">
//     <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
//       {t('overview.title')}
//     </h2>
//     <p className="text-xl md:text-2xl text-yellow-100 font-medium max-w-3xl mx-auto">
//       {t('overview.description')}
//     </p>
//     <div className="mt-6 flex justify-center space-x-4">
//       <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white font-medium flex items-center">
//         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
//         </svg>
//         Quick Overview
//       </div>
//     </div>
//   </div>
// </div>
//     <div className="max-w-7xl mx-auto px-4 py-12">

//       {/* Timeline Section */}
//       <div className="relative">
//         {/* Timeline line */}
//         <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gold-200 transform -translate-x-1/2"></div>

//         {/* Timeline Items */}
//         <div className="space-y-12 md:space-y-0">
//           {/* Item 1 - Founding */}
//           <div className="relative md:flex items-center w-full">
//             <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-right">
//               <h3 className="text-2xl font-semibold text-gold-700">{t('history.founding.year')}</h3>
//               <h4 className="text-xl font-medium text-gray-800 mt-2">{t('history.founding.title')}</h4>
//               <p className="text-gray-600 mt-2">{t('history.founding.description')}</p>
//             </div>
//             <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 text-white absolute left-1/2 transform -translate-x-1/2">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
//               </svg>
//             </div>
//             <div className="md:w-1/2 md:pl-16">
//               <img src="../image/img1.jpeg" alt={t('history.founding.title')} className="rounded-lg shadow-lg w-full h-64 object-cover" />
//             </div>
//           </div>

//           {/* Item 2 - First Milestone */}
//           <div className="relative md:flex items-center w-full flex-row-reverse">
//             <div className="md:w-1/2 md:pl-16 mb-8 md:mb-0 text-left">
//               <h3 className="text-2xl font-semibold text-gold-700">{t('history.milestone1.year')}</h3>
//               <h4 className="text-xl font-medium text-gray-800 mt-2">{t('history.milestone1.title')}</h4>
//               <p className="text-gray-600 mt-2">{t('history.milestone1.description')}</p>
//             </div>
//             <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 text-white absolute left-1/2 transform -translate-x-1/2">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//               </svg>
//             </div>
//             <div className="md:w-1/2 md:pr-16">
//               <img src="../image/img1.jpeg" alt={t('history.milestone1.title')} className="rounded-lg shadow-lg w-full h-64 object-cover" />
//             </div>
//           </div>

//           {/* Item 3 - Expansion */}
//           <div className="relative md:flex items-center w-full">
//             <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-right">
//               <h3 className="text-2xl font-semibold text-gold-700">{t('history.expansion.year')}</h3>
//               <h4 className="text-xl font-medium text-gray-800 mt-2">{t('history.expansion.title')}</h4>
//               <p className="text-gray-600 mt-2">{t('history.expansion.description')}</p>
//             </div>
//             <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 text-white absolute left-1/2 transform -translate-x-1/2">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
//               </svg>
//             </div>
//             <div className="md:w-1/2 md:pl-16">
//               <img src="../image/img1.jpeg" alt={t('history.expansion.title')} className="rounded-lg shadow-lg w-full h-64 object-cover" />
//             </div>
//           </div>

//           {/* Item 4 - Present */}
//           <div className="relative md:flex items-center w-full flex-row-reverse">
//             <div className="md:w-1/2 md:pl-16 mb-8 md:mb-0 text-left">
//               <h3 className="text-2xl font-semibold text-gold-700">{t('history.present.year')}</h3>
//               <h4 className="text-xl font-medium text-gray-800 mt-2">{t('history.present.title')}</h4>
//               <p className="text-gray-600 mt-2">{t('history.present.description')}</p>
//             </div>
//             <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 text-white absolute left-1/2 transform -translate-x-1/2">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
//               </svg>
//             </div>
//             <div className="md:w-1/2 md:pr-16">
//               <img src="../image/img1.jpeg" alt={t('history.present.title')} className="rounded-lg shadow-lg w-full h-64 object-cover" />
//             </div>
//           </div>
//         </div>
//       </div>
//              {/* Statistics/Impact */}
//        <section className="mb-12">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{t('stats.title')}</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//           {['customers', 'branches', 'loans'].map((stat) => (
//             <div key={stat} className="bg-gold-50 p-6 rounded-lg shadow-sm text-center">
//               <p className="text-3xl font-bold text-gold-500">{t(`stats.${stat}.value`)}</p>
//                <p className="text-gray-600">{t(`stats.${stat}.label`)}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//     </div>
//   );
// }

// export default History;

import { useTranslation } from 'react-i18next';

function History() {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-600 to-yellow-800 py-12 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUwIDI1YzEzLjggMCAyNSAxMS4yIDI1IDI1cy0xMS4yIDI1LTI1IDI1LTI1LTExLjItMjUtMjUgMTEuMi0yNSAyNS0yNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')" }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {t('overview.title')}
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 font-medium max-w-3xl mx-auto leading-relaxed">
            {t('overview.description')}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium flex items-center transition-all duration-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              {t('overview.cta1')}
            </button>
            <button className="bg-white hover:bg-gray-100 text-yellow-800 rounded-full px-6 py-3 font-medium flex items-center transition-all duration-300 shadow-sm">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {t('overview.cta2')}
            </button>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div> */}
      </div>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 py-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{t('intro.title')}</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {t('intro.description')}
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
        </div>
        
        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-10 ">
          {['vision', 'mission', 'values'].map((item) => (
            <div key={item} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">{t(`intro.${item}.title`)}</h3>
              <p className="text-gray-600">{t(`intro.${item}.description`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 bg-white rounded-xl shadow-sm mb-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">{t('timeline.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('timeline.subtitle')}</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-yellow-600 transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-0">
            {['founding', 'milestone1', 'expansion', 'present'].map((item, index) => (
              <div key={item} className={`relative md:flex items-center w-full ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 text-left'} mb-8 md:mb-0`}>
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                    {t(`history.${item}.year`)}
                  </span>
                  <h3 className="text-2xl font-semibold text-amber-800 mt-2">{t(`history.${item}.title`)}</h3>
                  <p className="text-gray-600 mt-3 leading-relaxed">
                    {t(`history.${item}.description`)}
                  </p>
                </div>
                
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 text-white absolute left-1/2 transform -translate-x-1/2 shadow-lg border-4 border-white">
                  {index === 0 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                  )}
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-lg h-64">
                    <img 
                      src={`../image/img${(index % 3) + 1}.jpeg`} 
                      alt={t(`history.${item}.title`)} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('stats.title')}</h2>
            <p className="text-yellow-100 text-lg max-w-2xl mx-auto">{t('stats.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {['customers', 'branches', 'employees', 'loans'].map((stat) => (
              <div key={stat} className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10">
                <p className="text-4xl font-bold text-white mb-2">{t(`stats.${stat}.value`)}</p>
                <p className="text-yellow-100 font-medium">{t(`stats.${stat}.label`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default History;