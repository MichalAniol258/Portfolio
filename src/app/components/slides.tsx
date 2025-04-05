"use client"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideCon from './slideCon';
import SlideCon2 from './slideCon2';
import AudioPlayer from './AudioPlayer';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slides() {
  return (
    <Swiper
      direction="vertical" // domyślnie pionowo
      breakpoints={{
        1024: {
          direction: 'horizontal', // od szerokości 768px ustawiamy poziomo
        },
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <AudioPlayer></AudioPlayer>
      <SwiperSlide><SlideCon /></SwiperSlide>
      <SwiperSlide><SlideCon2 /></SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      {/* ... */}
    </Swiper>
  );
};
