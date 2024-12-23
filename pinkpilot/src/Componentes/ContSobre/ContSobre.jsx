import imgSob1 from '../../../public/imgSob1.svg'
import imgSob2 from '../../../public/imgSob2.svg'

import Isa from '../../../public/Isa.png'
import Mari from '../../../public/Mari.png'
import Lu from '../../../public/Lu.png'
import Gigi from '../../../public/Gi.png'
import Gaby from '../../../public/Gaby.png'


const team = [
  {
      avatar: Gaby,
      name: "Gabrielly Barbosa Camilo",
      title: "(Marketing/ Finanças)",
  },
  {
      avatar: Gigi,
      name: "Giovanna Luiza Bento",
      title: "(Front-end)",
  },
  {
      avatar: Isa,
      name: "Isabella Hikari Chinen",
      title: "(Designer)",
  },
  {
      avatar: Lu,
      name: "Luana Gomes da Silva",
      title: "(Back-End)",
  },
  {
      avatar: Mari,
      name: "Mariana Ayumi Kitsuse",
      title: "(Design/Marketing)",
  }
]

function ContSobre(){
  return (
    <>
    <div className="flex items-center justify-center px-5 ">
      <div className="max-w-7xl w-full flex items-center">
        {/* Contêiner para o texto */}
        <div className="flex-1 text-center ">
          <h2 className="text-4xl font-bold text-margentinha mb-4">Nossa missão</h2>
          <p className="text-gray-700 text-2xl">
          Criar um ambiente acolhedor onde cada mulher possa cuidar do seu carro sem medo de se sentir desconfortável ou de ser enganada. Além disso, vamos compartilhar vídeos curtos em nossas redes sociais explicando a funcionalidade dos carros, para que todos possam entender melhor.
          </p>
        </div>
        {/* Contêiner para a imagem */}
        <div className="flex-shrink-0 ml-10">
          <img
            src={imgSob1} // Substitua pelo link da sua imagem
            alt="Imagem descritiva"
            className="w- h-auto "
          />
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center px-5 ">
    <div className="flex-shrink-0 ml-10">
        <img
          src={imgSob2} // Substitua pelo link da sua imagem
          alt="Imagem descritiva"
          className="w- h-auto"
        />
      </div>
    <div className="max-w-3xl w-full flex items-center">
      {/* Contêiner para o texto */}
      <div className="flex-1 text-center">
        <h2 className="text-4xl font-bold text-margentinha mb-4">Nossa missão</h2>
        <p className="text-gray-700 text-2xl">
        Nossa ideia surgiu depois de ver mulheres enfrentando problemas em oficinas mecânicas, muitas vezes se sentindo enganadas e desconfortáveis. Decidimos criar um site que ofereça confiança e segurança para as mulheres quando precisarem de serviços automotivos. Além disso,com a PinkChat, oferecemos uma rede de oficinas de confiança, priorizando o respeito e a transparência nos serviços prestados por eles. 
        </p>
      </div>
      {/* Contêiner para a imagem */}
      
    </div>
  </div>

  <section className="pb-12 text-center">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col lg:flex-row  ">
            <div className="w-full lg:w-1/2 text-center lg:text-left pr-6">
                <h2 className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7">
                    Conheça nossa equipe criativa
                </h2>
                <h3 className="font-manrope flex text-2xl underline text-margentinha font-bold mb-7">
                    Sócias 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </h3>
                <p className="text-lg text-gray-500 mb-16">                
                Buscam tornar as oficinas mecânicas mais seguras e confiáveis para mulheres. Gabrielly elabora estratégias de marketing e finanças, enquanto a Giovanna cria uma experiência de usuário intuitiva. Luana garante o funcionamento do back-end, Isabella traz criatividade ao design e Mariana combina design e marketing para fortalecer a identidade visual. Em conjunto, transformam a maneira como as mulheres se conectam com o universo automotivo, promovendo a segurança e conforto na palma da sua mão.
                </p>
                <button 
                className="cursor-pointer py-3 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none px-8 w-60 bg-margentinha hover:text-margentinha text-white shadow-[3px_3px_0px_#e9bdc0] text-base font-semibold transition-all duration-300 block rounded-2xl hover:bg-rosinha mx-auto lg:mx-0"
                onClick={() => window.open("https://www.instagram.com/pink.pilot_?igsh=MW05Zzd4YThsaHJwbg==", "_blank")}>
                Nos siga nas redes sociais
                </button>
            </div>  
            <div className="mt-12">
                    <ul className="grid gap-8  md:grid-cols-4 lg:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className=" mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-cinza font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-cinza">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            </div>
          
        </section>

  </>
  )
}

export default ContSobre;