// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { useTranslation } from 'react-i18next';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// function HomeCarousel() {
//   const { t } = useTranslation();

//   const slides = [
//     {
//       // image: "https://images.unsplash.com/photo-1610375461246-83df859d849d",../meeting/meeting6.jpg
//       //  image: "../image/001.jpeg",
//       // title: t('carousel.slide1.title'),
//       // description: t('carousel.slide1.description'),
//       image: "../image/bnr1.jpeg",
//     },
//     {
//       image: "../image/003.jpeg",

//     },
//     {
//       image: "../image/002.jpeg",
//     },
//   ];

//   return (
//     <Swiper
//       spaceBetween={30}
//       centeredSlides={true}
//       autoplay={{
//         delay: 5000,
//         disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       modules={[Autoplay, Pagination, Navigation]}
//       // className="h-[500px] w-full"
//         className="h-[500px] sm:h-[500px] w-full md:h-[500px] w-full"

//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <div className="relative h-full">
//             <img
//               src={slide.image}
//               alt={slide.title}
//               // className="w-full h-full object-cover"
//               className='w-full h-full object-fill'
//             />
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8  mt-10">
//               <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
//               <p className="text-xl max-w-2xl text-center">{slide.description}</p>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

// export default HomeCarousel;
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function HomeCarousel() {
  const { t } = useTranslation();

  const slides = [
    {
      //  image: "../image/001.jpeg",
      // title: t('carousel.slide1.title'),
      // description: t('carousel.slide1.description'),
      image: "../image/003.jpeg",
    },
    { image: "../image/bnr1.jpeg" },
    { image: "../image/002.jpeg" },
  ];

  return (
    <Swiper
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full h-[220px] sm:h-[320px] md:h-[450px] lg:h-[400px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title || `slide-${index}`}
              className="w-full h-full object-cover rounded-xl"
            />
            {/* If you want text overlay on desktop only */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 sm:p-8 mt-4 sm:mt-10">
              <h2 className="hidden sm:block text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                {slide.title}
              </h2>
              <p className="hidden sm:block text-sm md:text-xl max-w-2xl text-center">
                {slide.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeCarousel;