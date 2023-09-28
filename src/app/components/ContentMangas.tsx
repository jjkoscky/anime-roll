import { Swiper, SwiperSlide } from 'swiper/react';
import ListaCarouselMangas from '../ListaCarouselMangas.json'

export default function ContentMangas(){
    return(
        <div className='pl-10 pt-10 pr-10'>
            <div className='pb-5'>
                <h2 className='text-2xl font-semibold'>Mangás</h2>
                <span className='text-base text-zinc-400'>Leia os melhores mangás selecionados de graça </span>
            </div>
            <div>
                <Swiper
                slidesPerView={6}
                navigation
                spaceBetween={60}
                >
                {ListaCarouselMangas.map( (item, i) => (
                <SwiperSlide key={i} >
                    <div className=''>
                        <div className=''>
                            <a href="" >
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
    )
}