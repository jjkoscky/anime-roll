import { ChevronDown,Linkedin, Mail, GithubIcon, Monitor } from 'lucide-react'
import Image from 'next/image'
export default function FooterPage(){
    return(
        
          <footer className=' bg-gradient-to-b from-black via-black to-blue-950'>
          
          <Image src="/shenlong.png" alt="" width={650} height={500} className='m-auto pt-11'/>
          <p className='flex justify-center pt-3'>O que deseja assistir?</p>
          <div className='flex justify-center'>
            <div className='ml-3 pb-5'>
              <button className='p-2 px-7 uppercase mt-7   text-orange-600 border-solid border-2 border-orange-600 font-semibold hover:border-orange-300 flex hover:text-orange-300'>Ver Tudo</button>
            </div>
          </div>

          <div className='grid 2xl:flex justify-center grid-cols-1 2xl:mt-7  2xl:ml-10'>
          
          <div className=' justify-between 2xl:justify-center p-5 2xl:grid ml-5  2xl:mr-32 flex '>
            <h4 className='text-base flex  '>Navegação</h4>
            <ul className='mr-16'>
              <li className='grid text-sm gap-3 text-gray-400 '>
                <a href="" className='hover:text-white hover:underline'>Populares</a>
                <a href="" className='hover:text-white hover:underline'>Mangás</a>
                <a href="https://www.crunchyroll.com/pt-br/news" target='_blank' className='hover:text-white hover:underline'>Noticias</a>
                <a href="" className='hover:text-white hover:underline'>Jogos</a>
              </li>
            </ul>
          </div>

          <div className='justify-between 2xl:justify-center p-5 2xl:grid ml-5 2xl:mr-32 flex'>
            <h4 className='text-base flex'>Contato</h4>
            <ul className='mr-5'>
              <li className='grid text-sm gap-3 text-gray-400'>
                <a href="https://www.linkedin.com/in/jefferson-koscky-jr/" target='_blank' className='hover:text-white hover:underline flex'><Linkedin size={16} className='mr-1'/>Likedin</a>
                <a href="https://github.com/jjkoscky" target='_blank' className='hover:text-white hover:underline flex'><GithubIcon size={16} className='mr-1'/>Github</a>
                <a href="https://jjkoscky-web.vercel.app" target='_blank' className='hover:text-white hover:underline flex'><Monitor size={16} className='mr-1'/>My Web Page</a>
                <a href="mailto:jjunior.koscky@gmail.com" className='hover:text-white hover:underline flex'><Mail size={16} className='mr-1' />Email</a>
              </li>
            </ul>
          
          </div>
          
          </div>
          <div className='w-full 2xl:w-[768px] flex justify-between border-t-[.0625rem] m-auto '>
            <a href='https://jjkoscky-web.vercel.app/' target='_blank' className='flex  p-3'>JJK - © - 2023 - Contato </a>
            <button className='flex hover:bg-slate-900 p-3'><ChevronDown className='mr-2'/>Portugues - Brasil</button>
          </div>
        </footer>
        
    )
}