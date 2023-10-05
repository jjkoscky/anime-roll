import { Swiper, SwiperSlide } from 'swiper/react';
import ListaCarouselMangas from '../ListaCarouselMangas.json';
import { useState, useEffect } from 'react';

export default function ContentMangas() {
  const [isMobile, setIsMobile] = useState(false);
  const [quantidadeCarousel, setQuantidadeCarousel] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        setIsMobile(true);
        setQuantidadeCarousel(2);
      } else if (screenWidth <= 1024) {
        // Tablet
        setIsMobile(false);
        setQuantidadeCarousel(5);
      } else {
        // Desktop
        setIsMobile(false);
        setQuantidadeCarousel(6);
      }
    };

    // Chamada inicial para definir o estado com base na largura da tela atual
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='pl-10 pt-10 pr-10'>
      <div className='pb-5'>
        <h2 className='text-2xl font-semibold'>Mangás</h2>
        <span className='text-base text-zinc-400'>Recomendações de leituras </span>
      </div>
      <div>
        <Swiper slidesPerView={quantidadeCarousel} navigation spaceBetween={10}>
          {ListaCarouselMangas.map((item, i) => (
            <SwiperSlide key={i}>
              <div className=''>
                <div className=''>
                  <a href="">
                    <img src={item.thumbManga} alt=""  width={265} height={398} />
                  </a>
                </div>
                <div className='flex flex-col '>
                  <span className='text-sm mt-1'>{item.nome}</span>
                  <span className='text-sm text-zinc-400 mt-1'>Legendado</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
