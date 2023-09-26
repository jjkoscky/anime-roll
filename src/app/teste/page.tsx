'use client'
import { Search, User, Bookmark } from 'lucide-react'
import { LogoIcon } from "../components/icons/LogoIcon"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Home() {
  return (
    <main className="">
      <div className='text-sm bg-[#23252b] flex justify-between items-center sticky top-0 z-20 px-16'>
        <div className='flex'>
          <LogoIcon />
          <h1 className=' text-orange-400 font-semibold text-lg ml-2'>MyBestAnimes</h1>
          <ul className='flex items-center'>
            <li className='w-fit'>
              <a href="" className="px-5 py-5 hover:bg-zinc-900 ml-2">Navegar</a>
            </li>
          </ul>

          <ul className='flex items-center'>
            <li className='w-fit'>
              <a href="" className="px-5 py-5 hover:bg-zinc-900 ">Mangá</a>
            </li>
            <li className='w-fit '>
              <a href="" className="px-5 py-5 hover:bg-zinc-900 ">Jogos</a>
            </li>
            <li className='w-fit'>
              <a href="" className="px-5 py-5 hover:bg-zinc-900 ">Notícias</a>
            </li>
          </ul>
          </div>
         
          <ul className='flex items-center'>
            <li className='w-fit'>
              <a href="" className="px-5 py-5 hover:bg-zinc-900 block"><Search /></a>
            </li>
            <li className='w-fit '>
              <a href="" className="px-5 py-5 hover:bg-zinc-900 block"><Bookmark /></a>
            </li>
            <li className='w-fit'>
              <a href="" className="px-5 py-5 hover:bg-zinc-900 block"><User /></a>
            </li>
          </ul>
      </div>

      

      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="onepiace.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="hxh.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="onepiace.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="hxh.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="onepiace.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="hxh.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="onepiace.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="hxh.jpg" alt="" /></SwiperSlide>
      
      Assista
    </Swiper>

    </main>
  )
}
