import { LogoIcon } from "./icons/LogoIcon"
import { Search, User, Bookmark } from 'lucide-react'
import list from "../ListaMenuNavegar.json"
import listNoticia from "../ListaMenuNoticias.json"
import ListaCategoria1 from "../ListaCategoria1.json"
import ListaCategoria2 from "../ListaCategoria2.json"
import ListaCategoria3 from "../ListaCategoria3.json"
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from 'react'

export default function HeaderTop( ){
  const [isOpen, setIsOpen] = useState (false)
  const [isOpenNoticias, setIsOpenNoticias] = useState (false)


    return(
        <div className='font-normal bg-[#23252b] flex justify-between items-center sticky top-0 z-20 px-[6rem]'>
        <div className='flex'>
          <a href="" className="flex items-center">
            <LogoIcon />
            <h1 className=' text-orange-400 font-semibold text-lg '>MyTopAnimes</h1>
          </a>
          <div className='hidden md:flex'>
           
            
            <button 
            onClick={() => setIsOpen((prev) => !prev)} 
            className="px-4 py-4 hover:bg-zinc-900 ml-2 flex  text-zinc-300 hover:text-white
            
            ">
              Navegar <AiFillCaretDown className="flex mt-2 ml-2 w-3 h-3 "></AiFillCaretDown>
              
            </button>
            {isOpen && (
            <div className="fixed inset-0 w-full h-full mt-14 bg-black bg-opacity-40 backdrop-blur-sm" onClick={() => setIsOpen((prev) => !prev)}>
              <div className="flex flex-row ">
                <div className='ml-[249px] w-fit bg-zinc-900 py-3'>
                    
                    {list.map((item, i) => (
                        <div className='flex p-4 cursor-pointer hover:bg-zinc-800 text-sm
                        ' 
                        key={i} 
                        >
                            
                            <h3 className=''>{item.navegar}</h3>
                        </div>
                        
                    ))}
                    
                </div>
              
                <div className="w-fit bg-zinc-900  border-l-[.0625rem] py-3">
                <div className="flex p-4 w-52 text-zinc-500 text-sm font-semibold">Genêro</div>
                {ListaCategoria1.map((item, i) => (
                        <div className='flex p-4 w-52 cursor-pointer hover:bg-zinc-800 text-sm
                        ' 
                        key={i} 
                        >
                            <h3 className=''>{item.categoria}</h3>
                        </div>
                        
                    ))}

                </div>

                <div className="w-fit h-fit bg-zinc-900  py-3">
                <div className="flex p-4 w-52 text-zinc-500">&nbsp;</div>
                {ListaCategoria2.map((item, i) => (
                        <div className='flex p-4 w-52 cursor-pointer hover:bg-zinc-800 text-sm
                        ' 
                        key={i} 
                        >
                            <h3 className=''>{item.categoria2}</h3>
                        </div>
                        
                    ))}

                </div>

                <div className="w-fit h-fit bg-zinc-900  py-3">
                <div className="flex p-4 w-52 text-zinc-500">&nbsp;</div>
                {ListaCategoria3.map((item, i) => (
                        <div className='flex p-4 w-52 cursor-pointer hover:bg-zinc-800 text-sm
                        ' 
                        key={i} 
                        >
                            <h3 className=''>{item.categoria3}</h3>
                        </div>
                        
                    ))}

                </div>
              </div>
              
            </div>
        )}
            <button  className="px-4 py-4 hover:bg-zinc-900  text-zinc-300 hover:text-white">Mangá</button>
            <button  className="px-4 py-4 hover:bg-zinc-900   text-zinc-300 hover:text-white">Jogos</button>
            
            <button 
            onClick={() => setIsOpenNoticias((prev) => !prev)} 
            className="px-4 py-4 hover:bg-zinc-900 ml-2 text-base flex  text-zinc-300 hover:text-white
            ">
              Notícias <AiFillCaretDown className="flex mt-2 ml-2 w-3 h-3" ></AiFillCaretDown>
            </button>
            {isOpenNoticias && (
            <div className="fixed inset-0 w-full h-full mt-14 bg-black bg-opacity-40 backdrop-blur-sm" onClick={() => setIsOpenNoticias((prev) => !prev)}> 
              <div className=' absolute  ml-[520px] flex flex-col bg-zinc-900'>
              {listNoticia.map((item, i) => (
                  <div className='flex p-4 pr-[165px] cursor-pointer hover:bg-zinc-800 text-sm
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
              <a href="" className="px-4 py-4 hover:bg-zinc-900 block"><Search /></a>
            </li>
            <li className='w-fit '>
              <a href="" className="px-4 py-4 hover:bg-zinc-900 hidden md:block"><Bookmark /></a>
            </li>
            <li className='w-fit'>
              <a href="" className="px-4 py-4 hover:bg-zinc-900 block"><User /></a>
            </li>
          </ul>
      </div>
    )
}