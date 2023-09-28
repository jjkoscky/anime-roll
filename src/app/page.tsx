'use client'
import {register} from 'swiper/element/bundle'
register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import HeaderTop from './components/HeaderTop';
import CarouselHeader from './components/CarouselHeader';
import ContentAnimes from './components/ContentAnimes';
import ContentMangas from './components/ContentMangas';
import ContentDestaques from './components/ContentDestaques';
import FooterPage from './components/Footer';


export default function Home() {
  return (
    <main className="">
      <HeaderTop />
      <CarouselHeader />
      <ContentAnimes />
      <ContentMangas />
      <ContentDestaques />
      <FooterPage />
    </main>
  )
}
