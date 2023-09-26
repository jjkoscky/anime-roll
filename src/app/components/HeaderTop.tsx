import { LogoIcon } from "./icons/LogoIcon"
import { Search, User, Bookmark } from 'lucide-react'
import list from "../ListaMenuNavegar.json"
import listNoticia from "../ListaMenuNoticias.json"
import { useState } from 'react'




export default function HeaderTop( ){
  const [isOpen, setIsOpen] = useState (false)
  const [isOpenNoticias, setIsOpenNoticias] = useState (false)


    return(
        <div className='text-sm bg-[#23252b] flex justify-between items-center sticky top-0 z-20 px-16'>
        <div className='flex'>
          <a href="" className="flex items-center">
            <LogoIcon/>
            <h1 className=' text-orange-400 font-semibold text-lg ml-2 '>MyTopAnimes</h1>
          </a>
          <div className='hidden md:flex '>
           
            
            <button 
            onClick={() => setIsOpen((prev) => !prev)} 
            className="px-5 py-5 hover:bg-zinc-900 ml-2  
            
            ">
              Navegar
              
            </button>
            {isOpen && (
            <div className="fixed inset-0 w-full h-full mt-16 bg-black bg-opacity-40 backdrop-blur-sm" onClick={() => setIsOpen((prev) => !prev)}>
              <div className=' absolute top-[-2px] ml-[232px] flex flex-col bg-zinc-900 '>
                  {list.map((item, i) => (
                      <div className='flex p-4 cursor-pointer hover:bg-zinc-800
                      ' 
                      key={i} 
                      >
                          <h3 className='font-normal'>{item.navegar}</h3>
                      </div>
                  ))}
              </div>
            </div>
        )}
            <button  className="px-5 py-5 hover:bg-zinc-900">Mangá</button>
            <button  className="px-5 py-5 hover:bg-zinc-900">Jogos</button>
            
            <button 
            onClick={() => setIsOpenNoticias((prev) => !prev)} 
            className="px-5 py-5 hover:bg-zinc-900 ml-2
            ">
              Notícias
            </button>
            {isOpenNoticias && (
            <div className="fixed inset-0 w-full h-full mt-16 bg-black bg-opacity-40 backdrop-blur-sm" onClick={() => setIsOpenNoticias((prev) => !prev)}> 
              <div className=' absolute top-[-2px] ml-[500px] flex flex-col bg-zinc-900'>
              {listNoticia.map((item, i) => (
                  <div className='flex p-4 cursor-pointer hover:bg-zinc-800
                    ' 
                  key={i} 
                  >
                      <h3 className='font-normal'>{item.noticia}</h3>
                  </div>
              ))}
            </div>
          </div>
    )}
      </div>
    </div>
         
          <ul className='flex items-center'>
            <li className='w-fit'>
              <a href="" className="px-5 py-5 hover:bg-zinc-900 block"><Search /></a>
            </li>
            <li className='w-fit '>
              <a href="" className="px-5 py-5 hover:bg-zinc-900 hidden md:block"><Bookmark /></a>
            </li>
            <li className='w-fit'>
              <a href="" className="px-5 py-5 hover:bg-zinc-900 block"><User /></a>
            </li>
          </ul>
      </div>
    )
}