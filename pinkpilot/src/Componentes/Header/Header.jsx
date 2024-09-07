import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    if (location.pathname === "/login") return null;
    if (location.pathname === "/cadastro") return null;
    
    return ( 
        <>
        <header className="flex m-4 justify-around text-preto p-5">
            <Navbar/>
        </header>    
        </>
     );
}

export default Header ;