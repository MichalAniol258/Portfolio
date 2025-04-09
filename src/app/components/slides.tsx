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
import SlideCon3 from './slideCon3';
import SlideCon4 from './slideCon4';


const cardData = [
  {
    h1: 'PokeNext',
    p: 'PokeNext is a Pokedex powered by Gemini AI and built with Next.js, offering a clean and intuitive way to explore Pokémon data.',
    img: '/1.png',
    href: '',
    text: 'GitHub',
    lg: ['Next.js', 'Gemini AI', 'FireBase']
  },
  {
    h1: 'AyoList',
    p: 'AyoList is a sleek app that lets you search for, organize, and track your anime and manga watchlist with ease.',
    img: '/2.png',
    href: '#',
    text: 'Unfinished Yet',
    lg: ['Next.js', 'AniList API',]
  },
  {
    h1: 'Untitled 2D Game',
    p: ' It is a 2D game still in development, crafted with passion in GameMaker Studio.',
    img: '/3.png',
    href: '#',
    text: 'Private Repository',
    lg: ['GMS 2', 'GML',]
  },
  {
    h1: 'BirdyWing AR',
    p: 'AR app for visualizing handcrafted wooden maps in real space. Built during my internship.',
    img: '/5.png',
    href: 'https://www.ar.sikorka.net/',
    text: 'Link To Website',
    lg: ['<model-viewer>']
  },
];


const smallProjects = [
  {
    h1: 'AyoWeather',
    p: 'A simple, intuitive app providing real-time weather updates, designed to offer accurate forecasts with a clean and responsive interface.',
    img: '/4.png',
    href: 'https://github.com/MichalAniol258/WeatherApp',
    text: 'GitHub',
    lg: ['AccuWeather API']
  },
  {
    h1: 'AyoBank',
    p: 'A secure app for real-time balance and transaction insights.',
    img: '/6.png',
    href: 'https://github.com/MichalAniol258/AyoBank-gocardless',
    text: 'GitHub',
    lg: ['GoCardless API']
  }
];

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
      <SwiperSlide><SlideCon2 cardData={cardData} /></SwiperSlide>
      <SwiperSlide><SlideCon3 cardData={smallProjects} /></SwiperSlide>
      <SwiperSlide><SlideCon4 /></SwiperSlide>
      {/* ... */}
    </Swiper>
  );
};
