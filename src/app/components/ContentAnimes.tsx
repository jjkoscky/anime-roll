import { Swiper, SwiperSlide } from 'swiper/react';
import ListaCarouselAnimes from '../ListaCarouselAnimes.json'



export default function ContentAnimes(){
    return(
        <div className='pl-10 pt-10 pr-10 relative z-10 mt-[-325px]'>
            <div className='pb-5'>
                <h2 className='text-2xl font-semibold '>Assista Agora</h2>
                <span className='text-base text-zinc-400 '>Assista os melhores animes de graça</span>
            </div>
            <div className='custom-carousel'>
                <Swiper
                slidesPerView={6}
                navigation
                spaceBetween={60}
                >
                {ListaCarouselAnimes.map( (item, i) => (
                <SwiperSlide key={i} >
                    <div className=''>
                        <div className=''>
                            <a href="" >
                                <img src={item.thumbAnime} alt=""  width={265} height={398} />
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
    )
}