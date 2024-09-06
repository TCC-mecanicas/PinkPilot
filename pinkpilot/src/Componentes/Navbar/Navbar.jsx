import {Link} from 'react-router-dom'
import { Avatar } from "@material-tailwind/react";
import Logo from "../../../public/logo.svg"

function Navbar() {
    return ( 
 
        <nav className="font-sans  text-black font-normal flex items-center justify-between px-4 w-full">
      
      <div className="absolute left-4 p-4">
        <img
          size="w-10 "
          alt="avatar"
          src={Logo}
          className=""
        />
      </div>
     
      {/* Contêiner flex para centralizar o conteúdo */}
      <div className="flex justify-center w-full">
        {/* Navegação centralizada */}
        <ul className="flex justify-center gap-4">
          <li className="hover:text-margentinha self-center"><Link to="/">Mecânicas</Link></li>
          <li className="hover:text-margentinha self-center"><Link to="/comunidade">Comunidade</Link></li>
          <li className="hover:text-margentinha self-center"><Link to="/loja">Loja</Link></li>
          <li className="hover:text-margentinha self-center"><Link to="/sobre">Sobre Nós</Link></li>
        </ul>
      </div>
      {/* Avatar alinhado à direita */}
      <div className="absolute right-4 p-4 ">
        <Avatar
          size="base "
          alt="avatar"
          src="avatar.jpg"
          className="ring-4 ring-margentinha"
        />
      </div>
    </nav>
     );
}

export default Navbar;