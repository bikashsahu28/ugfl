// import { useState } from 'react';

// const BranchLocator = () => {
//   const [selectedCity, setSelectedCity] = useState('Cuttack');

//   const cityData = [
//     { value: "Cuttack", name: "Cuttack" },
//     { value: "Bhubaneswar", name: "Bhubaneswar" },
//     { value: "Balasore", name: "Balasore" },
//     { value: "jatni", name: "Jatni" },
//     { value: "keonjhar", name: "Keonjhar" },
//     { value: "khordha", name: "Khordha" },
//     { value: "nimapada", name: "Nimapada" },
//     { value: "berhampur", name: "Berhampur" },
//     { value: "jaipur", name: "Jajpur" },
//     { value: "bhadrak", name: "Bhadrak" },
//     { value: "jaleswar", name: "Jaleswar" },
//     { value: "Nayagarh", name: "Nayagarh" },
//     { value: "Tamilnadu", name: "Tamil Nadu" }
//   ];

//   const branchInfo = {
//     "Nayagarh": [
//       "UNIGOLD Finance, Main Road (in front of Govt. Girls High School) New Town, Dist. Nayagarh Odisha,PIN - 752069- Contact <a href='tel:+919124597875' class='text-blue-600 hover:text-blue-800 font-medium'>9124597875</a>"
//     ],
//     "Cuttack": [
//       "1st Floor, Plot No – 684, in front of GPO, Buxi Bazar , Cuttack",
//       "1st Floor, Rashmi Plaza, Link Road, Near Arundhaya Market, Cuttack – 753012",
//       "1st Floor, Plot No – C/1130, Sector – 6 (Main Road), Markat Nagar, Cuttack – 753012, Odisha"
//     ],
//     "Bhubaneswar": [
//       "1st Floor, Block – A, MIG- 140, Baramunda Housing Board Colony, Bhubaneswar",
//       "1st Floor, N -/36, C IRC Village, Jaydev Vihar, Bhubaneswar, 751015, Contact - <span class='text-blue-600 font-medium'>9124515403</span>",
//       "1st Floor, Prasanta Plaza, Plot No572/1041, Lewis Road, PO - Lewis Road, Bhubaneswar-751014, Contact- <span class='text-blue-600 font-medium'>9124515420</span>",
//       "1st floor, Plot No-678, Jena Heights,Bomikhal, Cuttack -Puri Road, Near Jena Armory,Khurdha, Bhubaneswar, - 753006. Contact -<span class='text-blue-600 font-medium'>9124515421</span>"
//     ],
//     "Balasore": [
//       "Ground Floor, Ganeswar Pur, Plot No – NC 2368, Khata No – 122, Remuna Golei, P.O – Januganj, Industrial Area, Balasore – 756019, Odisha",
//       "UNIGOLD Finance,1st Floor ,Kalpana Plaza,Padhuanpada,Police Line ,Balasore - 756001 - Contact - <a href='tel:+919124597877' class='text-blue-600 hover:text-blue-800 font-medium'>9124597877</a>"
//     ],
//     "jatni": [
//       "1st Floor, Plot No - 46 Main Road, Ramachandra Bazar Jatni, Dist Khorda 752050, Contact - <span class='text-blue-600 font-medium'>9124515413</span>"
//     ],
//     "keonjhar": [
//       "Ground Floor, Plot no-169/1227 & 169/1225, Khata No-102/836 & 102&834, Mauja Jagannathpur (Unit No17) Keonjhar Town, Keonjhar-Odisha PIN- 758001, Contact - <span class='text-blue-600 font-medium'>9124515416</span>"
//     ],
//     "khordha": [
//       "Ground Floor, New Bus Stand, Main Road, Pallahat, Khordha-2, PIN-752056, Contact - <span class='text-blue-600 font-medium'>9124515419</span>"
//     ],
//     "nimapada": [
//       "1st floor, Jayshree square , Ganesh Bazar, In-front of Canara Bank,Nimapada, 752106- Contact - <span class='text-blue-600 font-medium'>9124597870</span>"
//     ],
//     "berhampur": [
//       "1st Floor, Plot No-1865/2608, Aska Road, Near Chaturbhuj Petrol pump, Berhampur, Ganjam, Odisha, 760001,Contact - <span class='text-blue-600 font-medium'>9124597871</span>",
//       "Ground Floor, Plot No 186, In-front of M/S Durga Cloth store, At/PO Bada Bazar Berhampur 760009 Dist. Ganjam, Odisha- Contact - <a href='tel:+9124597872' class='text-blue-600 hover:text-blue-800 font-medium'>9124597872</a>"
//     ],
//     "jaipur": [
//       "Ground Floor, Sitaleswar, Jajpur Town, 755001",
//       "UNIGOLD Finance,1st Floor, Above Peter England show room, Plot No-1335, Mouza-Bhatia, AT/PO-Vyasnagar, Jajpur Road-755019,Odisha.Contact - <a href='tel:+919124597876' class='text-blue-600 hover:text-blue-800 font-medium'>9124597876</a>"
//     ],
//     "bhadrak": [
//       "Bhadrak Ground floor,Behera Mansion, (Behera Market Complex), Plot No 372/2798, At/PO Bhadrak, Ward No 16,Dist. Bhadrak-756100"
//     ],
//     "jaleswar": [
//       "1st Floor, Plot No-652/944,Bada Bazar , Jaleswar ,Dist-Balasore -756032."
//     ],
//     "Tamilnadu": [
//       "11(6), LETANGS ROAD PURASAIWAKKAM CHENNAI TAMIL NADU 600007 INDIA"
//     ]
//   };

//   const handleCityChange = (e) => {
//     setSelectedCity(e.target.value);
//   };

//   const createMarkup = (html) => {
//     return { __html: html };
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Find Our Branches</h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Locate our nearest branch to get personalized financial services
//         </p>
//       </div>

//       <div className="max-w-md mx-auto mb-12 relative">
//         <label htmlFor="city-select" className="block text-sm font-medium text-gray-700 mb-2">
//           Select your city
//         </label>
//         <div className="relative">
//           <select
//             id="city-select"
//             className="block w-full pl-4 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg shadow-sm appearance-none bg-white"
//             value={selectedCity}
//             onChange={handleCityChange}
//           >
//             {cityData.map((city) => (
//               <option key={city.value} value={city.value}>{city.name}</option>
//             ))}
//           </select>
//           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//             <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
//         {Object.keys(branchInfo).map((city) => (
//           <div
//             key={city}
//             className={`${city === selectedCity ? 'block' : 'hidden'}`}
//           >
//             <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
//               <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//               Branches in {cityData.find(c => c.value === city)?.name}
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {branchInfo[city].map((info, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
//                   <div className="p-6">
//                     <div className="flex items-start">
//                       <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mr-4">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                         </svg>
//                       </div>
//                       <div>
//                         <p 
//                           className="text-gray-700"
//                           dangerouslySetInnerHTML={createMarkup(info)}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BranchLocator;


import { useState } from 'react';

const BranchLocator = () => {
  const [selectedCity, setSelectedCity] = useState('Cuttack');

  const cityData = [
    { value: "Cuttack", name: "Cuttack" },
    { value: "Bhubaneswar", name: "Bhubaneswar" },
    { value: "Balasore", name: "Balasore" },
    { value: "jatni", name: "Jatni" },
    { value: "keonjhar", name: "Keonjhar" },
    { value: "khordha", name: "Khordha" },
    { value: "nimapada", name: "Nimapada" },
    { value: "berhampur", name: "Berhampur" },
    { value: "jaipur", name: "Jajpur" },
    { value: "bhadrak", name: "Bhadrak" },
    { value: "jaleswar", name: "Jaleswar" },
    { value: "Nayagarh", name: "Nayagarh" },
    { value: "Tamilnadu", name: "Tamil Nadu" }
  ];

  const branchInfo = {
    "Nayagarh": [
      {
        address: "UNIGOLD Finance, Main Road (in front of Govt. Girls High School) New Town, Dist. Nayagarh Odisha, PIN - 752069",
        phone: "9124597875"
      }
    ],
    "Cuttack": [
      {
        address: "1st Floor, Plot No – 684, in front of GPO, Buxi Bazar, Cuttack",
        phone: null
      },
      {
        address: "1st Floor, Rashmi Plaza, Link Road, Near Arundhaya Market, Cuttack – 753012",
        phone: null
      },
      {
        address: "1st Floor, Plot No – C/1130, Sector – 6 (Main Road), Markat Nagar, Cuttack – 753012, Odisha",
        phone: null
      }
    ],
    "Bhubaneswar": [
      {
        address: "1st Floor, Block – A, MIG- 140, Baramunda Housing Board Colony, Bhubaneswar",
        phone: "9124515403"
      },
      {
        address: "1st Floor, N -/36, C IRC Village, Jaydev Vihar, Bhubaneswar, 751015",
        phone: "9124515403"
      },
      {
        address: "1st Floor, Prasanta Plaza, Plot No572/1041, Lewis Road, PO - Lewis Road, Bhubaneswar-751014",
        phone: "9124515420"
      },
      {
        address: "1st floor, Plot No-678, Jena Heights, Bomikhal, Cuttack -Puri Road, Near Jena Armory, Khurdha, Bhubaneswar - 753006",
        phone: "9124515421"
      }
    ],
    "Balasore": [
      {
        address: "Ground Floor, Ganeswar Pur, Plot No- NC 2368, Khata No-122, Remuna Golei, P.O – Januganj, Industrial Area, Balasore – 756019, Odisha",
        phone: null
      },
      {
        address: "UNIGOLD Finance,1st Floor ,Kalpana Plaza,Padhuanpada,Police Line ,Balasore - 756001",
        phone: "9124597877"
      }
    ],
    "jatni": [
        {
        address: "UNIGOLD Finance,1st Floor ,Kalpana Plaza,Padhuanpada,Police Line ,Balasore - 756001",
        phone: "9124597877"
      },
      {
        address: "1st Floor, Plot No - 46 Main Road, Ramachandra Bazar Jatni, Dist Khorda 752050",
        phone: "9124515413"
      }
    ],
    "keonjhar": [
      {
        address: "Ground Floor, Plot no-169/1227 & 169/1225, Khata No-102/836 & 102&834, Mauja Jagannathpur (Unit No17) Keonjhar Town, Keonjhar-Odisha PIN- 758001",
        phone: "9124515416"
      }
    ],
    "khordha": [
      {
        address: "Ground Floor, New Bus Stand, Main Road, Pallahat, Khordha-2, PIN-752056",
        phone: "9124515419"
      }
    ],
    "nimapada": [
      {
        address: "1st floor, Jayshree square , Ganesh Bazar, In-front of Canara Bank,Nimapada, 752106",
        phone: "9124597870"
      }
    ],
    "berhampur": [
      {
        address: "1st Floor, Plot No-1865/2608, Aska Road, Near Chaturbhuj Petrol pump, Berhampur, Ganjam, Odisha, 760001",
        phone: "9124597871"
      },
      {
        address: "Ground Floor, Plot No 186, In-front of M/S Durga Cloth store, At/PO Bada Bazar Berhampur 760009 Dist. Ganjam, Odisha",
        phone: "9124597872"
      }
    ],
    "jaipur": [
      {
        address: "Ground Floor, Sitaleswar, Jajpur Town, 755001",
        phone: null
      },
      {
        address: "UNIGOLD Finance,1st Floor, Above Peter England show room, Plot No-1335, Mouza-Bhatia, AT/PO-Vyasnagar, Jajpur Road-755019,Odisha",
        phone: "9124597876"
      }
    ],
    "bhadrak": [
      {
        address: "Bhadrak Ground floor,Behera Mansion, (Behera Market Complex), Plot No 372/2798, At/PO Bhadrak, Ward No 16,Dist. Bhadrak-756100",
        phone: null
      }
    ],
    "jaleswar": [
      {
        address: "1st Floor, Plot No-652/944,Bada Bazar , Jaleswar ,Dist-Balasore -756032.",
        phone: null
      }
    ],
    "Tamilnadu": [
      {
        address: "11(6), LETANGS ROAD PURASAIWAKKAM CHENNAI TAMIL NADU 600007 INDIA",
        phone: null
      }
    ]
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handlePhoneClick = (phoneNumber) => {
    window.location.href = `tel:+91${phoneNumber}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-amber-800 sm:text-4xl mb-4">
          <span className=" px-4 py-2 rounded-lg shadow-inner">Gold Loan Branch Network</span>
        </h2>
        <p className="text-lg text-700 max-w-2xl mx-auto">
          Instant gold loans at competitive interest rates
        </p>
      </div>

      <div className="max-w-md mx-auto mb-1 relative">
        <label htmlFor="city-select" className="block text-sm font-medium text-center text-amber-800 mb-2">
          Select your city
        </label>
        <div className="relative">
          <select
            id="city-select"
            className="block w-full pl-4 pr-10 py-3 text-base border  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 rounded-lg shadow-sm appearance-none bg-white text-amber-900"
            value={selectedCity}
            onChange={handleCityChange}
          >
            {cityData.map((city) => (
              <option key={city.value} value={city.value}>{city.name}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-amber-700">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className=" rounded-xl p-6 sm:p-8 border border-amber-100 shadow-sm">
        {Object.keys(branchInfo).map((city) => (
          <div
            key={city}
            className={`${city === selectedCity ? 'block' : 'hidden'}`}
          >
            <h3 className="text-xl font-semibold text-amber-800 mb-6 flex items-center">
              <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Branches in {cityData.find(c => c.value === city)?.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {branchInfo[city].map((branch, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-amber-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-700 mb-3">{branch.address}</p>
                        {branch.phone && (
                          <div 
                            className="flex items-center text-amber-600 hover:text-amber-800 font-medium cursor-pointer transition-colors"
                            onClick={() => handlePhoneClick(branch.phone)}
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call: {branch.phone}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-amber-700 bg-amber-100 p-4 rounded-lg border border-amber-200">
        <p className="font-medium">Why choose our gold loans?</p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Lowest interest rates
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Instant disbursal
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Safe vault storage
          </span>
        </div>
      </div>
    </div>
  );
};

export default BranchLocator;