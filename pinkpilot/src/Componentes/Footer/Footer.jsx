import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaTiktok, FaPhone } from 'react-icons/fa';

function Footer(){
    const location = useLocation();

    if (location.pathname === "/pinkchat") return null;
    if (location.pathname === "/login") return null;
    if (location.pathname === "/cadastro") return null;
    if (location.pathname === "/carrinhoyt") return null;


    return(
        <footer className="bg-margentinha text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold mb-2">Contato:</h3>
            <ul>
              <li className="flex items-center mb-2">
                <FaWhatsapp className="w-5 h-5 mr-2" />
                +55 11 9958-4752
              </li>
              <li className="flex items-center mb-2">
                <FaEnvelope className="w-5 h-5 mr-2" />
                pinkpilot@gmail.com
              </li>
              <li className="flex items-center mb-2 ">
                <FaPhone className="w-5 h-5 mr-2 transform rotate-90" />
                +55 11 9958-4752
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Mídias:</h3>
            <ul>
              <li className="flex items-center mb-2">
                <FaInstagram className="w-5 h-5 mr-2" />
                @pink.pilot_
              </li>
              <li className="flex items-center mb-2">
                <FaTiktok className="w-5 h-5 mr-2" />
                @pink.pilot_
              </li>
            </ul>
          </div>
        </div>
        <hr className="h-px m-2 border-0 bg-white p-0 mb-6"></hr>
        <div className="flex justify-between mt-6 text-sm">
          <div className="flex flex-wrap space-x-2">
            <a href="#" className="hover:text-gray-300">© 2024 PinkPilot, Inc.</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300"><Link to="/">Menu</Link></a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300"><Link to="/comunidade">Comunidade</Link></a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300"><Link to="/sobre">Sobre Nós</Link></a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300"><Link to="/loja">Loja</Link></a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300"><Link to="/pinkchat">PinkChat</Link></a>
          </div>
          <div>
            <a href="#" className="">Português (BR)</a>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer