'use client'
import { Play, Bookmark, ChevronDown,Linkedin, Mail, GithubIcon, Monitor } from 'lucide-react'
import {register} from 'swiper/element/bundle'
register();
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import HeaderTop from './components/HeaderTop';
import CarouselHeader from './components/CarouselHeader';


export default function Home() {
  return (
    <main className="">
     <HeaderTop />
        <CarouselHeader />
        
        <div className='p-6'>
          <h2 className='text-2xl font-semibold'>Assista Agora</h2>
          <span className='text-lg  '>Lista selecionada dos melhores animes</span>
        </div>

        <Swiper
          slidesPerView={6}
          navigation
        >
        <SwiperSlide ><a href=""><img src="/thumb/onepiecethumb.jpg" alt="" /></a></SwiperSlide>
        <SwiperSlide ><img src="/thumb/narutothumb.jpg" alt=""  width={265} height={398} /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/cowboybebopthumb.jpg" alt=""  width={265} height={398} /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/beckthumb.jpg" alt=""  width={265} height={398} /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/claymorethumb.jpg" alt=""  width={265} height={398} /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/bocchitherock.jpg" alt="" /></SwiperSlide>

        <SwiperSlide ><a href=""><img src="/thumb/onepiecethumb.jpg" alt="" /></a></SwiperSlide>
        <SwiperSlide ><img src="/thumb/narutothumb.jpg" alt=""  width={265} height={398} /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/cowboybebopthumb.jpg" alt=""  width={265} height={398} /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/beckthumb.jpg" alt=""  width={265} height={398} /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/claymorethumb.jpg" alt=""  width={265} height={398} /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/bocchitherock.jpg" alt="" /></SwiperSlide>
        </Swiper>

        <div className='p-6'>
          <h2 className='text-2xl font-semibold'>Mangás</h2>
          <span className='text-lg  '>Lista selecionada dos melhores Mangás</span>
        </div>
        
        <Swiper
          slidesPerView={6}
          navigation
        >
        <SwiperSlide ><img src="/thumb/manga/m1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/manga/m2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/manga/m1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/manga/m2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/manga/m1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/manga/m2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/manga/m1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/manga/m2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/manga/m1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/manga/m2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/manga/m1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/manga/m2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/manga/m1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/manga/m2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/manga/m1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="/thumb/manga/m2.jpg" alt="" /></SwiperSlide>
        </Swiper>

        <div className='p-6'>
          <h2 className='text-2xl font-semibold'>Destaques</h2>
        </div>

        <div className='bg-gradient-to-r from-orange-600 via-orange-400 to-yellow-400 p-6  flex justify-center mb-16'>
            <div className='bg-black w-[1390px] h-[278px] flex justify-center items-center '>
              <div className=''>
                <img src="hajime-no-ippo.jpg" alt="hajime" className='destaque' />
              </div>
              <div className='ml-6'>
                <p className='font-bold text-xl p-3'>Hajime No Ippo</p>
                <p className='w-[50rem] text-justify p-3'>
                  Makunouchi Ippo is an ordinary high school student in Japan. Since he spends most of his time away from school helping his mother run the family business, 
                  he doesn't get to enjoy his younger years like most teenagers. Always a target for bullying at school. One of these after-school bullying sessions turns Ippo's life around for the better, as he is saved by a boxer named Takamura. 
                  He decides to follow in Takamura's footsteps and train to become a boxer
                </p>
                <div className='flex'>
                  <div className=' ml-3'>
                    <a href='#' className='p-3 bg-orange-600 border-2 border-orange-600  text-black font-semibold hover:bg-orange-300 hover:border-orange-300 flex'><Play />Assistir S1 E1</a>
                  </div>
                  <div className='ml-3'>
                    <a href='#' className='p-3 bg-black  text-orange-600 border-solid border-2 border-orange-600 font-semibold hover:border-orange-300 flex'><Bookmark color='#ea580c'/>Adicionar a fila</a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className='bg-gradient-to-r from-red-600 via-orange-600 to-orange-900 p-6  flex justify-center mb-16'>
            <div className='bg-black w-[1390px] h-[278px] flex justify-center items-center '>
              <div className=''>
                <img src="/destaque/samuraishamploo.png" alt="hajime" className='destaque' />
              </div>
              <div className='ml-6'>
                <p className='font-bold text-xl p-3'>Samurai Shamploo</p>
                <p className='w-[50rem] text-justify p-3 text-sm'>
                Fuu Kasumi is a young and clumsy waitress who spends her days peacefully working in a small teahouse. That is, until she accidentally spills a drink all over one of her customers! 
                With a group of samurai now incessantly harassing her, Fuu desperately calls upon another samurai in the shop, Mugen, who quickly defeats them with his wild fighting technique, utilizing movements reminiscent to that of breakdancing. 
                Unfortunately, Mugen decides to pick a fight with the unwilling ronin Jin, who wields a more precise and traditional style of swordfighting, and the latter proves to be a formidable opponent. 
                </p>
                <div className='flex'>
                  <div className=' ml-3'>
                    <a href='#' className='p-3 bg-orange-600 border-2 border-orange-600  text-black font-semibold hover:bg-orange-300 hover:border-orange-300 flex'><Play />Assistir S1 E1</a>
                  </div>
                  <div className='ml-3'>
                    <a href='#' className='p-3 bg-black  text-orange-600 border-solid border-2 border-orange-600 font-semibold hover:border-orange-300 flex'><Bookmark color='#ea580c'/>Adicionar a fila</a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className='flex justify-center'>
            <a href="">
              <img src="onepplay.png" alt="Assista" className=''/>
            </a>
        </div>

        <footer className='h-screen'>
          
          <img src="dbbotom.png" alt="" width={300} height={300} className='m-auto pt-28'/>
          <p className='flex justify-center pt-3'>Procurando algo pra assistir?</p>
          <div className='flex justify-center'>
            <div className='ml-3'>
              <a href='#' className='p-2 px-7 uppercase mt-7 bg-black  text-orange-600 border-solid border-2 border-orange-600 font-semibold hover:border-orange-300 flex hover:text-orange-300'>Ver Tudo</a>
            </div>
          </div>

          <div className='flex justify-center mt-7  ml-16'>
          
          <div className=' justify-center grid mr-12 mb-5 '>
            <h4 className='font-semibold mb-3 text-sm'>Navegação</h4>
            <ul className=''>
              <li className='grid text-sm gap-3 text-gray-400 '>
                <a href="" className='hover:text-white hover:underline'>Populares</a>
                <a href="" className='hover:text-white hover:underline'>Mangás</a>
                <a href="" className='hover:text-white hover:underline'>Noticias</a>
                <a href="" className='hover:text-white hover:underline'>Jogos</a>
              </li>
            </ul>
          </div>

          <div className=' justify-center grid mb-5 '>
            <h4 className='font-semibold mb-3 text-sm'>Contato</h4>
            <ul className=''>
              <li className='grid text-sm gap-3 text-gray-400'>
                <a href="" className='hover:text-white hover:underline flex'><Linkedin size={16} className='mr-1'/>Likedin</a>
                <a href="" className='hover:text-white hover:underline flex'><Monitor size={16} className='mr-1'/>My Web Page</a>
                <a href="" className='hover:text-white hover:underline flex'><Mail size={16} className='mr-1' />Email</a>
                <a href="" className='hover:text-white hover:underline flex'><GithubIcon size={16} className='mr-1'/>Github</a>
              </li>
            </ul>
          
          </div>
          
          </div>
          <div className='w-[768px] flex justify-between p-2 border-t-[.0625rem] m-auto'>
            <span className='flex px-3 py-2'>JJK - © - 2023 </span>
            <button className='flex hover:bg-slate-900 px-3 py-2'><ChevronDown className='mr-2'/>Portugues - Brasil</button>
          </div>
        </footer>
           
          
      
    </main>
  )
}
