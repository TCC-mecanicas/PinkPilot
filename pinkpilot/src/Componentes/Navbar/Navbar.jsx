import {Link} from 'react-router-dom'
import Logo from "../../../public/logo.svg"
import UserMenu from '../UserMenu/UserMenu';

function Navbar() {
    return ( 
 
        <nav className="font-sans  text-black font-normal flex items-center justify-between px-4 w-full">
      
      <div className="absolute left-4 p-4">
        <Link to="/"> 
        <img
          size="w-10 "
          alt="avatar"
          src={Logo}
          className=""
        />
        </Link>
      </div>
  
      <div className="flex justify-center w-full">
      
        <ul className="flex justify-center gap-4">
          <li className="hover:text-margentinha self-center"><Link to="/">Mecânicas</Link></li>
          <li className="hover:text-margentinha self-center"><Link to="/comunidade">Comunidade</Link></li>
          <li className="hover:text-margentinha self-center"><Link to="/loja">Loja</Link></li>
          <li className="hover:text-margentinha self-center"><Link to="/sobre">Sobre Nós</Link></li>
        </ul>
      </div>

      
  
     <UserMenu/>

    </nav>
     );
}

export default Navbar;