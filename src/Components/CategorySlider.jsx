import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
const categories = [
  { title: 'UNSTITCHED', imageUrl: '/images/wd1.webp' },
  { title: 'READY TO WEAR', imageUrl: '/images/wd2.webp' },
  { title: 'MAN', imageUrl: '/images/wd3.webp' },
  { title: 'WEST', imageUrl: '/images/wd4.webp' },
  { title: 'WEST', imageUrl: '/images/wd4.webp' },
  { title: 'WEST', imageUrl: '/images/wd4.webp' },
  { title: 'WEST', imageUrl: '/images/wd4.webp' },
];

const ShopCategories = () => {
  return (
    <div className="container mx-auto py-8">
      <div class="bg-white p-4 mx-auto text-center max-w-xs bottom border">
  <h2 class="text-lg font-bold">SHOP BY CATEGORY</h2>
</div>
    <Swiper
     modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={4}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
    
        
      }}
      navigation
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {categories.map((category) => (
        <SwiperSlide key={category.title}>
          <div className="relative group mt-5">
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full h-full object-cover transition-transform transform group-hover:scale-105"
            />
           
              <span className="text-white text-lg font-semibold">{category.title}</span>
        
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>





//     <div className="container mx-auto py-8">
//         <div class="bg-white p-4 mx-auto text-center max-w-xs bottom border">
//   <h2 class="text-lg font-bold">SHOP BY CATEGORY</h2>
// </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
//         {categories.map((category) => (
//           <div key={category.title} className="relative group">
//             <img
//               src={category.imageUrl}
//               alt={category.title}
//               className="w-full h-full object-cover transition-transform transform group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//               <span className="text-white text-lg font-semibold">{category.title}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
  );
};

export default ShopCategories;
