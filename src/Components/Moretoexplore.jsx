import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const exploreItems = [
  {
    title: 'STYLED BY YOU',
    description: 'Style. Tag. Get featured.',
    imageUrl: '/images/explore1.webp',
  },
  {
    title: 'FABRIC GLOSSARY',
    description: 'Learn more about what went into the making of your favourite looks.',
    imageUrl: '/images/explore2.webp',
  },
  {
    title: 'Unstitched Intermix - Styled by Experts',
    description: 'Crafted with tradition for style that’s evergreen.',
    imageUrl: '/images/explore3.webp',
  },
  {
    title: 'Unstitched Intermix - Styled by Experts',
    description: 'Crafted with tradition for style that’s evergreen.',
    imageUrl: '/images/explore4.webp',
  },
  {
    title: 'Unstitched Intermix - Styled by Experts',
    description: 'Crafted with tradition for style that’s evergreen.',
    imageUrl: '/images/explore5.webp',
  },
  {
    title: 'Unstitched Intermix - Styled by Experts',
    description: 'Crafted with tradition for style that’s evergreen.',
    imageUrl: '/images/explore6.webp',
  },
  {
    title: 'Unstitched Intermix - Styled by Experts',
    description: 'Crafted with tradition for style that’s evergreen.',
    imageUrl: '/images/explore7.webp',
  },
];

const MoreToExplore = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-xl font-semibold mb-6">MORE TO EXPLORE</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {exploreItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MoreToExplore;
