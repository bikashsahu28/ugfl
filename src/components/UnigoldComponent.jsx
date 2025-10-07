import  { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const UnigoldComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
    const { t } = useTranslation();
  
  // Statistics data
  const stats = [
    { value: 33000, label: 'Happy Customers', suffix: '+' },
    { value: 50, label: 'Loans Disbursed', suffix: 'Lakh+' },
    { value: 23, label: 'Branches', suffix: '+' }
  ];

  // Intersection Observer to trigger animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 bg-gradient-to-b from-gray-50 to-white font-sans"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left side - Content */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-5">
                <h1 className="text-4xl font-bold text-gray-800 mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
          {/* UNIGOLD FINANCE LTD */}
                      {t('companyName')}

        </span>
      </h1>
              <p className="text-gray-700 leading-relaxed">
                {/* UNIGOLD Finance is a consumer finance registered NBFC, founded and backed by 
                ultra-high net worth individuals and family offices. The NBFC focuses on providing 
                easy gold loans to the customers and develop a personal touchpoint through an 
                offline sourcing model. */}
                          {t('aboutParagraph1')}

              </p>
              
              <p className="text-gray-700 leading-relaxed">
                          {t('aboutParagraph2')}

              </p>
              
              <p className="text-gray-700 leading-relaxed">
          {t('aboutParagraph3')}
              </p>
            </div>
          </div>
          
          {/* Right side - Stats cards */}
          <div className="w-full lg:w-1/3">
            <div className="flex flex-col gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-center text-amber-600 mb-2">
                    {isVisible ? (
                      <CountUp end={stat.value} suffix={stat.suffix} duration={2000} delay={index * 300} />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>
                  <div className="text-lg text-center font-bold text-gray-700">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CountUp component for the loading animation
const CountUp = ({ end, suffix, duration, delay = 0 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime = null;
    let animationFrame = null;
    
    // Delay the start of the animation
    const timeoutId = setTimeout(() => {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
    }, delay);
    
    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, delay]);
  
  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default UnigoldComponent;