import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaChevronDown } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';
import { IoLocation } from 'react-icons/io5';

const BranchLocator = () => {
  const [selectedCity, setSelectedCity] = useState('Bhubaneswar');

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
          <span className=" px-4 py-2 rounded-lg shadow-inner">Our Branch Network</span>
        </h2>
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
            <FaChevronDown />
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
              <IoLocation />

              Branches in {cityData.find(c => c.value === city)?.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {branchInfo[city].map((branch, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-amber-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-4">
                        <FaMapLocationDot />
                      </div>
                      <div>
                        <p className="text-gray-700 mb-3">{branch.address}</p>
                        {branch.phone && (
                          <div 
                            className="flex items-center text-amber-600 hover:text-amber-800 font-medium cursor-pointer transition-colors"
                            onClick={() => handlePhoneClick(branch.phone)}
                          >
                            <IoIosCall />

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
            <AiOutlineCheck />
            Lowest interest rates
          </span>
          <span className="flex items-center">
            <AiOutlineCheck />
            Instant disbursal
          </span>
          <span className="flex items-center">
            <AiOutlineCheck />
            Safe vault storage
          </span>
        </div>
      </div>
    </div>
  );
};

export default BranchLocator;