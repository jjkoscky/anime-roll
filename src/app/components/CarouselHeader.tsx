import {register} from 'swiper/element/bundle'
register();
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade } from 'swiper/modules';

const data =[
    {id: '1', image: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1ecde018e863e2aaee31f00a23378c35.jpe' },
    {id: '2', image: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2e54344c7cc1675af721b4021222230f.jpe' },
    {id: '3', image: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e6b2cd29a5ff62f4591d3b299007e24e.jpe' },
    {id: '4', image: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0273e80242d80b0218f640e038269c18.jpe' },
    {id: '5', image: 'https://gkpb.com.br/wp-content/uploads/2023/01/hajime-no-ippo-chega-a-netflix-e1672759914159.jpg' },
    {id: '6', image: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a7243613edbb4322bf20caed6a270b52.jpe' },
  ]

export default function CarouselHeader(){
    return(
        <div>
          <Swiper
            modules={[EffectFade]}
            effect='fade'
            autoplay={true}
            slidesPerView={1}
            pagination={{clickable: true}}
            navigation
            loop={true}
          >

            {data.map( (item) => (
              <SwiperSlide key={item.id}>
                <img 
                src={item.image} 
                alt="Slider"
                className='slide-item' 
                />
                
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    )
}