import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/carousel.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  { id: '1', image: 'https://cdn.sanity.io/images/yvyhc5zz/production/ecbe66bafa885baa78c7cd9e812e73b186d078eb-1920x1080.jpg?w=1888&fit=crop' },
  { id: '2', image: 'https://blog.cavezzale.com/wp-content/uploads/2023/02/tend%C3%AAnncia-moda-feminina.jpg' },
  { id: '3', image: 'https://www.toritama-jeans.com/wp-content/uploads/Altezza-Moda-Feminina-em-Atacado-1.jpg' },
];
const CarouselHome = () => {
  return (
    <div>
      <Swiper
      slidesPerView={1}
        spaceBetween={30}
        centeredSlides={ true }
        modules={[Navigation, Pagination, Autoplay]}
        navigation={ true }
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        style={{ 'zIndex' : -1 }}
      >
        {data.map( (item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Imagem" className="object-cover object-center md:object-top"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselHome;