import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Card from './card';
import { EffectCoverflow, Pagination } from 'swiper/modules';

interface Card {
    h1: string;
    p: string;
    img: string;
    href: string
    text: string
    lg: string[]
}

export default function SliderCards({ cardData }: { cardData: Card[] }) {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className="max-w-xs w-8/12 px-4 "
            >
                {cardData.map((card, index) => (
                    <SwiperSlide key={index}>
                        <Card key={index} h1={card.h1} p={card.p} img={card.img} href={card.href} lg={card.lg} text={card.text}></Card>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
