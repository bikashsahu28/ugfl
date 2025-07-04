import  { useState } from 'react';

const Galleryes = () => {
  // Sample data - categories with images
  const categories = [
    {
      id: 1,
      name: 'Nature',
      images: [
        { id: 1, url: 'https://source.unsplash.com/random/300x200?nature1', title: 'Nature 1' },
        { id: 2, url: 'https://source.unsplash.com/random/300x200?nature2', title: 'Nature 2' },
        { id: 3, url: 'https://source.unsplash.com/random/300x200?nature3', title: 'Nature 3' },
      ]
    },
    {
      id: 2,
      name: 'Animals',
      images: [
        { id: 4, url: 'https://source.unsplash.com/random/300x200?animal1', title: 'Animal 1' },
        { id: 5, url: 'https://source.unsplash.com/random/300x200?animal2', title: 'Animal 2' },
        { id: 6, url: 'https://source.unsplash.com/random/300x200?animal3', title: 'Animal 3' },
      ]
    },
    {
      id: 3,
      name: 'Cities',
      images: [
        { id: 7, url: 'https://source.unsplash.com/random/300x200?city1', title: 'City 1' },
        { id: 8, url: 'https://source.unsplash.com/random/300x200?city2', title: 'City 2' },
        { id: 9, url: 'https://source.unsplash.com/random/300x200?city3', title: 'City 3' },
      ]
    },
    {
      id: 4,
      name: 'Food',
      images: [
        { id: 10, url: 'https://source.unsplash.com/random/300x200?food1', title: 'Food 1' },
        { id: 11, url: 'https://source.unsplash.com/random/300x200?food2', title: 'Food 2' },
        { id: 12, url: 'https://source.unsplash.com/random/300x200?food3', title: 'Food 3' },
      ]
    },
    {
      id: 5,
      name: 'Sports',
      images: [
        { id: 13, url: 'https://source.unsplash.com/random/300x200?sports1', title: 'Sports 1' },
        { id: 14, url: 'https://source.unsplash.com/random/300x200?sports2', title: 'Sports 2' },
        { id: 15, url: 'https://source.unsplash.com/random/300x200?sports3', title: 'Sports 3' },
      ]
    },
    {
      id: 6,
      name: 'Technology',
      images: [
        { id: 16, url: 'https://source.unsplash.com/random/300x200?tech1', title: 'Tech 1' },
        { id: 17, url: 'https://source.unsplash.com/random/300x200?tech2', title: 'Tech 2' },
        { id: 18, url: 'https://source.unsplash.com/random/300x200?tech3', title: 'Tech 3' },
      ]
    }
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

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Image Gallery</h1>
      
      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeCategory.id === category.id 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {activeCategory.images.map(image => (
          <div 
            key={image.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleImageClick(image.id)}
          >
            <img 
              src={image.url} 
              alt={image.title} 
              className="w-full h-48 object-cover"
            />
            <p className="p-4 text-center font-semibold">{image.title}</p>
          </div>
        ))}
      </div>
      
      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-900 z-10"
              onClick={closeModal}
            >
              &times;
            </button>
            
            <div className="flex items-center justify-center h-full p-4">
              <button 
                className="bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center mr-2 hover:bg-opacity-70"
                onClick={handlePrev}
              >
                &lt;
              </button>
              
              <div className="flex-1 flex justify-center max-h-[80vh]">
                <img 
                  src={allImages[currentImageIndex].url} 
                  alt={allImages[currentImageIndex].title} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <button 
                className="bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center ml-2 hover:bg-opacity-70"
                onClick={handleNext}
              >
                &gt;
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
  );
};

export default Galleryes;