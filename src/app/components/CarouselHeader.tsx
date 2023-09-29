import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Play, Bookmark } from 'lucide-react'
import { EffectFade } from 'swiper/modules';


const data =[
    {id: '1', image: '/Carouseltop/onepiececarousel.png', logo: '/Carouseltop/logo/onepiecelogo.png',
    paragrafo: 'É um popular anime e mangá japonês criado por Eiichiro Oda. A história gira em torno de Monkey D. Luffy, um jovem com poderes de esticamento de borracha após comer uma Fruta do Diabo, e sua jornada para se tornar o Rei dos Piratas.'},
    
    {id: '2', image: '/Carouseltop/hajimecarousel.png', logo:'/Carouseltop/logo/hajimelogo.png',
    paragrafo: 'É um anime e mangá que gira em torno da jornada de Ippo Makunouchi, um jovem tímido e com baixa autoestima que descobre seu potencial como boxeador depois de ser treinado por Kamogawa Genji. ' },
    {id: '3', image: '/Carouseltop/huntercarousel.png', logo:'/Carouseltop/logo/hunterlogo.png',
    paragrafo: 'É um anime e mangá que segue a jornada de Gon Freecss, um jovem determinado a se tornar um Hunter e encontrar seu pai, um lendário caçador. ' },
    {id: '4', image: '/Carouseltop/blackclovercarousel.jpeg', logo:'/Carouseltop/logo/blacklogo.png',
    paragrafo: 'É um anime e mangá que segue a jornada de Asta, um jovem órfão que nasceu sem qualquer poder mágico em um mundo onde a magia é tudo. Determinado a se tornar o Feiticeiro Imperador e superar sua falta de magia, Asta embarca em uma jornada ao lado de seu rival e melhor amigo, Yuno. ' },
    {id: '5', image: '/Carouseltop/narutoteam7.jpg', logo:'/Carouseltop/logo/naruto.png',
    paragrafo: 'A jornada de Naruto Uzumaki, um jovem ninja com o sonho de se tornar o Hokage, o líder da sua vila, Konoha.' },
    {id: '6', image: '/Carouseltop/promisedcarousel.png', logo:'/Carouseltop/logo/promised.png',
    paragrafo: 'É um anime e mangá que se passa em um orfanato aparentemente idílico chamado Grace Field House, onde crianças órfãs vivem felizes sob os cuidados de sua amada mãe adotiva, Isabella. No entanto, a atmosfera tranquila esconde um segredo sombrio' },
  ]
  

export default function CarouselHeader(){
  
    return(
        <div className='custom-carousel'>
          
          <Swiper
            modules={[EffectFade, Autoplay, Pagination, Navigation]}
            //effect='fade'
            autoplay = {true}
            //autoplay={{delay: 1000}}
            //pagination={{clickable: false}}
            navigation
            loop={true}
            

            
          >
            {data.map( (item) => (
              <SwiperSlide key={item.id} className=''>
                
                <img src={item.image} alt="" className='slide-item imgx' />
                
                <div className=' w-[600px] h-[222px] absolute top-[5%] left-[3%]  Carousel-img-top'>
                <img src={item.logo} alt="" className='logocarousel mt-20' />
                  <p className='bg-black bg-opacity-60 p-2 text-justify w-[355px] mt-10'>
                    {item.paragrafo}
                  </p>
                  <div className='flex mt-10'>
                    <div className='text-center justify-center  '>
                      <a href='#' className='p-2 bg-orange-600 border-2 border-orange-600  text-black font-semibold hover:bg-orange-300 hover:border-orange-300 flex'><Play /> Assistir S1 E1</a>
                    </div>
                    <div className='ml-5'>
                      <button className='p-2 px-7  uppercase  text-orange-600 border-solid border-2 border-orange-600 font-semibold hover:border-orange-300  hover:text-orange-300'><Bookmark /></button>
                    </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
            
          </Swiper>
        </div>
    )
}