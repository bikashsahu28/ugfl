import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GiSplitCross } from 'react-icons/gi';
import { MdOutlineArrowBackIos } from 'react-icons/md';

function Gallery() {
  const { t } = useTranslation();


//    const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
// const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   // Gallery images data
//   const galleryItems = [
//     { id: 1, title: t('gallery.officeOpening'), image: '../image/img1.jpeg', category: 'facilities' },
//     { id: 2, title: t('gallery.teamRetreat'), image: '/../image/img2.jpeg', category: 'events' },
//     { id: 3, title: t('gallery.awardCeremony'), image: '../image/img3.jpeg', category: 'achievements' },
//     { id: 4, title: t('gallery.clientEvent'), image: '/../image/img4.jpeg', category: 'events' },
//     { id: 5, title: t('gallery.charityWork'), image: '../image/img5.jpeg', category: 'csr' },
//     { id: 6, title: t('gallery.newProduct'), image: '../image/img6.jpeg', category: 'products' },
//   ];

 const categories = [
    {
      id: 1,
      name: 'Anniversary',
      images: [
        { id: 1, image: '../Aniversery/anniversery30.JPEG', title: t('gallery.officeOpening') },
        // { id: 2, image: '../web pic/Aniversery/anniversery1.jpeg' , title: 'Nature 2' },
        { id: 2, image: '../Aniversery/anniversery1.JPEG' , title: 'Nature 2' },
        { id: 3, image: '../Aniversery/anniversery2.JPEG' , title: 'Nature 3' },
        { id: 4, image: '../Aniversery/anniversery3.JPEG' , title: 'Nature 4' },
        { id: 5, image: '../Aniversery/anniversery31.JPEG' , title: 'Nature 5' },
        { id: 6, image: '../Aniversery/anniversery5.JPEG' , title: 'Nature 6' },
        { id: 7, image: '../Aniversery/anniversery6.JPEG' , title: 'Nature 7' },
        { id: 8, image: '../Aniversery/anniversery7.JPEG' , title: 'Nature 8' },
        { id: 9, image: '../Aniversery/anniversery8.JPEG' , title: 'Nature 9' },
        { id: 10, image: '../Aniversery/anniversery9.JPEG' , title: 'Nature 10' },
        { id: 11, image: '../Aniversery/anniversery10.JPEG' , title: 'Nature 11' },
        { id: 12, image: '../Aniversery/anniversery11.JPEG' , title: 'Nature 12' },
        { id: 13, image: '../Aniversery/anniversery12.JPEG' , title: 'Nature 13' },
        { id: 14, image: '../Aniversery/anniversery13.JPEG' , title: 'Nature 14' },
        { id: 15, image: '../Aniversery/anniversery14.JPEG' , title: 'Nature 15' },
        { id: 16, image: '../Aniversery/anniversery15.JPEG' , title: 'Nature 16' },
        { id: 17, image: '../Aniversery/anniversery16.JPEG' , title: 'Nature 17' },
        { id: 18, image: '../Aniversery/anniversery17.JPEG' , title: 'Nature 18' },
        { id: 19, image: '../Aniversery/anniversery18.JPEG' , title: 'Nature 19' },
        { id: 20, image: '../Aniversery/anniversery19.JPEG' , title: 'Nature 20' },
        { id: 21, image: '../Aniversery/anniversery20.JPEG' , title: 'Nature 21' },
        { id: 22, image: '../Aniversery/anniversery21.JPEG' , title: 'Nature 22' },
        { id: 23, image: '../Aniversery/anniversery22.JPEG' , title: 'Nature 23' },
        { id: 24, image: '../Aniversery/anniversery23.JPEG' , title: 'Nature 24' },
        { id: 25, image: '../Aniversery/anniversery24.JPEG' , title: 'Nature 25' },
        { id: 26, image: '../Aniversery/anniversery25.JPEG' , title: 'Nature 26' },
        { id: 27, image: '../Aniversery/anniversery26.JPEG' , title: 'Nature 27' },
        { id: 28, image: '../Aniversery/anniversery4.JPEG' , title: 'Nature 28' },
        { id: 29, image: '../Aniversery/anniversery28.JPEG' , title: 'Nature 29' },
        { id: 30, image: '../Aniversery/anniversery29.JPEG' , title: 'Nature 30' },


      ]
    },
    {
      id: 2,
      name: 'Award',
      images: [
        { id: 31, image: '../Award/award1.JPG' , title: 'Award 1' },
        { id: 32, image: '../Award/award2.JPG' , title: 'Award 2' },
        { id: 33, image: '../Award/award3.JPG' , title: 'Award 3' },
        { id: 34, image: '../Award/award4.JPG' , title: 'Award 4' },
        { id: 35, image: '../Award/award5.JPG' , title: 'Award 5' },
        { id: 36, image: '../Award/award6.JPG' , title: 'Award 6' },
        { id: 37, image: '../Award/award7.JPG' , title: 'Award 7' },
        { id: 38, image: '../Award/award8.JPG' , title: 'Award 8' },
        { id: 39, image: '../Award/award9.JPG' , title: 'Award 9' },
        { id: 40, image: '../Award/award10.JPG' , title: 'Award 10' },
        { id: 41, image: '../Award/award11.JPG' , title: 'Award 11' },
        { id: 42, image: '../Award/award12.JPG' , title: 'Award 12' },
        { id: 43, image: '../Award/award13.JPG' , title: 'Award 13' },
        { id: 44, image: '../Award/award14.JPG' , title: 'Award 14' },
        { id: 45, image: '../Award/award15.JPG' , title: 'Award 15' },
        { id: 46, image: '../Award/award16.JPG' , title: 'Award 16' },
        { id: 47, image: '../Award/award17.JPG' , title: 'Award 17' },
        { id: 48, image: '../Award/award18.JPG' , title: 'Award 18' },
        { id: 49, image: '../Award/award19.JPG' , title: 'Award 19' },
        { id: 50, image: '../Award/award20.JPG' , title: 'Award 20' },
        { id: 51, image: '../Award/award21.JPG' , title: 'Award 21' },
      ]
    },
    {
      id: 3,
      name: 'Inauguration',
      images: [
        { id: 52, image: '../Inaguration/BARAMUNDA.png' , title: 'BARAMUNDA 1' },
        { id: 53, image: '../Inaguration/BUXI BAZAR.png' , title: 'BUXI BAZAR 2' },
        { id: 54, image: '../Inaguration/CDA.png' , title: 'CDA 3' },
        { id: 55, image: '../Inaguration/JAYDEV VIHAR.png' , title: 'JAYDEV VIHAR 4' },
        { id: 56, image: '../Inaguration/BUXI BAZAR.png' , title: 'BUXI BAZAR 5' },
        { id: 57, image: '../Inaguration/LINK ROAD.png' , title: 'LINK ROAD 6' },
        { id: 58, image: '../Inaguration/REMUNA BRANCH.png' , title: 'REMUNA BRANCH 7' },


        
      ]
    },
    {
      id: 4,
      name: 'Marketing',
      images: [
        { id: 59, image: '../marketing/01.jpg' , title: 'Marketing 1' },
        { id: 60, image: '../marketing/18.jpg' , title: 'Marketing 2' },
        { id: 61, image: '../marketing/03.jpg' , title: 'Marketing 3' },
        { id: 62, image: '../marketing/04.jpg' , title: 'Marketing 4' },
        { id: 63, image: '../marketing/05.jpg' , title: 'Marketing 5' },
        { id: 64, image: '../marketing/06.jpg' , title: 'Marketing 6' },
        { id: 65, image: '../marketing/07.jpg' , title: 'Marketing 7' },
        { id: 66, image: '../marketing/08.jpg' , title: 'Marketing 8' },
        { id: 67, image: '../marketing/09.jpg' , title: 'Marketing 9' },
        { id: 68, image: '../marketing/10.jpg' , title: 'Marketing 10' },
        { id: 69, image: '../marketing/11.jpg' , title: 'Marketing 11' },
        { id: 70, image: '../marketing/12.jpg' , title: 'Marketing 12' },
        { id: 71, image: '../marketing/13.jpg' , title: 'Marketing 13' },
        { id: 72, image: '../marketing/14.jpg' , title: 'Marketing 14' },
        { id: 73, image: '../marketing/15.jpg' , title: 'Marketing 15' },
        { id: 74, image: '../marketing/16.jpg' , title: 'Marketing 16' },
        { id: 75, image: '../marketing/17.jpg' , title: 'Marketing 17' },
        { id: 76, image: '../marketing/02.jpg' , title: 'Marketing 18' },
      ]
    },
    {
      id: 5,
      name: 'Meetings',
      images: [
        { id: 77, image: '../meeting/meeting1.JPG' , title: 'meeting 1' },
        { id: 78, image: '../meeting/meeting2.JPG' , title: 'meeting 2' },
        { id: 79, image: '../meeting/meeting3.JPG' , title: 'meeting 3' },
        { id: 80, image: '../meeting/meeting4.JPG' , title: 'meeting 4' },
        { id: 81, image: '../meeting/meeting5.jpg' , title: 'meeting 5' },
        { id: 82, image: '../meeting/meeting6.jpg' , title: 'meeting 6' },
        { id: 83, image: '../meeting/meeting7.jpg' , title: 'meeting 7' },
        { id: 84, image: '../meeting/meeting8.jpg' , title: 'meeting 8' },
        { id: 85, image: '../meeting/meeting9.jpg' , title: 'meeting 9' },
        { id: 86, image: '../meeting/meeting10.jpg' , title: 'meeting 10' },
        { id: 87, image: '../meeting/meeting11.jpg' , title: 'meeting 11' },
        { id: 88, image: '../meeting/meeting12.jpg' , title: 'meeting 12' },
      ]
    },
    {
      id: 6,
      name: 'Sports Events',
      images: [
        { id: 89, image: '../Cricket/sport.jpg' , title: 'sport 1' },
        { id: 90, image: '../Cricket/sport1.jpg' , title: 'sport 2' },
        { id: 91, image: '../Cricket/sport2.jpg' , title: 'sport 3' },
        { id: 92, image: '../Cricket/sport3.jpg' , title: 'sport 4' },
        { id: 93, image: '../Cricket/sport4.jpg' , title: 'sport 5' },
        { id: 94, image: '../Cricket/sport5.jpg' , title: 'sport 6' },
        { id: 95, image: '../Cricket/sport6.jpg' , title: 'sport 7' },
        { id: 96, image: '../Cricket/sport7.jpg' , title: 'sport 8' },
        { id: 97, image: '../Cricket/sport8.jpg' , title: 'sport 9' },
      ]
    },
  ];
    const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages] = useState(categories.flatMap(cat => cat.images));

  // Handle category click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Handle image click
  const handleImageClick = (imageId) => {
    const index = allImages.findIndex(img => img.id === imageId);
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  // Navigate to previous image
  const handlePrev = () => {
    setCurrentImageIndex(prev => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  // Navigate to next image
  const handleNext = () => {
    setCurrentImageIndex(prev => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };
  // News data
  const newsItems = [
    { 
      id: 1, 
      title: t('news.newBranch.title'), 
      excerpt: t('news.newBranch.excerpt'),
      date: '2023-11-15',
      image: '../image/img1.jpeg'
    },
    { 
      id: 2, 
      title: t('news.quarterlyResults.title'), 
      excerpt: t('news.quarterlyResults.excerpt'),
      date: '2023-10-30',
      image: '../image/img1.jpeg'
    }
  ];
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
       <div className="relative bg-gradient-to-r from-yellow-600 to-yellow-800 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: 
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUwIDI1YzEzLjggMCAyNSAxMS4yIDI1IDI1cy0xMS4yIDI1LTI1IDI1LTI1LTExLjItMjUtMjUgMTEuMi0yNSAyNS0yNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')" }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {t('gallery.title')}
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 font-medium max-w-3xl mx-auto leading-relaxed">
            {t('gallery.subtitle')}
          </p>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div> */}
      </div>
    <div className="max-w-7xl mx-auto px-4 py-1 space-y-16">
      {/* Main Gallery Section */}
      <section>
      <div className="min-h-screen  p-4 md:p-8">
        {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Image Gallery</h1> */}
                {/* <h1 className="text-3xl font-bold text-amber-700 text-center mb-4">Image Gallery</h1> */}
 <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
          Premium Gallery
        </span>
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore our curated collection of quality images across various categories
      </p>
    </div>
        {/* Category Navigation */}
         <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map(category => (
        <button
          key={category.id}
          className={`px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 ${
            activeCategory.id === category.id 
              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
          } font-medium`}
          onClick={() => handleCategoryClick(category)}
        >
          {category.name}
        </button>
      ))}
    </div>
        
        {/* Image Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {activeCategory.images.map(image => (
        <div 
          key={image.id} 
          className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          onClick={() => handleImageClick(image.id)}
        >
          <div className="relative overflow-hidden h-60">
            <img 
              src={image.image}  
              alt={image.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">{image.title}</h3>
            <p className="text-sm text-gray-500">View details</p>
          </div>
        </div>
      ))}
    </div>
        {/* Modal */}
        {showModal && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fadeIn"
            onClick={closeModal}
          >
            <div 
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
              onClick={e => e.stopPropagation()}
            >
              
              <button 
  className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-amber-600
   bg-white/70 hover:bg-white/90 rounded-full p-1 backdrop-blur-sm z-10 transition-all duration-300 shadow-md"
  onClick={closeModal}
>
  <GiSplitCross />
</button>
              
              <div className="flex items-center justify-center h-full p-4">
               
            <button 
    className="absolute left-4 text-gray-700 hover:text-amber-600 bg-white/70 hover:bg-white/90 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm z-10 transition-all duration-300 shadow-md hover:scale-110"
    onClick={handlePrev}
  >
    <FaArrowLeft className="text-xl hover:scale-120" />
  </button>
                
                <div className="flex-1 flex justify-center max-h-[80vh]">
                  <img 
                    src={allImages[currentImageIndex].image}  
                    alt={allImages[currentImageIndex].title} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
               
 <button 
    className="absolute right-4 text-gray-700 hover:text-amber-600 bg-white/70 hover:bg-white/90 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm z-10 transition-all duration-300 shadow-md hover:scale-110"
    onClick={handleNext} 
  >
    <FaArrowRight className="text-xl hover:scale-120" />
  </button>

              </div>
              
              <div className="p-4 text-center border-t border-gray-200">
                <h3 className="text-xl font-semibold">{allImages[currentImageIndex].title}</h3>
                <p className="text-gray-600">
                  Image {currentImageIndex + 1} of {allImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      </section>

      {/* News Section */}

      <section className="bg-gray-50  rounded-xl p-8 md:p-12 max-w-7xl mx-auto">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">{t('news.title')}</h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
      {t('news.subtitle')}
    </p>
  </div>

  <div className="grid  md:grid-cols-2 gap-10">
    {newsItems.map((item) => (
      <div
        key={item.id}
        className="bg-white bg-gradient-to-r from-orange-600 to-yellow-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        <div className="md:flex ">
          <div className="md:w-2/5">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover aspect-video md:aspect-auto"
            />
          </div>
          <div className="p-6 md:w-3/5 flex flex-col justify-between">
            <div>
              <time className="text-sm text-gray-500 mb-2 block">
                {new Date(item.date).toLocaleDateString()}
              </time>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-3">{item.excerpt}</p>
            </div>
            <button className="inline-flex items-center text-gold-700 hover:text-gold-800 font-medium group">
              {t('news.readMore')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Events Section */}
<section className="py-2 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-amber-700 text-center mb-4">{t('events.title')}</h2>
      <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {t('events.subtitle')}
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Event 1 - Gold Investment Seminar */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative overflow-hidden h-56 bg-gradient-to-br from-[#D4AF37] to-[#F5D062]">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-20 h-20 text-white opacity-30" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
            </svg>
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 shadow-sm">
            {new Date('2023-11-15').toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric',
              year: 'numeric' 
            })}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-3">
            <span className="inline-block px-3 py-1 bg-[#FFF5D9] text-[#B38E2D] text-xs font-semibold rounded-full uppercase tracking-wider">
              {t('events.upcoming')}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">{t('events.investmentSeminar.title')}</h3>
          
          <p className="text-gray-600 text-sm mb-4">
            Learn how to diversify your portfolio with gold investments with from industry experts. Perfect for beginners and experienced investors alike.
          </p>
          
          <div className="flex items-center text-gray-600 mb-5">
            <svg className="w-5 h-5 mr-2 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-600">{t('events.investmentSeminar.location')}</span>
          </div>
          
          <button className="w-full bg-[#D4AF37] hover:bg-[#B38E2D] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2">
            {t('events.register')}
          </button>
        </div>
      </div>

      {/* Event 2 - Annual Investor Meeting */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative overflow-hidden h-56 bg-gradient-to-br from-[#4F46E5] to-[#7C73E6]">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-20 h-20 text-white opacity-30" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 shadow-sm">
            {new Date('2023-12-05').toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric',
              year: 'numeric' 
            })}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-3">
            <span className="inline-block px-3 py-1 bg-[#EEF2FF] text-[#4F46E5] text-xs font-semibold rounded-full uppercase tracking-wider">
              {t('events.upcoming')}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">{t('events.annualMeeting.title')}</h3>
          
          <p className="text-gray-600 text-sm mb-4">
            Join our virtual annual meeting to review performance, future outlook, and Q&A session with our executive team.
          </p>
          
          <div className="flex items-center text-gray-600 mb-5">
            <svg className="w-5 h-5 mr-2 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-600">{t('events.annualMeeting.location')}</span>
          </div>
          
          <button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2">
            {t('events.register')}
          </button>
        </div>
      </div>

      {/* Event 3 - Newly Added: Market Trends Workshop */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative overflow-hidden h-56 bg-gradient-to-br from-[#10B981] to-[#6EE7B7]">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-20 h-20 text-white opacity-30" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 shadow-sm">
            {new Date('2023-11-28').toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric',
              year: 'numeric' 
            })}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-3">
            <span className="inline-block px-3 py-1 bg-[#D1FAE5] text-[#047857] text-xs font-semibold rounded-full uppercase tracking-wider">
              Early Bird
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">Market Trends Workshop</h3>
          
          <p className="text-gray-600 text-sm mb-4">
            Deep dive into current market trends with our analysts. Learn to identify opportunities in volatile markets 11111 .
          </p>
          
          <div className="flex items-center text-gray-600 mb-5">
            <svg className="w-5 h-5 mr-2 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-600">Mumbai Financial District</span>
          </div>
          
          <button className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2">
            {t('events.register')}
          </button>
        </div>
      </div>

      {/* Event 4 - Newly Added: Retirement Planning */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative overflow-hidden h-56 bg-gradient-to-br from-[#F59E0B] to-[#FBBF24]">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-20 h-20 text-white opacity-30" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 shadow-sm">
            {new Date('2023-12-15').toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric',
              year: 'numeric' 
            })}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-3">
            <span className="inline-block px-3 py-1 bg-[#FEF3C7] text-[#B45309] text-xs font-semibold rounded-full uppercase tracking-wider">
              Limited Seats
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">Retirement Planning Seminar</h3>
          
          <p className="text-gray-600 text-sm mb-4">
            Strategies for building a secure retirement portfolio. Learn about tax-efficient savings and investment options.
          </p>
          
          <div className="flex items-center text-gray-600 mb-5">
            <svg className="w-5 h-5 mr-2 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-600">Bangalore Tech Park</span>
          </div>
          
          <button className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-offset-2">
            {t('events.register')}
          </button>
        </div>
      </div>
    </div>

    <div className="text-center mt-12">
    </div>
  </div>
</section>
      {/* testiment Section */}
<section className="bg-gold-50 rounded-xl p-1">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-amber-700 text-center mb-4">{t('testiment.title')}</h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      {t('testiment.subtitle')}
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      { id: 1, img: 'img1.jpeg' },
      { id: 2, img: 'img2.jpeg' },
      { id: 3, img: 'img3.jpeg' }
    ].map((client) => (
      <div key={client.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden flex-shrink-0">
            <img 
              src={`../image/${client.img}`} 
              alt={t(`testiment.client${client.id}.name`)}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '../image/default-profile.jpg';
                e.currentTarget.alt = 'Default profile';
              }}
            />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">
              {t(`testiment.client${client.id}.name`)}
            </h4>
            <p className="text-sm text-gray-500">
              {t(`testiment.client${client.id}.designation`)}
            </p>
          </div>
        </div>
        <p className="text-gray-600 italic mb-4">
          "{t(`testiment.client${client.id}.quote`)}"
        </p>
        <div className="flex text-gold-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
    </div>   
  );
}

export default Gallery;