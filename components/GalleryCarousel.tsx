'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation, Autoplay } from 'swiper/modules'

const images = [
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
  'https://images.unsplash.com/photo-1519741497674-611481863552',
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8',
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
              className="w-full h-full object-cover"
            />

          </div>

        </SwiperSlide>

      ))}

    </Swiper>
  )
}