import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Play, Bookmark } from 'lucide-react'


const data =[
    {id: '1', image: '/Carouseltop/onepiececarousel.png' },
    {id: '2', image: '/Carouseltop/hajimecarousel.png' },
    {id: '3', image: '/Carouseltop/huntercarousel.png' },
    {id: '4', image: '/Carouseltop/blackclovercarousel.png' },
    {id: '5', image: '/Carouseltop/narutocarousel.png' },
    {id: '6', image: '/Carouseltop/promisedcarousel.png' },
  ]


export default function CarouselHeader(){
  
    return(
        <div>
          <Swiper
            modules={[Autoplay]}
            effect='fade'
            //autoplay={{delay: 1000}}
            //pagination={{clickable: true}}
            navigation
            loop={true}
          >

            {data.map( (item) => (
              <SwiperSlide key={item.id}>
                <div className=' w-[600px] h-[222px] absolute top-[25%] left-[3%] bp-2 '>
                  <div className=''>
                  <p>
                    Sofrimento, arrependimento, vergonha: os sentimentos negativos dos humanos tornam-se Maldições, causando terríveis 
                    acidentes que podem levar até mesmo à morte. E pra piorar, Maldições só podem ser exorcizadas por outras Maldições. 
                    Certo dia, para salvar amigos que estavam sendo atacados por
                  </p>
                  </div>
                  <div className='flex mt-10'>
                    <div className='text-center justify-center  '>
                      <a href='#' className='p-2 bg-orange-600 border-2 border-orange-600  text-black font-semibold hover:bg-orange-300 hover:border-orange-300 flex'><Play /> Assistir S1 E1</a>
                    </div>
                    <div className='ml-5'>
                      <button className='p-2 px-7  uppercase  text-orange-600 border-solid border-2 border-orange-600 font-semibold hover:border-orange-300  hover:text-orange-300'><Bookmark /></button>
                    </div>
                  </div>
                </div>

                <img 
                src={item.image} 
                alt=""
                className='slide-item imgx' 
                />
                
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    )
}