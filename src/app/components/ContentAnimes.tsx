import { Swiper, SwiperSlide } from 'swiper/react';
import ListaCarouselAnimes from '../ListaCarouselAnimes.json';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ContentAnimes() {
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
    <div className="pl-10 pt-10 pr-10 relative z-10 sm:mt-[-50px] md:mt-[-91px] lg:mt-[-125px] 2xl:mt-[-325px]">
      <div className="pb-5">
        <h2 className="text-xl font-semibold">Fique inspirado com essas recomendações para assistir!</h2>
        <span className="text-base text-zinc-400">
          Alguns dos animes mais divertidos e interessantes para te inspirar.
        </span>
      </div>
      <div className="">
        <Swiper slidesPerView={quantidadeCarousel} navigation spaceBetween={10}>
          {ListaCarouselAnimes.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="">
                <div className="">
                  <a href="">
                    <Image
                      src={item.thumbAnime}
                      alt=""
                      width={265}
                      height={398}
                    />
                  </a>
                </div>
                <div className="flex flex-col ">
                  <span className="text-sm mt-1">{item.nome}</span>
                  <span className="text-sm text-zinc-400 mt-1">Legendado</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
