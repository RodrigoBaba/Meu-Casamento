'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation, Autoplay } from 'swiper/modules'

import React from 'react'

const images = [
  '../images/history/0.0.png',
  '../images/history/0.1.png',
  '../images/history/0.2.1.png',
  '../images/history/0.2.png',
  '../images/history/0.3.png',
  '../images/history/0.4.png',
  '../images/history/0.5.png',
  '../images/history/1.0.png',
  '../images/history/1.1.png',
  '../images/history/1.2.png',
  '../images/history/1.3.png',
  '../images/history/1.4.png',
  '../images/history/2.0.1.png',
  '../images/history/2.0.png',
  '../images/history/2.1.png',
  '../images/history/2.2.png',
  '../images/history/2.3.png',
  '../images/history/2.4.png',
  '../images/history/2.5.png',
  '../images/history/2.6.png',
  '../images/history/3.0.png',
  '../images/history/3.1.png',
  '../images/history/3.3.png',
  '../images/history/3.4.png',
  '../images/history/4.0.png',
  '../images/history/4.1.png',
  '../images/history/4.2.png',
  '../images/history/4.3.png',
  '../images/history/5.0.png',
  '../images/history/5.1.png',
  '../images/history/5.2.png',
  '../images/history/5.3.png',
  '../images/history/5.4.png',
]

export default function GalleryCarousel() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{
        delay: 3000,
      }}
      speed={2500}
      loop
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
    >

      {images.map((image, index) => (

        <SwiperSlide key={index}>

          <div className="h-80 rounded-3xl overflow-hidden shadow-lg">

            <img
              src={image}
              alt="Foto casal"
              className="w-full h-full"
            />

          </div>

        </SwiperSlide>

      ))}

    </Swiper>
  )
}