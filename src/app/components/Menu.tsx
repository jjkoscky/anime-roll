import { Menu } from "lucide-react";
import Link from "next/link";

interface MenuProps {
    isVisible: boolean;
    onClose: () => void;
}

export default function MenuHidden({isVisible, onClose}: MenuProps){
    return(
        <div className={`${isVisible ? 'flex': 'hidden'}
        fixed inset-0 w-full h-full mt-[56px]  md:hidden bg-black bg-opacity-40 backdrop-blur-sm
        `} onClick={ev=>onClose()}>
            
            <div className="w-full bg-[#141519] h-auto py-4 px-5 fixed " onClick={(e) => e.stopPropagation()}>
                <button onClick={ev=>onClose()} className="absolute top-[-44px] ">
                    <Menu className="" size={28}/>
                </button>
                <div className="flex justify-between mb-5 ">
                    <nav>
                        <ul className="">
                            <li className="grid grid-cols-1 text-base gap-6">
                                <span className="text-zinc-500 uppercase text-xs font-semibold pt-2">Navegar</span>
                                <a href="">Populares</a>
                                <a href="">Navidades</a>
                                <a href="">Calendário</a>
                                <a href="">Video Clipes</a>
                                <a href="">Gêneros</a>
                                <a href="">Mangá</a>
                                <a href="">Noticias</a>
                            </li>
                        </ul>
                    </nav>
                </div>            
                
            </div>
        </div>
    )
}