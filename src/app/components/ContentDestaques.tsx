import { Play, Bookmark } from 'lucide-react'
export default function ContentDestaques(){
    return(
        <div className='pl-10 pt-10 pr-10'>
           <div className='pb-5'>
                <h2 className='text-2xl font-semibold '>Destaques</h2>
                <span className='text-base text-zinc-400 '>Seção dos mais emocionantes</span>
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
            <a href="https://www.crunchyroll.com/pt-br/watch/GR3VWXP96/im-luffy-the-man-whos-gonna-be-king-of-the-pirates" target='_blank'>
              <img src="onepplay.png" alt="Assista" className=''/>
            </a>
        </div>
        </div>
    )
}