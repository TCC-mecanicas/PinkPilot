import benefIMG from '../../../public/Group 29.svg'
import {Link} from 'react-router-dom'

function Beneficios(){
    return(
        <>
        <div className="flex justify-center text-2xl items-center mt-8 mb-8">
      <ul className="space-y-5 w-1/3 text-right pr-5">
        <li className="flex items-center justify-end">
          <h1 className="font-medium">
            <span className="font-semibold">Praticidade</span> para os usuários
          </h1>
          <span className="inline-block w-2.5 h-2.5 ml-2 bg-card5 rounded-full"></span>
        </li>
        <li className="flex items-center justify-end">
          <h1 className="font-medium">
            <span className="font-semibold">Segurança</span> no serviço
          </h1>
          <span className="inline-block w-2.5 h-2.5 ml-2 bg-card5 rounded-full"></span>
        </li>
        <li className="flex items-center justify-end">
          <h1 className="font-medium">
            Disponibilização de <span className="font-semibold">suporte imediato</span>
          </h1>
          <span className="inline-block w-2.5 h-2.5 ml-2 bg-card5 rounded-full"></span>
        </li>
      </ul>
      <div className="relative mx-8">
        <img
          src={benefIMG}
          alt="icon"
          className=""
        />
      </div>
      <ul className="list-none space-y-5 w-1/3 text-left pl-5">
        <li className="flex items-center">
          <span className="inline-block w-2.5 h-2.5 mr-2 bg-card5 rounded-full"></span>
          <h1 className="font-medium">
            <span className="font-semibold">Transparência</span> de preços
          </h1>
        </li>
        <li className="flex items-center">
          <span className="inline-block w-2.5 h-2.5 mr-2 bg-card5 rounded-full"></span>
          <h1 className="font-medium">
            <span className="font-semibold">Confiança</span> as mulheres
          </h1>
        </li>
        <li className="flex items-center">
          <span className="inline-block w-2.5 h-2.5 mr-2 bg-card5 rounded-full"></span>
          <h1 className="font-medium">
            <span className="font-semibold">Educação</span> acessível e compreensível
          </h1>
        </li>
      </ul>
    </div>
        <div className="flex justify-center items-center ">
            <Link to="/sobre"> <button className="px-8 mx-auto cursor-pointer rounded-2xl py-3 h-14 font-semibold bg-margentinha text-base hover:text-margentinha text-white w-fit hover:bg-rosinha transition-all duration-300 shadow-[3px_3px_0px_#e9bdc0] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Saiba Mais!
        </button>
        </Link>
        </div>
      
        </>
    )
}
export default Beneficios;