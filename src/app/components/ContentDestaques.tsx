import { Play, Bookmark } from 'lucide-react'
import Image from 'next/image'
export default function ContentDestaques(){
    return(
        <div className='pl-10 pt-10 pr-10'>
           <div className='pb-5'>
                <h2 className='text-2xl font-semibold '>Destaques</h2>
                <span className='text-base text-zinc-400 '>Seção dos mais emocionantes</span>
            </div>

        <div className='bg-gradient-to-r from-orange-600 via-orange-400 to-yellow-400 p-6  flex justify-center  mb-16'>
            <div className=' 2xl:flex bg-black 2xl:w-[1390px] 2xl:h-[278px] justify-center items-center'>
              <a href='https://animesonlinecc.to/episodio/hajime-no-ippo-episodio-1/' target='_blank' className=''>
                <Image  src="/hajime-no-ippo.jpg" alt="hajime" className='destaque' width={225} height={325}/>
              </a>
              <div className=''>
                <p className='font-bold text-sm 2xl:text-xl p-3'>Hajime No Ippo</p>
                <p className='w-full 2xl:w-[50rem] text-justify p-3 text-sm'>
                Makunouchi Ippo é um estudante normal do ensino médio no Japão. Como ele passa a maior parte do tempo fora da escola ajudando a mãe a administrar os negócios da família,
                  ele não consegue aproveitar sua juventude como a maioria dos adolescentes. Sempre alvo de bullying na escola. Uma dessas sessões de bullying depois da escola muda a vida de Ippo para melhor, quando ele é salvo por um boxeador chamado Takamura.
                  Ele decide seguir os passos de Takamura e treinar para se tornar um boxeador.
                </p>
                <div className='hidden 2xl:flex'>
                  <div className=' ml-3'>
                    <a href='https://animesonlinecc.to/episodio/hajime-no-ippo-episodio-1/' target='_blank' className='p-3 bg-orange-600 border-2 border-orange-600  text-black font-semibold hover:bg-orange-300 hover:border-orange-300 flex'><Play />Assistir S1 E1</a>
                  </div>
                  <div className='ml-3'>
                    <a href='#' className='p-3 bg-black  text-orange-600 border-solid border-2 border-orange-600 font-semibold hover:border-orange-300 flex'><Bookmark color='#ea580c'/>Adicionar a fila</a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className='bg-gradient-to-r from-red-600 via-orange-600 to-orange-900 p-6  flex justify-center mb-16'>
            <div className='2xl:flex bg-black 2xl:w-[1390px] 2xl:h-[278px] justify-center items-center '>
              <a href='https://animesonlinehd.vip/episodio/samurai-champloo-episodio-1/' target='_blank' className=''>
                <Image src="/destaque/samuraishamploo.png" alt="Samurai Shaploo" className='destaque' width={225} height={325}/>
              </a>
              <div className=''>
                <p className='font-bold 2xl:text-xl p-3'>Samurai Shamploo</p>
                <p className='w-full 2xl:w-[50rem] text-justify p-3 text-sm'>
                Fuu Kasumi é uma garçonete jovem e desajeitada que passa os dias trabalhando pacificamente em uma pequena casa de chá. Isto é, até que ela acidentalmente derrame uma bebida em um de seus clientes!
                Com um grupo de samurais a assediando incessantemente, Fuu chama desesperadamente outro samurai na loja, Mugen, que rapidamente os derrota com sua técnica de luta selvagem, utilizando movimentos que lembram o breakdance.
                Infelizmente, Mugen decide brigar com o relutante ronin Jin, que exerce um estilo de luta de espadas mais preciso e tradicional, e este último prova ser um oponente formidável. 
                </p>
                <div className='hidden 2xl:flex'>
                  <div className=' ml-3'>
                    <a href='https://animesonlinehd.vip/episodio/samurai-champloo-episodio-1/' target='_blank' className='p-3 bg-orange-600 border-2 border-orange-600  text-black font-semibold hover:bg-orange-300 hover:border-orange-300 flex'><Play />Assistir S1 E1</a>
                  </div>
                  <div className='ml-3'>
                    <a href='#' className='p-3 bg-black  text-orange-600 border-solid border-2 border-orange-600 font-semibold hover:border-orange-300 flex'><Bookmark color='#ea580c'/>Adicionar a fila</a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className='flex justify-center pb-5'>
            <a href="https://www.crunchyroll.com/pt-br/watch/GR3VWXP96/im-luffy-the-man-whos-gonna-be-king-of-the-pirates" target='_blank'>
              <img src="onepplay.png" alt="Assista" className=''/>
            </a>
        </div>
        </div>
    )
}