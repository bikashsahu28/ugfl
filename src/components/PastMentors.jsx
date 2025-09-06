
import { useState } from 'react';

const PastMentors = () => {
  const [showAll, setShowAll] = useState(false);

  // Initial mentors to display
  const initialMentors = [
    {
      name: "Ramakant Sharma",
      title: "Cofounder & COO",
      company: "Livspace",
        image: "../Mentor/SN.png"

    },
    {
      name: "Anil Joshi",
      title: "Founder & Managing Partner",
      company: "Unicorn India Ventures",
      image: "../Mentor/Su.png"

    },
    {
      name: "Tej Kapoor",
      title: "Director - Investments",
      company: "ICICI Venture",
      image: "../Mentor/Aj.png"
    }
  ];

  // Additional mentors to show when "Load More" is clicked
  const additionalMentors = [
    {
      name: "Sneha Patel",
      title: "Head of Growth",
      company: "StartupX",
      image: "../Mentor/Bi.png"
    },
    {
      name: "Rahul Mehta",
      title: "CTO",
      company: "TechNova",
      image: "../Mentor/Aj.png"
    },
    {
      name: "Vikram Singh",
      title: "Chief Strategy Officer",
      company: "InnovateCorp",
      image: "../Mentor/Aj.png"
    },
    {
      name: "Priya Sharma",
      title: "VP of Product",
      company: "ScaleUp Inc",
      image: "../Mentor/Aj.png"
    },
    {
      name: "Amit Patel",
      title: "Investment Director",
      company: "Venture Partners",
      image: "../Mentor/Aj.png"
    },
    {
      name: "Neha Gupta",
      title: "Chief Marketing Officer",
      company: "DigitalFirst",
      image: "../Mentor/Aj.png"
    }
  ];

  // Combine mentors based on showAll state
  const displayedMentors = showAll 
    ? [...initialMentors, ...additionalMentors] 
    : initialMentors;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="py-1 bg-white relative bg-gradient-to-b from-amber-50 to-white ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
          <span className="font-sans">Our</span>
          <span className="font-serif italic"> Mentors</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedMentors.map((mentor, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-amber-200 p-6 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Profile Image Container */}
              <div className="relative flex justify-center mb-6">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-amber-200 rounded-full transform scale-5"></div>
                
                {/* Profile Image */}
                <img 
                  src={mentor.image} 
                  alt={mentor.name}
                  className="relative w-42 h-42 rounded-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                <p className="text-sm text-gray-600 italic mt-1">{mentor.title}</p>
                <p className="text-sm text-blue-600 font-medium mt-2">{mentor.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More/Less Button */}
        <div className="text-center mt-12">
          <button
            onClick={toggleShowAll}
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            {showAll ? 'Load Less' : 'Load More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PastMentors;